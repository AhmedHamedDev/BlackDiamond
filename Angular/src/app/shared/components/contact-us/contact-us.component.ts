import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactusService } from '../../services/contactus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  @ViewChild('sendMessageBtn') sendMessageBtn: ElementRef;

  contactForm: FormGroup;
  submitted = false;


  constructor(private toaster: ToastrService, private formBuilder: FormBuilder, private _contactUs: ContactusService, private router: Router) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      "name": ['', [Validators.required]],
      "email": ['', [Validators.required, Validators.email]],
      "subject": ['', [Validators.required]],
      "message": ['', [Validators.required]]
    })
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) { return; }

    this.sendMessageBtn.nativeElement.innerHTML = "Loading...";
    this.sendMessageBtn.nativeElement.disabled = true;
    this._contactUs.submitMessage(this.contactForm.value)
      .subscribe(res => {
        if (res.error) {
          this.toaster.error(res.message)
        }
        else {
          this.toaster.success(res.message)
          this.router.navigate(['/home'])
        }
        this.sendMessageBtn.nativeElement.innerHTML = "Send Message";
        this.sendMessageBtn.nativeElement.disabled = false;
      },
        err => {
          this.toaster.error("Something Went Wrong, Please Try Again Later")
          this.sendMessageBtn.nativeElement.innerHTML = "Send Message";
          this.sendMessageBtn.nativeElement.disabled = false;
        }
      )

  }

}
