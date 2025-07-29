export async function GET(request) {
  return new Response(JSON.stringify({
    message: 'GET funcionando',
    metodo: request.method
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request) {
  const data = await request.json();

  return new Response(JSON.stringify({
    message: 'POST funcionando',
    dados: data,
    metodo: request.method
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}