//document.write("Hello world");
/*alert("Hello world");
alert("Hello hell");
alert("Hello");

console.log(typeof test);

var Obj1 = {
	person1: {
		name: "Ivanov",
		phone: +38099999
	}, 
	person2: {
		name: "Petrov",
		phone: +38099999
	}
} 

console.log("Obj1 = " + Obj1.person1.name);


var a=b=1, c ,d;

c=2 + b++;
d=2+ ++b;

console.log(c);
console.log(d);
*/
/* var array=["ff", "hh", "eeee", "hhhh"];
var arrayLength = array.length-1;
console.log(arrayLength);
for(i=0;i<=arrayLength;i++){
	console.log(array[i]);
}*/
/*
var age=18;
swith(age) {
	case 18: //if(age===18)
	//
	//
	break;
	case 21:
	case 25:
	//
	//
	//
	break;
}*/
/*for (var i = 0; i < 10; i++) {
	if ( i % 2 != 0) continue;
	console.log(i);
}*/
/*
outer:
for (var i = Things.length - 1; i >= 0; i--) {
	for (var i = if (true) ngth - 1; i >= 0; i--) {
		if (true) break outer;

	}
}
*/

// anonymous function
/*function askName(yes, no) {
  username = prompt("")
  if (username) {
    yes()
  } else {
    no()
  }
}
askName(
  function() {alert("hi")},
  function() {alert("bye")}
)*/
// Code goes here
/*
var a = "" + 1 + 0;
console.log(a); //10

var b = "" - 1 + 0;
console.log(b); // -1

var c = true + false;
console.log(c); //truefalse? 1

var d = 6 / "3";
console.log(d); //2

var e = "2" * "3";
console.log(e);//6

var f = 4 + 5 + "px";
console.log(f); //45px ? 9px

var g = "$" + 4 + 5;
console.log(g); //$45

var h = "4" - 2;
console.log(h); //2

var n = "4px" - 2;
console.log(n); //NaN

var m = 7 / 0;
console.log(m); //infinity

var k ="  -9\n" + 5;
console.log(k);//   -9
//5

var l = "  -9\n" - 5;
console.log(l); // NaN ? -14

var p = 5 && 2;
console.log(p);//true ? 2

var x = 2 && 5;
console.log(x); //true ? 5

var y = 5 || 0;
console.log(y);//true ? 5

var v = 0 || 5;
console.log(v);//true ? 5

var z = null + 1;
console.log(z);//1

var r = undefined + 1;
console.log(r);//NaN

var q = null == "\n0\n";
console.log(q);//false

var u = +null == +"\n0\n";
console.log(u);//true
*/
// Code goes here

/*var num;
 function isInteger(int) {
   if ((int^0)===num) {
     return true;
   } else {
     return false;
   }
 }
num = +prompt("Enter digit:" );
console.log(num);
var result = isInteger(num); 
console.log(result);*/

/*function ask() {
    var answ = prompt("What is the officiol name of JavaScript?");
    if(answ === "ECMAScript") {
      alert("True");
    } else {
      alert("False");
    }
}
var w = ask;
alert(w);*/

/*function access() {
  var userName, password;
  userName = prompt("Enter username:", "");
  if(userName == null) {
    alert("Access denied");
  } else if (userName == "Admin") {
    password = prompt("Enter password:", "");
    if(password == null) {
      alert("Access denied");
    } else if (password == "root") {
      alert("Welcome!");
    } else {
      alert("Password is wrong"); 
    }
  } else {
    alert("who are you?");
  }
}

access();*/

/*var a = 2, b = 4, result;
(a+b<4) ? result = "Less" : result = "More";
alert (result);*/

/*var message, login = prompt("Enter name:", "");
login == "Jone" ? message = "Hi" :
  login == "Boss" ? message = "Hello" :
  login == "" ? message = "No login" : message = "";
  
alert(message);*/

/*
//recursiya
function pow(x, n) {
	if (n != 1) {
		return x * pow(x, n - 1);
	} else {
		return x;
	}
}

console.log(pow(10,3));

*/

/*function sumTo(n){
  var y = 0;
  for (; n>0; n--){
    y += n;
    console.log("y - " + y);
    console.log("n - " + n);
  }
  return y;
}*/
/*
function sumTo(n){
  if(n > 1) {
    return n + sumTo(n-1);
  } else {
    return n;
  }

}

alert(sumTo(5));*/



//objects
/*var empty = {}
var PhoneBook = {
  Ivanov: "Ivanov",
  getName: function() {
    return this.Ivanov
  },
  test: undefined,
  "Petrov TEST": "TEST",
  1: null,
  "5": null,
  3: null,
  "3":undefined
}

PhoneBook.Petrov = "Petrov";

delete PhoneBook.Ivanov;

//console.log(PhoneBook, PhoneBook.Ivanov);
//лучше не использовать
console.log(PhoneBook.test === undefined);
console.log(PhoneBook.test2 === undefined);

/*console.log("test2" in PhoneBook);
console.log(PhoneBook.hasOwnProperty("test"));
console.log(PhoneBook.hasOwnProperty("test2"));
*/
//PhoneBook["Sidorov XXL"]
/*
PhoneBook["Sidorov XXL"] = "TEST2"
var key = "Sidorov XXL"
console.log(PhoneBook[key])

for(key in PhoneBook) {
  console.log(key, PhoneBook[key])
}

*/
/*
var weather = {
  status: "Rain",
  getWeather: function() {
    return this.status;
  }
}

var clone = weather;
clone.status = "Snow";
var admin = "Admin";
var user = "user";

user = "User";
console.log(user, admin);
console.log(weather, clone);

for (var key in weather) {
  clone[key] = weather[key]
}
clone.status="Snow"

console.log(weather, clone);

*/

//massive
/*var arr = ["Apple", "Carrot"]
//alert(arr[0]);
arr[1]="Banana";
arr[2]="Carrot";
*//*delete arr[1];*/
/*alert(arr);*/
/*arr.push("PineApple")

console.log(arr.pop(), arr);

arr.shift();
console.log(arr);
arr.unshift("Cherry", "Orange");
console.log(arr)
*//*arr[9999] = "test";
arr.age = "123"
console.log(arr.length, arr)*/
/*
arr.length = 12000;
arr.push("test");*/
/*arr.length--;
console.log(arr);
*/// massive не нужно перебирать for in только циклы

// методы массивов
/*var users = "Ivanov, Pertov, Sidorov";*/
/*console.log(users.split(","))*/
/*console.log(users.split(",",2))*/
/*console.log(users.split(",").join(","))  или*/
  /*console.log(["test","test2"].join(","))
  console.log("test2".split(""))
*/
/*var users = ["Ivanov", "Petrov", "Sidorov"];*/
/*console.log(users.splice(1,1), users);
*/
/*console.log(users.splice(2, 0, "test", "test2"), users);
console.log(users.length);*/

/*var users2 = users;
users2.pop();
console.log(users2, users);*/

/*var users2 = users.slice(0, users,length);
console.log(users2, users);*/
/*console.log(users.indexOf("Ivanovsgdg"));*/ //вернет -1
/*console.log(users.indexOf("Ivanov"));
*/

//var arr = ["7test", "2test"];
//arr = arr.concat("5test2", "4test");
/*console.log(arr);
arr.reverse();
arr.pop();
arr.reverse();
console.log(arr);*/
/*arr.sort();*/
/*arr.sort(function(a,b){
  console.log(arguments);
  a = parseInt(a);
  b = parseInt(b);
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
})*/
/*arr.sort(function(){
 if (parseInt(arguments[0]) < parseInt(arguments[1])) {}
    return 1;
})
console.log(arr);
*/
/*var a, b, c;
for(var i=0; i < arr.length-1; i++) {
  for(var j=i+1; j < arr.length; j++) {
    a = parseInt(arr[i])
    b = parseInt(arr[j])
    if (a < b) {
      c = arr[i];
      arr[i] = arr[j];
      arr[j] = c;
    }
  }
}
console.log(arr);*/

//string

//var str = "sfsfshello, world";
/*console.log(str.length);
console.log(str.toUpperCase());
console.log(str.substring(0,5));
console.log(str.slice(-2,7));
console.log(str.substr(0, 2));*/
//console.log(str.indexOf("h",5);



//lessons4
/*
var arr= [1,2,3, 4, 5, 6, 7, 8];
arr.forEach(function(item, i) {
  arr.forEach(function(item, j) {
    if (arr[i]<arr[j]) {
      c = arr[i];
      arr[i] = arr[j];
      arr[j] = c;
    }
  })
})
console.log(arr);
console.log(arr.filter(function(item){
  if(item%2 == 1){
    return true;
  }
}))

console.log(arr.filter(function(item){
  return !(item % 3) || !(item % 6);
})) 

console.log(arr.map(function(item) {
  return (item % 2 == 0) ? item * 2 : 0;
}))

var arr2=[2,4,6];
console.log(arr2.every(function(number){
  if(!(number % 2)) return true;
}))
console.log(arr.every(function(number){
  return true;
}))

console.log(arr2.some(function(number){
  return (number > 10);
}))


console.log(arr.reduce(function(previous, item, i ,arr){
  return previous + item;
}, 0))

var phrase = "азбука, аь, а, ь, еж, ерш, ель, Арматура, болЬ";
console.log(phrase.split(", ").reduce(function(result, str) {
  if (str[0].toLowerCase() == "а" ||
   str[str.length-1].toLowerCase() == "ь") {
    result.push(str);
  }
  return result;
}, []))


//Math
console.log(Math.sqrt(9), Math.pow(10, 100), (0.1*10 + 0.2*10) / 10, (0.1 + 0.2).toFixed(1));
console.log(Math.max(10,20,1000,9));
console.log(Math.random());
console.log(Math.round(Math.random()*100));

function getRandomColor() {
  var colors = ["red", "green", "blue"];
  var index = Math.round(Math.random() * (colors.length -1));
  return colors[index];
}
console.log(getRandomColor());



*/
//Date


/*
var now = new Date();
console.log("" + now, +now);
console.log(now.getFullYear(), now.getMonth(), now.getDay(), now.getDate());

function showTime() {
  var now = new Date();
  console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
}
*/
/*setInterval(function() {
  showTime(); 
}, 30);
*/


//objects!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//var now = new Date();

//console.log(window.now);
/*
var test = {
  print: function() {
    //return test.name; а если меняем на
    return this.name;
  },
  name: "test"
}
test2 = test;
test = null;
console.log(test2.print());
*/
var name = "Petya";
function print() {
  return this.name;
}
/*var test = {
  name: "Vasya",
  toString: function() {
    return this.name
  },
  valueOf: function() {
    return 10;
  }
}
*///test.print = print;
//console.log(print(), test.print());
//alert(test);
//console.log("" + test, test.toString(), +test);
//var print2 = new print();
//console.log(print2)
/*
function Car(name, price) {
  this.name = name;
  this.move = function() {
    return true;
  }
  function setPrice(price) {
    this.price = price;
  }
  setPrice(price)
  //return null;
  //return {name: "test"};
}

var bmw = new Car("BMW");
var merz = new Car("Mercedes");
console.log(bmw, merz);
  

var name = "Ivanov";
function showName(first, second) {
  console.log([].slice.call(arguments, ",").pop());
  return this.name;
}
console.log(showName.call(bmw, "10", "20"));
console.log(showName.apply(bmw, ["10", "20"]))
console.log(showName.bind(bmw, 10, 20)());
*/


var car = {
  print: function() {
//    alert(this.name)
  },
  name: "car"
}

setTimeout(car.print.bind(car), 1000)

try {
  console.log("test");
  vartest();
} catch(err) {
  console.log(err);
}