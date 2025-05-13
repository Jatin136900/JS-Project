// const input = document.getElementsByTagName("input");
// console.log(input)

// getElementsByTagName
// getElementsById
// getElementsByClassname
// qurreySelector
// qurreySelectorAll

// addEventListener






//   var nameArray = [];

//   function addToArray() {
//     var input = document.getElementById("nameInput");
//     var name = input.value;
//     name && nameArray.push(name); 
//     console.log(name);
//     input.value = " ";
//   }

//   function printArray() {
//     var target = document.getElementById("output");
//     target.innerText = "";

//     for (var i = 0; i < nameArray.length; i++) {
//       target.innerText += nameArray[i] ;
//     }
//   }



let arr=[]
function addToArray(){
    let target=document.querySelector("input") .value;
    arr.push(target);
    console.log(arr);
    input .value=" ";
}
function printArray(){
    let resultdiv=document.getElementById("result");
    resultdiv.innerText=arr;
}















