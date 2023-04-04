export interface Course {
  id: number;
  created_at: string;
  title: string;
  status: string;
  total_tasks: number;
  completed_tasks: number;
  total_modules: number;
  completed_modules: number;
  due_date: string;
  last_visited: string;
  started_at: string;
  last_visited_module: string;
  link: string;
  tags_id: number;
}


export interface Module {
  id: number;
  name: string;
  status: boolean;
  course_id: number;
  number: number;
}


export interface Chapter {
  id:number;
  title: string;
  status: boolean;
  created_at: string;
  module_id: number;
  course_id: number;
}

export interface ExternalResource {
  id: number;
  label: string;
  url: string;
  course_id: number;
}


export interface CourseComment {
  id?:number;
  created_at?: string;
  comment:string;
  course_id: number
}

export interface CourseProject {
  id:number;
  url: string;
  tags: string[];
  title:string;
  course_id:number;
}