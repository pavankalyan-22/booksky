var k=document.querySelector(".bgblur")
var l=document.querySelector(".pop-box")
var j=document.getElementById("pop-btn")

j.addEventListener("click",function(){
    k.style.display="block" 
    l.style.display="block"
})

var cancelbtn=document.getElementById("cancle-book")

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    k.style.display="none" 
    l.style.display="none"
})

var con=document.querySelector(".container")
var addbtn=document.getElementById("add-book")
var booktitle=document.getElementById("book-name")
var bookauthor=document.getElementById("book-author")
var shortdec=document.getElementById("short-dec")

addbtn.addEventListener("click",function(event){
    event.preventDefault()
    k.style.display="none" 
    l.style.display="none"
    var div=document.createElement("div");
    div.setAttribute("class","box");
    div.innerHTML=`<h1>${booktitle.value}</h1>
    <h3>${bookauthor.value}</h3>
    <p>${shortdec.value}
    </p>
    <button onclick="del(event)">Delete</button>`
    con.append(div)

})

function del(event){
    event.target.parentElement.remove()
}