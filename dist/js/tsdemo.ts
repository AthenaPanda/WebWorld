class Student {
    fullname: string;
    constructor(public firstname, public middleIntial, public lastname){
        this.fullname = firstname + " " + middleIntial + " "+lastname;

    }
}


interface Person{
    firstName : string;
    lastName: string;
}


function greeter(person): string {

    return "Hello" + person.fullname;
}

let User  = new Student("Jane" , "M" ,"User");
document.body.innerHTML = greeter(User);

