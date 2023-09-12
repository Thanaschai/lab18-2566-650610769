import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Thanaschai Chanabua",
    studentId: "650610769",
  });
};
