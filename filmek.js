const Title = document.getElementById("title");
const Genre = document.getElementById("mufaja");
const Pic = document.getElementById("kepurl");
const Add = document.getElementById("add");


Add.addEventListener("click", function(){
    const Tit = Title.value.trim();
    const Gen = Genre.options[Genre.selectedIndex].text;  
    const Img = Pic.value.trim();
    const AccImage = document.createElement("img");
    
    const table = document.createElement("table");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const tr = document.createElement("tr");
    const del = document.createElement("button");
})