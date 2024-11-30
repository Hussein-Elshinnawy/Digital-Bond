import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [HttpClientModule, NgFor,NgIf],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  private http = inject(HttpClient);
  currentIndex = 0;
  // reviews$?: Observable<any[]>;
  reviews:any[]=[];

  ngOnInit() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .pipe(
        map((response) =>
          response.slice(0, 10).map(({ postId, id, ...rest }) => ({
            ...rest,
            rating: Math.floor(Math.random() * 5) + 1,
          }))
        )
      ).subscribe((data)=>{
        console.log(data);
        this.reviews=data;
      });
  }
  goToNext() {
    if (this.currentIndex < this.reviews.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  goToPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.reviews.length - 1;
    }
  }

}
