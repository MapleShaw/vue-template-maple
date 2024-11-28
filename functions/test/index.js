export function onRequest(context) {
  // 测试各种请求方法
  const testCases = {
    method: context.request.method,
    headers: Object.fromEntries(context.request.headers),
    url: context.request.url,
    // 测试环境变量
    env: context.env,
    // 测试 CF 特定功能
    cf: context.request.cf
  }

  return new Response(JSON.stringify(testCases, null, 2), {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}