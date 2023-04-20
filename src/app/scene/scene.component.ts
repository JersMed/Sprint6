import { Sentence } from './../home/sentence.model';
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
  public bodyHtml = document.getElementsByTagName('body')[0];


  constructor() {
  }

  ngOnInit(): void {
  }

  next(){
    if(this.currentSentence < (this.story.length - 1)){
      this.currentSentence++;
      this.bodyHtml.style.backgroundImage = `url('${this.story[this.currentSentence].backgroundImg}')`;
    }
  }
  prev(){
    if(this.currentSentence > 0){
      this.currentSentence--;
      this.bodyHtml.style.backgroundImage = `url('${this.story[this.currentSentence].backgroundImg}')`;
    }
  }
  showStory(){
    this.bodyHtml.style.backgroundImage = `url('${this.story[this.currentSentence].backgroundImg}')`;
    this.enterScene=true;
  }
}
