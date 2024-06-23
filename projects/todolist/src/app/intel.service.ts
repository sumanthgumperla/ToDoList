import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class IntelUserService{
    url:string = "http://localhost:5050/";
    constructor(private http:HttpClient){
        //empty
    }

    // read
    getAllUsers(){
        return this.http.get(this.url+"data")
    }
    // create
    addTask(Task:any){
        return this.http.post(this.url+"add", Task)
    }
    // read to update
    getUserToUpdate(userid:any){
        return this.http.get(this.url+"edit/"+userid);
    }
    // update
    updateUser(user:any){
        return this.http.put(this.url+"edit/"+user._id, user);
    }
    // delete
    deleteUser(userid:any){
        return this.http.delete(this.url+"delete/"+userid);
    }

}