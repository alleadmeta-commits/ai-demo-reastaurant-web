import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Booking request received:", body);

    // In a real application, you'd insert the booking into a database here
    
    return NextResponse.json(
      { message: "Booking confirmed successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to process booking", success: false },
      { status: 500 }
    );
  }
}
