import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
display;
color;
disabled:boolean=true;
displaysth="Property binding example"

sayhello(event:any){
event.target.innerHTML="Changed by typescript"
event.target.style.backgroundColor="green"
}

returncolor():string{
  return "blue"
}

constructor(){

  this.display="Hello from typescript"
  this.color="red"
}

}
