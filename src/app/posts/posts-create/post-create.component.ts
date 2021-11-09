import { Component } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  enteredValue = ''
  newPost = 'Please enter content'

  onAddPost() {
    this.newPost =this.enteredValue
  }
}