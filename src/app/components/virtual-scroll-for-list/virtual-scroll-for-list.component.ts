import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { TestService } from '../../shared/test.service';

@Component({
  selector: 'app-virtual-scroll-for-list',
  imports: [],
  templateUrl: './virtual-scroll-for-list.component.html',
  styleUrl: './virtual-scroll-for-list.component.scss'
})
export class VirtualScrollForListComponent implements OnInit {


  // retry code -
  constructor(private http: HttpClient,private ts: TestService) {}

  ngOnInit(): void {
    // this.makeApiCall('',3)
    console.log('ts log',this.ts.printme);
    
  }



  // Utility method to call the API and retry on failure
  makeApiCall<T>(url: string, retryCount: number): Observable<T> {
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
