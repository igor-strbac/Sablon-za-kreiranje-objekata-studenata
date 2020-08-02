
class Student {
    constructor(name, adress, phone, course) {
        this.name = name;
        this.adress = adress;
        this.phone = phone;
        this.course = course;
    }

    getInfo() {
        return "Name: " + this.name + "\n" +
            "Adress: " + this.adress + "\n" +
            "Phone: " + this.phone + "\n" +
            "Course: " + this.course
    }
}

var student1 = new Student("Pera Peric", "Beogradska 132", "+381 83 43 253", "Java");
var student2 = new Student("Mika Maric", "Beogradska 52", "+381 52 22 987", "PHP");
var student3 = new Student("Aca Peric", "Ugrinovacka 12", "+381 86 78 443", "JS");

console.log(student1.getInfo());
console.log(student2.getInfo());
console.log(student3.getInfo());