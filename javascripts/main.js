"use strict";

console.log("hello jQuery");

var topArticle = document.getElementById("top-article");
console.log("top query", topArticle);

// get element by id
var article = $("#top-article");
console.log("article jquery", article[0]); // to give the first one in the array.

var allButtons = document.getElementsByTagName("button");
console.log("all buttons by TagName", allButtons);

// remember this returns an array
var jbutton = $("button");
console.log("jbutton", jbutton, jbutton.html());

///////////////////////// Select by class  /////////////////////////

var mainArticles = document.getElementsByClassName("article--main");
// console.log("main article", mainArticles);

$(".article--main").each((arrayIndex, currentElement) => {
    $(currentElement).html("hello world");
});

var umbrellaElement = $("h1[umbrella='open']");
// console.log("umbrella text: ", umbrellaElement.next().html());


// Handling events
$("#destroyer").click((evt) => {
    if ($("#destroyer").text() == 'Hide Songs') {
       $(".song-container").hide("slow");
       $("#destroyer").text('Show Songs');
    } else {
       $(".song-container").show("fast");
       $("#destroyer").text('Hide Songs');
    }
 });

 function functionIWantjQueryToExecute(songList) {
    console.log("who is this", songList);

    if(songList.songs){
      for (var i = 0; i < songList.songs.length; i++) {
        var currentSong = songList.songs[i];
        $("#list-of-songs").append(`<h1>${currentSong.title}</h1>`);
        $("#list-of-songs").append(`<div>Performed by ${currentSong.artist}</div>`);
        $("#list-of-songs").append(`<div>On the album <strong>${currentSong.album}</strong></div>`);
      }
    }
  }

// make json call using ajax and promise
function makeAPICall(url) {
    return $.ajax({
    url: url,
    dataType: "json"
    });
    }
    
    makeAPICall('javascripts/songs.json')
    .then((resolve) => {
    console.log("makeCallResolve", resolve);
    functionIWantjQueryToExecute(resolve);
    },
    (reject) => {
    console.log("SOMETHING WENT REALLY WRONG");
    });