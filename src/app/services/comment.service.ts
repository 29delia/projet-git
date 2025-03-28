
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'http://localhost:8000/api/comments/'; 

  constructor(private http: HttpClient) {}

  // La supression d'un commentaire à partir de l'id

    //deleteComment(commentId: number): Promise<message:string> {
   // return this.http.delete(${this.apiUrl}/${commentId})

  }
  

