class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;
    }
    get password(){ // get password property
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value;
    }
}
const Atharv = new User('Atharv@gmail.com','123')
console.log(Atharv.password);
console.log(Atharv.email);