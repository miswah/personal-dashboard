import { Injectable } from "@angular/core";
import { Session, SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "environments/environment";
import { Todo } from "./todo.model";

@Injectable({
  providedIn: "root",
})
export class TodoManagementService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.key);
  }

  getTodo() {
    return this.supabase.from("todo").select("*").eq("deleted", false).order("id", { ascending: true });
  }

  getImportantTodo() {
    return this.supabase.from("todo").select("*").eq("completed", false).eq("important", true).order("id", { ascending: true });
  }

  getDeletedTodo() {
    return this.supabase.from("todo").select("*").eq("deleted", true).order("id", { ascending: true });
  }

  getCompletedTodo() {
    return this.supabase.from("todo").select("*").eq("completed", true).order("id", { ascending: true });
  }

  getTodoViaPriority(priority) {
    return this.supabase.from("todo").select("*").eq("completed", false).eq("priority", priority).order("id", { ascending: true });
  }

  createNewTodo(todo: Todo) {
    return this.supabase.from("todo").insert(todo).single();
  }

  updateTodo(todo: Todo) {
    return this.supabase.from("todo").update(todo).eq("id", todo.id);
  }

  updateTodoStatus(name: string, value: boolean, id: number) {
    return this.supabase.from("todo").update({ name: value }).eq("id", id);
  }
}
