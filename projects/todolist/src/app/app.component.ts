// import { Component } from '@angular/core';
// import { IntelUserService } from './intel.service';

// @Component({
//   selector: 'app-root',
//   template: `
//   <div class="container">
//     <h1>To Do List</h1>
//     <hr>
//     <div *ngIf="show">
//       <h2>Add New task</h2>
//       <div class="mb-3">
//         <label for="tasktitle" class="form-label">Task Title</label>
//         <input [(ngModel)]="newtask.tasktitle" class="form-control" id="tasktitle">
//       </div>
//       <div class="mb-3">
//         <label for="description" class="form-label">description</label>
//         <input [(ngModel)]="newtask.description" class="form-control" id="description">
//       </div>
//       <div class="col-auto">
//         <button (click)="addTaskHandler()" class="btn btn-primary mb-3">Add New User</button>
//       </div>
//     </div>

//     <div *ngIf="!show">
//       <h2>Edit User</h2>
//       <div class="mb-3">
//         <label for="e_tasktitle" class="form-label">Edit User Name</label>
//         <input [(ngModel)]="edituser.tasktitle" class="form-control" id="e_tasktitle">
//       </div>
//       <div class="mb-3">
//         <label for="e_description" class="form-label">Edit User eMail</label>
//         <input [(ngModel)]="edituser.description" class="form-control" id="e_description">
//       </div>
//       <div class="mb-3">
//         <label for="e_usercity" class="form-label">Edit User City</label>
//         <input [(ngModel)]="edituser.usercity" class="form-control" id="e_usercity">
//       </div>
//       <div class="col-auto">
//         <button (click)="updateUserHandler()" class="btn btn-primary mb-3">Update User</button>
//       </div>
//     </div>
//     <hr>
//     <table class="table table-striped table-hover">
//       <thead>
//         <tr>
//           <th>Sl #</th>
//           <th>User Name</th>
//           <th>User eMail</th>
//           <th>User City</th>
//           <th>Edit</th>
//           <th>Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr *ngFor="let user of userslist; index as idx">
//           <td>{{ idx + 1 }}</td>
//           <td>{{ user.tasktitle }}</td>
//           <td>{{ user.description }}</td>
//           <td>{{ user.usercity }}</td>
//           <td><button (click)="editSelectedUser(user._id)" class="btn btn-warning">Edit User Info</button></td>
//           <td><button (click)="deleteSelectedUser(user._id)" class="btn btn-danger">Delete User</button></td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
//   `,
//   styles: []
// })
// export class AppComponent {
//   title = 'intel-crud';
//   show = false;
//   newtask:any = {
//     tasktitle : "",
//     description : "",
//     usercity : ""
//   }
//   edituser:any = {
//     _id : "",
//     tasktitle : "",
//     description : "",
//     usercity : ""
//   }
//   userslist:any = [];
//   constructor(private intelservice:IntelUserService){
//       //empty
//   }

//   refresh(){
//     this.intelservice.getAllUsers().subscribe( res => this.userslist = res );
//   };

//   ngOnInit(){
//     this.refresh();
//   }

//   addTaskHandler(){
//     this.intelservice.addTask(this.newtask).subscribe( res => {
//       console.log(res)
//       this.refresh();
//       this.newtask = {
//         tasktitle : "",
//         description : "",
//         usercity : ""
//       }
//     })
//   }

//   editSelectedUser(uid:any){
//     this.intelservice.getUserToUpdate(uid).subscribe( res => {
//       this.edituser = res;
//       this.show = false;
//     } );
//   }

//   deleteSelectedUser(uid:any){
//     this.intelservice.deleteUser(uid).subscribe(res => {
//       this.refresh();
//     })
//   }

//   updateUserHandler(){
//     this.intelservice.updateUser(this.edituser).subscribe( res => {
//       this.refresh();
//       this.edituser = {
//                         _id : "",
//                         tasktitle : "",
//                         description : "",
//                         usercity : ""
//                       };
//       this.show = true;
//     })
//   }
// }
