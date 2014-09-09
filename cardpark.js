function checklist(order,ifPark){
    this.order = order;
    this.ifPark = ifPark;
}
// check function Setting

var check1 = new checklist(1,"Free");
var check2 = new checklist(2,"Free");
var check3 = new checklist(3,"Free");
var check4 = new checklist(4,"Free");
var check5 = new checklist(5,"Free");

// get HTML objective
window.onload = function(){
    document.getElementById("1st").innerHTML = check1.ifPark;
    document.getElementById("2nd").innerHTML = check2.ifPark;
    document.getElementById("3rd").innerHTML = check3.ifPark;
    document.getElementById("4th").innerHTML = check4.ifPark;
    document.getElementById("5th").innerHTML = check5.ifPark;
}

// parked function

function parked1(){
	if (check1.ifPark == "Free"){
    var dt = new Date();
    check1.ifPark = dt.getMonth()+1+"/"+dt.getDate()+"  "+dt.getHours()+":"+dt.getMinutes();
    alert(check1.ifPark)
    //javascript change class
    }
    else {check1.ifPark = "Free"};
}

function parked2(){
    var dt = new Date();
check2.ifPark = dt.getMonth()+1+"/"+dt.getDate()+"  "+dt.getHours()+":"+dt.getMinutes();
}
function parked3(){
    var dt = new Date();
check3.ifPark = dt.getMonth()+1+"/"+dt.getDate()+"  "+dt.getHours()+":"+dt.getMinutes();
}
function parked4(){
    var dt = new Date();
check4.ifPark = dt.getMonth()+1+"/"+dt.getDate()+"  "+dt.getHours()+":"+dt.getMinutes();
}
function parked5(){
    var dt = new Date();
check5.ifPark = dt.getMonth()+1+"/"+dt.getDate()+"  "+dt.getHours()+":"+dt.getMinutes();
}


// change testing, add date
//var dt = new Date();
//check2.ifPark = dt.getMonth()+1+"/"+dt.getDate()+"  "+dt.getHours()+":"+dt.getMinutes();

/*


// get HTML objective

var main1 = document.getElementById("1st");
var main2 = document.getElementById("2nd");
var main3 = document.getElementById("3rd");
var main4 = document.getElementById("4th");
var main5 = document.getElementById("5th");

function myFunction() { 
    document.getElementById("5th").innerHTML = "Hello JavaScript!";
}

// load HTML


// change check function, 0 is haven't used.
*/


/*

if (check[1].ifPark = 0) {
     check[1].ifPark = 1;  
};
else {
	check[1].ifPark =0
};
return
console.log(check[1]);

//for (i=1, i<6, i=i+1) {
	
//}


$(document).ready(function(){
    $('#1st,#2nd,#3rd,#4th,#5th').click(function(){
      $(this).toggleClass("checked");
      $(this).text(Date())
    });

});

*/