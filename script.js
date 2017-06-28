/* Script.js */

//custom function

function calculateTip(){
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numpeople = document.getElementById("totalPeople").value;
    
    //Quick Validation
    if(billAmount === "" || serviceQuality == 0) {
        window.alert("Please enter Some values Idiotas..!");
        return;//This will kill the function running
    }
    
    if(numpeople === "" || numpeople <= 1){
        numpeople=1;
        
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    
    // Maths part
    var total=(billAmount*serviceQuality)/numpeople;
    total = Math.round(total*100)/100;
    total=total.toFixed(2);
    
    
    //Display Tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML= total; 
}




//Hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Calling a function on button clicking
document.getElementById("calculate").onclick = function() { calculateTip(); };





