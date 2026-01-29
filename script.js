const Title = document.getElementById("title");
const Genre = document.getElementById("mufaja");
const Pic = document.getElementById("kepurl");
const Add = document.getElementById("add");
const FinalDiv = document.getElementById("card");

Add.addEventListener("click", function(){
    const Tit = Title.value.trim();
    const Gen = Genre.options[Genre.selectedIndex].text;
    const Img = Pic.value.trim();

    if (Tit == "" || Img == "") {
        alert("Oops! Valami hiba van!");
        return;
    }

    const AccImage = document.createElement("img");
    AccImage.src=Img;
    AccImage.style.width="70%";
    AccImage.style.display="block";
    AccImage.style.margin="0 auto"
    
    

    const div = document.createElement("div");
    div.classList="card";
    div.style.float="left";
    div.style.boxShadow="0 8px 16px 0 black"
    
    const h3 = document.createElement("h3");
    h3.innerText=Tit;
    h3.style.textAlign="center";
    const p = document.createElement("p");
    p.innerText=Gen;
    const del = document.createElement("button");
    del.innerText="Törlés";
    del.style.display="block";
    del.style.margin="auto";

    
    div.append(AccImage);
    div.append(h3);
    div.append(p);
    div.append(del);
    FinalDiv.append(div);
    del.addEventListener("click", function(){
         FinalDiv.removeChild(div);
    })
})
