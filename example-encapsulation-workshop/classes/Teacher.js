class Teacher {
    constructor(name, initials, subject){
        this._name = name;
        this._initials = initials;
        this._subject = subject;
        this._yearsOfService = 0;
    }

    getName() {
        return this._name;
    }

    getInitials() {
        return this._initials;  
    }

    getSubject() {
        return this._subject
    }

    getYearsOfService() {
        return this._yearsOfService;
    }

    setYearsOfService(number) {
        this._yearsOfService = number;
    }
}

module.exports = Teacher