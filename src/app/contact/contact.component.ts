import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contactForm: FormGroup

isSubmit=true
submitMessage='';
  constructor(private form:FormBuilder, private contact:ContactService) { }

  ngOnInit(): void {
this.contactForm= this.form.group({
  Fullname:[null,Validators.required],
  Email:[null,Validators.required],
  Subject:[null,Validators.required],
  Textarea:[null,Validators.required]
})
  }

  submitData(contactForm: any){

    this.contact.PostMessage(contactForm)
    .subscribe(response =>{
      location.href ='https://mailthis.to/confirm'
      console.log(response);
      
    },error =>{
      console.warn(error.responseText)
      console.log({error})
    })


    console.log(contactForm)
    this.isSubmit=true;
    this.submitMessage='Submitted Successfully'
    setTimeout(()=>{
this.isSubmit=false
    },8000)
  }

}
