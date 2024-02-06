// book-now.component.ts
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  formData: any = {
    name: '',
    contactDetails: '',
    serviceType: [],
    billingMethod: [],
    parking_options: []
  };


  ngOnInit(): void {
   
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
  }

  navigateToNewPage() {
    this.router.navigate(['/home']);
  }

  toggleServiceType(option: string) {
    const index = this.formData.serviceType.indexOf(option);

    if (index === -1) {
      this.formData.serviceType.push(option);
    } else {
      this.formData.serviceType.splice(index, 1);
    }
  }

  generateHours(){
    const hours: string[] = [];
    for (let i = 8; i <= 19; i++) {
        const time = i < 12 ? `${i}:00 AM` : `${i - 12}:00 PM`;
        hours.push(time);
    }
    return hours;
  }
  
  updateBillingMethod(option: string) {
    this.formData.billingMethod = option;
  }

  selectFrequency(frequency: string): void {
    this.formData.cleaning_frequency = frequency;
  }
}
