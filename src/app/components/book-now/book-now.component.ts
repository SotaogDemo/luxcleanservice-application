// book-now.component.ts
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit {

  constructor(private router: Router, private emailService: EmailService) { 
    
  }
  
  formData: any = {
    first_name: '',
    last_name: '',
    email: '',
    mobile_number: '',
    address: '',
    apt_suite: '',
    city: '',
    zip_code: '',
    selected_date: null,
    selected_time: '', 
    selected_service: '', 
    cleaning_frequency: '',
    movingInOut: false,
    balconyCleaning: false,
    additional_notes: '',
    parking_option: '', 
  };


  ngOnInit(): void {
   
  }

  selectService(selectedService: string): void {
    this.formData.selected_service = selectedService;
  }

  formatFormDataMessage(formData: any): string {
    // Extract properties from formData
    const {
      first_name,
      last_name,
      email,
      mobile_number,
      address,
      apt_suite,
      city,
      zip_code,
      selected_date,
      selected_time,
      selected_service,
      cleaning_frequency,
      movingInOut,
      balconyCleaning,
      additional_notes,
      parking_option,
    } = formData;
  
    const message = `
      Booking Details:
      Name: ${first_name} ${last_name}
      Mobile Number: ${mobile_number}
      Address: ${address} ${apt_suite ? `Apt/Suite: ${apt_suite}` : ''}, ${city}, ${zip_code}
      Date and Time: ${selected_date} ${selected_time}
      Service: ${selected_service}
      Cleaning Frequency: ${cleaning_frequency}
      Additional Notes: ${additional_notes}
      Parking Option: ${parking_option}
      Special Requests:
      - Moving In/Out: ${movingInOut ? 'Yes' : 'No'}
      - Balcony Cleaning: ${balconyCleaning ? 'Yes' : 'No'}
    `;
  
    return message;
  }
  
  onSubmit() {
    let msg = this.formatFormDataMessage(this.formData);
    this.emailService.sendEmail(this.formData.email, msg).subscribe(
      (response) => {
        console.log('Email sent successfully', response);
      },
      (error) => {
        console.error('Error sending email', error);
      }
    );
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
