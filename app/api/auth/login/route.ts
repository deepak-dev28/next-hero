import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Simulate authentication logic
    if (email === 'admin@nextjs.com' && password === 'admin123') {
      return NextResponse.json({
        success: true,
        message: 'Login successful',
        user: {
          id: '1',
          email: email,
          name: 'Admin User',
          role: 'admin',
        },
        token: 'mock-jwt-token-' + Date.now(),
      });
    }

    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
