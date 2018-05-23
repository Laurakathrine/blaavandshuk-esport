function showReceipt(){
	var overlay = document.getElementById('overlay');
  var form = document.getElementById('form');

	overlay.style.display = 'block';
  var x = document.getElementById("form");
   var txt = "";
   txt = txt + "Name: "  + x.elements[0].value + "<br>";
   txt = txt + "Mobile: "  + x.elements[1].value + "<br>";
   txt = txt + "Arrival Date: "  + x.elements[2].value + "<br>";
    txt = txt + "Departure Date: "  + x.elements[3].value + "<br>";
     txt = txt + "Number of People: "  + x.elements[4].value + "<br>";
       txt = txt + "Message: "  + x.elements[5].value + "<br>";
         txt = txt + "Address and city: "  + x.elements[6].value + "<br>";
           txt = txt + "Email: "  + x.elements[7].value + "<br>";
             txt = txt + "Hours spent in esport center: "  + x.elements[8].value + "<br>";
   document.getElementById("demo").innerHTML = txt;

}

function closeReceipt(){
var overlay = document.getElementById('overlay');

	overlay.style.display = 'none';
}
