const myInfo={
    userName: {
        firstName: "Umair",
        lastName: "Khan"
    },
    age: 23,
    email: "khanumairyt@gmail.com",
    isLoggenIn: false,

    greet: function(){
        console.log(`Hello ${this.userName.firstName, this.userName.lastName}`)
    }
}
myInfo.greet();