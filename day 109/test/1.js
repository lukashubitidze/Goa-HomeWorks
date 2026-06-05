class User{
    constructor(name,age,pasword,mail){

        this.name=name;
        this.age=age;
        this.pasword=pasword;
        this.mail=mail
    };

    // #greet(){
    //     console.log(`hello my name is ${this.name}\n am ${this.age} years , old\n my mail is ${this.mail}\n and password ${this.pasword} `)
        
    // }

    greet(){
        console.log(`hello my name is ${this.name}\n am ${this.age} years , old\n my mail is ${this.mail}\n and password ${this.pasword} `)
        
    }


    
}

const user1 =new User('luka',18,1234,"luka@gmail.com")
const user2 =new User('nika',19,3456,'nika@gmail.com')

console.log(user2.greet())