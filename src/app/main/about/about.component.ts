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
      dates: 'Jan 2025 – Jul 2026',
      highlights: [
        'Mentored 5 developers on Angular and TypeScript, cutting onboarding time by 40%.',
        'Shipped a student dashboard, assessment engine and analytics module for 5,000+ active users at 99.5% uptime.',
        'Moved 15 Angular components to strict TypeScript and cut runtime errors by 45%.'
      ]
    },
    {
      title: 'Full stack developer, ThinkTac',
      dates: 'Jun 2023 – Jan 2025',
      highlights: [
        'Built a real-time enrollment system on Firebase Auth and Firestore for 2,000+ concurrent users under 300ms.',
        'Wrote 10+ Cloud Functions in Node.js that handle 50,000+ events a day.',
        'Cut page load from 4.2s to 2.5s with lazy loading and tree shaking.'
      ]
    },
    {
      title: 'SDE intern, Angular Wiki',
      dates: 'Nov 2022 – May 2023',
      highlights: [
        'Built a drug inventory module tracking 200+ products in real time with Angular Material and RxJS.',
        'Generated compliance reports for 500+ monthly prescription orders with pdfmake.'
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

  tools: string[] = ['TypeScript', 'Angular', 'Angular Material', 'React', 'Node.js', 'Express', 'Firebase', 'MongoDB', 'MySQL', 'REST APIs', 'Swagger', 'Postman'];

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
