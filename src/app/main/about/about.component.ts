import { Component } from '@angular/core';

interface Role {
  title: string;
  dates: string;
  highlights: string[];
}

interface ProjectLink {
  name: string;
  summary: string;
  route: string;
}

interface ProjectGroup {
  stack: string;
  projects: ProjectLink[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {

  email: string = 'judeson.rodriguez@gmail.com';
  copyStatus: string = '';
  yearsSpent: number = new Date().getFullYear() - 2023;

  roles: Role[] = [
    {
      title: 'Technical lead, ThinkTac',
      dates: 'Jun 2023 – Jul 2026',
      highlights: [
        'Promoted from full stack developer to technical lead in January 2025.',
        'Led a team of five developers: set technical direction, made architecture decisions, and mentored developers through implementation blockers and production issues.',
        'Reviewed junior developers’ code after peer review and before the manager’s final review.',
        'Introduced a separate Firebase test environment, so features were validated before they reached production.',
        'Designed the multi-project architecture that let several applications share Angular components and Firebase logic instead of duplicating them.',
        'Built ScriptRunner, a Node.js tool for Firestore data operations that all five developers used across projects, and wrote 50–60 of its task scripts.',
        'Co-built a dynamic contest system that removed the per-year collections and yearly code changes.',
        'Integrated client APIs and built meeting tools on the Google Meet and Calendar APIs with Gemini-generated summaries.'
      ]
    },
    {
      title: 'SDE intern, Angular Wiki',
      dates: 'Nov 2022 – May 2023',
      highlights: [
        'Built an Angular Material and RxJS drug-inventory module with real-time stock tracking.',
        'Automated prescription compliance reports with pdfmake.',
        'Wrote Python scripts (BeautifulSoup, Selenium) to collect pharmaceutical product data.'
      ]
    }
  ];

  projectGroups: ProjectGroup[] = [
    {
      stack: 'Angular + Firebase',
      projects: [
        { name: 'Online test app', summary: 'Users take and review online tests', route: '#/details/0/ota' },
        { name: 'Blog app', summary: 'Users read and add blog posts', route: '#/details/1/fba' },
        { name: '3D model app', summary: 'Upload, list and render 3D models with Three.js', route: '#/details/2/tma' }
      ]
    },
    {
      stack: 'React + Redux + Firebase',
      projects: [
        { name: 'Event finder', summary: 'Users view and promote upcoming events', route: '#/details/3/efa' },
        { name: 'Pokémon search', summary: 'Search for Pokémon and their details', route: '#/details/4/psa' }
      ]
    },
    {
      stack: 'Express + MongoDB',
      projects: [
        { name: 'Learning management system', summary: 'Registration, courses and enrollment', route: '#/details/5/lms' },
        { name: 'Online music store', summary: 'Manage a personal music library', route: '#/details/6/oms' }
      ]
    }
  ];

  tools: string[] = ['TypeScript', 'Angular', 'RxJS', 'Angular Material', 'Node.js', 'Firebase Cloud Functions', 'Firestore', 'Firebase Authentication', 'REST APIs', 'Google Workspace APIs', 'Gemini API', 'SQL', 'Git', 'Postman', 'Python', 'Express', 'MongoDB', 'React'];

  copyEmail(emailEl: HTMLElement) {
    navigator.clipboard.writeText(this.email).then(
      () => this.copyStatus = 'Copied to your clipboard.',
      () => {
        const range = document.createRange();
        range.selectNodeContents(emailEl);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(range);
        this.copyStatus = 'Address selected. Press Ctrl+C or Cmd+C to copy it.';
      }
    );
  }

}
