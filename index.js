function appendPlayer(playerName){

const main = document.querySelector("main")

const newArticle = document.createElement("article")

const public = document.createElement("img")

public.alt = "";
public.src = "img/public.jpg";
public.classList.add("public");

const player = document.createElement("img")

player.alt = "";
player.src = `img/${playerName}/pic.png`;
player.classList.add("player");


newArticle.appendChild(public)
newArticle.appendChild(player)
main.appendChild(newArticle)

}

const players = ["Kalimuendo", "Sotoca"];

for (let i = 0; i < players.length; i++){

appendPlayer(players[i])
}
