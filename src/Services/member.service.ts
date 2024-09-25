import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/Models/Member';




//injectebele c'est un decorateur qui permet d'injecter le service dans le composant.
@Injectable({
  providedIn: 'root'
})
export class MemberService {
//tous les operation crud sur member 
  constructor(private http:HttpClient) { }
getAllMembers():Observable<Member[]>{
//generer une requete http en mode GET vesr le backend 
return this.http.get<Member[]>('http://localhost:3000/members');
}


 CreateMember(MemberToSave:Member):Observable<void>{
  return this.http.post<void>('http://localhost:3000/members',MemberToSave);

 }

 // le meme service  est une seule instance (singleton): type de l instance men win jaya
 
 DeleteMember(id: String) :Observable<void>{
return this.http.delete<void>(`http://localhost:3000/members/${id}`);

 }


 EditMember(id: String, memberToUpdate: Member) :Observable<void>{
  return this.http.put<void>(`http://localhost:3000/members/${id}`, memberToUpdate);
}
  

}
