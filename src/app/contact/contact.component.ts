import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contactForm: FormGroup

isSubmit=true
submitMessage='';
  constructor(private form:FormBuilder) { }

  ngOnInit(): void {
this.contactForm= this.form.group({
  Fullname:[null,Validators.required],
  Email:[null,Validators.required],
  Subject:[null,Validators.required],
  Textarea:[null,Validators.required]
})
  }

  submitData(value:any){
    console.log(value)
    this.isSubmit=true;
    this.submitMessage='Submitted Successfully'
    setTimeout(()=>{
this.isSubmit=false
    },8000)
  }

}
