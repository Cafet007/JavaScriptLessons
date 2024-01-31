// function myFunction(lst, a) {
//     var first = 0;
//     var Last = lst.length - 1;
//     while (first <= Last) {
//       var mid = (first + Last) % 2;
//       if (lst[mid] == a) {
//         return a;
//       } else if (lst[mid] < a) {
//         first = mid + 1;
//       } else {
//         Last = mid - 1;
//       }
//     }
//     return null;
//   }
//   const i = [1, 7, 8, 9, 6, 5];
//   const s = 8;
//   const search = myFunction(i, s);
//   if (search != null) {
//     console.log(s + "ийн тоо нь i массивт байна");
//   } else {
//     console.log(s + "ийн тоо нь массивт байхгүй байна");
//   }

// module fuction
// var module = function(number){
//   console.log("test" + number)
// } // expression
// function mod(number){
//   console.log('test2 ' + number)
// } // statement 

// var module = function(number){
//   var mod;
//   if(number < 0) mod = -number;
//   else mod = number;
//   console.log(number + "module is" + mod);
// }

// module(-223)

// // 3 tooni module 

// var add_module = function(a,b,c){
//   var sum = module(a) + module(b) + module(c);
//   return sum
// }

// var s = add_module(-1, -2, -6);
// console.log("Gurvan tooni moduliin niilber" + s)
function Recursive(a){
  if(a <= 0){
    return
  }
  else{
    Recursive(a - 1)
  }
}
console.log(Recursive(10))
