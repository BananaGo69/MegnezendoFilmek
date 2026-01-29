const Title = document.getElementById("title");
const Genre = document.getElementById("mufaja");
const Pic = document.getElementById("kepurl");
const Add = document.getElementById("add");
const FinalDiv = document.getElementById("card");


Add.addEventListener("click", function(){
    const Tit = Title.value.trim();
    const Gen = Genre.options[Genre.selectedIndex].text;
    // const Img = Pic.value.trim();
    // const AccImage = document.createElement("img");
    // AccImage.href=Img;
    
    const div = document.createElement("div");
    div.className="card";
    div.style.float="left";
    
    const h4 = document.createElement("h4");
    h4.innerText=Tit;
    const p = document.createElement("p");
    p.innerText=Gen;
    const del = document.createElement("button");
    del.innerText="Törlés";

    
    
    div.append(h4);
    div.append(p);
    // AddDiv.append(AccImage);
    div.append(del);
    FinalDiv.append(div);
    del.addEventListener("click", function(){
         FinalDiv.removeChild(div);
    })
})

//  <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%">
//   <div class="container">
//     <h4><b>John Doe</b></h4>
//     <p>Architect & Engineer</p>
//   </div>
// </div> 