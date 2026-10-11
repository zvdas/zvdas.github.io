export interface Project {
  project_name: string;
  problem: string;
  problem_link: string;
  live_url: string;
  live_note: string;
  screenshots: string[];
  screenshots_app: string;
  screenshots_branch: string;
  screenshots_count: number[];
  screenshots_total: number;
  code: string;
  procedure: string;
  procedure_link: string;

  /*
  constructor(
    project_name: string,
    problem: string,
    problem_link: string,
    message: string,
    screenshots: string[],
    screenshots_app: string,
    screenshots_branch: string,
    screenshots_count: number[],
    screenshots_total: number,
    code: string,
    procedure: string,
    procedure_link: string
  ) {
    this.project_name = project_name;
    this.problem = problem;
    this.problem_link = problem_link;
    this.message = message;
    this.screenshots = screenshots;
    this.screenshots_app = screenshots_app;
    this.screenshots_branch = screenshots_branch;
    this.screenshots_count = screenshots_count;
    this.screenshots_total = screenshots_total;
    this.code = code;
    this.procedure = procedure;
    this.procedure_link = procedure_link;
  }
  */
}
