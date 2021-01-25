var headercontent = ['Anime Title','Category','Random Season','Remove'];
var parrentTable = document.getElementById('animeListTable');
var ourForm = document.getElementById('addAnimeToWL')
var listArray=[];


function Anime(animeName,animeCategory,animieseason){
    this.animeName=animeName;
    this.animeCategory=animeCategory;
    this.animieseason=getRandomInt();

    listArray.push(this);
}

/*Anime.prototype.renderItems =function(){

    var animeRow = document.createElement('tr');

    var itemName = document.createElement('td');
    itemName.textContent=this.animeName;
    animeRow.appendChild(itemName);

    var itemCategory = document.createElement('td');
    itemCategory.textContent=this.animeCategory;
    animeRow.appendChild(itemCategory);

    var itemSeason = document.createElement('td');
    itemSeason.textContent=this.animieseason;
    animeRow.appendChild(itemSeason);

  

}*/

function renderList(){
    renderHeader();

    for (let index = 0; index < listArray.length; index++) {
        
    
    var animeRow = document.createElement('tr');

    var itemName = document.createElement('td');
    itemName.textContent=listArray[index].animeName;
    animeRow.appendChild(itemName);

    var itemCategory = document.createElement('td');
    itemCategory.textContent=listArray[index].animeCategory;
    animeRow.appendChild(itemCategory);

    var itemSeason = document.createElement('td');
    itemSeason.textContent=listArray[index].animieseason;
    animeRow.appendChild(itemSeason);

    /// deletbtn

    var animeTableRowRemoveBtn = document.createElement('button');
    animeTableRowRemoveBtn.textContent = 'X';
    animeTableRowRemoveBtn.setAttribute('id', index);

    animeTableRowRemoveBtn.addEventListener('click', deleteAnimeFromList);
    animeRow.appendChild(animeTableRowRemoveBtn)

    parrentTable.appendChild(animeRow);



    }



}

function renderHeader(){
    var headerRow = document.createElement('tr');
    var th;

    for (let index = 0; index < headercontent.length; index++) {
        th = document.createElement('th');
        th.textContent=headercontent[index];
        headerRow.appendChild(th)
        
    }
    parrentTable.appendChild(headerRow);
}


function getRandomInt() {
    min = Math.ceil(1);
    max = Math.floor(8);
    return Math.floor(Math.random() * (8 - 1) + 1); 
  }


function submitData(event){
    event.preventDefault();

    var animeName = event.target.animeTitleInput.value;
    var animeCategory = event.target.animeCategory.value;

    var newList = new Anime(animeName,animeCategory)
    //newList.renderItems();


    localStorage.setItem('animeList',JSON.stringify(listArray));

    // deletbtn
    var animeTable = document.getElementById('animeListTable');
    animeTable.innerHTML = '';
    renderList();
    var addAnimeForm = document.getElementById('addAnimeToWL');
    addAnimeForm.reset();




}
function checkList(){
    if (localStorage.getItem('animeList')){
        listArray=JSON.parse(localStorage.getItem('animeList'))
        renderList();
    }
}

/// deletbtn
function deleteAnimeFromList(event){
    var selectedAnime = event.target.id;
    listArray.splice(selectedAnime, 1);
    localStorage.setItem('animeList', JSON.stringify(listArray));
    var animeTable = document.getElementById('animeListTable');
    animeTable.innerHTML = '';
    renderList();
  }


ourForm.addEventListener('submit',submitData);
checkList();
