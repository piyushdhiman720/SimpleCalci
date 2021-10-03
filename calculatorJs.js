function reset(){
    location.reload();
}
function sum(){
    var a = document.getElementById("num1").value;
        a = parseInt(a);
    var b = document.getElementById("num2").value;
        b = parseInt(b);

    document.getElementById("Result").innerHTML= a+b;
}
function sub(){
    var a = document.getElementById("num1").value;
        a = parseInt(a);
    var b = document.getElementById("num2").value;
        b = parseInt(b);

    document.getElementById("Result").innerHTML= a-b;
}
function multi(){
    var a = document.getElementById("num1").value;
        a = parseInt(a);
    var b = document.getElementById("num2").value;
        b = parseInt(b);

    document.getElementById("Result").innerHTML= a*b;
}
function divi(){
    var a = document.getElementById("num1").value;
        a = parseInt(a);
    var b = document.getElementById("num2").value;
        b = parseInt(b);

    document.getElementById("Result").innerHTML= a/b;
}
function Choice(){
    option = document.getElementById("Opt").value;

    if(option == "+"){
        sum();
    }
    else if (option == "-") {
        sub();
    }
    else if(option == "*"){
        multi();
    }
    else if(option == "/"){
        divi();
    }
}
function gst18(){
    var a = document.getElementById("num3").value;
        a = parseInt(a)

        document.getElementById("Result1").innerHTML= (a / 100) * 18 + a;
}
function gst12(){
    var a = document.getElementById("num3").value;
        a = parseInt(a)

        document.getElementById("Result1").innerHTML= (a / 100) * 12 + a;
}
function gst28(){
    var a = document.getElementById("num3").value;
        a = parseInt(a)

        document.getElementById("Result1").innerHTML= (a / 100) * 28 + a;
}
function Choice1(){
    option = document.getElementById("Opt1").value;

    if(option == "18"){
        gst18();
    }
    else if(option == "12"){
        gst12();
    }
    else if(option == "28"){
        gst28();
    }
}
function gst_18(){
    var a = document.getElementById("num4").value;
        a = parseInt(a)

        document.getElementById("Result2").innerHTML= (a * 100) / 118 ;
}
function gst_12(){
    var a = document.getElementById("num4").value;
        a = parseInt(a)

        document.getElementById("Result2").innerHTML= (a * 100) / 112;
}
function gst_28(){
    var a = document.getElementById("num4").value;
        a = parseInt(a)

        document.getElementById("Result2").innerHTML= (a * 100) / 128;
}
function Choice2(){
    option = document.getElementById("Opt2").value;

    if(option == "18"){
        gst_18();
    }
    else if(option == "12"){
        gst_12();
    }
    else if(option == "28"){
        gst_28();
    }
}