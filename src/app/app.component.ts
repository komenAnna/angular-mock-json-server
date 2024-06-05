// Component is a decorator that marks the class as an Angular component.
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//  model that defines the structure of a user object.
import { user } from './models/user';
// provides methods for interacting with the API.
import { UserServices } from './services/user-services';

@Component({
  selector: 'app-root', // is used to identify the component in the HTML template.
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//  Here's a step-by-step explanation of what happens when the constructor is called:
//  1. The AppComponent class is instantiated, and its constructor is called.
//  2. The constructor takes the UserServices instance as a parameter.
//  3. The constructor calls the getUsers() method on the UserServices instance.
//  4. The getUsers() method sends a GET request to the API to retrieve the list of users.
//  5. The API responds with the list of users, which is then stored in the users property of the AppComponent class.
//  6. The component is now initialized and ready to display the list of users.
export class AppComponent {
  // The constructor takes an instance of UserServices as a parameter. This is used to interact with the API.
  constructor(private userService:UserServices){
    this.getUsers()
  }
  // The component has two properties:
  users!:user[] //An array of user objects that stores the list of users retrieved from the API.
  user:user={id:0,name:'',email:''}; //A user object that represents the user being added or edited.

  // The component has two methods:
  // addUser(): This method adds a new user to the API using the UserServices service. 
  // It subscribes to the API response and updates the users array if the request is successful.
  addUser(){
    this.userService.addUsers(this.user).subscribe({
      next:(users)=>{
        this.users.push(this.user)
      },
      error: (err)=>console.log(err)
    })
  }

  // This method retrieves the list of users from the API using the UserServices service. 
  // It subscribes to the API response and updates the users array if the request is successful.
  private getUsers(){
    this.userService.getUsers().subscribe({
       next:(res)=>{
        // this.users=res;
        console.log(res)
       },
       error:(err)=>console.log(err)
    })
  }
}
