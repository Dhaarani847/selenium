console.log(10)
    //printing statement
    //console.log()
    //two ways:
    //terminal - node[file name]
    //extension - code runner

    //how to write the js code:
    //syntax:
    //variable - container to store the values
    //variable - type variable_name=value
    //console.log(variable_name)
    //var sugarbox ="sugar"
    //console.log(sugarbox);

    //variable types:
    //var
    //let
    //const
    
    //variable types:
    //var:
    //var a = 10//redeclaration
        //a=5//reassign
    //console.log(a)

    //let:
    //let b = 10//it can't redeclare
       // b = 5//reassign
        //console.log(b);

    //const:
    //const c =10//it can't redeclare
         // c= 5// it can't reassign
    //console.log(c);

    //Datatypes:
    // primitive datatypes:

    //String -"@#$%"
    //number -1212 and 12.3:
    //var num=10.1
    //console.log(num);

    //boolean - true or false:
    //var t=true
    //console.log(t);

    //null:
    //var n=null
    //console.log(n);

    //undefined:
    //let a
    //console.log(a);

    //non-primitive datatypes:
    //Array- [] -collections os values and data within the square brackets
    // var arr=["chennai",1,12.3,true,null]
    //console.log(arr[3])

    //length: starts with 1
    //index:starts with zero

    //object -{}-collection of key and value pairs

  //  var obj ={
        //name : "dhaarani",
       // age : 24,
       // std :"v"

  //  }
   // console.log(obj)

   //Function: block of code
   //Function statement or declaration
   //Syntax:
   //Function var_name(){
   //code
 //  }

 //function box(x){   -//parameter-is like an variable name
   // console.log("hello im function")
// }
// box("js")   -//arguments- value

//return:
//function cash(x){
    //return x
//}
//console.log(cash("rs:+100"))

//function expression: storing the function inside the variable name is called function expression 
//var fn=function (){-anonymous function
//console.log("Hello im function expression");
//}
//fn()

//arrow function
//syntax:
//() => {}
    //var arr=(x)=> {console.log(x*3)}
    //arr("2")

    //Operators:
    //Arithemetic operator
    //Assignment operator
    //Logical operator
    //Comparsion operator
    //Equality operator
    //Ternary operator

    //Arithemetic operator
    //+add,-sub,*mul,/div,%modules,**exponents,increment--,decrement++

    //add++
    //var num=10
    //var num2=10
    //console.log(num+num2);

    //sub--
   // var num=10
    //var num2=10
    //console.log(num-num2);

    //mul*
    //var num=10
    //var num2=10
    //console.log(num*num2);

    //div /
    //var num=5
    //var num2=10
    //console.log(num/num2);

    //modules%
    //var num=10
    //var num2=10
    //console.log(num%num2);

///tASK FOR TERNARY OPERATOR
    //var height =155
    //var limit=(height>=188) ? "he is eligible to ride":"he is not eligible to ride"
    //console.log(limit);

    //var height = 155
    //var limit=(height<=199)? "he is eligible to ride":"he is not eligible to ride"
    //console.log(limit);

    // string:
    //includes:

    //var inc="javascript"
    //var inc2=inc.includes("java")
    //console.log(inc2);

    //var inc="javascript"
    //var inc2=inc.includes("tp")
    //console.log(inc2);

    //toppercase:

    //var up= "annanagar"
    //console.log(up.toUpperCase());

    //lowercase:
    // var low="OMR"
    // console.log(low.toLowerCase());

    //indexof: it will take the first occurence of the duplicate value
    //  var idx = "america"
    //  console.log(idx.indexOf("a"));

     //lastindexof: it will take the last occurence of the duplicate value
    // var idx="america"
    // console.log(idx.lastindexof("a"));

     //length
    //  var l="java"
    // console.log(l.length);

    // //charAt: to get the specific character based on the indices
    // var ch ="javascript"
    // console.log(ch.charAt(2));

    // //replace:
    // var rep ="Hello world"
    // console.log(rep.replace("Hello","welcome"));

    //repeat:
    // var val="world"
    // console.log(val.repeat(4));

    //startswith: to check the first character is string
    // var name1="Javascript"
    // console.log(name1.startsWith("J"));
    // var name1="Javascript"
    // console.log(name1.startsWith("j"));

    // //endswith: to check the last character is string
    // var name2="Javascript"
    // console.log(name2.endsWith("t"));
    // var name2="Javascript"
    // console.log(name2.endsWith("ts"));

    //if-else
    //syntax:
    //if(condition){
    //true_statement
    //}else{
    //false_statement
    //}
    //let age =20
    //if(age>=18){
       // console.log("He is eligible to vote");
    //}else{
      //  console.log("He is not eligible to vote");
    //}

    //else-if:
    //let mark = 65
    //if(mark>=90&& mark<=100){
       // console.log("Grade A");
    //}else if(mark>=80){
        //console.log("Grade B");
    //}else if(mark>=70){
       // console.log("Grade C");
    //}else if(mark>=60){
        //console.log("Grade D");
    //}else if(mark>=50){
       // console.log("Grade E");
    //}else{
    //    console.log("Fail");
   // }

//console.log(sclobj)

//
//var sclobj=[
    //{
       // name:"shree",
       // age: 15,
       // std:"v"
    //},
    //{
        //name:"dhaarani",
        //age: 14,
       // std:"VI"
    //},
    //{
        //name:"raaj",
        //age:16,
       // std:"VII"
   // }
//]
//console.log(sclobj[1]);

//
//var obj={
   // name:"raajkumar",
   // age:25
//}
//let keys=Object.keys(obj)
//console.log(keys);

//let val=Object.values(obj)
//console.log(values);

//object destructuring in javascript allows you to extract multiple properties from an object and assign them to variables in a 
//concise and readable WebAssembly,enhancing code readability and reducing repetition .
//var obj={
    //name:"raajkumar",
    //age:25,
    //dep:"IT"
//}
//const{name, age, dep}=obj
//console.log(name,age,dep);

//set timeout function
//setTimeout(()=>{
//    // console.log("Hello im javascript");

// //},3000)

// //
// var ofcobj=[
//     {
//         name:"Dhaarani",
//         age: 24,
//         dep: "developer"
//     },
//     {
//         name:"raajkumar",
//         age:25,
//         dep:"Tester"
//     },
//    {
//         name:"shree",
//         age:26,
//         dep:"QA"
//     }
//    ];
//    ofcobj[1].name ="sabi";
//    ofcobj[1].dep="Web development";
// console.log(ofcobj[1]);

// var key=Object.keys(ofcobj[2])
// console.log(key);
// var val=Object.values(ofcobj[2])
// console.log(val);

//This:
// let obj={
//     name:"shree",
//     age: 12,
//     det:function(){
//         console.log(this.age);
//     }
// }
// console.log(obj);
// obj.det()

//constructor:
// /function Bike(name,year,model){
//     this.bikename= name
//     this.bikeyear= year
//     this.bikemodel= model
//     this.bikedetails=function(){
//         console.log(`the bike name is ${name} and the year is ${year} and the model ${model}`);
//     }
//  }
   
//    //object:
//    var details= new Bike("Duke",2020,"390")
//       console.log(details);
//     var detail2= new Bike("Duke",2021,"250")
//     console.log(detail2);
//     details.bikedetails();

//templete literals or string literals:
// var a="shree"
// var b="hi"
// console.log(b+a+"how are you"); // old
// console.log(`${b} ${a} how are you!!`); // new

//class:
// class ofc{
//     constructor(name,dep,id){
//         this.name=name
//         this.dep= dep
//         this.id=id
//     }
//     fulldetails(){
//         console.log(`the name is ${this.name} dep is ${this.dep} and the id number ${this.id}`);
//     }

// }
// var details=new ofc("shree","IT",123)
// console.log (details);
// details.fulldetails();

// callback: passing the function into the another function
// function greets(){
//     console.log("hello welcome");
// }
// function name(x){
//     console.log("Jai");
//     x()
// }
// name(greets)

//interconnecting multiple function:
// function task1(x){
//     setTimeout(()=>{
//     console.log("Task1");
//     x();
// },3000)
// function task2(y){
//     setTimeout(()=>{
//     console.log("Task2");
//     y();
// },2000)
// function task3(z){
//     setTimeout(()=>{
//     console.log("Task3");
//     z();
// },1000)
// function task4(){
//     setTimeout(()=>{
//     console.log("Task4");

// },500)
// task1(()=>{
//     task2(()=>{
//         task3(task4);
//     });
// });

//Task:
function  ofc(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("ofc");
        },3000)
    })
}
function wakeup(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("wake at 5am");
        },2000)
    })
}
function gym(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("gym");
        },500)
    })
}
ofc().then(value =>{console.log(value);return wakeup()})
.then(value =>{console.log(value);return gym()})
.then(value =>{console.log(value);console.log("Task completed")})


















    
     



    