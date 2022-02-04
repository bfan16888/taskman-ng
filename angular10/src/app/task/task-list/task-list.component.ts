import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private service:SharedService) { }
  TaskList:any=[];
  EmployeeList:any=[];  
  ModalTitle:string;
  ActivateAddEditTaskComp:boolean=false;
  task:any;

  ngOnInit(): void {
    this.refreshEmployeeList();
    this.refreshTaskList();
  }

  addClick(){
    this.task={
      TaskId:0,
      TaskName:"",
      Employee:0,
      StartTime:"",
      Deadline:""
    }
    this.ModalTitle="Add Task";
    this.ActivateAddEditTaskComp=true;

  }

  editClick(item){
    //console.log(item);
    this.task=item;
    this.ModalTitle="Edit Task";
    this.ActivateAddEditTaskComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure to delete ?')){
      this.service.deleteTask(item.TaskId).subscribe(data=>{
        //console.log(data);
        this.refreshTaskList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTaskComp=false;
    this.refreshTaskList();
  }

  refreshTaskList(){
    this.service.getTaskList().subscribe(data=>{
      this.TaskList=data;
    });
  }

  refreshEmployeeList() {
    this.service.getEmpList().subscribe((data:any) => {
      this.EmployeeList = data;
    });
  }

  getEmployeeNameById(id) {
    let emp = this.EmployeeList.find(emp => emp.EmployeeId == id);
    return emp==null? "N/A" : emp.FirstName + " " + emp.LastName;
  }

}
