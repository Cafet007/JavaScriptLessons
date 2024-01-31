// // Operators

// var year;
// var name;
// var birthYear;

// year = 2024;
// birthYear = 2001;
// name = "Bataa";

// console.log(year)

// console.log(year + 15)
// console.log("Hello")
// a = 20
// var b = 1.25

// console.log(a)
// console.log(typeof(a))
// console.log (typeof(b))


// var c = a >= b;
// console.log(typeof(c))

// console.log(typeof(null))



// alert("Сайнуу")
// verdun = "Үнэлгээ: "
// var dun = 60;

// if(dun > 95){
//     unelgee = "A+"
// }
// else if(dun <= 95, dun >= 90){
//     undelgee = "A"
// }
// else if(dun > 85){
//     undelgee = "B+"
// }else if(dun <= 85, dun >= 80){
//     undelgee = "B"
// }else if(dun > 75){
//     undelgee = "C+"
// }
// else if(dun <= 75, dun >= 70){
//     undelgee = "C"
// }
// else if(dun > 65){
//     unelgee = "D+"
// }
// else if(dun <= 65, dun >= 60){
//     undelgee = "D"
// }
// else {
//    unelgee = "F"
// }
// console.log(verdun + unelgee)

// var name = "bar"
// var nas = 20
// // if (nas >= 18)
// // {
// //     console.log(name + "nasand hursen")}
// // else{
// //     console.log(name + "nasend hureegui")
// // }

// // nas >= 18 ? console.log(name + "nasend hursen")
// // :console.log(name + "nasand hureegui");    
// var who = nas >= 18 ? "nasand hursen" : "nasand hursen"

// console.log(who)
// var name = "Sergelen"
// var job = "programmist"

// switch(job){
//     case 'doctor': console.log(name +" emch yum"); break
//     case 'programmist': console.log(name + " programist yum"); break
//     case 'police': console.log(name + " tsagdaa yum yum"); break
//     default: console.log(name+ "ajil todorhoigui")
// }

// var avgPoints = 7;
// switch(true){
//     case avgPoints >= 95: console.log('onts'); break
//     case avgPoints  < 90 && avgPoints >= 80: console.log('sain'); break
//     case avgPoints < 80 && avgPoints >= 70 : console.log('dund'); break
//     default:console.log('muu')

// }
object = {
    firstName: "Sergelen",
    lastName: "Nyamdorj",
    age: 23,
    birthday: "January-30 th",
    origin: [
        {
            region: "Asia",
            country: "MOngolia",
            province: "Capitolia",
            city: "Ulaanabaatar"
        }
    ],
    prefession: [
        {
            work: "Programing",
            Language: ["JavaScript", "Pyhton"],
            tool: ["VSCode","JupiterNotebookm", "AnacondaToolkit"],
            education: "School of Informatio and Communication Technology",
            degree: "Bachelor"
        }
    ]
}
console.log(object.prefession[0])
switch(true){
    case object.orgin[0].city == "Ulaanbaatar": console.log("true")
    default: console.log("false")
}
