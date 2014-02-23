function PrintSpecificMission()
{

    // Load XML file
    var xmlDoc = LoadXml("static/xml/2014-missions.xml")

    // Set the MissionNumber to the selected mission 
    var MissionNumber = document.getElementById("missionSelector").value;
    
    //set the variable x as the tag which will be searched for in the xmlDoc
    var MissionArray = LoadMissionArray(xmlDoc,MissionNumber)
    
    //print out all of the mission information 
    PrintMission(MissionArray)
}

function PrintRandomMission()
{
    
    // Load XML file
    var xmlDoc = LoadXml("static/xml/2014-missions.xml")
    
    // Generate a Random Mission Number
    var MissionNumber = GenerateMissionNumber()
    
    // Select from XML File and load MissionArray
    //set the variable x as the tag which will be searched for in the xmlDoc
    var MissionArray = LoadMissionArray(xmlDoc,MissionNumber)   
    
    //print out all of the mission information 
    PrintMission(MissionArray)
}

function PrintGlossary()
{
    // Load XML file
    var xmlDoc = LoadXml("static/xml/2014-glossary.xml")

    x = xmlDoc.getElementsByTagName("term");
    
    for (var i=0;i<x.length;i++)
    { 
        // Load the varibles for each issue
        anchor=(x[i].getElementsByTagName("anchor")[0].childNodes[0].nodeValue);
        name=(x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
        definition=(x[i].getElementsByTagName("definition")[0].childNodes[0].nodeValue);
        
        // Print out the main Glossay
        document.getElementById("MainGlossary").innerHTML+="<a id="+anchor+"\"></a><dt>"+name+"</dt><dd>"+definition+"</dd>";
    }
}

function LoadXml(XmlFile)
{
    //creates a new http request
    xmlhttp=new XMLHttpRequest();
    
    //selects the missions xml file from the xml directory
    xmlhttp.open("GET",XmlFile,false);
    
    //send the http resoppnse
    xmlhttp.send();
    
    //set the retrived xml document to the variable xmlDOC
    xmlDoc=xmlhttp.responseXML;
    
    return xmlDoc;
}
function GenerateMissionNumber()
{

    var MissionNumber = Math.floor(Math.random()*12);

    if (MissionNumber == 0 || MissionNumber > 12)
    {
        PrintRandomMission()
    }
    
    return MissionNumber;   
}

function LoadMissionArray(xmlDoc,MissionNumber)
{
    x = xmlDoc.getElementsByTagName("mission");
    
    var MissionArray = new Array();
    
    //load all mission information into MissionArray
    MissionArray[0]=x[MissionNumber].getElementsByTagName("packet")[0].childNodes[0].nodeValue;
    MissionArray[1]=x[MissionNumber].getElementsByTagName("type")[0].childNodes[0].nodeValue;
    MissionArray[2]=x[MissionNumber].getElementsByTagName("number")[0].childNodes[0].nodeValue;
    MissionArray[3]=x[MissionNumber].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    MissionArray[4]=x[MissionNumber].getElementsByTagName("victory")[0].childNodes[0].nodeValue;
    MissionArray[5]=x[MissionNumber].getElementsByTagName("specialRules")[0].childNodes[0].nodeValue;
    MissionArray[6]=x[MissionNumber].getElementsByTagName("tacticalTips")[0].childNodes[0].nodeValue;
    MissionArray[7]=x[MissionNumber].getElementsByTagName("map")[0].childNodes[0].nodeValue;
    MissionArray[8]=x[MissionNumber].getElementsByTagName("objective")[0].childNodes[0].nodeValue;

    return MissionArray;
    
}

function PrintMission(MissionArray)
{
    document.getElementById("MissionTableNumberNameType").innerHTML=("#"+MissionArray[2]+" "+MissionArray[3]+" ("+MissionArray[1]+")");
    document.getElementById("MissionTableVictory").innerHTML=(MissionArray[4]);
    document.getElementById("MissionTableRules").innerHTML=(MissionArray[5]);
    document.getElementById("MissionTableTacticalTip").innerHTML=(MissionArray[6]); 
    document.getElementById("MissionTableMap").innerHTML=("<img src=\"static/img/"+MissionArray[7]+"\" alt=\""+MissionArray[3]+"\">");
    //Not all missions have an objective so check to make sure the element is not NA
    if (MissionArray[8] != "NA")
        {
            document.getElementById("MissionTableObjective").innerHTML=("<img src=\"static/img/"+MissionArray[8]+"\" alt=\"Steamroller Objective\">");
        }
    else
        {
            document.getElementById("MissionTableObjective").innerHTML=("");
        }
}    

function ToggleRandomOrSelect()
{
    //toggle the top row for contorls based on what is hidden
    if (document.getElementById("GenerateMissionButton").className == "row")
    {
        document.getElementById("GenerateMissionButton").className = "row hidden"
        document.getElementById("SelectMission").className = "row"
        return;
    }
    
    if (document.getElementById("GenerateMissionButton").className == "row hidden")
    {
        document.getElementById("GenerateMissionButton").className = "row"
        document.getElementById("SelectMission").className = "row hidden"
        return;
    }
}

function AllBoxesChecked()
{
    if (document.getElementById("missionTypeGuard").checked == false && document.getElementById("missionTypeAssault").checked == false && document.getElementById("missionTypeInvade").checked == false && document.getElementById("missionTypeBorder").checked == false && document.getElementById("missionTypeBallance").checked == false && document.getElementById("missionTypeLock").checked == false )
    {
        // pop up an alert saying at least one box must be checked
        alert("At least one box must be checked");

        //reset all of the checkboxes
        document.getElementById("missionTypeGuard").checked = true
        document.getElementById("missionTypeAssault").checked = true
        document.getElementById("missionTypeInvade").checked = true
        document.getElementById("missionTypeBorder").checked = true
        document.getElementById("missionTypeBallance").checked = true
        document.getElementById("missionTypeLock").checked = true 
    }
}
//save code
/*
function displayMission () { //used by missions.html to load a mission which is chosen by the end user
    //XML shenanagins 
    //creates a new http request
    xmlhttp=new XMLHttpRequest();
    
    //selects the missions xml file from the xml directory
    xmlhttp.open("GET","/static/xml/2014-missions.xml",false);
    
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

    //Define a variable to count the number of mission type check boxes to ensure that at least 1 is checked.  
    //Without this check an endless loop can be created and crash browsers.
    //It is reset to 0 every time the generateMission() function is called
    var missionTypeCheckBoxCounter = 0;
    
    //Adds 1 to the missionTypeCheckBoxCounter for each check box which is checked
    if (document.getElementById("missionTypeCenter").checked==true) {
    missionTypeCheckBoxCounter = ++missionTypeCheckBoxCounter;
    }
    if (document.getElementById("missionTypeDual").checked==true) {
    missionTypeCheckBoxCounter = ++missionTypeCheckBoxCounter;
    }
    if (document.getElementById("missionTypeDistant").checked==true) {
    missionTypeCheckBoxCounter = ++missionTypeCheckBoxCounter;
    }
    if (document.getElementById("missionTypeRadial").checked==true) {
    missionTypeCheckBoxCounter = ++missionTypeCheckBoxCounter;
    }
    if (document.getElementById("missionTypeFlank").checked==true) {
    missionTypeCheckBoxCounter = ++missionTypeCheckBoxCounter;
    }
    if (document.getElementById("missionTypeObjective").checked==true) {
    missionTypeCheckBoxCounter = ++missionTypeCheckBoxCounter;
    }
    
    //Checks to see if missionTypeCheckBoxCounter is lessthan1 to make sure at least one box is checked.  If it does it cancels a fuction
    if (missionTypeCheckBoxCounter < 1) {
        //let the user know that they must have a box checekd
        alert("At least one mission type must be selected");
        //reset all of the checkboxes
        document.getElementById("missionTypeCenter").checked = true;
        document.getElementById("missionTypeDual").checked = true;
        document.getElementById("missionTypeDistant").checked = true;
        document.getElementById("missionTypeRadial").checked = true;
        document.getElementById("missionTypeFlank").checked = true;
        document.getElementById("missionTypeObjective").checked = true;
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
*/
