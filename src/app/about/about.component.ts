import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  progress: number = 10;
  personnalityDescLeft: Peronnality[] = [
    {
      desc: 'Efficient',
      progress: 22,
      color: '#2c1fd3',
    },
    {
      desc: 'Productive',
      progress: 40,
      color: '#1406ce',
    },
    {
      desc: 'Committed',
      progress: 58,
      color: '#1205b9',
    },
  ];
  personnalityDescRight: Peronnality[] = [
    {
      desc: 'Dedicated',
      progress: 58,
      color: '#e8e6fa',
    },
    {
      desc: 'Energetic',
      progress: 40,
      color: '#d7d5e6',
    },
    {
      desc: 'Organized',
      progress: 22,
      color: '#d0cdf5',
    },
  ];
  personnalityDescTop: Peronnality[] = [
    {
      desc: 'Ambitious',
      progress: 10,
      color: '#b9b4f0',
    },
    {
      desc: 'Progressive',
      progress: 20,
      color: '#aeacce',
    },
    {
      desc: 'Engaged',
      progress: 30,
      color: '#a19beb',
    },

    {
      desc: 'Persistent',
      progress: 40,
      color: '#9390bd',
    },
    {
      desc: 'Agile',
      progress: 50,
      color: '#7874ad',
    },
    {
      desc: 'Studious',
      progress: 60,
      color: '#8a83e7',
    },
    {
      desc: 'Assiduous',
      progress: 70,
      color: '#726ae2',
    },
    {
      desc: 'Hustling',
      progress: 80,
      color: '#5b51dd',
    },
  ];
  personnalityDescBottom: Peronnality[] = [
    {
      desc: 'Untiring',
      progress: 10,
      color: '#020115',
    },
    {
      desc: 'Prompt',
      progress: 20,
      color: '#040129',
    },
    {
      desc: 'Enthusiastic',
      progress: 30,
      color: '#06023e',
    },
    {
      desc: 'Toughtful',
      progress: 40,
      color: '#080252',
    },
    {
      desc: 'Tenacious',
      progress: 50,
      color: '#0a0367',
    },
    {
      desc: 'Preoccupied',
      progress: 60,
      color: '#0c047c',
    },
    {
      desc: 'Unflagging',
      progress: 70,
      color: '#0e0490',
    },
    {
      desc: 'Disciplined',
      progress: 80,
      color: '#1005a5',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
export interface Peronnality {
  desc: string;
  progress: number;
  color: string;
}
