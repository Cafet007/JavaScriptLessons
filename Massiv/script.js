// var massiv = ["cola", "pepsi", "sprite","fanta"]
// console.log(massiv)
// console.log(massiv[0])
// massiv[0] = "pepsi"
// massiv[massiv.length] = "tea"
// massiv[massiv.length] = "boba"
// console.log(massiv)
// massiv.pop()
// console.log(massiv)
// massiv.push("mal")
// console.log(massiv)
// massiv.unshift("cola")
// a = console.log(massiv)
// massiv.shift()
// console.log(massiv)

// var ints = [1,2,3,4,5,6,7,8,9,10]
// var ints2 = ints
// ints.splice(0,2)
// console.log(ints)
// var sliced = ints2.slice(0,2)
// console.log(sliced)

var course = {
    name: "Huwaari",
    season: "2024 spring",
    lessons: [
        {
            name: "parelel programming",
            duration: "16 weeks",
            lecture: "Monday at 9 am",
            laboratory: "Monday at 11 am",
            durationInMinute: 1600,       
        },
        {
            name: "Disploma project",
            duration: "16 weeks",
            lecture: "no lecture",
            laboratory:"No laboratory",
            durationInMinute: 1600,
            
        }
    ],
    calculateHours: function(){
       return Math.round(this.lessons[0].durationInMinute/60)
    }
};

console.log(
    course.name +
    " - " +
    course.season +
    " - " +
    course.lessons[1].name +
    " - " +
    course.lessons[1].lecture +
    " - " +
    course.calculateHours()
);
