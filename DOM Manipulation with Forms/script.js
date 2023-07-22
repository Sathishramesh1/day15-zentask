var form=document.createElement("form");
form.setAttribute("name","myform");
form.setAttribute("id","form");
form.setAttribute("class","container")

 var heading=document.createElement("h1");
 heading.innerText="Zentask Datacollection form";
 heading.setAttribute("id","title")
document.body.append(form);

//description
var p=document.createElement("p");
p.setAttribute("id","description");
p.innerText="Description:This task done using html,css,bootstrap,dom";
var div1=document.createElement("div");
div1.setAttribute("class","container");
form.append(div1);
var div=document.createElement("div");
div.setAttribute("id","div");
div.setAttribute("class","form-group");
div1.append(heading,p,div);

//first name label and input
var fbr=document.createElement("br")
var fbr1=document.createElement("br")
var first=document.createElement("label");
first.setAttribute("for","first-name");
first.setAttribute("class","inputbox")
first.innerText=`First name :`;
var firstinput=document.createElement("input");
firstinput.setAttribute("type","text");
firstinput.setAttribute("id","first-name")
firstinput.setAttribute("class","form-control")
firstinput.setAttribute("required","")
firstinput.setAttribute("placeholder","Enter the first name")
div.append(first,fbr1,firstinput,fbr);

//last name label and input
var br=document.createElement("br");
var br1=document.createElement("br");
var last=document.createElement("label");
var lbr=document.createElement("br");
last.setAttribute("for","last-name");
last.innerText="Last  name :";
var lastinput=document.createElement("input");
lastinput.setAttribute("type","text");
lastinput.setAttribute("id","last-name");
lastinput.setAttribute("placeholder","Enter  the last name")
lastinput.setAttribute("class","form-control")
lastinput.setAttribute("required","")
div.append(last,lbr,lastinput);

//address
var br2=document.createElement("br")
var abr1=document.createElement("br")
var address=document.createElement("label");
address.setAttribute("for","address");

address.innerText="Address :"
var addressinput=document.createElement("textarea");
addressinput.setAttribute("id","address");
addressinput.setAttribute("rows","5")
addressinput.setAttribute("cols","27")
addressinput.setAttribute("class","form-control")
addressinput.setAttribute("required","")
addressinput.setAttribute("placeholder","Enter the address")
addressinput.setAttribute("autocomplete","on")
var abr=document.createElement("br");
div.append(br2,address,abr1,addressinput,abr);

//pincode
var pincode=document.createElement("label");
pincode.setAttribute("for","pincode");
pincode.innerText="Pincode :"

var pincodeinput=document.createElement("input");
pincodeinput.setAttribute("id","pincode");
pincodeinput.setAttribute("type","text");
pincodeinput.setAttribute("placeholder","Enter the pincode")
pincodeinput.setAttribute("class","form-control")
pincodeinput.setAttribute("required","")
var pbr=document.createElement("br");
var pbr1=document.createElement("br");
div.append(pincode,pbr1,pincodeinput);

//gender
var gbr=document.createElement("br");
var genderlabel=document.createElement("label");

genderlabel.setAttribute("for","gender");
genderlabel.innerText="Gender:"
var gbr1=document.createElement("br");
var genderinput1=document.createElement("input");
genderinput1.setAttribute("type","radio");
genderinput1.setAttribute("name","gender")
genderinput1.setAttribute("id","male")
genderinput1.setAttribute("value","male")
genderinput1.setAttribute("checked","")
var male=document.createElement("label");
male.setAttribute("for","male")
male.innerText="Male"
var gbr2=document.createElement("br");
var genderinput2=document.createElement("input");
genderinput2.setAttribute("type","radio");
genderinput2.setAttribute("name","gender")
genderinput2.setAttribute("id","female");
genderinput2.setAttribute("value","female")
var female=document.createElement("label");
female.setAttribute("for","female");
female.innerText="Female"

var gbr3=document.createElement("br");
var gbr4=document.createElement("br");

div.append(gbr,genderlabel,gbr1,genderinput1,male,gbr2,genderinput2,female,gbr3,gbr4)

//choice of food
var choice=document.createElement("label");
choice.setAttribute("for","choice");
choice.innerText="Choice of food:"
var must=document.createElement("label");
must.setAttribute("id","must")
must.innerText= `(Must select atleast 2 out of 5 options)`;


var south=document.createElement("input");
south.setAttribute("type","checkbox");
south.setAttribute("value","South Indian");
south.setAttribute("id","south")
south.setAttribute("class","food")
var southlabel=document.createElement("label");
southlabel.setAttribute("id","south");
southlabel.innerText="South Indian"

var sbr=document.createElement("br")
var nbr=document.createElement("br")
var north=document.createElement("input");
north.setAttribute("class","food");
north.setAttribute("id","north")
north.setAttribute("type","checkbox");
north.setAttribute("value","North Indian");
var northlabel=document.createElement("label");
northlabel.setAttribute("id","north");
northlabel.innerText="North Indian"

div.append(choice,must,sbr,south,southlabel,nbr,north,northlabel)


var cbr=document.createElement("br");
var chinese=document.createElement("input");
chinese.setAttribute("type","checkbox");
chinese.setAttribute("class","food")
chinese.setAttribute("value","Chinese");
chinese.setAttribute("id","chinese")

var chineselabel=document.createElement("label");
chineselabel.setAttribute("for","Chinese");
chineselabel.innerText="Chinese"

div.append(cbr,chinese,chineselabel);

var kbr=document.createElement("br");
var koren=document.createElement("input");
koren.setAttribute("class","food")
koren.setAttribute("type","checkbox");
koren.setAttribute("value","Korean");
koren.setAttribute("id","korean")

var korenlabel=document.createElement("label");
korenlabel.setAttribute("for","koren")
korenlabel.innerText="Korean";
div.append(kbr,koren,korenlabel)

var mbr=document.createElement("br");
var mexican=document.createElement("input");
mexican.setAttribute("class","food")
mexican.setAttribute("type","checkbox");
mexican.setAttribute("value","Mexican");
mexican.setAttribute("id","mexican")

var mexicanlabel=document.createElement("label");
mexicanlabel.setAttribute("for","Mexican")
mexicanlabel.innerText="Mexican";
div.append(mbr,mexican,mexicanlabel);

//state
var stbr=document.createElement("br");
var st1br=document.createElement("br");
var st2br=document.createElement("br");
var statelabel=document.createElement("label");
statelabel.setAttribute("for","state");
statelabel.innerText="State:"

var stateinput=document.createElement("input");
stateinput.setAttribute("id","state");
stateinput.setAttribute("class","form-control")
stateinput.setAttribute("type","text");
stateinput.setAttribute("id","state")
stateinput.setAttribute("placeholder","Enter the state name");
stateinput.setAttribute("required","");


div.append(st1br,st1br,statelabel,st2br,stateinput)
//country
var ctbr=document.createElement("br");
var ct1br=document.createElement("br");
var ct2br=document.createElement("br");
var countrylabel=document.createElement("label");
countrylabel.setAttribute("for","country");
countrylabel.innerHTML="Country:"

var countryinput=document.createElement("input");
countryinput.setAttribute("id","country");
countryinput.setAttribute("type","text");
countryinput.setAttribute("required","")
countryinput.setAttribute("placeholder","Enter the country name")
countryinput.setAttribute("class","form-control");

div.append(ct1br,countrylabel,ct2br,countryinput);

var btn=document.createElement("br");
var btn1=document.createElement("br");
var submit=document.createElement("button");
submit.setAttribute("type","submit")
submit.setAttribute("class","btn btn-primary")
submit.setAttribute("id","submit")
submit.innerText="SUBMIT"
form.addEventListener("submit",(event)=>{
    const e=document.getElementById("south")
    foodvalidation()
    event.preventDefault();
    foo();
    


})

div.append(btn1,submit);


//creating the table
var data=document.createElement("div");
data.setAttribute("class","d-flex")
data.style.backgroundColor="black"


document.body.append(data);

var table=document.createElement("table");
table.setAttribute("class","table table-dark table-striped");
data.append(table)
var thead=document.createElement("thead");
table.append(thead)

var th1=document.createElement("th");
th1.innerText="First Name";
var th2=document.createElement("th");
th2.innerText="Last Name";
var th3=document.createElement("th");
th3.innerText="Address";
var th4=document.createElement("th");
th4.innerText="Pincode"
var th5=document.createElement("th");
th5.innerText="Gender";
var th6=document.createElement("th");
th6.innerText="Food";
var th7=document.createElement("th");
th7.innerText="State";
var th8=document.createElement("th");
th8.innerText="Country"

thead.append(th1,th2,th3,th4,th5,th6,th7,th8);

var tbody=document.createElement("tbody");
tbody.setAttribute("class","tbody");
tbody.setAttribute("id","tbody");
table.append(tbody);


function foo(){
    
   


    var table=document.getElementById("tbody")
    var row=table.insertRow();
    var cel1=row.insertCell();
    var cel2=row.insertCell();
    var cel3=row.insertCell();
    var cel4=row.insertCell();
    var cel5=row.insertCell();
    var cel6=row.insertCell();
    var cel7=row.insertCell();
    var cel8=row.insertCell();
    cel1.innerHTML=document.getElementById("first-name").value
    cel2.innerHTML=document.getElementById("last-name").value
    cel3.innerHTML=document.getElementById("address").value
    cel4.innerHTML=document.getElementById("pincode").value
    cel7.innerText=document.getElementById("state").value
    cel8.innerText=document.getElementById("country").value

    function gender(){
        var male=document.getElementById("male");
        var female=document.getElementById("female");
        if(male.checked==true){
            cel5.innerHTML=male.value;
        }
        else if(female.checked==true){
            cel5.innerHTML=female.value
        }
    }
    gender();


    function favoriteFood(){
        var south=document.getElementById("south")
        var north=document.getElementById("north")
        var chinese=document.getElementById("chinese")
        var korean=document.getElementById("korean");
        var mexican=document.getElementById("mexican")
        var values=[];
        var foods=[south,north,chinese,korean,mexican];
           
        for(let i=0;i<foods.length;i++){
            if(foods[i].checked===true){
                values.push(foods[i].value);
            }
        }
        console.log("val",values)
        cel6.innerHTML=values
        
    }
    favoriteFood()


      

    document.getElementById("form").reset();

}


function foodvalidation(){
    const checkbox=document.getElementsByClassName("food");
    const elements=[...checkbox]
    
    let count=0;
    
    for(let i=0;i<elements.length;i++){
       if(elements[i].checked==true){
           count++
       }

    }

    if(count<2){
    confirm("atleast select two foods")
     
    }
    

}
