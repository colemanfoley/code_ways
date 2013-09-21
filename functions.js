//All the functions ProgrammingPath uses, in the order they are used on index.html

function backendFunction()
{
	// Some global variables for the backend part. These will be used to personalize feedback on the backend choice and later in the conclusionGenerator to give a recommendation.

	backendElement = document.getElementById("Backend");
	backendSelection = backendElement.options[backendElement.selectedIndex].value;

	pythonResponse = "Nice! A lot of people swear by Python.";
	rubyResponse = "Sweet! Ruby is one of the quickest ways to get an app up and running.";
	phpResponse = "You can't go wrong with something as ubiquitous as PHP.";
	//This function gives some feedback on the user's choice of backend language.

	if (backendSelection == "Python")
		{
		document.getElementById('backendDummy').innerHTML=pythonResponse;
		}
	
	else if (backendSelection == "Ruby")
		{
		document.getElementById('backendDummy').innerHTML=rubyResponse;
		}
		
	else if (backendSelection == "PHP")
		{
		document.getElementById('backendDummy').innerHTML=phpResponse;
		}
		
}



//This function gives immediate feedback on the user's 
function learningStyleFunction()
{
	//These variables store the user's learning style preference.
	learningStyleElement = document.getElementById("learningStyle");
	learningStyleSelection = learningStyleElement.options[learningStyleElement.selectedIndex].value;

	//These variables store the responses to the user's learning style choices.
	independentResponse = "You'll have no shortage of options for learning independently.";
	structuredResponse = "There's no shame in admitting you need some structure";
	if (learningStyleSelection == "Independent")
		{
		document.getElementById('learningStyleDummy').innerHTML=independentResponse;
		}
	
	else if (learningStyleSelection == "Structured")
		{
		document.getElementById('learningStyleDummy').innerHTML=structuredResponse;
		}

}

function conclusionGenerator()
{
	conclusionElement = document.getElementById("conclusion");
	learningStyleSelection = learningStyleElement.options[learningStyleElement.selectedIndex].value;

	structuredRuby = "Dev Bootcamp is a great way to go. It is a very structured, focused 10-week course that can take you from zero to world-class Ruby beginner in 10 weeks.";
	structuredPython= "Zed Shaw's 'Learn Python the Hard Way' is very good and free.";
	structuredPHP= "There is a great Udemy course titled 'How to become a web developer from scratch!'";
	
	independentPHP= "There is a great Udemy course titled 'How to become a web developer from scratch!'";
	independentPython= "Zed Shaw's 'Learn Python the Hard Way' is very good and free.";
	
	if (learningStyleSelection == "Independent" && backendSelection == "PHP")
		{
		document.getElementById('conclusionDummy').innerHTML=independentPHP;
		}
		
	else if (learningStyleSelection == "Independent"  && backendSelection == "Python")
	{
	document.getElementById('conclusionDummy').innerHTML=independentPython;
	}
	else if (learningStyleSelection == "Structured"  && backendSelection == "Ruby")
		{
		document.getElementById('conclusionDummy').innerHTML=structuredRuby;
		}

}

function oneMoreThing()
{
	oneMoreThingMessage="No matter what particular path you choose...build, build, build! Why do you think I made this stupid page?! To see more of my creations or learn more about me";
	document.getElementById('oneMoreThingDummy').innerHTML= oneMoreThingMessage;

}