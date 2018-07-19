var albumName = document.getElementById("album-name"),
    albumArtist = document.getElementById("album-artist"),
    albumButton = document.getElementById("album-button"),
    clearButton = document.getElementById("clear-button"),
    albumList = document.getElementById("album-list"),
    genre = document.getElementById("album-genre"),
    nextId = 0,
    albumArray = [];

var Album = function Album(albumName, albumArtist, genre){
    this.albumName = albumName;
    this.albumArtist = albumArtist;
    this.genre = genre;
    this.id = nextId++;
    
    this.displayAlbum = function displayAlbum(){
        var albumString = "A Great";
        if(this.genre== ""){
            albumString += " Album is " + this.albumName + " by " + this.albumArtist;

        }else {
            albumString += " is " + this.genre + " album is " + this.albumName + " by " + this.albumArtist;
        }
        return albumString;
    }
};

var renderAlbums = function renderAlbums(){
    albumList.innerHTML = "";
    for(var i=0; i < albumArray.length; i++){
        var curAlbum = albumArray[i];
        albumList.innerHTML += i + " : " + curAlbum.displayAlbum() +"<br>";
    }
};

albumButton.addEventListener("click",function(){
    if(albumName.value == ""|| albumArtist.value == "" ){
        alert("missing info");
        return;
    }
    var newAlbum = new Album(albumName.value, albumArtist.value, genre.value);
    albumArray.push(newAlbum);
    clearInput();
    renderAlbums();   
});

var clearInput = function clearInput(){
    albumName.value = "";
    albumArtist.value = "";
    genre.value = "";
}

clearButton.addEventListener("click",function(){
    albumArray = [];
    clearInput();
    renderAlbums();  
});