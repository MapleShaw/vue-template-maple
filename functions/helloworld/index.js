const data = {
  message: "欢迎使用腾讯云 Pages Functions!",
  timestamp: new Date().toISOString(),
  randomNumber: Math.floor(Math.random() * 1000),
  features: ["Serverless", "Edge Computing", "高性能", "低延迟"],
  status: "success"
};

export function onRequest() {
  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
      'x-edgefunctions-test': 'Welcome to use Pages Functions.',
    },
  });
}