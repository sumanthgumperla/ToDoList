import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class newService{
    url:string="http://localhost:8080/"
    constructor(private http:HttpClient){

    }

    getAllTasks(){
       return this.http.get(this.url+"getall");
    }

    getTaskById(id:number){
      return  this.http.get(this.url+"getlist/"+id);
    }
addTask(data:any){
  return  this.http.post("http://localhost:8080/add",data);
}
deleteTask(id:number){
   return  this.http.delete("http://localhost:8080/delete/"+id);
}

}