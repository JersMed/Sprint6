import { Sentence } from '../home/interfaces/sentence.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  @Input() story:Sentence[];

  public currentSentence:number = 0;
  public currentImage:String = "";
  public enterScene:boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  next() {
    if (this.currentSentence < (this.story.length - 1)) {
      this.currentSentence++;
      this.currentImage = this.story[this.currentSentence].backgroundImg;
    }
  }
  
  prev() {
    if (this.currentSentence > 0) {
      this.currentSentence--;
      this.currentImage = this.story[this.currentSentence].backgroundImg;
    }
  }
  
  showStory() {
    this.currentImage = this.story[this.currentSentence].backgroundImg;
    this.enterScene = true;
  }
  
}
