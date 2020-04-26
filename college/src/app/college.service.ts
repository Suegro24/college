import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { College } from './college';

@Injectable({
  providedIn: 'root'
})

export class CollegeService {

  url = 'http://localhost:3001/api/college';

  typesOfCollege = [
    'University',
    'Polytechnic',
    'Naval academy',
    'Music academy',
    'Physical education academy',
    'Academy of fine art',
    'Economic university',
    'Medical college',
    'Agricultural college',
    'Pedagogical college',
    'Military college',
    'Theological college',
    'State theater school',
    'State higher vocational school'
  ];

  constructor(private http: HttpClient) { }

  getCollege(id: number) {
    return this.http.get<College>(this.url + `/${id}`);
  }

  getColleges(): Observable<College[]> {
    return this.http.get<College[]>(this.url);
  }

  addCollege(college: College) {
    return this.http.post<College>(this.url, college);
  }

  deleteCollege(id: number) {
    return this.http.delete<College>(this.url + `/delete/${id}`);
  }

  editCollege(college: College) {
    return this.http.put<College>(this.url + `/put/${college.id}`, college);
  }

  getTypesOfColleges() {
    return this.typesOfCollege;
  }
}
