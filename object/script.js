//primitive

// var h1 = {
//     name: "Hulk",
//     job: "Super Hero",
//     Hobbie: "Physics",
//     location: "America"
// }
// var h2 = {
//     name: "Steve",
//     job: "Solider",
//     Hobbie: "Body building",
//     location: "America"
// }
// console.log(h1.name + h1.Hobbie + h1.job)
// console.log(h2.name + h2.Hobbie + h2.job)

// var l1 = {
//     name: "Ghost of thushima",
//     Autor: "Sony",
//     Studio: "Sony interactive",
//     type: "Game"
// }
// console.log(l1.name.Autor)

object1 = {
    name: "Bat",
    lastName: "Enguun",
    adress: {
        city: "ulaanbaatar",
        coutry: "Country"
    },
    information: function(){
        console.log(this.name.lastName)
    }
}
object1.information();


object2 = {
    name: "Red dead redemption",
    studio: "rockstar",
    cathegory: "RDG shooter",
    rating: "5star",
    total_gamePlay_duration :500,
    total_g_d_hours: function(){
       return Math.round(this.total_gamePlay_duration/60)
    }
}
console.log(object2.total_g_d_hours())







