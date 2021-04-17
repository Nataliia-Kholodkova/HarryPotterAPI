/* eslint-disable indent */

class Hero {
  constructor({
    name,
    dateOfBirth,
    eyeColour,
    hairColour,
    gender,
    hogwartsStaff,
    hogwartsStudent,
    house,
    image,
    patronus,
    species,
    alive,
    actor,
  }) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.eyeColour = eyeColour;
    this.hairColour = hairColour;
    this.gender = gender;
    this.hogwartsStaff = hogwartsStaff;
    this.hogwartsStudent = hogwartsStudent;
    this.hogwarts = this.assignHoggwarts();
    this.house = house;
    this.patronus = patronus;
    this.species = species;
    this.image = `${image.slice(0, 4)}s${image.slice(4)}`;
    this.alive = alive;
    this.actor = actor;
    this.id = null;
  }

  fromHogwarts = () => !!(this.hogwartsStaff || this.hogwartsStudent);

  assignHoggwarts = () => {
    switch (this.fromHogwarts()) {
      case true:
        switch (this.hogwartsStaff) {
          case true:
            return 'staff';
          default:
            return 'student';
        }
      default:
        return '';
    }
  };
}

export default Hero;
