class Hero {
    constructor({ name, dateOfBirth, eyeColour, hairColour, gender, hogwartsStaff, hogwartsStudent, house, image, patronus, species, alive, actor }) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.eyeColour = eyeColour;
        this.hairColour = hairColour;
        this.gender = gender;
        this.hogwartsStaff = hogwartsStaff;
        this.hogwartsStudent = hogwartsStudent;
        this.hogwarts = (this.fromHogwarts() ? ((this.hogwartsStaff) ? 'staff' : 'student') : '')
        this.house = house;
        this.patronus = patronus;
        this.species = species;
        this.image = image;
        this.alive = alive;
        this.actor = actor;
        this.id = null;
    }

    fromHogwarts = () => (this.hogwartsStaff || this.hogwartsStudent) ? true : false;
}

export default Hero;
