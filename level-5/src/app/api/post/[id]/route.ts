import { NextRequest, NextResponse } from "next/server";

interface Params {
    params: {
        id: string
    }
}

export async function PUT(req:NextRequest, { params }: Params) {
  const body = await req.json();
  const id = params.id;

  // pretend database update
  return NextResponse.json({
    message: `User ${id} fully updated`,
    newData: body
  });
}