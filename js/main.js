window.onload = function(){
      var timeline = document.getElementById("timeline"),
        tweet = document.getElementById("tweet"),
        btnNuevoTweet = document.getElementById("btn-agregar");
    var agregarTweet = function () {
        var tarea = tweet.value,
            nuevoTweet = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);
        if(tarea === "") {
            tweet.setAttribute("placeholder", "Agrega un Tweet válido");
            tweet.className = "error";
            return false;
        }
        enlace.appendChild(contenido);
        enlace.setAttribute("href", "#");
        nuevoTweet.appendChild(enlace);
        timeline.insertBefore(nuevoTweet, timeline.childNodes[0]);
        tweet.value = "";
        
        for (var i = 0; i <= timeline.children.length -1; i++){
        timeline.children[i].addEventListener("click",function(){
            this.parentNode.removeChild(this);
        });
    }
    };
    var comprobarInput = function(){
        tweet.className = "";
        tweet.setAttribute = ("placeholder","Agrega una Tweet");
        
    }; 
    var eliminarTweet = function(){
        this.parentNode.removeChild(child);
    };

    btnNuevoTweet.addEventListener("click",agregarTweet);
    tweet.addEventListener("click",comprobarInput);

    for (var i = 0; i <= timeline.children.length -1; i++){
        
        timeline.children[i].addEventListener("click",eliminarTweet);
    }

}


