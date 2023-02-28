

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

// variables pour stocker les valeurs validées pour le formulaire
let firstNameValue;
let lastNameValue;
let emailValue;
let NumberOfTournamentValue;
let locationValue;
let checkboxValue;



//            VALIDATION DU PRENOM

function firstCheck() {
  const firstInput = document.querySelector('#first');
  const firstValue = firstInput.value.trim();

  // Recherche d'un message d'erreur pour ce champ
  const errorMessage = firstInput.parentNode.querySelector('.error-message');

  if (firstValue.length < 2 || firstValue === ''){
    console.log("Prénom invalide");
    // Création et ajout du message d'erreur s'il n'existe pas encore
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Le prénom est invalide. Il doit comporter au moins deux caractères.";
      firstInput.parentNode.appendChild(newErrorMessage);
    }
    return false;
  }

  console.log("Prénom valide");
  firstNameValue = firstValue;

  // Suppression du message d'erreur s'il existe
  if (errorMessage) {
    errorMessage.remove();
  }

  return true;
}

//            VALIDATION DU NOM

function lastCheck() {
  const lastInput = document.querySelector('#last');
  const lastValue = lastInput.value.trim();

  // Recherche d'un message d'erreur pour ce champ
  const errorMessage = lastInput.parentNode.querySelector('.error-message');

  if (lastValue.length < 2 || lastValue === ''){
    console.log("Nom invalide");
    // Création et ajout du message d'erreur s'il n'existe pas encore
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Le nom est invalide. Il doit comporter au moins deux caractères.";
      lastInput.parentNode.appendChild(newErrorMessage);
    }
    return false;
  }

  console.log("Nom valide");
  lastNameValue = lastValue;

  // Suppression du message d'erreur s'il existe
  if (errorMessage) {
    errorMessage.remove();
  }

  return true;
}

//            VALIDATION DU MAIL

function emailCheck() {
  const mailInput = document.querySelector('#email');
  const mailValue = mailInput.value.trim();
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = mailRegex.test(mailValue);

  // Recherche d'un message d'erreur pour ce champ
  const errorMessage = mailInput.parentNode.querySelector('.error-message');

  if (!isEmailValid) {
    console.log("Mail invalide");
    // Création et ajout du message d'erreur s'il n'existe pas encore
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "L'adresse e-mail est invalide.";
      mailInput.parentNode.appendChild(newErrorMessage);
    }
    return false;
  }
  console.log("Mail valide");
  emailValue = mailValue;

  // Suppression du message d'erreur s'il existe
  if (errorMessage) {
    errorMessage.remove();
  }

  return true;
}

//            VALIDATION DATE DE NAISSANCE

function birthdateCheck() {
  const birthdateInput = document.querySelector('#birthdate');
  const birthdateValue = birthdateInput.value.trim();
  const errorMessage = birthdateInput.parentNode.querySelector('.error-message');
  const currentDate = new Date();
  const minAge = 15;
  const minBirthdate = new Date(currentDate.getFullYear() - minAge, currentDate.getMonth(), currentDate.getDate());
  
  if (birthdateValue === '') {
    console.log("Date de naissance invalide");
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Vous devez entrer votre date de naissance.";
      birthdateInput.parentNode.appendChild(newErrorMessage);
    } else {
      errorMessage.textContent = "Vous devez entrer votre date de naissance.";
    }
    return false;
  }
  
  const birthdate = new Date(birthdateValue);

  if (birthdate > minBirthdate) {
    console.log("Date de naissance invalide");
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Vous devez être âgé d'au moins 15 ans.";
      birthdateInput.parentNode.appendChild(newErrorMessage);
    } else {
      errorMessage.textContent = "Vous devez être âgé d'au moins 15 ans.";
    }
    return false;
  }

  console.log("Date de naissance valide");

  // Suppression du message d'erreur s'il existe
  if (errorMessage) {
    errorMessage.remove();
  }

  return true;
}

//            VALIDATION NOMBRE DE TOURNOIS

function quantityCheck() {
  const quantityInput = document.querySelector('#quantity');
  const quantityValue = quantityInput.value.trim();
  const errorMessage = quantityInput.parentNode.querySelector('.error-message');

  if (quantityValue === '') {
    console.log("Nombre invalide");
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Veuillez indiquer un nombre.";
      quantityInput.parentNode.appendChild(newErrorMessage);
    }
    return false;
  }

  const quantityNumber = Number(quantityValue);
  if (quantityNumber < 0) {
    console.log("Nombre invalide");
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Veuillez indiquer un nombre.";
      quantityInput.parentNode.appendChild(newErrorMessage);
    }
    return false;
  }

  console.log("Nombre valide");
  NumberOfTournamentValue = quantityNumber;
  
  if (errorMessage) {
    errorMessage.remove();
  }

  return true;
}

//            VALIDATION BOUTONS RADIO

/**
     * Vérifie si une localisation est cochée
     */

function locationCheck() {
  const locationInputs = document.querySelectorAll('input[name="location"]');
  let isLocationValid = false;
  const errorMessage = document.querySelector('#location-error-message');

  for (let i = 0; i < locationInputs.length; i++) {
    if (locationInputs[i].checked) {
      isLocationValid = true;
      locationValue = locationInputs[i].value;
      break;
    }
  }

  if (!isLocationValid) {
    console.log("Bouton radio invalide");
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');
      newErrorMessage.setAttribute('id', 'location-error-message');
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Vous devez sélectionner une localisation.";
      const lastLocationInput = locationInputs[locationInputs.length - 1];
      lastLocationInput.parentNode.parentNode.insertBefore(newErrorMessage, lastLocationInput.parentNode.nextSibling);
    }
    return false;
  } else {
    console.log("Bouton radio valide");
    if (errorMessage) {
      errorMessage.remove();
    }
    return true;
  }
}

//            VALIDATION CONDITIONS GENERALES

function checkboxCheck() {
  const checkboxInput = document.querySelector('#checkbox1');
  const errorMessage = checkboxInput.parentNode.querySelector('.error-message');

  if (!checkboxInput.checked) {
    console.log("Conditions générales invalides");
    // Création et ajout du message d'erreur s'il n'existe pas encore
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
      checkboxInput.parentNode.appendChild(newErrorMessage);
    }
    return false;
  }
  console.log("Conditions générales valides");
  checkboxValue = true;

  // Suppression du message d'erreur s'il existe
  if (errorMessage) {
    errorMessage.remove();
  }

  return true;
}

//            VALIDATION DU FORMULAIRE
function validate() {
  const isFirstNameValid = firstCheck();
  const isLastNameValid = lastCheck();
  const isEmailValid = emailCheck();
  const isBirthdateValid = birthdateCheck();
  const isQuantityValid = quantityCheck();
  const isLocationValid = locationCheck();
  const isCheckboxValid = checkboxCheck();

  if (isFirstNameValid && isLastNameValid && isEmailValid && isBirthdateValid && isQuantityValid && isLocationValid && isCheckboxValid) {
    console.log("Le formulaire est valide");
    return true;
  } else {
    console.log("Le formulaire est invalide");
    return false;
  }
}

const submitButton = document.querySelector('#formSubmit');

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // empêche l'envoi automatique du formulaire
  if (validate()) {
    form.submit(); // envoie le formulaire
  }
});