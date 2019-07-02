class Student {
    constructor(name, tutorGroup){
        this._name = name;
        this._tutorGroup = tutorGroup;
        this._yearGroup;
        this._formGroup;
    }

    getName() {
        return this._name;
    }

    getYearGroup(){
        if(this._tutorGroup.length > 2){
            var yearGroup = this._tutorGroup.slice(0,2);
        }
        else{
            var yearGroup = "0" + this._tutorGroup.slice(0,1);
        }
        return yearGroup;
    }

    getFormGroup() {
        return this._tutorGroup.slice(2);
    }
}


module.exports = Student