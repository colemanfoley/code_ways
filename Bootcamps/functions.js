function cityFunction()

{
	// Some global variables for the backend part. These will be used to personalize feedback on the backend choice and later in the conclusionGenerator to give a recommendation.

	cityElement = document.getElementById("city");
	citySelection = cityElement.options[cityElement.selectedIndex].value;

	friscoResponse = "San Francisco has several options:";
	friscoResponse+= "<br>";
	friscoResponse+= "<a href='http://devbootcamp.com/'>Dev Bootcamp</a>";
	friscoResponse+= "<button id='moreDBC' onclick='moreDBCGenerator()'>More</button>";
	friscoResponse+= "<br>";
	friscoResponse+= "<a href='http://www.hashmaplabs.com/app_academy/'>App Academy</a>";
	friscoResponse+= "<button id='moreAA' onclick='moreAAGenerator()'>More</button>";
	friscoResponse+= "<br>";
	friscoResponse+= "Hackbright Academy";
	
	bostonResponse = "Boston has a few different options:";
	bostonResponse+= "<br>";
	bostonResponse+= "Apprentice.io";
	
	nycResponse = "NYC bootcamps:";
	nycResponse+= "<br>";
	nycResponse+= "<a href='http://flatironschool.com/#home'>Flatiron School</a>";
	nycResponse+= "<br>";
	nycResponse+= "<a href='http://hackerschool.com'>Hacker School</a>";
	
	chicagoResponse = "Chicago bootcamps:";
	chicagoResponse+= "<br>";
	chicagoResponse+= "<a href='http://codeacademy.org'>Code Academy</a>";


	
	otherResponse = "If you don't live in a city that has a physical bootcamp, don't worry, there are still great options for you:";
	otherResponse += "<br>";
	otherResponse+= "<a href='http://bloc.io/'>Bloc</a>";


	
	//This function gives some feedback on the user's choice of backend language.

	if (citySelection == "frisco")
		{
		document.getElementById('cityDummy').innerHTML=friscoResponse;

		}
	
	else if (citySelection == "boston")
		{
		document.getElementById('cityDummy').innerHTML=bostonResponse;
		}
		
	else if (citySelection == "nyc")
		{
		document.getElementById('cityDummy').innerHTML=nycResponse;
		}
		
	else if (citySelection == "chicago")
	{
	document.getElementById('cityDummy').innerHTML=chicagoResponse;
	}
		
		
		
	else if (citySelection == "other")
		{
		document.getElementById('cityDummy').innerHTML=otherResponse;
		}
		
}

function moreFriscoGenerator()
{
		moreFriscoText = "Dev Bootcamp is a 10 week course that makes you a world-class beginner in Ruby on Rails.";
		document.getElementById('moreCityDummy').innerHTML=moreFriscoText;

}

function moreAAGenerator()
{
		moreAAText = "App Academy is a 9-week iOS programming class.";
		document.getElementById('moreCityDummy').innerHTML=moreAAText;

}