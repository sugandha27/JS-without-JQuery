var listItem=document.getElementById("ourList").getElementsByTagName("li");
var headline=document.getElementById("ourHeadline");
var ourbutton=document.getElementById("ourButton");
var list=document.getElementById("ourList");
var newItemCounter=1;
list.addEventListener("click",activateItem);
function activateItem(e)
{
	if (e.target.nodeName=="LI") 
	{
	headline.innerHTML=e.target.innerHTML;

	}
}
ourbutton.addEventListener("click",createNewItem);

function createNewItem()
{
 list.innerHTML+="<li>Something new "+newItemCounter+"</li>";
 newItemCounter++;
}