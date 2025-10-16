import React from 'react'
import { getTodo, addTodo, deleteTodo } from "@/lib/models/action";


export default async function page() {
  const todo = await getTodo();
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
  <h1 className="text-3xl font-bold mb-4 text-center text-emerald-700">📝 Todo List (Server Side)</h1>

  <form
    action={async (formData) => {
      "use server";
      const newTodo = {
        title: formData.get("title"),
        author: formData.get("author"),
        body: formData.get("body"),
      };
      await addTodo(newTodo);
    }}
    className="bg-white shadow-md rounded-lg p-4 mb-6 max-w-md mx-auto"
  >
    <input
      type="text"
      name="title"
      placeholder="Title"
      required
      className="w-full border p-2 rounded mb-2"
    />
    <input
      type="text"
      name="author"
      placeholder="Author"
      required
      className="w-full border p-2 rounded mb-2"
    />
    <button
      type="submit"
      className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
    >
      Add Todo
    </button>
  </form>

  <div className="grid gap-4 max-w-3xl mx-auto">
    {todo?.length > 0 ? (
      todo.map((todo) => (
        <form
          key={todo._id}
          action={async () => {
            "use server";
            await deleteTodo(todo._id);
          }}
          className="bg-white shadow-md rounded-lg p-4 flex justify-between items-start"
        >
          <div>
            <h2 className="text-xl font-semibold text-emerald-800">{todo.title}</h2>
            <p className="text-gray-600">{todo.body}</p>
            <p className="text-sm text-gray-400 mt-1">By {todo.author}</p>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </form>
      ))
    ) : (
      <p className="text-center text-gray-500">No todos yet.</p>
    )}
  </div>
</div>
    </>
    
  )
}
