import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../book';
import {BookserviceService} from '../bookservice.service';
import { from } from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  books:Observable<Book[]>;
  constructor(private bookserviceService:BookserviceService,private router:Router) { }

  ngOnInit(): void {
    this.books=this.bookserviceService.getbooks()
  }
  close(){
    this.router.navigate([{outlets:(bookList:null)}]);
  }

}   
