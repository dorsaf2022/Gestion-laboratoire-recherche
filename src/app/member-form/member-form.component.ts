import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { MemberService } from 'src/Services/member.service';
import { Member } from 'src/Models/Member';
import { Router } from '@angular/router';
@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  constructor(private MS:MemberService, private router:Router) { 

  }
  form!:FormGroup;
  //initialiser le formulaire 
  ngOnInit(){
    this.form=new FormGroup({
    cin:new FormControl(null, [Validators.required]) , 
    name:new FormControl(null,[Validators.required]), 
    cv:new FormControl(null), 
    type:new FormControl(null) 
    })
  }

sub():void{
  //... extraction des attributs
  const m: Member={...this.form.value,
    createdDate:new Date()}
 
  //appeler la fonction du service MemberService 
  this.MS.CreateMember(m).subscribe(()=>{
    this.router.navigate([''])
  })
}
}


