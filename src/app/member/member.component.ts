import { Component } from '@angular/core';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/Services/member.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
 
 constructor(private MS:MemberService) { }
  dataSource: Member[]=[];  
  displayedColumns: string[] = ['id', 'cin','name', 'type', 'cv','createdDate','icon'];
  ngOnInit(): void {
//appeler la fonction getAllMembers de service 
//attendre le resultat 
//une fois on recoit le res => laffecter en dataSource 
//l'njection de depondance permet d'injecter un service dans un composant pour utiliser les fonctions de service si est seulement si le service il est injecter avec ke decoratuer injectable 
this.MS.getAllMembers().subscribe((a)=>{
  //action post ba3ed réception de résultat 
  this.dataSource=a;
})
}

DeleteMember(id: string): void {
  this.MS.DeleteMember(id).subscribe(() => {
    console.log("Member deleted successfully");
    // Remove the deleted member from the dataSource
    this.dataSource = this.dataSource.filter((member) => member.id !== id);
  }, error => {
    console.error("Error deleting member: ", error);
  });
}
EditMember(id: string, memberToUpdate: Member): void {
  this.MS.EditMember(id, memberToUpdate).subscribe(() => {
    console.log("Member updated successfully");
  }, error => {
    console.error("Error updating member: ", error);
  });

}
}