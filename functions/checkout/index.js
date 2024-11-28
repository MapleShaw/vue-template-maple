
export function onRequestGet() {
  const serverTime = new Date().toISOString();
  
  // let value = await MS_TEST01.get('code');

  // let result = await MS_TEST01.put('code', 'value');
  // console.log(value);

  // let result;
  // do {
  //     result = await MS_TEST01.list({"limit": 10, "cursor": "code" })
  //     console.log(result);
  // } while (result && result.complete);

  const responseData = {
    code: 200,
    message: "获取服务器时间成功",
    serverTime: serverTime,
    // kvv: value,
    // result
  };

  return new Response(JSON.stringify(responseData), {
    headers: {
      'content-type': 'application/json'
    },
    status: 200
  });
}

// export function onRequestPost(context) {
  
//   // 打印请求日志
//   console.log('收到前端请求:', {
//     url: context.request,
//     method: context.request,
//     timestamp: new Date().toISOString()
//   });

//   const responseData = {
//     code: 200,
//     message: "请求成功",
//     timestamp: new Date().toISOString()
//   };

//   return new Response(JSON.stringify(responseData), {
//     headers: {
//       'content-type': 'application/json',
//       'x-edgefunctions-test': 'Welcome to use Pages Functions.',
//     },
//     status: 200
//   });
// }