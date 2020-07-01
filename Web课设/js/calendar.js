var today = new Date();
var year = today.getFullYear();
//get current year
var month = today.getMonth() + 1;
//get current month
var day = today.getDate();
//get current day
var allday = 0;
//current month's all days 

//sum the month's all days
function count(){
	if(month!==2){
		if ((month === 4) || (month === 6)||(month === 9) ||(month === 11)){
			allday = 30;
			//4th,6th,9th,11th is 30 days
		}
		else{
			allday = 31;
			//others is 31(expect 2th
		}
	}
	else{
		//if  is 2th judge leap year or not 
		if((year % 4) === 0 && (year % 100) !== 0 ||(year % 400 ) === 0){
			allday = 29;
			//leap year's 2th is 29 days
		}
		else{
			allday = 28;
			//not leap year's 2th is 28 days
		}
	}
}

//display  current year and month of the calendar's tittle
function showMonth(){
	var year_month = year +"年" + month + "月";
	document.getElementById("month").innerHTML = year_month;
}
//display current month of the calendar 
function showDate(){
	showMonth();//display current year and month on the calendar
	count();//sum current month's days
	
	//get this month's first day's Data girl or boy friend
	var firstdate = new Date(year, month-1, 1);
	
	//caculate this month'someday is Mon? Tue?...
	var xiqi = firstdate.getDay();
	
	//add HTML elements development
	var daterow = document.getElementById("day");
	daterow.innerHTML = "";
	
	//if this month's first day is not Sunday, need block elements to complete
	if(xiqi !== 0){
		for (var i = 0; i < xiqi; i++){
			var dayElement = document.createElement("div");
			dayElement.className = "everyday";
			daterow.appendChild(dayElement);
			
		}
	}
	//use circle to display this month's all days
	for (var j = 1; j <= allday; j++){
		var dayElement = document.createElement("div");
		dayElement.className = "everyday";
		dayElement.innerHTML = j + "";
		//if today is the date ,go to red;
		if (j === day){
			dayElement.style.color = "red";
		}
		daterow.appendChild(dayElement);
	}
}

//display the last month's calendar
function lastMonth(){
	if (month > 1){
		month -=1;
	}
	else{
		month = 12;
		year -= 1;
	}
	showDate();
		
}
//display the next month' calendar
function nextMonth(){
	if (month < 12){
		month += 1;
	}
	else{
		month = 1;
		year += 1;
	}
	showDate();
}