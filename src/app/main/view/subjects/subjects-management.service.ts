import { Injectable } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class SubjectsManagementService {
  private supabase: SupabaseClient;

  public listOfSubjects;
  public listOfChapters;
  public listOfTopics;
  public subjectData;

  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.key);
  }

  getSubjects() {
    return this.supabase.from("subjects").select("*").order("id", { ascending: true });
  }

  getSubjectViaId(subjectId: number) {
    return this.supabase.from("subjects").select("*").eq("id", subjectId);
  }

  getChapters(subjectId: Number) {
    return this.supabase.from("subject_chapters").select("*").eq("subject_id", subjectId).order("id", { ascending: true });
  }

  updateChapterStatus(chapterId: number, status: boolean) {
    return this.supabase.from("subject_chapters").update({ is_completed: status }).eq("id", chapterId);
  }

  getTopics(subjectId: Number) {
    return this.supabase.from("subject_topics").select("*").eq("subject_id", subjectId).order("id", { ascending: true });
  }

  updateTopicStatus(topicId: number, status: boolean){
    return this.supabase.from("subject_topics").update({ is_completed: status }).eq("id", topicId);
  }
}
