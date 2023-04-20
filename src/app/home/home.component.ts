import { Component, OnInit } from '@angular/core';
import storyJson from './_files/story.json';
import {Sentence} from './sentence.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public textsArray:string[] = storyJson;
  public story:Sentence[] = [];

  constructor() {
    this.textsArray.map((e, index) =>{
      this.story.push({
        text: e,
        backgroundImg: `/assets/img/${index+1}.jpg`
      })
    })
  }

  ngOnInit(): void {
  }

}
