/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <YOUR_NAME>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

function generateSongsList(artistSong) {
    let songsDivNew = document.querySelector("#songs")
    let songCard = document.createElement("div") // table rows here
    
    // img 
    let songImg = document.createElement("img")
    songImg.className = "songImg"
    songImg.src = artistSong.albumCover

    // // video 
    // let songImg = document.createElement("video")
    // // songImg.className = "songImg"
    // songImg.src = artistSong.audioMP4
    // songImg.controls = true
    // songImg.style.width = "100%"
    // songImg.style.height = "100%"



    // title 
    let songTitle = document.createElement("h2")
    songTitle.textContent = artistSong.title

    // artist
    let songArtist = document.createElement("p")
    selectedArtist = artists.find((artist) => {
        return artist.artistID === artistSong.artistID
    })

    songArtist.textContent = selectedArtist.name

    songCard.appendChild(songImg)
    songCard.appendChild(songTitle)
    songCard.appendChild(songArtist)

    songCard.className = "songCard"
    // console.log()
    songsDivNew.appendChild(songCard)
}

function generateArtistList() {
    let homepage = document.querySelector("#homepage")
    artists.forEach((artist) => {
        let artistButton = document.createElement("img")

        artistButton.className = "artistButton"

        artistButton.src = artist.profilePic


        homepage.appendChild(artistButton)

        artistButton.addEventListener("click", function(){
            console.log(artist.name)
            // check if existing songs are displayed
            let songsDiv = document.querySelector("#songs")
            if(songsDiv){
                songsDiv.remove()  // table body removed (existing songs)
            }
            
            const songsDivNew = document.createElement("div") // table body recreated (new one created to hold the new artist songs)
            songsDivNew.id = "songs"
            // songsDivNew.style.backgroundColor = "black"
            songsDivNew.className = "songsDiv"

            homepage.appendChild(songsDivNew)

            let artistSongs = songs.filter((song) => {
                return song.artistID === artist.artistID
            })
            
            artistSongs.forEach((artistSong) => {
                generateSongsList(artistSong)
            })


            
        })
    })  
}

document.addEventListener("DOMContentLoaded", function(){
    console.log("loaded!")

    generateArtistList()
})