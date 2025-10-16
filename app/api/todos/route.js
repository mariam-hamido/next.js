
import { dbConnection } from "@/lib/dbConnection";
import { Todo } from "@/lib/models/todos";
import { NextResponse } from "next/server";



export async function GET() {
    
    try {
        
        const todos=await Todo.find({});
        if (!todos) {
            return NextResponse.json({ message: "No todos found" }, { status: 404 });
          }
   return NextResponse.json({todos},{status:200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error},{status:500});
    }
   
}

export async function POST(req) {
  try {
    dbConnection();
    const body = await req.json();
    const newTodo = await Todo.create(body);
    return NextResponse.json({ message: "Todo created successfully", todo: newTodo }, { status: 201 });
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json({ error: "Failed to create todo" }, { status: 500 });
  }
}
// app/api/todos/route.js

// export async function GET(request) {
//   const todos = [
//     { id: 1, title: "Learn React" },
//     { id: 2, title: "Build a Next.js App" },
//   ];

//   return new Response(JSON.stringify(todos), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }
