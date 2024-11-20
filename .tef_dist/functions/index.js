
        let response=null;
        async function handleRequest(request){
          const urlInfo=new URL(request.url);
          let matchedFunc = false;
          if('/functions/helloworld'===urlInfo.pathname){matchedFunc=true;(()=>{var data={message:"\u6B22\u8FCE\u4F7F\u7528\u817E\u8BAF\u4E91 Pages Functions!",timestamp:new Date().toISOString(),randomNumber:Math.floor(Math.random()*1e3),features:["Serverless","Edge Computing","\u9AD8\u6027\u80FD","\u4F4E\u5EF6\u8FDF"],status:"success"};response=function onRequest(){return new Response(JSON.stringify(data),{headers:{"content-type":"application/json","x-edgefunctions-test":"Welcome to use Pages Functions."}})}})();
}
          if(!matchedFunc){
            response = function() {
              return new Response(null, {
                status: 404,
                headers: {
                  "content-type": "text/html; charset=UTF-8",
                  "x-edgefunctions-test": "Welcome to use Pages Functions.",
                },
              });
            }
          }
          return response(request);
        }addEventListener('fetch',event=>{return event.respondWith(handleRequest(event.request))});