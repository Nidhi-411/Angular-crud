import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new BehaviorSubject<string | null>(null);
  toast$ = this.toastSubject.asObservable();

  showToast(message: string): void {
    this.toastSubject.next(message);

    //  5 seconds chalana sirf
    setTimeout(() => {
      this.toastSubject.next(null);
    }, 3000);
  }
}

