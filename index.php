<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="styles/main.css">

<meta content='Automobile Service center that provides Automobile Scanning, Fuel Performance, Transmission , Electrical Repairs, Key Programming, Security Syetem Installation, Radio Decoding, Oven Bake Spray painting' name='description'/> 
<meta content=' Automobile Scanning, Fuel Performance, Transmission , Electrical Repairs, Key Programming, Security Syetem Installation, Radio Decoding, Oven Bake Spray painting' name='keywords'/> 
<META  metakeywords=20content=3D"De Kings Automobile Diagnosis centre, =
Cars, Trucks, Cars for sale,Carsforsale.com,Vans, New Cars, Services =
For Sale"=20
name=3Dkeywords>
<META content=3Dindex,follow name=3Drobots>

<script language="JavaScript1.2">

/*
Left-Right image slideshow Script-
By Dynamic Drive (www.dynamicdrive.com)
For full source code, terms of use, and 100's more scripts, visit http://dynamicdrive.com
*/

///////configure the below four variables to change the style of the slider///////
//set the scrollerwidth and scrollerheight to the width/height of the LARGEST image in your slideshow!
var scrollerwidth='680px'
var scrollerheight='250px'
var scrollerbgcolor='transparent'
//3000 miliseconds=3 seconds
var pausebetweenimages=3000


//configure the below variable to change the images used in the slideshow. If you wish the images to be clickable, simply wrap the images with the appropriate <a> tag
var slideimages=new Array()
slideimages[0]='<img src="images/1.png"  />'
slideimages[1]='<img src="images/2.png" />'
slideimages[2]='<img src="images/3.png"  />'
slideimages[3]='<img src="images/4.jpg" />'
//extend this list

///////Do not edit pass this line///////////////////////
     
var ie=document.all
var dom=document.getElementById

if (slideimages.length>1)
i=2
else
i=0

function move1(whichlayer){
tlayer=eval(whichlayer)
if (tlayer.left>0&&tlayer.left<=5){
tlayer.left=0
setTimeout("move1(tlayer)",pausebetweenimages)
setTimeout("move2(document.main.document.second)",pausebetweenimages)
return
}
if (tlayer.left>=tlayer.document.width*-1){
tlayer.left-=5
setTimeout("move1(tlayer)",50)
}
else{
tlayer.left=parseInt(scrollerwidth)+5
tlayer.document.write(slideimages[i])
tlayer.document.close()
if (i==slideimages.length-1)
i=0
else
i++
}
}

function move2(whichlayer){
tlayer2=eval(whichlayer)
if (tlayer2.left>0&&tlayer2.left<=5){
tlayer2.left=0
setTimeout("move2(tlayer2)",pausebetweenimages)
setTimeout("move1(document.main.document.first)",pausebetweenimages)
return
}
if (tlayer2.left>=tlayer2.document.width*-1){
tlayer2.left-=5
setTimeout("move2(tlayer2)",50)
}
else{
tlayer2.left=parseInt(scrollerwidth)+5
tlayer2.document.write(slideimages[i])
tlayer2.document.close()
if (i==slideimages.length-1)
i=0
else
i++
}
}

function move3(whichdiv){
tdiv=eval(whichdiv)
if (parseInt(tdiv.style.left)>0&&parseInt(tdiv.style.left)<=5){
tdiv.style.left=0+"px"
setTimeout("move3(tdiv)",pausebetweenimages)
setTimeout("move4(scrollerdiv2)",pausebetweenimages)
return
}
if (parseInt(tdiv.style.left)>=tdiv.offsetWidth*-1){
tdiv.style.left=parseInt(tdiv.style.left)-5+"px"
setTimeout("move3(tdiv)",50)
}
else{
tdiv.style.left=scrollerwidth
tdiv.innerHTML=slideimages[i]
if (i==slideimages.length-1)
i=0
else
i++
}
}

function move4(whichdiv){
tdiv2=eval(whichdiv)
if (parseInt(tdiv2.style.left)>0&&parseInt(tdiv2.style.left)<=5){
tdiv2.style.left=0+"px"
setTimeout("move4(tdiv2)",pausebetweenimages)
setTimeout("move3(scrollerdiv1)",pausebetweenimages)
return
}
if (parseInt(tdiv2.style.left)>=tdiv2.offsetWidth*-1){
tdiv2.style.left=parseInt(tdiv2.style.left)-5+"px"
setTimeout("move4(scrollerdiv2)",50)
}
else{
tdiv2.style.left=scrollerwidth
tdiv2.innerHTML=slideimages[i]
if (i==slideimages.length-1)
i=0
else
i++
}
}

function startscroll(){
if (ie||dom){
scrollerdiv1=ie? first2 : document.getElementById("first2")
scrollerdiv2=ie? second2 : document.getElementById("second2")
move3(scrollerdiv1)
scrollerdiv2.style.left=scrollerwidth
}
else if (document.layers){
document.main.visibility='show'
move1(document.main.document.first)
document.main.document.second.left=parseInt(scrollerwidth)+5
document.main.document.second.visibility='show'
}
}

window.onload=startscroll

</script>
 <!--<script type="text/javascript" src="styles/mensu.js"></script>-->
<link rel="stylesheet" type="text/css" href="styles/menu.css">
<title>De Kings Automobile Diagnosis centre</title>

</head>

<body class="body">

<div class="ff">
<div class="top"> <img src="images/title.gif" width="686px" height="48px"  />

</div>
<div class="tt"><div class="lbl"><div id="menu">
  <ul class="menu">
        <li><a href="index.php"><span>Home</span></a></li>
         <li><a href="automobile_services.php" class="parent" ><span>Services</span></a>
         <div><ul>
                   <li><a href="vechicle-maintenance.php" ><span>Maintenance</span></a></li>
               <li><a href="vechicle-repairs.php" ><span>Repair</span></a></li>
                  
              </ul></div></li>  
        <li><a href="vechicles.php"><span>Vehicles</span></a></li>
        <li><a href="specials.php"><span>Specials</span></a></li>
        <li class="last"><a href="contacts.php"><span>Directions</span></a></li>
    </ul>
</div></div>

<div style="height:250px; width:680px; margin-top:1px; margin-left:1px;">
 <ilayer id="main" width=&{scrollerwidth}; height=&{scrollerheight}; bgColor=&{scrollerbgcolor}; visibility=hide> <layer id="first" left=1 top=0 width=&{scrollerwidth}; >
        <script language="JavaScript1.2">
if (document.layers)
document.write(slideimages[0])
  </script>
        </layer><layer id="second" left=0 top=0 width=&{scrollerwidth}; visibility=hide>
        <script language="JavaScript1.2">
if (document.layers)
document.write(slideimages[1])
  </script>
        </layer></ilayer>
      <script language="JavaScript1.2">
if (ie||dom){
document.writeln('<div id="main2" style="position:relative;width:'+scrollerwidth+';height:'+scrollerheight+';overflow:hidden;background-color:'+scrollerbgcolor+'">')
document.writeln('<div style="position:absolute;width:'+scrollerwidth+';height:'+scrollerheight+';clip:rect(0 '+scrollerwidth+' '+scrollerheight+' 0);left:0px;top:0px">')
document.writeln('<div id="first2" style="position:absolute;width:'+scrollerwidth+';left:1px;top:0px;">')
document.write(slideimages[0])
document.writeln('</div>')
document.writeln('<div id="second2" style="position:absolute;width:'+scrollerwidth+';left:0px;top:0px">')
document.write(slideimages[1])
document.writeln('</div>')
document.writeln('</div>')
document.writeln('</div>')
}
  </script> </div>
  <dt class=" bottomline">
 Automobile Scanning, Fuel Performance, Transmission , Electrical Repairs, Key Programming, Security Syetem Installation, Radio Decoding, Oven Bake Spray painting 
  </dt>
</div>
<div class="mid">
<div class=" length">
<p>

 Automobile Diagnosis centre is solely committed to Sales and Services of the major Automotives<br /> in Nigeria. We are well equiped with latest diagnostic tools and equally staff with expert mechanics<br /> to give you the best treatment for your most cherished vehicles.
<br />
<br />
We provide solutions to the stereo decoding problems, key programming, security systems and electrical <br />related problems.  
We have New and Used(Tokunbo) Cars, SUVs, Jeeps, Trucks for sale at a price <br />that you can afford. Our sales reps. will glad to  give you a professional guidances in making the right choices.<br />
<br />
Come and give your vehicle a new look with an oven bake spray painting, or an intensive car wash.
<br /> 



 
</p>

</div>

</div>

<!--
<div class="btt"> fdffdfdfdffdfdfdfdfd  <br />
dggdggdgdgdgdgdgdggdgdgdgdgd </div>-->
<div class="bod"><img src="images/kok3.gif" alt="logo" style=" padding:5px 5px 5px 5px"   />

<p> 
<br /><br /> 
P: 
</p> 
<hr/>
<h3> Opening Hours</h3>
<p>
Weekdays ( Mon - Fri) :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00am - 7:00pm
<br />
Saturday : &nbsp;&nbsp; 10:00am - 6:00pm
<br />
Sunday : &nbsp;&nbsp;&nbsp;&nbsp; 2:30am - 6:00pm
</p>

</p>
<hr />
<h3>Direction</h3>
<p>
<a href="contacts.php">  click here</a> to view road map to our workshop.
<p>
<br />
<br /><br />
<br />
<br /><br /><br />
<br /><br /><br />
<br /><br /><br />
<pre>,&copy; Copyright 2011.</pre>
</div>

</div>

</div>
<div class="la3">
<img align="Top" src="images/a3mg.gif" width="140" height="40" dir="rtl"  />
</div>
</body>
</html>
