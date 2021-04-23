import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: "https://www.rd.com/wp-content/uploads/2019/05/American-shorthair-cat-scaled.jpg",
      description: "Cat 1"
    },
    {
      url: "https://hips.hearstapps.com/clv.h-cdn.co/assets/15/33/1439400031-gettyimages-187144066.jpg",
      description: "Cat 2"
    },
    {
      url: "https://parade.com/wp-content/uploads/2020/12/Small-Cat-Breeds-1.jpg",
      description: "Cat 3"
    }
  ]
}
