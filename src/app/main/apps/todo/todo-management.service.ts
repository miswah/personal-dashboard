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
    return this.supabase.from("todo").select("*").order("id", { ascending: true });
  }
}
