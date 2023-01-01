import { Injectable } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class CourseManagementService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.key);
  }

  getCourses() {
    return this.supabase.from("courses").select("*").order("id", { ascending: true });
  }
}
