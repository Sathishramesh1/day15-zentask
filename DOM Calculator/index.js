const h1=document.createElement("h1");
h1.innerText="Calculator"
h1.setAttribute("id","title");
document.body.append(h1);


const div=document.createElement("div");
div.setAttribute("id","container");
div.setAttribute("class","container");
document.body.append(div);



const display=document.createElement("div");
display.setAttribute("class","display");
div.append(display);


const userdiv=document.createElement("div");
userdiv.setAttribute("class","user");
userdiv.setAttribute("id","user");
display.append(userdiv);


const input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","result");
input.setAttribute("class","no-outline");
input.setAttribute("placeholder","0")
userdiv.append(input);

const br=document.createElement("br");
const span=document.createElement("span");
span.setAttribute("id","us");
input.append(br,span);

//grid buttons
const griddiv=document.createElement("div");
griddiv.setAttribute("class","grid");

div.append(griddiv);

//creating grid buttons

function createbtn(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3,symbol)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    ele.setAttribute(attrname2,attrvalue2);
    ele.setAttribute(attrname3,attrvalue3);
    ele.innerText=symbol

    return ele;

}


const ob=createbtn("button","class","btn","id","(","value","(","onclick","enter(id)","(");
const cb=createbtn("button","class","btn","id",")","value",")","onclick","enter(id)",")");

griddiv.append(ob,cb)


const per=createbtn("button","class","btn","id","%","value","%","onclick","enter(id)","%");
const divi=createbtn("button","class","btn","id","/","value","/","onclick","enter(id)","/");
griddiv.append(per,divi);

const seven=createbtn("button","class","btn","id","7","value","7","onclick","enter(id)","7");
const eigth=createbtn("button","class","btn","id","8","value","8","onclick","enter(id)","8");
const nine=createbtn("button","class","btn","id","9","value","9","onclick","enter(id)","9");
const multiply=createbtn("button","class","btn","id","*","value","*","onclick","enter(id)","X");
griddiv.append(seven,eigth,nine,multiply);

const four=createbtn("button","class","btn","id","4","value","4","onclick","enter(id)","4");
const five=createbtn("button","class","btn","id","5","value","5","onclick","enter(id)","5");
const six=createbtn("button","class","btn","id","6","value","6","onclick","enter(id)","6");
const subract=createbtn("button","class","btn","id","subtract","value","-","onclick","enter(id)","-");
griddiv.append(four,five,six,subract);

const one=createbtn("button","class","btn","id","1","value","1","onclick","enter(id)","1");
const two=createbtn("button","class","btn","id","2","value","2","onclick","enter(id)","2");
const three=createbtn("button","class","btn","id","3","value","3","onclick","enter(id)","3");
const addition=createbtn("button","class","btn","id","add","value","+","onclick","enter(id)","+");
griddiv.append(one,two,three,addition);


const cancel=createbtn("button","class","btn","id","clear","value","clear","onclick","reset()","C");
const zero=createbtn("button","class","btn","id","0","value","0","onclick","enter(id)","0");
const dot=createbtn("button","class","btn","id",".","value",".","onclick","enter(id)",".");
const equalto=createbtn("button","class","btn","id","equal","value","equal","onclick","equal()","=");
griddiv.append(cancel,zero,dot,equalto)


const description=document.createElement("p");
description.setAttribute("id","description");
description.innerText="This responsive calclulator done using DOM"
document.body.append(description)








const user=document.getElementById("us");
let inp=document.getElementById("result")
function enter(no){
    let ans=document.getElementById(no)
     inp.value+=ans.value;
    
    
}

function equal(){   
    if(inp.value!==""){ 
user.innerText=eval(inp.value)
inp.value=eval(inp.value)
    }

}


function reset(){
    user.innerHTML="";
    inp.value="";

}
// document.addEventListener("keydown",event=>{
//     if(!isNaN(event.key)){
//         enter(event.key);
        
//     }
//     else{
//         alert("only numbers allowed")
//     }
// })

