const express = require('express');
const app = express();
const fetch = require("node-fetch");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// app.get('/receive-xml', async (req, res)=>{
//     res.send('Hello');
//     let response = await fetch('https://www.fueleconomy.gov/ws/rest/vehicle/menu/model?year=2012&make=Honda');
//     // data = await response.json();
//     // console.log(response, 'response');
//     loadXMLDoc(response);
 
// })

// function loadXMLDoc(response) {
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//       if (response.status == 200) {
//         myFunction(response);
//       }
//     };
//   }

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "https://www.fueleconomy.gov/ws/rest/vehicle/menu/model?year=2012&make=Honda", true);
    xmlhttp.send();
  }  

  function myFunction(xml) {
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("menuItems");
    for (i = 0; i< x.length; i++) {
      txt += x[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
  }


// function myFunction(xml) {
//     var x, i, xmlDoc, txt;
//     xmlDoc = xml;
//     // txt = "";
//     x = xmlDoc.getElementsByTagName("menuItems");
//     for (i = 0; i< x.length; i++) {
//         console.log(x[i])
//     //   txt += x[i].childNodes[0].nodeValue + "<br>";
//     }
//     // document.getElementById("demo").innerHTML = txt;
// }







app.listen(3000, () => {
    console.log('listening on port 3000') 
});