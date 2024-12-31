import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="toastMessage" class="toast-container">
      <div class="toast show">
        {{ toastMessage }}
      </div>
    </div>
  `,
  styles: [
    `
      .toast-container {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1002 !important;
        display:block;
        position: fixed !important;
  pointer-events: auto !important; /* Ensure it responds to events */
      }
      .toast {
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      }
    `,
  ],
})
export class ToastComponent {
  toastMessage: string | null = null;

  constructor(private toastService: ToastService) {
    this.toastService.toast$.subscribe((message) => {
      
      this.toastMessage = message;
    });
  }
}

