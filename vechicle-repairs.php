
<?php
 include("conit.php");
$stype="select * from tbl_servicetype";
$Sstype=mysql_query($stype);

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script language="JavaScript" src="tigra_calendar/calendar_db.js"></script>
	<link rel="stylesheet" href="tigra_calendar/calendar.css">
<link rel="stylesheet" type="text/css" href="styles/menu.css">
<link rel="stylesheet" type="text/css" href="styles/main.css">
<meta content='Automobile Service center that provides Automobile Scanning, Fuel Performance, Transmission , Electrical Repairs, Key Programming, Security Syetem Installation, Radio Decoding, Oven Bake Spray painting' name='description'/> 
<meta content=' Automobile Scanning, Fuel Performance, Transmission , Electrical Repairs, Key Programming, Security Syetem Installation, Radio Decoding, Oven Bake Spray painting' name='keywords'/> 
<META  metakeywords=20content=3D"De Kings Automobile Diagnosis centre, =
Cars, Trucks, Cars for sale,Carsforsale.com,Vans, New Cars, Services =
For Sale"=20
name=3Dkeywords>
<META content=3Dindex,follow name=3Drobots>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>De Kings Automobile Diagnosis centre | Services Center</title>
<?php
require_once("conit.php");

$fname=@$_POST['fname'];
$lname=@$_POST['lname'];
$email=@$_POST['email'];
$phone=@$_POST['phone'];
$adate=@$_POST['adate'];
$year=@$_POST['year'];
$make=@$_POST['make'];
$model=@$_POST['model'];
$stype=@$_POST['servicetype_id'];
if (isset($adate)){

include('conit.php');


$dqry="INSERT INTO tbl_appointment(firstname,lastname,email, phone,app_date,vechicle_year, vechicle_make,vechicle_model,servicetype_id)  VALUES('$fname','$lname','$email', '$phone','$adate','$year','$make','$model','$stype'); ";

if (!mysql_query($dqry,$db)){
die ('Database Not Ready'.mysql_error());
}
else{
echo "<script language='javascript'>alert('Thank you! we will be glad to have you visit.'); </script>";

header("Location: vechicle-repairs.php"); 
}
mysql_close($db); 
 
}
?>
</head>
<style type="text/css">
/*.l{ display:inline; font: tahoma;  color:#fff; float:right; width:280px; line-height:20px; margin:0 0px 10px 0;}
.l label{width:100px; text-align: left; font-size:11px; }*/
.txt{ width:115px; line-height:12px; border: 1px #45557b solid; }
</style>
<body class="body">
<div class="ff">
<div class="top"><img src="images/title.gif" width="686px" height="48px"  />
</div>
<div  class="midd">
<div class="lbl"><div id="menu">
  <ul class="menu">
        <li><a href="index.php"><span>Home</span></a></li>
         <li><a href="automobile_services.php" class="parent" ><span>Services</span></a>
         <div><ul>
                   <li><a href="vechicle-maintenance.php" ><span>Maintenance</span></a></li>
               <li><a href="vechicle-repairs.php" ><span>Repair</span></a></li>
                  
              </ul></div></li>  
        <li><a href="vechicles.php"><span>Vehicles</span></a></li>
        <li><a href="specials.php"><span>Specials</span></a></li>
        <li class="last"><a href="contacts.php"><span>Direction</span></a></li>
    </ul>
</div></div>
<img src="images/ban-1.png"  style=" padding:0px 0px 0px 0px ;"   /></div>
<div class="bt">

<div class="length">
<br />
<h4>All of a Sudden it stopped working !</h4>
<p>
If your vechicle starts to malfunction or some of the devices in it develops an unusual function.<br /> 
You can count on us to diagnose the vehicle get the cause of the problem and fix it.<br />
At some point you may need to repair or replace the faulty component to bring your vechicle<br /> 
back to its peek performance. We provide genuine parts for replacements.<br /> We also provide car radio decoding, transponder key programming,<br /> security system installation and oven bake spray painting.   

<br />
<br />
We guarantee best treatment for your car, suv, or truck. 
<br />
<a href="service-details.php">Click </a> for service details. 
<br /><br />
 To schedule an appointment fill form on the right or call customer service department<br /> on 01-841 7231, 0803 598 0780, 0803 810 2340.
</p>
</div>
<div class="foot">
<ul><li><a href="#"> WHEEL ALIGNMENT</a></li><li><a href="#">KEY PROGRAMMING</a></li><li><a href="radiodecoding.php">RADIO DECODING</a></li><li><a href="#">OVEN BAKE SPRAY PAINTING</a></li></ul>
</div>
</div><div class="bod">
<img src="images/kok3.gif" alt="logo" style=" padding:5px 5px 5px 5px"   />

<p> Km 5, Isheri - Lasu Express way,
<br /> By College Bus Stop,<br /> Igando, Lagos.
<br />
P: 01-841 7231, 0803 598 0780, 0803 810 2340
</p> 
<hr/>
<h3>schedule an appointment</h3> 


<div id="container">
<form name="newad" method="post" enctype="multipart/form-data" onsubmit="return formCheck(this);" >
<fieldset>
<dl>
<br />
 <dt><label>  Firstname :</label></dt><dd ><input id="fname" name="fname" onfocus="" type="text" /></dd>

<dt><label>Lastname :</label></dt><dd ><input id="lname" name="lname" onfocus=""  type="text" /></dd>

<dt><label>Email :</label></dt><dd ><input id="email" name="email" onfocus=""  type="text" /></dd>

<dt><label>Telephone :</label></dt><dd ><input id="phone" name="phone" onfocus="" type="text" /></dd>

<dt><label>Appiontment Date :</label></dt><dd ><input id="adate" name="adate" onfocus=""  type="text" /><script language="JavaScript">
	new tcal ({
		// form name
		'formname': 'newad',
		// input name
		'controlname': 'adate'
	});

	</script></dd>
<br /> 
&nbsp; &nbsp;<label>Service Information</label>

<dt><label>Year :</label></dt><dd><input id="year" name="year" onfocus="" type="text"  /></dd>

<dt><label>Make :</label></dt><dd ><input id="make" name="make" onfocus="" type="text"   /></dd>

<dt><label>Model :</label></dt><dd ><input id="model" name="model" onfocus="" type="text"  /></dd>

<dt><label>Type of service :</label></dt><dd >
<select  id="servicetype_id" name="servicetype_id" class="txt">
<option>Select... </option>
<?php while($rd=mysql_fetch_array($Sstype)){ ?>
          <option value="<?php echo $rd['servicetype_id']; ?>"><?php echo $rd['servicetype'];?></option>
          <?php } ?>
</select></dd>
<br />
<input type="submit" id="submit" name="submit" value="submit" class="txt" />
<br />
<br />
</dl>
</fieldset>
</form>
</div>
<br />
<br /><br /><pre>De kings Automobile Diagnosis centre,&copy;2011.</pre>

</div>

</div>
<div class="la3">
<img align="Top" src="images/a3mg.gif" width="140" height="40" dir="rtl"  />
</div>
</body>
<script language="JavaScript">

function formCheck(formobj){
	// Enter name of mandatory fields
	
	var fieldRequired = Array("fname","lname","email","phone","adate","year","make","model","servicetype");
	// Enter field description to appear in the dialog box
	var fieldDescription = Array("Firstname","Lastname", "Email","Telephone","Appointment Date", "Year","Make","Model","Type of service" );
	// dialog message
	var alertMsg = "Please complete the following field(s):\n";
	
	var l_Msg = alertMsg.length;
	
	for (var i = 0; i < fieldRequired.length; i++){
		var obj = formobj.elements[fieldRequired[i]];
		if (obj){
			switch(obj.type){
			case "select-one":
				if (obj.selectedIndex == -1 || obj.options[obj.selectedIndex].text == ""){
					alertMsg += " - " + fieldDescription[i] + "\n";
				}
				break;
			case "select-multiple":
				if (obj.selectedIndex == -1){
					alertMsg += " - " + fieldDescription[i] + "\n";
				}
				break;
			case "text":
			case "textarea":
				if (obj.value == "" || obj.value == null){
					alertMsg += " - " + fieldDescription[i] + "\n";
				}
				break;
			default:
			}
			if (obj.type == undefined){
				var blnchecked = false;
				for (var j = 0; j < obj.length; j++){
					if (obj[j].checked){
						blnchecked = true;
					}
				}
				if (!blnchecked){
					alertMsg += " - " + fieldDescription[i] + "\n";
				}
			}
		}
	}

	if (alertMsg.length == l_Msg){
		return true;
	}else{
		alert(alertMsg);
		return false;
	}
}
// -->
</script>
</html>