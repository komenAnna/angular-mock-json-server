// HttpClient from @angular/common/http: a service that allows the class to make HTTP requests to the API.
import { HttpClient } from "@angular/common/http";
//@Injectable decorator indicates that the class is a service that can be injected into other components.
import { Injectable } from "@angular/core";
import { user } from "../models/user";

@Injectable({
    providedIn: 'root' // means that only one instance of the class will be created and shared across the entire application.
})

//  This class is an Angular service that provides methods to interact with an API endpoint. 
export class UserServices{
    baseUrl="/api/users";
    // The constructor takes an instance of HttpClient as a parameter. This is used to make HTTP requests to the API.
    constructor(private http:HttpClient){}

    //get user service
    // The getUsers method is defined within this class, and it uses the HttpClient service to make an HTTP GET request to the API endpoint /api/users.
    // The getUsers method uses the http.get method of the HttpClient service to make an HTTP GET request to the API endpoint
    getUsers(){
        return this.http.get<user[]>(this.baseUrl);
    }

    addUsers(user:user){
        return this.http.post<user[]>(this.baseUrl, user)
    }
}