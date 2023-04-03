import { Injectable } from "@angular/core";
import { AuthChangeEvent, createClient, Session, SupabaseClient } from "@supabase/supabase-js";
import { environment } from "environments/environment";
@Injectable({
  providedIn: "root",
})
export class SupabaseService {
  supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.key);
  }

  signup(email: string, password: string) {
    return this.supabase.auth.signUp({ email: email, password: password });
  }

  get user() {
    return this.supabase.auth.getUser();
  }

  get session() {
    return this.supabase.auth.getSession();
  }

  table(resource: string) {
    return this.supabase.from(resource);
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email: email, password: password });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }
}
