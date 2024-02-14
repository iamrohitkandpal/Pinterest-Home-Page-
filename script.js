arr = [
    {name:"Tree Mirror Reflection", image:"https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?q=80&w=972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Life on the Edge", image:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Man Over the Orange", image:"https://images.unsplash.com/photo-1683009427500-71296178737f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Untouched Green Fields", image:"https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Orange Magic", image:"https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"An Unforgettable Evening", image:"https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Cult Bonfire Party", image:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Sea of Mysteries", image:"https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Water & Fire in One Frame", image:"https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"The Best Minimal Pic", image:"https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Colourful Flavours of Nature", image:"https://images.unsplash.com/photo-1522764725576-4cbbbf12c16d?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Trail to Peace or Thrill", image: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"See the Home of an Artist", image: "https://images.unsplash.com/photo-1707126964251-431079840536?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Fountain in Forest", image:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Rain: Music of Nature", image: "https://images.unsplash.com/photo-1707697781368-d4f7a152510e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},
    {name:"Deligtful Dinner", image: "https://images.unsplash.com/photo-1707682687738-e06bfdb20e26?q=80&w=467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Sleeping Beauty", image: "https://images.unsplash.com/photo-1580553680518-54cc86c7f194?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Donut Dream", image: "https://images.unsplash.com/photo-1624300162353-4638839fbfc9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Stealth Cat Family", image: "https://images.unsplash.com/photo-1707822906788-fc14584820d3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Sweetness Overloaded", image: "https://images.unsplash.com/photo-1610970882161-9528bb92589a?q=80&w=438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"As White As Snow", image: "https://images.unsplash.com/photo-1707822906847-ae2db63f3386?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Love of Food", image: "https://images.unsplash.com/photo-1707879486421-4dd414cad505?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]


function addingImages(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box" >
        <img src="${obj.image}" alt="image"/>
        <div class="caption">${obj.name}</div>
        </div>`;
    });
    
    document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    
    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })
    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input.addEventListener("input", function () {
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var butter = "";
        filteredArray.forEach(function (obj) {
            butter += `<div class="res">
            <i class="ri-search-line" style="margin-right: 1.25rem; 
font-weight: 600; "></i>
            <h3>${obj.name}</h3>
        </div>`
        })

        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = butter;
    })
    input.addEventListener("blur", function () {
        document.querySelector(".searchdata").style.display = "none";
    })
}

handleSearchFunctionality();
addingImages();