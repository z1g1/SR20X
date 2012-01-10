
var MissionNumber = Math.floor(Math.random()*16);

function PrintRandomNumber() {
	//Prints a number to the whole document
	//document.write(Math.floor(Math.random()*11));

	//Prints the number out to specified row 
	document.getElementById("MissionTableName").innerHTML=MissionNumber;

}

function generateMission(){
						//XML Loads 
							//creates a new http request
							xmlhttp=new XMLHttpRequest();
							
							//selects the missions xml file from the xml directory
							xmlhttp.open("GET","xml/sr2012-missions.xml",false);
							
							//send the http resoppnse
							xmlhttp.send();
							
							//set the retrived xml document to the variable xmlDOC
							xmlDoc=xmlhttp.responseXML;
		
						//Generate a Random Mission Number
						var MissionNumber = Math.floor(Math.random()*18);  //Counting the number of missions listed in the XML document in the future would be better
						
						//replaced tag "CD" with tag "mission" from the sample XML application at http://www.w3schools.com/xml/xml_applications.asp
						x=xmlDoc.getElementsByTagName("mission");
		
						//load all mission information into variables
						var missionType =x[MissionNumber].getElementsByTagName("type")[0].childNodes[0].nodeValue;
						var missionName =x[MissionNumber].getElementsByTagName("name")[0].childNodes[0].nodeValue;
						var missionRules =x[MissionNumber].getElementsByTagName("specialRules")[0].childNodes[0].nodeValue;
						var missionVictory =x[MissionNumber].getElementsByTagName("victoryConditions")[0].childNodes[0].nodeValue;
						var missionMap =x[MissionNumber].getElementsByTagName("map")[0].childNodes[0].nodeValue;
						
						//Checks to see if the mission number is set to undefined or equals 0
						if (!MissionNumber || MissionNumber == 0) {
							generateMission();
							return;
						}
						
						//Checks to see if the mission type checkboxes are engaged
						if (document.getElementById("missionTypeCenter").checked==false && missionType == "Center Scenario") {
							generateMission();
							return;
						}
						if (document.getElementById("missionTypeDual").checked==false && missionType == "Dual Scenario") {
							generateMission();
							return;
						}
						if (document.getElementById("missionTypeDistant").checked==false && missionType == "Distant Scenario") {
							generateMission();
							return;
						}
						if (document.getElementById("missionTypeRadial").checked==false && missionType == "Radial Scenario") {
							generateMission();
							return;
						}
						if (document.getElementById("missionTypeFlank").checked==false && missionType == "Flank Scenario") {
							generateMission();
							return;
						}
						if (document.getElementById("missionTypeObjective").checked==false && missionType == "Objective Scenario") {
							generateMission();
							return;
						}
						
						//prints out all of the mission information 
						document.getElementById("MissionTypeBox").innerHTML=(missionType);
						document.getElementById("MissionTableName").innerHTML=(missionName);
						document.getElementById("MissionTableRules").innerHTML=(missionRules);
						document.getElementById("MissionTableVictory").innerHTML=(missionVictory);
						document.getElementById("MissionTableMap").innerHTML=("<a href=\""+missionMap+"\" target=\"_blank\"><img src=\""+missionMap+"\" alt=\"Map for "+missionName+"\" width=\"100%\"/></a>");	
			}
function displayMission () { //used by missions.html to load a mission which is chosen by the end user
		//XML shenanagins 
		//creates a new http request
		xmlhttp=new XMLHttpRequest();
		
		//selects the missions xml file from the xml directory
		xmlhttp.open("GET","xml/sr2012-missions.xml",false);
		
		//send the http resoppnse
		xmlhttp.send();
		
		//set the retrived xml document to the variable xmlDOC
		xmlDoc=xmlhttp.responseXML;

	//Set the mission Number	
	var SetMissionNumber = document.getElementById("HTMLmissionPicker").selectedIndex;
	
	//replaced tag "CD" with tag "mission" from the sample XML application at http://www.w3schools.com/xml/xml_applications.asp
	x=xmlDoc.getElementsByTagName("mission");

	//loads the mission Type from the xml file into the VARmissionType Variable
	VARmissionType = x[SetMissionNumber].getElementsByTagName("type")[0].childNodes[0].nodeValue;

	//Write out the mission Type
	document.getElementById("MissionType").innerHTML=(VARmissionType);
	
	//loads the mission Type from the xml file into the VARmissionName Variable
	VARmissionName = x[SetMissionNumber].getElementsByTagName("name")[0].childNodes[0].nodeValue;

	//Write out the mission Name
	document.getElementById("MissionTableName").innerHTML=(VARmissionName);
	
	//loads the mission Type from the xml file into the VARmissionRules Variable
	VARmissionRules = x[SetMissionNumber].getElementsByTagName("specialRules")[0].childNodes[0].nodeValue;

	//Write out the mission Special Rules
	document.getElementById("MissionTableRules").innerHTML=(VARmissionRules);
	
	//loads the mission Type from the xml file into the VARmissionVictory Variable
	VARmissionVictory = x[SetMissionNumber].getElementsByTagName("victoryConditions")[0].childNodes[0].nodeValue;

	//Write out the mission Victory Conditions
	document.getElementById("MissionTableVictory").innerHTML=(VARmissionVictory);
	
	//loads the mission map path from the xml file into the VARmissionMap Variable
	VARmissionMap = x[SetMissionNumber].getElementsByTagName("map")[0].childNodes[0].nodeValue;

	//Write out the mission Victory Conditions
	document.getElementById("MissionTableMap").innerHTML=("<a target=\"_blank\" href=\" "+VARmissionMap+"\"><img src=\""+VARmissionMap+"\" width=\"100%\" alt\" Mission map for "+VARmissionName+"/></a>");
	
	
}
