class School {
  constructor(name,level,numberOfStudents) {
    this._name = name;
    this._level = level;
    this.numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this.numberOfStudents;
  }

  set numberOfStudents(num) {
    if (typeof num !== 'number'){
      this._numberOfStudents = 'That is Not a Number!';
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    } else {
      this._numberOfStudents = num;
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }

  static pickSubstituteTeacher(){
    const substituteTeachers = [];
    const randomNumber = Math.floor(substituteTeachers.length - 1 * Math.random());
    return substituteTeachers[randomNumber];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name);
    this._level = 'primary';
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name,numberOfStudents) {
    super(name,numberOfStudents);
    this._level = 'Middle';
  }
}

class High extends School {
  constructor(name,numberOfStudents,sportsTeams) {
    super(name,numberOfStudents);
    this._sportsTeams = sportsTeams;
    this._level = "High"
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'George', 'Students must be picked up by a parent, guardian or a family member over the age of 13.');

lorraineHansbury.quickFacts();
