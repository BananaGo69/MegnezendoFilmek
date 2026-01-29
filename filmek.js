const Title = document.getElementById("title");
const Genre = document.getElementById("mufaja");
const Pic = document.getElementById("kepurl");
const Add = document.getElementById("add");
const AddDiv = document.getElementById("card");


Add.addEventListener("click", function(){
    const Tit = Title.value.trim();
    const Gen = Genre.options[Genre.selectedIndex].text;
    // const Img = Pic.value.trim();
    // const AccImage = document.createElement("img");
    // AccImage.href=Img;
    
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    h4.innerText=Tit;
    const p = document.createElement("p");
    p.innerText=Gen;
    const del = document.createElement("button");

    
    
    div.append(h4);
    div.append(p);
    // AddDiv.append(AccImage);
    AddDiv.append(div);
    AddDiv.append(del);
    // del.addEventListener("click", function(){
         //AddDiv.remove();
    // })
})

//  <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%">
//   <div class="container">
//     <h4><b>John Doe</b></h4>
//     <p>Architect & Engineer</p>
//   </div>
// </div> 