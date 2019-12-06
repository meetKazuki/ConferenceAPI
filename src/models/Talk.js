import DB from '..';

export default class Talk {
  constructor(attributes) {
    Talk.incrementCount();
    this.id = Talk.count;
    this.topic = attributes.topic;
    this.location = attributes.location;
    this.hostId = attributes.hostId;
    this.attendees = [];
  }

  static incrementCount() {
    Talk.count += 1;
  }

  static create(attributes) {
    const talk = new Talk(attributes);
    Talk.table.push(talk);
    return talk;
  }

  static all() {
    return Talk.table;
  }

  static find(id) {
    return Talk.table.find((talk) => talk.id === id);
  }

  update(data) {
    this.topic = data.topic || this.topic;
    this.location = data.location || this.location;
    return this;
  }

  static resetTable() {
    Talk.table = [];
    Talk.count = 0;
  }
}

Talk.table = DB.talks;
Talk.count = Talk.table.length;
