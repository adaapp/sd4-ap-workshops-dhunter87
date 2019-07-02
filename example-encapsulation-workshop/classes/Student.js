class Student {
    constructor(name, tutorGroup) {
        this._name = name;
        this._tutorGroup = tutorGroup;
        this._yearGroup;
        this._formGroup;
    }

    getName() {
        return this._name;
    }

    getTutorGroup() {
        return this._tutorGroup;
    }

    getYearGroup() {
        return this._tutorGroup.length > 2 ?
            this._tutorGroup.slice(0, 2) :
            "0" + this._tutorGroup.slice(0, 1);
    }

    getFormGroup() {
        return this._tutorGroup.slice(2);
    }
}

module.exports = Student