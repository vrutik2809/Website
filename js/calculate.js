//function for calculating factorial of given number
function factorial(n){
    var fact=1;
    for(var i=1;i<=n;i++){
        fact*=i;
    }
    return fact;
}
//function for round number upto given precision
function round(num,pre){
    return Math.round(num * (10 ** pre)) / (10 ** pre);
}
//function for converting binarynumber to decimal numner
function binaryToDecimal(val){
    let len = val.length;
    let num_decimal = 0;
    for(let i = len-1;i >= 0;i--){
        num_decimal += parseInt(val[i]) * (2 ** (len-1-i));
    }
    return num_decimal;
}
//function for converting decimal numner to binary number
function decimalToBinary(val){
    if(val == 0){
        return 0;
    }
    else{
        let rem = [];
        for(;val != 0;){
            rem.unshift(val % 2);
            val =  Math.floor(val / 2); 
        }
        return parseInt(rem.join(""));
    }
}


//function for finding nPr & nCr
function getValue(){
    var select = document.getElementById("math").value;
    if(select == "Permutation"){
        var n=parseInt(document.getElementById("n").value);
        var r=parseInt(document.getElementById("r").value);
        if(n<0||r<0){
            alert("For nPr, value of n & r must be greater than or equals to 0");
        }
        else if(isNaN(n)||isNaN(r)){
            alert("please enter data");
        }
        else if(n<r){
            alert("For nPr, value of n must be greater than or equals to r");
        }
        else{
            var permutation=factorial(n)/factorial(n-r);
            document.getElementById("ans").innerHTML="The value of <sup>"+n+"</sup>P<sub>"+r+"</sub> is: "+permutation;
        }
    }
    else{
        var n=parseInt(document.getElementById("n").value);
        var r=parseInt(document.getElementById("r").value);
        if(n<0||r<0){
            alert("For nCr, value of n & r must be greater than or equals to 0");
        }
        else if(isNaN(n)||isNaN(r)){
            alert("please enter data");
        }
        else if(n<r){
            alert("For nCr, value of n must be greater than or equals to r");
        }
        else{
            var combination=factorial(n)/(factorial(n-r)*factorial(r));
            document.getElementById("ans").innerHTML="The value of <sup>"+n+"</sup>C<sub>"+r+"</sub> is: "+combination;
        }
    }
}
//function for age calculation
function getAge(){
    var day=parseInt(document.getElementById("day").value);
    var month=parseInt(document.getElementById("month").value);
    var year=parseInt(document.getElementById("year").value);
    var date=new Date();
    var currday=date.getDate();
    var currmonth=date.getMonth();
    var curryear=date.getFullYear();
    var Day,Month,Year;
    var days=[31,0,31,30,31,30,31,31,30,31,30,31];
    if(((curryear%4==0)&&(curryear%100!=0))||(curryear%400==0)){
        days[1]=29;
    }
    else{
        days[1]=28;
    }

    if(day<1||month<1||year<1){
        alert("Invalid input");
    }
    else{
        if(currmonth+1>month||(month==currmonth+1&&day<=currday)){
			Year=curryear-year;
		}
		else{
			Year=curryear-year-1;
		}
		
		if(day>currday){
			if(currmonth==0){
				Day=days[11]-day+currday;
			}
			else{
				Day=days[currmonth-1]-day+currday;
			}
			if(month<currmonth+1){
				Month=currmonth+1-month-1;
			}
			else{
				Month=12-month+currmonth+1-1;
			}
		}
		else{
			Day=currday-day;
			if(month<=currmonth+1){
				Month=currmonth+1-month;
			}
			else{
				Month=12-month+currmonth+1;
			}
		}
		if(Year>=0&&Month>=0&&Day>=0){
			document.getElementById("age").innerHTML="Your Age: "+Year+" years "+Month+" months "+Day+" days";
		}
		else{
            document.getElementById("age").innerHTML="You are going to born in future!!";
		}
    }
}
//function for printing data according to selection
function printData(){
    let select = document.getElementById("math").value;
    if(select == "RectangularToPolar"){
        document.getElementById("ans").innerHTML = "";
        document.getElementById("demo").innerHTML = `
        <h2 id="l1">Value of x: <input type="number" id="x" /></h2>
        <h2 id="l2">Value of y: <input type="number" id="y" /></h2>
        <h2 id="l3">
          Phase in : <input type="radio" name="phase" id="r1" value="deg" /> deg <input type="radio" name="phase" id="r2" value="rad" /> rad
        </h2>
        <button onclick = "convert()">Convert</button>`;
    }
    else{
        document.getElementById("ans").innerHTML = "";
        document.getElementById("demo").innerHTML = `
        <h2 id="l1">Value of mod: <input type="number" id="mod" /></h2>
        <h2 id="l2">
          Phase in : <input type="radio" name="phase" id="r1" value="deg" /> deg <input type="radio" name="phase" id="r2" value="rad" /> rad
        </h2>
        <h2 id="l3">Value of phase: <input type="number" id="phase" /></h2>
        <button onclick = "convert()">Convert</button>`;
    }
}
//function for converting coordinate according to choice
function convert(){
    let select = document.getElementById("math").value;
    if(select == "RectangularToPolar"){
        let x = parseFloat(document.getElementById("x").value);
        let y = parseFloat(document.getElementById("y").value);
        let mod = round(Math.sqrt((x * x) + (y * y)),2);
        if(isNaN(x) || isNaN(y)){
            alert("Enter data");
        }
        else if(!document.getElementById("r1").checked && !document.getElementById("r2").checked){
            alert("Select Phase");
        }
        else{
            if(document.getElementById("r1").checked){
                let phase = round(Math.atan(Math.abs(y/x)) * (180 / Math.PI),2);
                if(x > 0 && y > 0){
                    document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+phase+"<sup>∘</sup>)";
                }
                else if(x < 0 && y > 0){
                    document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+(180-phase)+"<sup>∘</sup>)";
                }
                else if(x < 0 && y < 0){
                    document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+(-(180-phase))+"<sup>∘</sup>)";
                }
                else{
                    document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+(-phase)+"<sup>∘</sup>)";
                }
            }
            else{
                let phase = round(Math.atan(Math.abs(y/x)),2);
                if(x > 0 && y > 0){
                    document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+phase+")";
                }
                else if(x < 0 && y > 0){
                    document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+round((Math.PI-phase),2)+")";
                }
                else if(x < 0 && y < 0){
                    document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+(-round((Math.PI-phase),2))+")";
                }
                else{
                    document.getElementById("ans").innerHTML = "Polar form: "+mod+"∠("+(-phase)+")";
                }
            }
        }
    }
    else{
        let mod = parseFloat(document.getElementById("mod").value);
        let phase = parseFloat(document.getElementById("phase").value);
        if(isNaN(mod) || isNaN(phase)){
            alert("Enter Data");
        }
        else{
            if(!document.getElementById("r1").checked && !document.getElementById("r2").checked){
                alert("Select phase");
            }
            else{
                if(document.getElementById("r1").checked){
                    phase = phase * (Math.PI /180);
                }
                let x = round(mod * Math.cos(phase),2);
                let y = round(mod * Math.sin(phase),2);
                document.getElementById("ans").innerHTML = "Rectangular form: " + x + " + j(" + y +")";
            }
        }    
    }
}
{
var str = "";
var operator;
function printValue(val){
    str += val;
    document.getElementById("btnRes").innerHTML = str;
    if(val == '+' || val == '-' || val == '*' || val == '/'){
        operator = val;
        }
}
function removeData(){
    str = "";
    document.getElementById("btnRes").innerHTML = str;
}
function calculate(){
    let arg = str.split(operator);
    str = "";
    if(operator == '+'){
        document.getElementById("btnRes").innerHTML = decimalToBinary(binaryToDecimal(arg[0]) + binaryToDecimal(arg[1]));
    }
    else if(operator == '-'){
        document.getElementById("btnRes").innerHTML = decimalToBinary(binaryToDecimal(arg[0]) - binaryToDecimal(arg[1]));
    }
    else if(operator == '*'){
        document.getElementById("btnRes").innerHTML = decimalToBinary(binaryToDecimal(arg[0]) * binaryToDecimal(arg[1]));
    }
    else{
        document.getElementById("btnRes").innerHTML = decimalToBinary(binaryToDecimal(arg[0]) / binaryToDecimal(arg[1]));
    }
}
}