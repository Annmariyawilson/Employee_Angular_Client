import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrl: './addemp.component.css'
})
export class AddempComponent {

  formData:any={
    id:"",name:"",phone:"",department:""
  }

  constructor(private api:ApiService,private toastr:ToastrService,private router:Router){}

  onSubmit(){
    console.log(this.formData);
    this.api.addEmployee(this.formData).subscribe({
      next:(res:any)=>{
        this.toastr.success("Employee Details Added!!")
        this.router.navigateByUrl('/empmng')
      },
      error:(err:any)=>{
        console.log(err);
        this.toastr.error("Something Went Wrong!!")
      }
    })
  }

}
