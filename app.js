var headercontent = ['Anime Title','Category','Random Season','Remove'];
var parrentTable = document.getElementById('animeListTable');
var ourForm = document.getElementById('addAnimeToWL')
var listArray=[];


function Anime(animeName,animeCategory,animieseason){
    this.animeName=animeName;
    this.animeCategory=animeCategory;
    this.animieseason=getRandomInt(1,8);
    listArray.push(this);
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }


function submitData(event){
    event.preventDefault();

    var animeName = event.target.animeTitleInput.value;
    var animeCategory = event.target.animeCategory.value;
    var animieseason= getRandom(1,8);



}



ourForm.addEventListener('submit',submitData)
