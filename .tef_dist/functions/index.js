
      let global = globalThis;
      let routeParams = {};
      let pagesFunctionResponse = null;
      async function handleRequest(context){
        const request = context.request;
        const urlInfo = new URL(request.url);

        if (urlInfo.pathname !== '/' && urlInfo.pathname.endsWith('/')) {
          urlInfo.pathname = urlInfo.pathname.slice(0, -1);
        }

        let matchedFunc = false;
        
            if('/checkout' === urlInfo.pathname && request.method === 'GET') {
              matchedFunc = true;
                (() => {
  // functions/checkout/index.js
  function onRequestGet() {
    const serverTime = (/* @__PURE__ */ new Date()).toISOString();
    const responseData = {
      code: 200,
      message: "\u83B7\u53D6\u670D\u52A1\u5668\u65F6\u95F4\u6210\u529F",
      serverTime
      // kvv: value,
      // result
    };
    return new Response(JSON.stringify(responseData), {
      headers: {
        "content-type": "application/json"
      },
      status: 200
    });
  }

          pagesFunctionResponse = onRequestGet;
        })();
            }
          
          if('/helloworld' === urlInfo.pathname) {
            matchedFunc = true;
              (() => {
  // functions/helloworld/index.js
  var data = {
    message: "\u6B22\u8FCE\u4F7F\u7528\u817E\u8BAF\u4E91 Pages Functions!",
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    randomNumber: Math.floor(Math.random() * 1e3),
    features: ["Serverless", "Edge Computing", "\u9AD8\u6027\u80FD", "\u4F4E\u5EF6\u8FDF"],
    status: "success"
  };
  function onRequest() {
    return new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json",
        "x-edgefunctions-test": "Welcome to use Pages Functions."
      }
    });
  }

        pagesFunctionResponse = onRequest;
      })();
          }
        
          if('/test' === urlInfo.pathname) {
            matchedFunc = true;
              (() => {
  // functions/test/index.js
  function onRequest(context) {
    const testCases = {
      method: context.request.method,
      headers: Object.fromEntries(context.request.headers),
      url: context.request.url,
      // 测试环境变量
      env: context.env,
      // 测试 CF 特定功能
      cf: context.request.cf
    };
    return new Response(JSON.stringify(testCases, null, 2), {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }

        pagesFunctionResponse = onRequest;
      })();
          }
        

        const params = {};
        if (routeParams.id) {
          const value = urlInfo.pathname.replace(routeParams.left, '');
          const splitedValue = value.split('/');
          if (splitedValue.length === 1) {
            params[routeParams.id] = splitedValue[0];
          } else {
            params[routeParams.id] = splitedValue;
          }
        }
        if(!matchedFunc){
          pagesFunctionResponse = function() {
            return new Response(null, {
              status: 404,
              headers: {
                "content-type": "text/html; charset=UTF-8",
                "x-edgefunctions-test": "Welcome to use Pages Functions.",
              },
            });
          }
        }
        return pagesFunctionResponse({request, params, env: {} });
      }addEventListener('fetch',event=>{return event.respondWith(handleRequest({request:event.request,params: {}, env: {} }))});