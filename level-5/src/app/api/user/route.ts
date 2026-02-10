import { NextRequest, NextResponse } from "next/server";

// NextRequest NextResponse
export async function GET() {
    return NextResponse.json({
        name: "Satyam",
        age: 32
    })
}

export async function POST(req:NextRequest) {
    let { name, age, collage } = await req.json();
    return NextResponse.json({
        name, age, collage
    })
}
