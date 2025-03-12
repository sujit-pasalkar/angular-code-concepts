
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { TestService } from '../../shared/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit {

  // note: wrong code - add this in a service
  // retry code -
  constructor(private http: HttpClient, private ts: TestService, private router: Router) { }

  ngOnInit(): void {
    this.makeApiCall('wwww.google.com', 3);

  }

  onTest() {
    this.ts.printme = 'hiiiiiii'
    this.router.navigate(['/vs']);
  }



  // Utility method to call the API and retry on failure
  makeApiCall<T>(url: string, retryCount: number): Observable<T> {
    console.log('calling for retry');

    return this.http.get<T>(url).pipe(
      retry(retryCount), // Retry the call 'retryCount' times
      catchError(this.handleError) // Handle any errors
    );
  }

  // Error handling method
  private handleError(error: any): Observable<never> {
    console.error('API call failed:', error);
    return throwError(() => new Error('Failed to fetch data. Please try again later.'));
  }
}

