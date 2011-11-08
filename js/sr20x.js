//Declare the variables which will contain the states of the checkboxes
var missionTypeCenter = 1;
var missionTypeDual =1;
var missionTypeDistant = 1;
var missionTypeRadial = 1;
var MissionNumber = Math.floor(Math.random()*16);

function PrintRandomNumber() {
	//Prints a number to the whole document
	//document.write(Math.floor(Math.random()*11));

	//Prints the number out to specified row 
	document.getElementById("MissionTableName").innerHTML=MissionNumber;

}

function GenerateMission() {
	
	//XML shenanagins 

		//creates a new http request
		xmlhttp=new XMLHttpRequest();
		
		//selects the missions xml file from the xml directory
		xmlhttp.open("GET","xml/sr2011-missions.xml",false);
		
		//send the http resoppnse
		xmlhttp.send();
		
		//set the retrived xml document to the variable xmlDOC
		xmlDoc=xmlhttp.responseXML;
	
	//Generate a Random Mission Number
	var MissionNumber = Math.floor(Math.random()*16);  //Counting the number of missions listed in the XML document in the future would be better
	
	//checks to see if the number is the same
	if (MissionNumber == MissionNumber) {
		var MissionNumber = Math.floor(Math.random()*16);
	}

	
	//replaced tag "CD" with tag "mission" from the sample XML application at http://www.w3schools.com/xml/xml_applications.asp
	x=xmlDoc.getElementsByTagName("mission");
	
	//the counter for the FOR loop below
	i=0;

	//declare an Array for the Type
	var VARmissionArrayType = new Array();
	
	//declare an Array for the Name
	var VARmissionArrayName = new Array();
	
	//declare an Array for the Special Rules
	var VARmissionArrayRules = new Array();
	
	//declare an Array for the Victory Conditions
	var VARmissionArrayVictory = new Array();
	
	//declare an Array for the Map
	var VARmissionArrayMap = new Array();
	
	//start a for loop with the counter i at the value of 1, then for as long as that counter is below the number
	//of instances of the XML element mission run this loop.  After it runs increment the counter by 1 (i++)
	for (i=1;i<x.length;i++)
  		{ 
			//loads the mission Type from the xml file into the VARmissionArrayType Array
			VARmissionArrayType [i] = x[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;
			
			//loads the mission name from the xml file into the VARmissionArrayName Array
			VARmissionArrayName [i] = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
			
			//loads the mission Rules from the xml file into the VARmissionArrayRules Array
			VARmissionArrayRules [i] = x[i].getElementsByTagName("specialRules")[0].childNodes[0].nodeValue;
			
			//loads the mission victory conditions from the xml file into the VARmissionArrayVictory Array
			VARmissionArrayVictory [i] = x[i].getElementsByTagName("victoryConditions")[0].childNodes[0].nodeValue;
			
			//loads the mission map from the xml file into the VARmissionArrayMap Array
			VARmissionArrayMap [i] = x[i].getElementsByTagName("map")[0].childNodes[0].nodeValue;
		}

		
	if (MissionNumber) { // checks to see if the MissionNumber exsits before it prints out
		
		
	//takes the  VARmissionArrayType and grabs the random value from MissionNumber and prints out that into the mission type box
	document.getElementById("MissionTypeBox").innerHTML=(VARmissionArrayType[MissionNumber]);

	//takes the  VARmissionArrayName and grabs the random value from MissionNumber and prints out that into the mission type box
	document.getElementById("MissionNumber").innerHTML=(MissionNumber);
	
	//takes the  VARmissionArrayName and grabs the random value from MissionNumber and prints out that information
	document.getElementById("MissionTableName").innerHTML=(VARmissionArrayName[MissionNumber]);
	
	//takes the  VARmissionArrayRules and grabs the random value from MissionNumber and prints out that information
	document.getElementById("MissionTableRules").innerHTML=(VARmissionArrayRules[MissionNumber]);
	
	//takes the  VARmissionArrayVictory and grabs the random value from MissionNumber and prints out that information
	document.getElementById("MissionTableVictory").innerHTML=(VARmissionArrayVictory[MissionNumber]);
	
	//takes the  VARmissionArrayName and grabs the random value from MissionNumber and prints out that name
	document.getElementById("MissionTableMap").innerHTML=("<a href=\""+VARmissionArrayMap[MissionNumber]+"\" target=\"_blank\"><img src=\""+VARmissionArrayMap[MissionNumber]+"\" alt=\"Map for "+VARmissionArrayName[MissionNumber]+"\" width=\"100%\"/></a>");	
	
	}
	else { //if it doesn't exsit then re run this function to get a new value
	
	GenerateMission();
	
	}	
	
	
}