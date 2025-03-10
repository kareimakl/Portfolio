export async function POST(req) {
  try {
    const body = await req.json()

    const response = await fetch('https://formspree.io/f/mvgpowlg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (response.ok) {
      return Response.json({ success: true, message: 'Message sent successfully!' }, { status: 200 })
    } else {
      return Response.json({ success: false, message: 'Error sending message' }, { status: 500 })
    }
  } catch (error) {
    return Response.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}
