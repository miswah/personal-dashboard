import { Injectable } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "environments/environment";

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
}
