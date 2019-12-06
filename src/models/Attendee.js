import DB from '..';

export default class Attendee {
  constructor(attributes) {
    Attendee.incrementCount();
    this.id = Attendee.count;
    this.name = attributes.name;
    this.gender = attributes.gender;
    this.email = attributes.email;
  }

  static incrementCount() {
    Attendee.count += 1;
  }

  static create(attributes) {
    const user = new Attendee(attributes);
    Attendee.table.push(user);
    return user;
  }

  static findOne(column = 'id', value) {
    const user = Attendee.table.find((record) => record[column] === value);
    return user;
  }

  static resetTable() {
    Attendee.table = [];
    Attendee.count = 0;
  }
}

Attendee.table = DB.talks;
Attendee.count = Attendee.table.length;
