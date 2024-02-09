import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private router: Router) { }

  selectedArea: string| null = 'all'; // Default to 2500 sq ft

  ngOnInit(): void {
  }

  applyAreaFilter(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedArea = target.value !== 'null' ? target.value : null;
  }

  bookNow() {
    this.router.navigate(['/book-now']);
  }

  standardinfo(){
    this.router.navigate(['/standard']);
  }

  signatureinfo(){
    this.router.navigate(['/signature']);
  }

  platinuminfo(){
    this.router.navigate(['/platinum']);
  }
  
}
