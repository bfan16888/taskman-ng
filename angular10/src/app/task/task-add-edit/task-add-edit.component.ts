import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrls: ['./task-add-edit.component.css']
})
export class TaskAddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() task:any;
  TaskId:string;
  TaskName:string;
  EmployeeId:string;
  StartTime:string;
  Deadline:string;

  EmployeeList:any = [];
 

  ngOnInit(): void {
    this.service.getEmpList().subscribe((data:any) => {
      this.EmployeeList = data;

      this.TaskId = this.task.TaskId;
      this.TaskName = this.task.TaskName;
      this.EmployeeId = this.task.EmployeeId;
      this.StartTime = this.task.StartTime.slice(0, 10);
      this.Deadline = this.task.Deadline.slice(0, 10);
    });
  }

  addTask(){
    var val = {
      TaskId:this.TaskId,
      TaskName:this.TaskName,
      EmployeeId:parseInt(this.EmployeeId),
      StartTime:this.StartTime,
      Deadline:this.Deadline
    };

    this.service.addTask(val).subscribe(res=>{
      //console.log(res.toString());
    });
  }

  updateTask(){
    var val = {
      TaskId:this.TaskId,
      TaskName:this.TaskName,
      EmployeeId:this.EmployeeId,
      StartTime:this.StartTime,
      Deadline:this.Deadline
    };

    this.service.updateTask(val).subscribe(res=>{
      //console.log(res);
    });
  }

}
