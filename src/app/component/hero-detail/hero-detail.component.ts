import { Component, OnInit, Input } from '@angular/core';
import {HeroDetail} from '../hero.detail'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() heroDetail: HeroDetail
  // heroDetail: HeroDetail = {
  //   name:'xiaoming',
  //   age:20
  // }
  constructor() { }

  ngOnInit() {
  }

}
