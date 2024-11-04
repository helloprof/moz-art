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
    let songP = document.createElement("p") // table rows here
    songP.innerText = artistSong.title

    songsDivNew.appendChild(songP)
}

function generateArtistList() {
    let homepage = document.querySelector("#homepage")
    artists.forEach((artist) => {
        let artistButton = document.createElement("button")
        let icon = document.createElement("i")
        icon.className = "fas fa-user"
        
        artistButton.innerText = artist.name
        artistButton.style.backgroundColor = "green"
        artistButton.style.borderRadius = "30px"
        artistButton.style.margin = "10px"
        artistButton.style.padding = "10px"
        artistButton.appendChild(icon)


        homepage.appendChild(artistButton)

        artistButton.addEventListener("click", function(){

            // check if existing songs are displayed
            let songsDiv = document.querySelector("#songs")
            if(songsDiv){
                songsDiv.remove()  // table body removed (existing songs)
            }
            
            const songsDivNew = document.createElement("div") // table body recreated (new one created to hold the new artist songs)
            songsDivNew.id = "songs"
            songsDivNew.style.backgroundColor = "black"

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