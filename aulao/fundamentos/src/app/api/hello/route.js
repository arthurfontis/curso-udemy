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

  return new Response(JSON.stringify({
    message: 'POST funcionando',
    metodo: request.method
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

