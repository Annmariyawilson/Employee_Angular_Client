import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrl: './emplist.component.css',
})
export class EmplistComponent implements OnInit {

  employees:any=[]
  dt:Date=new Date 
searchKey:string=''
p:number=1



  constructor(private api:ApiService,private toastr:ToastrService){}

  ngOnInit(): void {
    this.api.getEmployees().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.employees=res
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

  handleDelete(id:any){
    this.api.deleteEmployee(id).subscribe({
      next:(res:any)=>{
        this.toastr.success("Employee Details Removed!!")
      },
      error:(err:any)=>{
        console.log(err);
        this.toastr.error("Something Went Wrong")
      }
    })
  }

  sortById() {
    this.employees.sort((a: any, b: any) => a.id - b.id);
  }
  
  sortByName() {
    this.employees.sort((a: any, b: any) => a.name.localeCompare(b.name));
  }

  generatePdf(){
    const doc=new jsPDF()

    const head:any=[["ID","Name","Phone","Department"]]

    const body:any=[]

    this.employees.forEach((item:any)=>{
      body.push([item.id,item.name,item.phone,item.department])
    })

    doc.setFontSize(16)
    doc.text("All Employees",10,10)
    autoTable(doc,{
      head,body
  })
    doc.output("dataurlnewwindow")
    doc.save("employees.pdf")
  }
  
  
}
