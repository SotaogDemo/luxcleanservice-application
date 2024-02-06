import { Component, OnInit } from '@angular/core';

interface Review {
  customerName: string;
  date: string;
  feedback: string
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {

  reviews: Review[] = [
    {
      customerName: 'Ashdon O',
      date: 'March 2023',
      feedback: "Sarai was excellent! Very easy to communicate with, proficient, thorough, and a great energy to bring into your personal space. Definitely will be scheduling more appointments. My home smells and looks spotless."
    },
    {
      customerName: 'Delia Y',
      date: 'March 2023',
      feedback: "Sarai was very thorough, great service. I highly recommend her."
    },
    {
      customerName: 'Daryn O',
      date: 'March 2023',
      feedback: "Sarai did a wonderful job. Very professional and thorough, and absolutely lovely."
    },
    {
      customerName: 'Michael H',
      date: 'March 2023',
      feedback: "She was very professional and did a great job. I will be requesting her again."
    },
    {
      customerName: 'Shira H',
      date: 'April 2023',
      feedback: "Very pleased with Sarai and her services as always. Thank you for all your hard work."
    },
    {
      customerName: 'Krystal H',
      date: 'April 2023',
      feedback: "Sarai is absolutely amazing! She goes over and beyond without question. I love the warm peaceful energy she brings with her to my home . She comes in and do her thing every time , I don’t have to say word . She’s the best! Thank you so much for hard work and dedication."
    },
    {
      customerName: 'Deanna K',
      date: 'April 2023',
      feedback: "Sarai was awesome! Very friendly & professional and did a fantastic job cleaning my home that needed real attention. Can’t wait to have her back!! I highly recommend her!"
    },
    {
      customerName: 'Reena P',
      date: 'May 2023',
      feedback: "Sarai is exceptional. She was very professional, and such a kind person. Would hire her again."
    },
    {
      customerName: 'Candace S',
      date: 'May 2023',
      feedback: "Very fast. She was great. This was my second cleaning with her."
    },
    {
      customerName: 'Aderonke G',
      date: 'June 2023',
      feedback: "Nice.... I love her cleaning and she pays keen attention to details.. Definitely going with her next time."
    },
    {
      customerName: 'Harshika N',
      date: 'June 2023',
      feedback: "Sarai was really amazing. She was working non-stop, literally covered everything. Loved her service. Definitely recommend and will have her back. :)"
    },
    {
      customerName: 'Benita A',
      date: 'July 2023',
      feedback: "Sarai did an amazing job and did exactly as I requested. Also great communication and she was very understanding. I’ll definitely be booking her for my next cleaning. I’m a single mom and get behind very often she tackled my home and I was so happy with how my home felt when she was done."
    },
    {
      customerName: 'Samantha H',
      date: 'July 2023',
      feedback: "It looked awesome! I’m so grateful for all the help and I look forward to working with you again!"
    },
    // Add more reviews as needed
  ];

  constructor() {}

  ngOnInit(): void {}

  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
}
