const VERSION='5.1.0';
const SHELL_CACHE=`fukuoka-shell-${VERSION}`;
const RUNTIME_CACHE=`fukuoka-runtime-${VERSION}`;
const APP_SHELL=[
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './assets/fonts/NimbusSansNarrow-Bold.otf',
  './assets/plates/washi.png',
  './assets/plates/desktop-furoshiki.webp',
  './assets/plates/mobile-furoshiki.webp',
  './assets/plates/family-illustration.webp',
  './assets/plates/day1-lalaport.webp',
  './assets/plates/day2-kushida.webp',
  './assets/plates/day3-marine-world.webp',
  './assets/plates/day4-ohori.webp',
  './assets/plates/day5-airport.webp'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(SHELL_CACHE).then(cache=>cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==SHELL_CACHE&&k!==RUNTIME_CACHE&&k.startsWith('fukuoka-')).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});

function isDynamicNetworkOnly(url){
  return url.hostname.includes('open-meteo.com') ||
         url.hostname.includes('firestore.googleapis.com') ||
         url.hostname.includes('identitytoolkit.googleapis.com') ||
         url.hostname.includes('securetoken.googleapis.com') ||
         url.hostname.includes('accounts.google.com') ||
         url.hostname.includes('drive.google.com') ||
         url.hostname.includes('docs.google.com') ||
         url.hostname.includes('googleapis.com') && !url.hostname.includes('fonts.googleapis.com');
}

async function cachePutSafe(cacheName,request,response){
  if(!response || !(response.ok || response.type==='opaque')) return response;
  try{const cache=await caches.open(cacheName);await cache.put(request,response.clone())}catch(e){}
  return response;
}

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);

  if(isDynamicNetworkOnly(url))return;

  if(request.mode==='navigate'){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(request);
        cachePutSafe(SHELL_CACHE,new Request(new URL('./index.html',self.location).href),fresh.clone());
        return fresh;
      }catch(e){
        return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
      }
    })());
    return;
  }

  const sameOrigin=url.origin===self.location.origin;
  const cacheableExternal=['image','script','style','font'].includes(request.destination);

  if(sameOrigin){
    event.respondWith((async()=>{
      const cached=await caches.match(request);
      if(cached)return cached;
      try{return await cachePutSafe(RUNTIME_CACHE,request,await fetch(request))}catch(e){return Response.error()}
    })());
    return;
  }

  if(cacheableExternal){
    event.respondWith((async()=>{
      const cached=await caches.match(request);
      const network=fetch(request).then(r=>cachePutSafe(RUNTIME_CACHE,request,r)).catch(()=>null);
      return cached || (await network) || Response.error();
    })());
  }
});

self.addEventListener('message',event=>{
  if(event.data==='SKIP_WAITING')self.skipWaiting();
});
