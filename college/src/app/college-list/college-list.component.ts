import { Component, OnInit, Input } from '@angular/core';
import { CollegeService } from '../college.service';
import { UpdateComponent } from '../update/update.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.scss']
})
export class ReadComponent implements OnInit {

  colleges = [];

  constructor(public dialog: MatDialog, private collegeService: CollegeService) { }

  ngOnInit(): void {
    this.getColleges();
  }

  addDialog() {
    const dialogRef = this.dialog.open(CreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getColleges();
      }
    });
    }

  editDialog(id: number) {
    const dialogRef = this.dialog.open(UpdateComponent, {data: ( {id} )});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getColleges();
      }
    });
  }

  deleteCollege(id: number) {
    this.collegeService.deleteCollege(id).subscribe(() => {
      this.colleges = this.colleges.filter(college => college.id !== id);
    });
  }

  getColleges() {
    this.collegeService.getColleges().subscribe(data => this.colleges = data);
  }

}
