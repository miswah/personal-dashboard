import { Injectable } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProjectManagementService {
  supabase: SupabaseClient;

  public listOfProjects;
  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.key);
  }

  get user() {
    return this.supabase.auth.getUser();
  }

  get session() {
    return this.supabase.auth.getSession();
  }

  getProjects() {
    return (this.listOfProjects = this.supabase.from("project").select("*"));
  }
}
