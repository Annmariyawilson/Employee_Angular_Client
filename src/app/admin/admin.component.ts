import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  status:boolean=false
  profilePicture:any="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
  adminData:any=[]

  constructor(private api:ApiService,private toastr:ToastrService,private router:Router){}

  ngOnInit(): void {
    this.api.getData().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.adminData=res
        if (res.profile) {
          this.profilePicture=res.profile
        }
      }
    })
  }

  getFile(e:any){
    const file=e.target.files[0]
    const fr=new FileReader()
    fr.readAsDataURL(file)
    fr.onload=(event:any)=>{
      console.log(event.target.result);
      this.adminData.profile=event.target.result
      this.profilePicture=event.target.result
    }
  }

  handleUpdate(){
    console.log(this.adminData);
    this.api.updateAdmin(this.adminData).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.toastr.success("Admin Profile Updated")
        this.router.navigateByUrl('')
      },
      error:(err:any)=>{
        console.log(err);
        this.toastr.error("Admin Profile Updation Failed!!")
      }
    })
    
  }

  editButton(){
    this.status=true
  }
  cancelButton(){
    this.status=false
  }
}
