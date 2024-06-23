import { Component, OnInit } from '@angular/core';
import { IntelUserService } from './intel.service';
import { newService } from './new.service';

@Component({
  selector: 'app-newapp',
  template: `
  <div class="tostyle">
<div class="container">
<h1>ToDoList App</h1>
<div *ngIf="show">
      <h2>Add New task</h2>
      <div class="mb-3">
        <label for="tasktitle" class="form-label">Task Title</label>
        <input [(ngModel)]="newtask.title" class="form-control" id="tasktitle">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">description</label>
        <input [(ngModel)]="newtask.description" class="form-control" id="description">
      </div>
      <div class="col-auto">
        <button (click)="addTaskHandler()" class="btn btn-primary mb-3">Add New User</button>
      </div>
    </div>

    <!-- ######################################################################## -->
    <div *ngIf="!show">
      <h2>Edit Task</h2>
      <div class="mb-3">
        <label for="tasktitle" class="form-label">Task Title</label>
        <input [(ngModel)]="edittask.title" class="form-control" id="tasktitle">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">description</label>
        <input [(ngModel)]="edittask.description" class="form-control" id="description">
      </div>
      <div class="col-auto">
        <button (click)="updateTaskHandler()" class="btn btn-primary mb-3">update user </button>
      </div>
    </div>
</div>
<!-- ############################################ -->
<hr>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Sl #</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of userslist; index as idx">
          <td>{{ idx + 1 }}</td>
          <td>{{ user.title }}</td>
          <td>{{ user.description }}</td>
          <td><button (click)="editSelectedUser(user.listId)" class="btn btn-warning">Edit Task</button></td>
          <td><button (click)="deleteSelectedUser(user.listId)" class="btn btn-danger">Delete Task</button></td>
        </tr>
      </tbody>
    </table>

    </div>

  `,
  styles: [`
    .tostyle {
  background-color: @brand-primary;
}
    
    `]
})
export class NewappComponent implements OnInit {
  userslist:any=[];
  show:boolean=true;

  constructor(private ins:newService){}
  ngOnInit(): void {
      this.refresh();
  }
refresh(){
    this.ins.getAllTasks().subscribe(res=>{
      this.userslist=res
    })
  }
  editSelectedUser(id:number){
    this.show=false;
    this.ins.getTaskById(id).subscribe(res=>
      {
        this.edittask=res;
        this. refresh()
      }
    )

  }
  deleteSelectedUser(id:number){
    this.ins.deleteTask(id).subscribe(res=>{
     this. refresh()
      alert("task is deleted")
    })

  }
    
  

  newtask:any={
  title:"",
  description:""
}
edittask:any={
  title:"",
  description:""
}
updateTaskHandler(){
 this.ins.addTask(this.edittask).subscribe(res=>{
  console.log(res);
  this. refresh()
  alert("task is updated");
  this.show=true;
 })


}  
addTaskHandler(){
  this.ins.addTask(this.newtask).subscribe(res=>{
    console.log(res)
    this.refresh()
    this.newtask={
      title:"",
      description:""

    }
  })
}








}
