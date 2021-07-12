class PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state = this.state * 1.5;
      if(this.state > 100) {
        this.state = 100
      }
    }
  
    set state(newState) {
      this._state = newState;
      if(newState > 100){
        this._state = 100;
      } else if (this.state < 0) {
        this._state = 0;
      }
    }
  
    get state() {
      return this._state;
    }
    
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
      super(name,releaseDate,pagesCount);
      this.type = 'magazine';
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name,releaseDate,pagesCount) {
      super(name,releaseDate,pagesCount);
      this.author = author;
      this.type = 'book';
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name,releaseDate,pagesCount) {
      super(author, name,releaseDate,pagesCount);
      this.type = 'novel'
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name,releaseDate,pagesCount) {
      super(author, name,releaseDate,pagesCount);
      this.type = 'fantastic'
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name,releaseDate,pagesCount) {
      super(author, name,releaseDate,pagesCount);
      this.type = 'detective'
    }
  }

  class Library {
    constructor (name) {
      this.name = name;
      this.books = [];
    }
    addBook(book) {
      if(book.state > 30) {
        this.books.push(book)
      } else console.log(`Bookstate is ${book.state} < 30`)
    }
    findBookBy(type, value) {
      let findedBook;
      for(let i = 0; i < this.books.length; i += 1){
        if(this.books[i][type] === value) {
          findedBook = this.books[i];
        }
      }
      if(findedBook) {
        return findedBook;
      } else return null
    }

    giveBookByName(bookName) {
      let givingBook;
      for(let i = 0; i < this.books.length; i += 1) {
        if(this.books[i].name === bookName) {
          givingBook = this.books[i];
          this.books.splice(i,1);
        }
      }
      if(givingBook) {
        return givingBook;
      } else return null
    }
  }

  class Student {
    constructor(name) {
      this.name = name;
    }
  // изменен порядок параметров функции в соответствии с тестом
    addMark(mark, subject) {
     if(mark <=5 && mark >= 1){
        if(this[subject] === undefined) {
          this[subject] = [];
        }
        this[subject].push(mark);
      } else return console.log("Ошибка, оценка должна быть числом от 1 до 5");
    }
    getAverageBySubject(subject) {
      if(this[subject]) {
        return this[subject].reduce((sum, item) =>  sum +=item)/this[subject].length;
      } else return console.log('Несуществующий предмет')
    }
    getAverage() {
      let markArray = [];
      for(let key in this) {
        if(Array.isArray(this[key])) {
          markArray = markArray.concat(this[key]);
        }
      }
      return markArray.reduce((sum,item) => sum +=item)/markArray.length;
    }
  }
