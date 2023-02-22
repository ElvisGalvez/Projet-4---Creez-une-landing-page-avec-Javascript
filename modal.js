

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close"); // Selectionne l'élément ayant la classe ".close" et le stocke dans une variable
const form = document.querySelector('#form');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction déclenchée lorsque l'on clique sur l'icône de la barre de navigation en version mobile
// Modifie la classe CSS de l'élément ID "MyTopnav" afin d'ajouter ou supprimer la classe "responsive"

function editNav() { 
  var x = document.getElementById("myTopnav"); 
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//            FERMETURE DE LA MODALE


// Ajoute un évènement de clic sur ".close" (sélectionné dans la const closeModal)

closeModal.addEventListener("click", closeModalFunction);

//Ajoute une fonction qui va changer "modalbg" en display = none
function closeModalFunction() {
  modalbg.style.display = "none";
}


//            VALIDATION DU PRENOM

function firstCheck() {
  const firstInput = document.querySelector('#first');
  const firstValue = firstInput.value;
  
  if (firstValue.length < 2 || firstValue === ''){
    console.log("Prénom invalide");
    return false;
  }
  console.log("Prénom valide");
  return true;
}

//            VALIDATION DU NOM

function lastCheck() {
  const lastInput = document.querySelector('#last');
  const lastValue = lastInput.value;
  if (lastValue.length < 2 || lastValue === ''){
    console.log("Nom invalide");
    return false;
  }
  console.log("Nom valide");
  return true;
}

//            VALIDATION DU MAIL

function emailCheck() {
  const emailInput = document.querySelector('#email');
  const emailValue = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(emailValue);

  if (!isEmailValid) {
    console.log("Mail invalide");
    return false;
  }
  console.log("Mail valide");
  return true;
}

//            VALIDATION NOMBRE DE TOURNOIS

function quantityCheck() {
  const quantityInput = document.querySelector('#quantity');
  const quantityValue = quantityInput.value;
  
  if (isNaN(quantityValue) || quantityValue === '') {
    console.log("Nombre invalide");
    return false;
  }
  console.log("Nombre valide");
  return true;
}

//            VALIDATION BOUTONS RADIO

function locationCheck() {
  const locationInputs = document.querySelectorAll('input[name="location"]');
  let isLocationValid = false;

  for (let i = 0; i < locationInputs.length; i++) {
    if (locationInputs[i].checked) {
      isLocationValid = true;
      break;
    }
  }

  if (!isLocationValid) {
    console.log("Bouton radio invalide");
  } else {
    console.log("Bouton radio valide");
  }

  return isLocationValid;
}

//            VALIDATION CONDITIONS GENERALES

function checkboxCheck() {
  const checkboxInput = document.querySelector('#checkbox1');
  
  if (!checkboxInput.checked) {
    console.log("Conditions générales invalides");
    return false;
  }
  console.log("Conditions générales valides");
  return true;
}

//            VALIDATION DU FORMULAIRE
function validate() {
  const isFirstNameValid = firstCheck();
  const isLastNameValid = lastCheck();
  const isEmailValid = emailCheck();
  const isQuantityValid = quantityCheck();
  const isLocationValid = locationCheck();
  const isCheckboxValid = checkboxCheck();

  if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isQuantityValid || !isLocationValid || !isCheckboxValid) {
    console.log("Le formulaire est valide");
    return false;
  }
  console.log("Le formulaire est invalide");
  return true;
}

form.addEventListener('submit', function (event) {
  if (!validate()) {
    event.preventDefault();
  }
});