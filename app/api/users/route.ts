import { NextResponse } from 'next/server';

export async function GET() {
  // Mock user data
  const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'user', status: 'active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active' },
    { id: '3', name: 'Mike Johnson', email: 'mike@example.com', role: 'admin', status: 'active' },
    { id: '4', name: 'Sarah Williams', email: 'sarah@example.com', role: 'user', status: 'inactive' },
  ];

  return NextResponse.json({ success: true, data: users });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    return NextResponse.json({
      success: true,
      message: 'User created successfully',
      data: { id: Date.now().toString(), ...body },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create user' },
      { status: 500 }
    );
  }
}
