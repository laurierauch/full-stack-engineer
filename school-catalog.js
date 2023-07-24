class School {
  constructor(name,level,numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
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
    this._numberOfStudents = numberOfStudents;
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name,numberOfStudents) {
    super(name);
    this._numberOfStudents = numberOfStudents;
    this._level = 'Middle';
  }
}

class HighSchool extends School {
  constructor(name,numberOfStudents,sportsTeams) {
    super(name);
    this._numberOfStudents = numberOfStudents;
    this._sportsTeams = sportsTeams;
    this._level = "High"
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian or a family member over the age of 13.');

lorraineHansbury.quickFacts();

const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.quickFacts();
