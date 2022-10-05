import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {




  //public titleHeader :string='';
  public title:string = 'Today';
  public subTitle: string ="Time";
  public tourImg:string="https://www.coindesk.com/resizer/E3bZdgrXoDcs-0Bj5AHwvJvWCMY=/567x425/filters:quality(80):format(jpg)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/IPQPBCGVGJCVJFI5SF37JSLPIE.jpg";
  public time: string = new Date().toLocaleTimeString();
  
  
  constructor() { 


    this.updateTime();

  }
  
  ngOnInit(): void {
  }


  getDate():string{


    return new Date().toLocaleDateString();
  }

  getTime():string {
    return new Date().toLocaleTimeString();
    }

   public updateTime():void{
 //function doesnot return anything so void
      setInterval(()=> {

        this.time = new Date().toLocaleTimeString();
      },1000);

    }

    public changeColor():void{


      document.body.style.backgroundColor = "green";
    }
}
