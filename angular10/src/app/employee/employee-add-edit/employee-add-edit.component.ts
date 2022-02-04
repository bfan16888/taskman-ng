import { Component, OnInit,Input, ComponentFactoryResolver } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.css']
})
export class EmployeeAddEditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  EmployeeId:string;
  FirstName:string;
  LastName:string;
  HireDate:string;
 
  ngOnInit(): void {
    this.EmployeeId = this.emp.EmployeeId;
    this.FirstName = this.emp.FirstName;
    this.LastName = this.emp.LastName;
    this.HireDate = this.emp.HireDate.slice(0, 10);
  }

  addEmployee(){
    var val = {
      EmployeeId:this.EmployeeId,
      FirstName:this.FirstName,
      LastName:this.LastName,
      HireDate:this.HireDate
    };

    this.service.addEmployee(val).subscribe(res=>{
      //console.log(res.toString());
    });
  }

  updateEmployee(){
    var val = {
      EmployeeId:this.EmployeeId,
      FirstName:this.FirstName,
      LastName:this.LastName,
      HireDate:this.HireDate
    };

    this.service.updateEmployee(val).subscribe(res=>{
      //console.log(res);
    });
  }

}
