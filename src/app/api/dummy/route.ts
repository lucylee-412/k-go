export async function GET() {
    return Response.json({ message: 'Dummy API is working' })
}

export async function POST(request: Request) {
    const data = await request.json()
    return Response.json({ received: data })
}
