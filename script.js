var bt_dep = document.getElementById("bt1");
var bt_link = document.getElementById("bt0");

var contenu = document.querySelectorAll(".desc");

var voye = document.getElementById("envoyer");
var j = document.getElementById("day")
var m = document.getElementById("mois")
var a = document.getElementById("anne")
var h = document.getElementById("heur")
var mn = document.getElementById("minute")
var ap = document.getElementById("ampm")





/* page 2 */
if(contenu){

    contenu.forEach((bouton) =>{

        bouton.addEventListener('click', ()=> {

        var Andwa = bouton.querySelector("h3").textContent;
        console.log(Andwa)
        localStorage.setItem("lieu", Andwa)
        window.open("page3.html", "_blank");
        
        });

    });


}





/* page 3 */


 function envoy(lieu, jour, mois, annee, heure, minutes, ampm  ) {
    fetch("https://script.google.com/macros/s/AKfycbwem6xzkXOKfCkeC2Lhayg_4-yEnVUFy8VXhF4xxdlrG84lpCO2Nwoe1hZPpPTgN2pz/exec", {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams({
    lieu: lieu,
    jour: jour,
    mois: mois,
    annee: annee,
    heure: heure,
    minutes: minutes,
    ampm: ampm

    })
  });
}


if(voye){

    voye.addEventListener('click', ()=> {

        localStorage.setItem("jour", j.value);
        localStorage.setItem("mois", m.value);
        localStorage.setItem("annee", a.value);
        localStorage.setItem("heure", h.value);
        localStorage.setItem("minutes", mn.value);
        localStorage.setItem("AMPM", ap.value);


        var lye  =  localStorage.getItem("lieu");

        var jou = localStorage.getItem("jour");
        var moi  = localStorage.getItem("mois");
        var ann  = localStorage.getItem("annee");
        var heur = localStorage.getItem("heure");
        var minut = localStorage.getItem("minutes");
        var matap =localStorage.getItem("AMPM");


        envoy(lye, jou, moi, ann, heur, minut, matap);
            
            


    });

    
}


 




/* Page 1 */
if (bt_link){

    bt_link.addEventListener('click', ()=> {

        window.open("page2.html", "_blank");

    });

}
if(bt_dep){

    bt_dep.addEventListener('click', () => {

        console.log("salut");
        bt_dep.classList.toggle("disparet");
    
    
    });

}



