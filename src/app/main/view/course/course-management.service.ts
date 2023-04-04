import { Injectable } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "environments/environment";
import type { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { Chapter, Course, CourseComment, CourseProject, ExternalResource, Module } from "./interfaces";


@Injectable({
  providedIn: "root",
})
export class CourseManagementService {
  private supabase: SupabaseClient;
  public listOfCourse: Course[];
  private course : Course;
  public modules : Module[];
  public chapters : Chapter[];
  public externalResource: ExternalResource[];
  public comments: CourseComment[];
  public projects: CourseProject[];

  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.key);
  }

  getCourses() : PostgrestFilterBuilder<any, any, any> {
    return this.supabase.from("courses").select("*").order("id", { ascending: true });
  }

  getCourse(): Course {
    return this.course;
  }

  setCourse(course:Course){
    this.course = course;
  }

  // In case of id mismatch on view component refresh the data from api instead of using course variable
  fetchCourse(id:number): PostgrestFilterBuilder<any, any, any>{
    return this.supabase.from("courses").select("*").eq("id", id).order("id", { ascending: true });;
  }

  getModules(courseId:number): PostgrestFilterBuilder<any, any, any>{
    return this.supabase.from("course_modules").select("*").eq("course_id", courseId).order("id", { ascending: true });;
  }

  getChapters(courseId:number): PostgrestFilterBuilder<any, any, any> {
    return this.supabase.from("course_chapters").select("*").eq("course_id", courseId).order("id", { ascending: true });;
  }

    updateChapterStatus(chapterId:number, status:boolean){
    return this.supabase.from("course_chapters").update({status: status}).eq("id", chapterId);
  }

  getExternalResources(courseId:number){
    return this.supabase.from("course_external_resources").select("*").eq("course_id", courseId).order("id", { ascending: true });;
  }

  createNewComment(body:CourseComment){
    return this.supabase.from("course_comments").insert(body);
  }

  getComments(courseId:number){
    return this.supabase.from("course_comments").select("*").eq("course_id", courseId).order("id", { ascending: true });;
  }

  getCourseProjects(courseId:number){
    return this.supabase.from("projects").select("title,url,tags,course_id,id").eq("course_id", courseId).order("id", { ascending: true });;
  }
}
