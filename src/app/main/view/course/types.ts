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
