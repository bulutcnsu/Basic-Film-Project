function UI(){

}
UI.prototype.addFilmtoUi = function(newFilm){
   

                                      const filmList = document.getElementById("films");
                                    
                                           
                                             const externalHTML = ` <tr>  <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"/></td> 
                                             <td>${newFilm.title}</td>
                                             <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a> </td> </tr>'>`;

                                             filmList.innerHTML += externalHTML;

}

UI.prototype.clearInputs= function(element1, element2,element3){

  element1.value ="";
  element2.value ="";
  element3.value ="";

}

UI.prototype.displayMessages = function(message,type){
const cardBody = document.querySelector(".card-body");

//alert div i olusturma

const div = document.createElement("div");

div.className ='alert alert-${type}';
div.textContent =message;

cardBody.appendChild(div);
setTimeout(function(){
  div.remove();
},1000);
                               
  
}

UI.prototype.loadAllFilms = function(films){

  const filmList = document.getElementById("films");    
  
  films.forEach(function(film){
    const externalHTML = ` <tr> 
     <td><img src="${film.url}" class="img-fluid img-thumbnail"/></td> 
  <td>${film.title}</td>
  <td>${film.director}</td>
  <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a> </td> </tr>'>`;

  filmList.innerHTML += externalHTML;
  
  });

}
UI.prototype.deleteFilmFromUI = function(element){
  element.parentElement.parentElement.remove();

}
UI.prototype.clearAllFilmsFromUI = function(){

  const filmList = document.getElementById("films");
  //filmlis.innerHtml= "";


  while(filmList.firstElementChild !==null){
    filmList.firstElementChild.remove();
  }
}