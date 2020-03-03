class Student {
	constructor(){
		this.id = 1;
		this.name = "mahi";
	}
}

const student1 = new Student();
const student2 = new Student();
console.log(student1, student2);
//-----------------------------------------
class Student {
	constructor(sID, sName){
		this.id = sId;
		this.name = "sName;
	}
}

const student1 = new Student(12,"SHuvo");
const student2 = new Student(22,"Mahiya");
console.log(student1, student2);
//-----------------------------------------------
class Student {
	constructor(sID, sName){
		this.id = sId;
		this.name = "sName;
		this.school = "Kalimunnessa School";
	}
}

const student1 = new Student(12,"SHuvo");
const student2 = new Student(22,"Mahiya");
console.log(student1, student2);
//---------------------------------------------------------
class Student {
	constructor(sID, sName){
		this.id = sId;
		this.name = "sName;
		this.school = "Kalimunnessa School";
	}
}

const student1 = new Student(12,"SHuvo");
const student2 = new Student(22,"Mahiya");
console.log(student1.name, student2.name);
//-----------------------------------------------------
class Student {
	constructor(sID, sName){
		this.id = sId;
		this.name = "sName;
		this.school = "Kalimunnessa School";
	}
}

const student1 = new Student(12,"SHuvo");
const student2 = new Student(22,"Mahiya");
const student2 = new Student(22,"Bappi");
console.log(student3);