class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;

    }

    fix() {
        this.state *= 1.5;  //Создайте метод fix(), увеличивающий state в полтора раза.
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}


//5. Создайте класс Magazine, который будет наследоваться от класса PrintEditionItem
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";   //Значение свойства type должно быть равно "magazine"
    }
}

// 6. Создайте класс Book, который наследуется от класса PrintEditionItem.
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

// Класс NovelBook наследуется от класса Book
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

// Класс FantasticBook наследуется от класса Book
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

// Класс DetectiveBook наследуется от класса Book
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


// Пример

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100




// ЗАДАЧА N2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];  //Значением свойства books должен быть пустой массив
    }
    //2. Реализуйте метод addBook(book), который в качестве аргумента будет принимать объект — книгу или журнал.
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);      //Метод должен добавлять книгу в хранилище books
        }
    }

    //3.Создайте метод findBookBy(type, value), который в качестве аргументов будет принимать ключ для проведения поиска (тип, автор, название, год выпуска и пр.) и искомое значение. 
    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }

    //4. Создайте метод giveBookByName(bookName), который в качестве аргумента будет принимать название книги, запрошенной читателем.
    giveBookByName(bookName) {
        let foundBook = this.findBookBy("name", bookName);
        if (!foundBook) {
            return null;               //если книги нет сразу возвращаем null
        }
        let index = this.books.indexOf(foundBook);     //получаем индекс книги
        this.books.splice(index, 1);           // и удаляем её

        return foundBook;
    }
}



//ПРИМЕР
const library = new Library("Библиотека имени Ленина");

library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);
library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3



// //Задача 3
// class Gradebook {
//     constructor(name){
// this.name = name ;      //охраняйте имя пользователя
// this.marks = {};        //создавайте свойство для хранения оценок
//     }

//     addMark(mark, subject){
// if(mark < 2 || mark > 5){
// return;                 //Валидируйте оценку. Она должна быть не меньше 2 и не больше 5. Если значение выходит за пределы этого диапазона, оценка не должна добавиться, и метод следует завершать.
// }



//     }
// }