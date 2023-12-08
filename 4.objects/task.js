function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []; // Пустой массив для хранения оценок
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if (!this.marks) { //проверяем существует ли св-о marks
        return;  // если студент исключён - действие прерывается
    }
    this.marks.push(...marksToAdd); //добавляем оценки используя rest оператор
}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
        return 0;  //Если свойства marks не существует или оно пустое, сразу возвращайте ноль
    }
    const sum = this.marks.reduce((total, mark) => total + mark, 0);
    return sum / this.marks.length;  //среднее арифметическое оценок студента
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
