var guestname = document.getElementById("name1").Value;
name_of_people.push(guestname);
var guestname = document.getElementById("name2").Value;
name_of_people.push(guestname);
var guestname = document.getElementById("name3").Value;
name_of_people.push(guestname);
var guestname = document.getElementById("name4").Value;
name_of_people.push(guestname);
name_of_people.sort();

function searching()
{
var s=document.getElementById("s1").Value;
var found=0;
var j;
for(j=0; j<name_of_people.length; j++)
{
if (s==names_of_people[j]){
   found=found+1;
 }
}
document.getElementById("p2").innerHTML="name found" "+found+" "time/s";
console.log("found name" "+found+" "time/s");
}