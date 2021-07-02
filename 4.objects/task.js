function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
if(this.marks === undefined){
  this.marks = [mark];
} else {
  this.marks.push(mark);
}
}

Student.prototype.addMarks = function (...marks) {
if(this.marks === undefined){
  this.marks = marks;
} else {let marksList = marks
  for (let marksItem of marks) {
    this.marks.push(marksItem);
  }
}
}

Student.prototype.getAverage = function () {
  if(this.marks !== undefined){
  sum = this.marks.reduce(function (sum, currentItem) {
    sum += currentItem;
    return sum;
    })
    return sum/this.marks.length;
  } else alert ('no marks')
}

Student.prototype.exclude = function (reason) {
delete this.marks;
delete this.average;
this.excluded = reason;
}
