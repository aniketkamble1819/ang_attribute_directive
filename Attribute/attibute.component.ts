import { Component } from '@angular/core';

@Component({
  selector: 'app-attibute',
  templateUrl: './attibute.component.html',
  styleUrls: ['./attibute.component.css']
})
export class AttibuteComponent {
   change:boolean = true;
   good:any = "soyab";

   cliked(){
    this.change =!this.change;
   }


  //  


}
