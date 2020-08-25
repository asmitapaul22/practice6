import { Injectable } from '@angular/core';
import {Book} from './book';
import { Observable} from 'rxjs';
// import { of } from 'rxjs';
// import {of } from 'rxjs/observable/of';


const BOOKS:Book[]=[
{'id':1,'name':'aaa','author':'ajay','state':'cg'},
{'id':2,'name':'bbb','author':'ajan','state':'mp'},
{'id':3,'name':'ccc','author':'aman','state':'hp'},
{'id':4,'name':'ddd','author':'ajit','state':'up'},
{'id':5,'name':'eee','author':'atul','state':'ap'}
];
let booksobsevables=Observable.arguments(BOOKS);
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
getbooks():Observable<Book[]>{
  return booksobsevables;
}
  constructor() { }
}
