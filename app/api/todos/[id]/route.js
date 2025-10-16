import { Todo } from "@/lib/models/Todo";
import { NextResponse } from "next/server";
export async function GET(request, { params }) {
    try {
        const todo = await Todo.findById(params.id);
        return NextResponse.json({ todo }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    const updatedTodo = await updateTodoById(params.id, data);
    if (!updatedTodo) return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    return NextResponse.json({ message: "Todo updated", todo: updatedTodo });
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.json({ error: "Failed to update todo" }, { status: 500 });
  }
}

export async function DELETE(_, { params }) {
  try {
    const deletedTodo = await deleteTodoById(params.id);
    if (!deletedTodo) return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    return NextResponse.json({ message: "Todo deleted" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return NextResponse.json({ error: "Failed to delete todo" }, { status: 500 });
  }
}