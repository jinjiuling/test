async function handleRequest(data) {
  const init = {
    headers: {
      'content-type': 'text/plain;charset=UTF-8',
    },
  }
  return new Response(data, init)
}

addEventListener('fetch', event => {
  let url = new URL(event.request.url)
  let bstr = url.searchParams.get('bstr')
  //let bstr = info ? info : btoa('Github: https://github.com/hitop/CFWorkers')
  let bstr1 = bstr+".sbcdnvideo.com";
  //return event.respondWith(handleRequest(bstr1))



url.hostname=bstr1;
let request=new Request(url,event.request);
event. respondWith(
fetch(request)
)
}
)
