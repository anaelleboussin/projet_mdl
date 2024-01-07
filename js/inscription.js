// selecteur du html
var form = document.querySelector("form");
var info = document.querySelector("#info");

// evenement
form.onsubmit = function (event) {
  // pour empecher la redirection
  event.preventDefault();
  // pour recuperer le formulaire
  var data = new URLSearchParams(new FormData(form));

  // la requete sur le serveur
  fetch(form.action, { // action = lien vers le serveur
    method: form.method, // method = method du html
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: data.toString()
  }).then(function(res) {
    // on regarde si c'est ok
    if(res.status == 200) {
      info.innerText = "Utilisateur ajouté";
    } 
    else {
      info.innerText = "Erreur";
    }
  });
}


function getUsers(callback) { // aide de Pierre pour cette fonction
  const adress = "https://api.mdl.veagle.fr/api/members";
  try {
   fetch(adress)
     .then((res) => res.json())
     .then((res) => {
       const names = res.data.map(value => `${value.firstName} ${value.lastName}`);
       callback(names);
     })
  } catch (err) {
   console.error(err);
   callback([]);
  }
}

// selecteur pour la liste
var ul = document.querySelector("ul")
getUsers((users) => {
   for (const user of users) { // pour chaque membre on met un li
       var element = document.createElement("li");
       element.innerText = user      
       ul.appendChild(element);
   }
})
