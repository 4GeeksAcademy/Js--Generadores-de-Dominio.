
let pronnoun = ['the', 'our'];
let adjective = ['great', 'big'];
let noun = ['jogger', 'racoon', 'pasiones', 'comsocom'];
let domain = ['es', 'com', 'org', 'net'];


window.onload = function() {
console.log("JS ejecutandose");

const listaDominios = document.getElementById("domain-list");

for (let i = 0; i < pronnoun.length; i++) {
for (let j = 0; j < adjective.length; j++) {
for (let n = 0; n < noun.length; n++) {
for (let d = 0; d < domain.length; d++) {

let nombreCompleto = pronnoun[i] + adjective[j] + noun[n] + "." + domain[d];
let option = document.createElement("option");
option.value = nombreCompleto;
option.textContent = nombreCompleto;

listaDominios.appendChild(option);

  


  }
  }
  }
  }
  };
  