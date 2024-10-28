console.log("Hello World");

let cards = document.querySelectorAll(".card-div")
// console.log(cards)
// card.addEventListener("click", function(){
//     console.log("Card clicked");
// })

cards.forEach((card) => {
    card.addEventListener("click", function(){
        let playButton = document.createElement("button")
        playButton.innerText = "PLAY"
        playButton.style.backgroundColor = "green"
        // rounded circle
        playButton.style.borderRadius = "50%"   
        card.appendChild(playButton)
    })
})


let nav = document.getElementById("nav")

let sidebar = document.createElement("div")
sidebar.innerText = "Sidebar"
sidebar.style.backgroundColor = "green" 

nav.appendChild(sidebar)


let button = document.createElement("button")
button.innerText = "Click Me"
button.style.backgroundColor = "white"


button.addEventListener("click", function(){
    let newCard = document.createElement("div")
    let cardImg = document.createElement("img")
    cardImg.src = "https://upload.wikimedia.org/wikipedia/en/f/ff/Heart_on_My_Sleeve_ghostwriter977.jpg"
    cardImg.width = "500px"

    let cardTitle = document.createElement("h3")
    cardTitle.textContent = "Ghostwriter"

    let audioPlay = document.createElement("audio")
    audioPlay.controls = true
    audioPlay.src = "https://ia801606.us.archive.org/30/items/ghostwriter-heart-on-my-sleeve-ai-xenen-mix-master-1080p-mux/ghostwriter%20heart%20on%20my%20sleeve%20AI%20XENEN%20Mix%20Master_1080p_MUX.mp4"


    newCard.appendChild(cardImg)
    newCard.appendChild(cardTitle)
    newCard.appendChild(audioPlay)

    newCard.className = "card-div"

    let homepage = document.querySelector("#homepage")
    homepage.appendChild(newCard)

})

let homepage = document.querySelector("#homepage")

homepage.appendChild(button)





{/* <div id="ghostwriter" class="card-div">
    <img width="500px" src="https://upload.wikimedia.org/wikipedia/en/f/ff/Heart_on_My_Sleeve_ghostwriter977.jpg"> 
        ghostwriter
    <div>
        <audio controls autoplay> 
            <source src="https://ia801606.us.archive.org/30/items/ghostwriter-heart-on-my-sleeve-ai-xenen-mix-master-1080p-mux/ghostwriter%20heart%20on%20my%20sleeve%20AI%20XENEN%20Mix%20Master_1080p_MUX.mp4" type="audio/mpeg">
        </audio>  
    </div>
</div> */}