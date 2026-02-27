import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json({
        name: "satyam",
        age: 23
    })
}

export async function POST(req: NextRequest) {
    let {name, age} = await req.json();
    return NextResponse.json({
        name, age
    })
}