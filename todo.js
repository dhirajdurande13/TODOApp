let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let btn=document.querySelector("button");

btn.addEventListener("click",function()
{
    let li=document.createElement("li");
    li.innerText=inp.value;
   
    let delbutton=document.createElement("button");
    delbutton.innerText="delete";
    delbutton.classList.add("delete");
    li.appendChild(delbutton);
    console.log(inp.value);
    ul.appendChild(li);
    inp.value="";//make empty after add
})


// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns)
// {
//     delbtn.addEventListener("click",function()
//     {
//         let par=this.parentElement;
//         par.remove();
//         console.log(par);
//     })
    //applied properties properties are not apply on existing element new added element is not deletedhence we apply event delegation :insted of child element we apply this event on parent element
// }


ul.addEventListener("click",function(event)
{
    // console.log(event.target);//target specific element
    // console.log(event.target.nodeName);//which element have targete.is button or div or any other

    if(event.target.nodeName=="BUTTON")
    {
        let item=event.target.parentElement;
        item.remove();
        console.log(item);
    }
    // console.log("clicked");
})
