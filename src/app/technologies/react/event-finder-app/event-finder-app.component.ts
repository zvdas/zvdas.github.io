import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-event-finder-app',
  templateUrl: './event-finder-app.component.html',
  styleUrls: ['./event-finder-app.component.css']
})

export class EventFinderAppComponent implements OnInit {

  project: Project[] = [];

  constructor(private ps: ProjectService) { }

  ngOnInit(): void {
    this.getProjectDetails();
  }

  getProjectDetails(){
    this.project = this.ps.getAllProjects();
  }

}