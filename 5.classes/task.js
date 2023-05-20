class PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
		this.name=name;
		this.releaseDate=releaseDate;
		this.pagesCount=pagesCount;
		this.state=100;
		this.type=null;
	}

    set state(state) {
		if (state<0) {
		this._state=0;
		} 
		else if (state>100) {
			this._state=100;
		} else this._state=state;
	}

	get state(){
		return this._state;
	}
		
	
   fix=function(){
    this.state=this.state*1.5;
    if (this.state>100) {
   	 this.state=100;
    }
   }
}

class Magazine extends PrintEditionItem {
	constructor(name,releaseDate,pagesCount){
	super(name,releaseDate,pagesCount);
	this.type="magazine";
    }
}

class Book extends PrintEditionItem {
	constructor(author,name,releaseDate,pagesCount){
	super(name,releaseDate,pagesCount);
	this.author=author;
	this.type="book";
    }
}
class NovelBook extends Book {
	constructor(name,releaseDate,pagesCount,author){
	super(name,releaseDate,pagesCount,author);
	this.type="novel";
    }
}

class FantasticBook extends Book {
	constructor(name,releaseDate,pagesCount,author){
	super(name,releaseDate,pagesCount,author);
	this.type="fantastic";
    }
}
class DetectiveBook extends Book {
	constructor(name,releaseDate,pagesCount,author){
	super(name,releaseDate,pagesCount,author);
	this.type="detective";
    }
}

class Library {
	constructor(name, books){
		this.name=name;	
		this.books=[];
	}

	addBook(book){
		if (book.state>30){
			this.books.push(book);
		}
	}

	findBookBy(type, value){
	let desiredBook=this.books.filter(book => book[type] === value)[0];
	if (desiredBook){
		return desiredBook
	} else return null;
	}
	
giveBookByName(bookName){
	let givedBook_ = this.books.filter(book => book.name === bookName);
	let givedBook=givedBook_[0];
	this.books.splice(givedBook_.length-1,1);
	if (givedBook) {
	return givedBook
	} else return null;
}
}

class Student{
	constructor(name, gender, age) {
	this.name=name;
	this.gender=gender;
	this.age=age;
	this.marks={};
	}

setSubject(subjectName) {
  this.subject=subjectName;
}

addMark(mark,subject) {
	if (mark>=2 && mark<=5){
  		if (!this.marks[subject]){
     		this.marks[subject]=[];
 			}
    	this.marks[subject].push(mark);
    } 
}


exclude(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded=reason;
}

getAverageBySubject(subject){
	if (this.marks[subject]){
	    return this.marks[subject].reduce((averageMark,mark) => averageMark+mark/this.marks[subject].length,0)	
	} else return 0;
}

getAverage() {
    if (Object.keys(this.marks).length>0) {
    let keys=Object.keys(this.marks);
	let sum=keys.reduce((acc,avMark) =>acc+this.getAverageBySubject(avMark),0);
	return sum/keys.length;
	  } else return 0;
}
}