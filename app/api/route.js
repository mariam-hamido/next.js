import {NextResponse} from "next/server";

dbConnection();
export async function GET(request) {
  return new Response(JSON.stringify({ message: "Hello from /api/todos" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
