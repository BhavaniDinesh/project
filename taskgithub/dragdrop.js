let lists=document.getElementsByClassName("list");
let rightBox=document.getElementById("right");
let leftBox=document.getElementById("left");
let centerBox=document.getElementById("center")
for(list of lists){
    list.addEventListener("dragstart",(e)=>{
        let selected=e.target;
        console.log("selected list",selected);

        rightBox.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });
        rightBox.addEventListener("drop",(e)=>{
            rightBox.appendChild(selected);
            selected=null;
        });
        leftBox.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });
        leftBox.addEventListener("drop",(e)=>{
            leftBox.appendChild(selected);
            selected=null;
        });
        // move center to left and right box
        centerBox.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });
        centerBox.addEventListener("drop",(e)=>{
            centerBox.appendChild(selected);
            centerBox.appendChild(selected);
            selected=null;
        });

    })
}
