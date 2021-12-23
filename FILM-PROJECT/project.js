const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlelement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

const ui = new UI();

//tüm eventleri yükleme



//Storage objesini başlatma
const storage = new Storage();

eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);

    });
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
    
}
function  addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlelement.value;


    if(title==="" || director==="" || url===""){

        ui.displayMessages("Tüm alanları Doldurun...","danger");
    }
    else{
      
        const newFilm = new Film(title,director,url);
     
        ui.addFilmtoUi(newFilm);
        storage.addFilmToStorage(newFilm);//Storage a film ekleme
       
        ui.displayMessages("Film başarıyla eklendi...","success");
     

    }

    e.preventDefault();

}
function deleteFilm(e){

    if(e.target.id== "delete-film"){

        ui.deleteFilmFromUI(e.target);
    }
   // console.log(e.target);
}
function clearAllFilms(){
    
     if(confirm("Emin misiniz?")){

        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
     }
 

}