//Task1
// var text=prompt("Enter Your sentence");
// arr=["h1","h2","h3","h4","h5","h6"]
// for (header of arr)
// {
//    document.writeln("<"+header+">"+text+"</"+header+">");
   
// }
//===============================================================================================================================================
//Task2
// var sum=0;
// do
// {
//    var num=+prompt("Enter Your number"); 
//    sum+=num;

// }
// while(num!=0&&sum<110)
// console.log("Sum = "+sum)
//===================================================================================================================================================
//Task3

// var x=+prompt("Enter first Number");
// var y=+prompt("Enter second Number");
// var z=+prompt("Enter third Number ");
// if (x%y==0&&x%z==0)
// {
//     document.writeln(x+" is divisable by "+y+" "+z);

// }
// else if(x%y!=0&&x%z==0)
// {
//     document.writeln(x+" is divisable by "+z+" only");
// }
// else if (x%y==0&&x%z!=0)
// {
//     document.writeln(x+" is divisable by "+y+" only");

// }
// else 
// {
//     document.writeln(x+" isnot  divisable by"+y+" "+z);
// }
//=================================================================================================================================================
//Task4



var x = +prompt("Enter first Number");
var y = +prompt("Enter second Number");
var z = prompt("Enter odd or even or no ");
var sum = 0;

if (z !== "odd" && z !== "even" && z !== "no") {
  console.log("Please enter 'odd', 'even' or 'no' for z.");
} else {
  if (x < y) {
    // assending
    if (z === "odd"&&!isNaN(x)&&!isNaN(y)) {
      for (var i = x + 1; i <= y; i++) {
        if (i % 2 != 0) {
          console.log(i);
          sum += i;
        }
      }
    } else if (z === "even"&&!isNaN(x)&&!isNaN(y)) {
      for (var i = x + 1; i <= y; i++) {
        if (i % 2 == 0) {
          console.log(i);
          sum += i;
        }
      }
    } else {
      for (var i = x + 1; i <= y; i++) {
        console.log(i);
        sum += i;
      }
    }
  } else {
    // descending
    if (z === "odd"&&!isNaN(x)&&!isNaN(y)) {
      for (var i = x - 1; i >= y; i--) {
        if (i % 2 != 0) {
          console.log(i);
          sum += i;
        }
      }
    } else if (z === "even"&&!isNaN(x)&&!isNaN(y)) {
      for (var i = x - 1; i >= y; i--) {
        if (i % 2 == 0) {
          console.log(i);
          sum += i;
        }
      }
    } else {
      for (var i = x - 1; i >= y; i--) {
        console.log(i);
        sum += i;
      }
    }
  }

  console.log("sum = " + sum);
}





