import { Injectable } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class SubjectsManagementService {
  private supabase: SupabaseClient;

  public listOfSubjects;

  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.key);
  }

  getSubjects() {
    return this.supabase.from("subjects").select("*");
  }
}
