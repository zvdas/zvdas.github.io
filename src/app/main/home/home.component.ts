import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private ps: ProjectService, private router: Router) { }

  ngOnInit(): void {
  }

  goToOta(){
    this.router.navigate(['/ota']);
    /*
      this.ps.setNumber(0);
      this.router.navigate(['/template']);
    */
  }

  goToFba(){
    this.router.navigate(['/fba']);
    /*
      this.ps.setNumber(1);
      this.router.navigate(['/template']);
    */
  }

  goToEfa(){
    this.router.navigate(['/efa']);
    /*
      this.ps.setNumber(2);
      this.router.navigate(['/template']);
    */
  }

  goToPsa(){
    this.router.navigate(['/psa']);
    /*
      this.ps.setNumber(3);
      this.router.navigate(['/template']);
    */
  }

}