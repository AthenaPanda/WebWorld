class Student {
    fullname: string;
    constructor(public firstname, public middleIntial, public lastname){
        this.fullname = firstname + " " + middleIntial + " "+lastname;

    }
}


interface Person{
    firstName : string;
    lastName: string;
    age?: number;
}


function greeter(person): string {

    return "Hello" + person.fullname;
}

let User  = new Student("Jane" , "M" ,"User");
document.body.innerHTML = greeter(User);

interface ClockInterface {
    currentTime: Date;
    setTime(da: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(da: Date){
        this.currentTime = da;
    }

    constructor(h: number, m: number){}
}

