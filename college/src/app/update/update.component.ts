import { Component, OnInit, Inject } from '@angular/core';
import { College } from '../college';
import { CollegeService } from '../college.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private collegeService: CollegeService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  collegeModel = new College(null, '', '', '', '', '', null, null);
  typesOfColleges = [];

  editCollege() {
    this.collegeService.editCollege(this.collegeModel).subscribe();
  }

  ngOnInit(): void {
    this.collegeService.getCollege(this.data.id).subscribe(data => this.collegeModel = data);
    this.typesOfColleges = this.collegeService.getTypesOfColleges();
  }

}
