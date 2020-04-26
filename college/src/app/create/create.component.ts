import { Component, OnInit } from '@angular/core';
import { College } from '../college';
import { CollegeService } from '../college.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private collegeService: CollegeService) { }

  typesOfCollege = [];

  collegeModel = new College(null, '', '', '', '', '', null, null);

  addCollege() {
    this.collegeService.addCollege(this.collegeModel).subscribe();
  }

  ngOnInit(): void {
    this.typesOfCollege = this.collegeService.getTypesOfColleges();
  }

}
