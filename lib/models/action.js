"use server";

import { revalidatePath } from "next/cache";

import { Todo } from "@/lib/models/todos";

import  dpconnection  from "@/lib/dbConnection";


dpconnection(); 

export async function getTodo() {
  const todos = await Todo.find({});
  return JSON.parse(JSON.stringify(todos));
}

export async function addTodo(formData) {
  await Todo.create(formData);
  revalidatePath("/todos"); 
}

export async function deleteTodo(id) {
  await Todo.findByIdAndDelete(id);
  revalidatePath("/todos");
}


export async function updateTodo(id, formData) {
  await Todo.findByIdAndUpdate(id, formData);
  revalidatePath("/todos");
}