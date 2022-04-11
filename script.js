function compute() {
    var principal = document.getElementById("principal").value;
    var rate= document.getElementById("rate").value;
    var years= document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var maturity = parseInt(principal) + interest;
    var year = new Date().getFullYear()+parseInt(years);

    //Validates priniple & Excecutes If Valid
    if(principal <= 0){
        document.getElementById("principal").value = null;
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
    }
    else{
        //Displays result        
        document.getElementById("interest").innerText=interest;
        document.getElementById("result").innerHTML=
        `If you deposit <mark>$${principal}</mark>,<br>at an interest rate of <mark>${rate}%</mark><br>You will receive an amount of <mark>$${maturity}</mark>,<br>in the year <mark>${year}</mark><br>`;
    }
}

//This updates the rate span element
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}
