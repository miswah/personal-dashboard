import { Injectable } from "@angular/core";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { environment } from "environments/environment";
import type { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { Course, Module } from "./interfaces";


@Injectable({
  providedIn: "root",
})
export class CourseManagementService {
  private supabase: SupabaseClient;
  public listOfCourse: Course[];
  private course : Course;
  public modules : Module[];
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
    return this.supabase.from("courses").select("*").eq("id", id);
  }

  getModules(courseId:number): PostgrestFilterBuilder<any, any, any>{
    return this.supabase.from("course_modules").select("*").eq("course_id", courseId);
  }
}
