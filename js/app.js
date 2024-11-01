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

function generateArtistList() {
    let homepage = document.querySelector("#homepage")
    artists.forEach((artist) => {
        let artistButton = document.createElement("button")
        artistButton.innerText = artist.name
        artistButton.style.backgroundColor = "green"
        artistButton.style.borderRadius = "50%"
        artistButton.style.margin = "10px"
        artistButton.style.padding = "10px"

        homepage.appendChild(artistButton)

        artistButton.addEventListener("click", function(){
            let artistSongs = songs.filter((song) => {
                return song.artistID === artist.artistID
            })

            artistSongs.forEach((artistSong) => {
                let songP = document.createElement("p")
                songP.innerText = artistSong.title

                homepage.appendChild(songP)
            })


            
        })
    })  
}

document.addEventListener("DOMContentLoaded", function(){
    console.log("loaded!")

    generateArtistList()
})