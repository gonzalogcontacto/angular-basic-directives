import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  dni:string = '';
  inputValue: string;
  name:string;
  publications = [
    {name: 'Climate Change', post: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin l'},
     {name: 'Angular Directives', post: 'generators on the Internet tend to repeat predefined chunks as necessary'},
     {name: 'Climate Change', post: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin l'},
     {name: 'Climate Change', post: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin l'},
     {name: 'Climate Change', post: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin l'},
     {name: 'Climate Change', post: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin l'},
     {name: 'Climate Change', post: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin l'},
     {name: 'Climate Change', post: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin l'},
     {name: 'Climate Change', post: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin l'},
     {name: 'Climate Change', post: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin l'},
     {name: 'Climate Change', post: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin l'},

  ];

  getDni() {
    return this.dni;
  }

  sayGoodbye(){
    alert('¡Goodbye!');
  }

  getInfo(event: any){
    console.log(event.key);
  }

  dynamicColor(){
    
    let color = 'red';

    if(this.dni.length > 0){
       color = 'green';
    }

    return color;
  }

}
