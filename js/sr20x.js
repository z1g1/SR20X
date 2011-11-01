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
	var MissionNumber = Math.floor(Math.random()*17);  //Counting the number of missions listed in the XML document in the future would be better
	
	// checks to see if the number is 0
	if (MissionNumber == "0") { 
		var MissionNumber = Math.floor(Math.random()*17);
	}
	
	//checks to see if the number is the same
	if (MissionNumber == MissionNumber) {
		var MissionNumber = Math.floor(Math.random()*17);
	}

	//checks to see if the number is larger than the number of missions 
	if (MissionNumber >= 16) {
		var MissionNumber = Math.floor(Math.random()*17);
	}

	//replaced CD with mission from the sample XML application http://www.w3schools.com/xml/xml_applications.asp
	x=xmlDoc.getElementsByTagName("mission");
	
	//the counter for the FOR loop below
	i=0;

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
			//loads the mission name from the xml file into the VARmissionArrayName Array
			VARmissionArrayName [i] = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
			
			//loads the mission name from the xml file into the VARmissionArrayRules Array
			VARmissionArrayRules [i] = x[i].getElementsByTagName("specialRules")[0].childNodes[0].nodeValue;
			
			//loads the mission name from the xml file into the VARmissionArrayVictory Array
			VARmissionArrayVictory [i] = x[i].getElementsByTagName("victoryConditions")[0].childNodes[0].nodeValue;
			
			//loads the mission name from the xml file into the VARmissionArrayMap Array
			VARmissionArrayMap [i] = x[i].getElementsByTagName("map")[0].childNodes[0].nodeValue;
		}

	//takes the  VARmissionArrayName and grabs the random value from MissionNumber and prints out that name
	document.getElementById("MissionTableName").innerHTML=(VARmissionArrayName[MissionNumber]);
	
	//takes the  VARmissionArrayName and grabs the random value from MissionNumber and prints out that name
	document.getElementById("MissionTableRules").innerHTML=(VARmissionArrayRules[MissionNumber]);
	
	//takes the  VARmissionArrayName and grabs the random value from MissionNumber and prints out that name
	document.getElementById("MissionTableVictory").innerHTML=(VARmissionArrayVictory[MissionNumber]);
	
	//takes the  VARmissionArrayName and grabs the random value from MissionNumber and prints out that name
	document.getElementById("MissionTableMap").innerHTML=("<a href=\""+VARmissionArrayMap[MissionNumber]+"\" target=\"_blank\"><img src=\""+VARmissionArrayMap[MissionNumber]+"\" alt=\"Map for "+VARmissionArrayName[MissionNumber]+"\" width=\"100%\"/></a>");	
}