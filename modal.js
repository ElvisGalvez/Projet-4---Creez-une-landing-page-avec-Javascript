

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
let dateOfBirthValue;
let NumberOfTournamentValue;
let locationValue;
let checkboxValue;



//            VALIDATION DU PRENOM

function firstCheck() {

  // récupère la valeur du champ "prénom" et la définie dans une constante 'firstInput'
  // défini une constante en utilisant la propriété value de 'firstInput'
  const firstInput = document.querySelector('#first');
  const firstValue = firstInput.value.trim();

  // Recherche d'un message d'erreur éventuellement déjà créé dans le parent de 'firstInput'
  const errorMessage = firstInput.parentNode.querySelector('.error-message');

  // Vérifie les conditions de non-validité de la fonction
  if (firstValue.length < 2 || firstValue === '') {
    console.log("Prénom invalide");

    // Création et ajout du message d'erreur s'il n'existe pas encore
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');

      // ajoute une classe à 'newErrorMessage'
      // ajoute du texte à 'newErrorMessage'
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Le prénom est invalide. Il doit comporter au moins deux caractères.";

      //  ajoute 'newErrorMessage' en tant qu'enfant du parent de 'firstInput'.
      firstInput.parentNode.appendChild(newErrorMessage);
    }
    return false;
  }

  console.log("Prénom valide");

  // En cas de validité, stocke la valeur de 'firstValue' dans 'firstNameValue'
  firstNameValue = firstValue;

  // test de l'existence de errorMessage dans le parent de firstInput
  // supprime errorMessage du DOM
  if (errorMessage) {
    errorMessage.remove();
  }

  return true;
}

//            VALIDATION DU NOM

function lastCheck() {

  // récupère la valeur du champ "nom" et la définie dans une constante 'lastInput'
  // défini une constante en utilisant la propriété value de 'lastInput'
  const lastInput = document.querySelector('#last');
  const lastValue = lastInput.value.trim();

  // Recherche d'un message d'erreur éventuellement déjà créé dans le parent de 'lastInput'
  const errorMessage = lastInput.parentNode.querySelector('.error-message');

  // Vérifie les conditions de non-validité de la fonction
  if (lastValue.length < 2 || lastValue === '') {
    console.log("Nom invalide");
    // Création et ajout du message d'erreur s'il n'existe pas encore
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');

      // ajoute une classe à 'newErrorMessage'
      // ajoute du texte à 'newErrorMessage'
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Le nom est invalide. Il doit comporter au moins deux caractères.";

      //  ajoute 'newErrorMessage' en tant qu'enfant du parent de 'firstInput'.
      lastInput.parentNode.appendChild(newErrorMessage);
    }
    return false;
  }

  // En cas de validité, stocke la valeur de 'lastValue' dans 'lastNameValue'
  console.log("Nom valide");
  lastNameValue = lastValue;

  // test de l'existence de errorMessage dans le parent de firstInput
  // supprime errorMessage du DOM
  if (errorMessage) {
    errorMessage.remove();
  }

  return true;
}


//            VALIDATION DU MAIL

function emailCheck() {

  // récupère la valeur du champ "email" et la définie dans une constante 'mailInput'
  // défini une constante en utilisant la propriété value de 'mailInput'
  const mailInput = document.querySelector('#email');
  const mailValue = mailInput.value.trim();

  // défini une constante avec une expression régulière pour vérifier le format du mail
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // stocke la valeur valide du mail si 'mailValue' passe le test de 'mailRegex'
  const mailValid = mailRegex.test(mailValue);

  // Recherche d'un message d'erreur éventuellement déjà créé dans le parent de 'mailInput'
  const errorMessage = mailInput.parentNode.querySelector('.error-message');

  if (!mailValid) {
    console.log("Mail invalide");
    // Création et ajout du message d'erreur s'il n'existe pas encore
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');

      // ajoute une classe à 'newErrorMessage'
      // ajoute du texte à 'newErrorMessage'
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "L'adresse e-mail est invalide.";

      //  ajoute 'newErrorMessage' en tant qu'enfant du parent de 'mailInput'.
      mailInput.parentNode.appendChild(newErrorMessage);
    }
    return false;
  }

  // En cas de validité, stocke la valeur de 'mailValue' dans 'emailValue'
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

  // récupère la valeur du champ 'birthdate' et la définie dans une constante 'birthdateInput'
  // défini une constante en utilisant la propriété value de 'birthdateInput'
  const birthdateInput = document.querySelector('#birthdate');
  const birthdateValue = birthdateInput.value;

  // Recherche d'un message d'erreur éventuellement déjà créé dans le parent de 'lastInput'
  const errorMessage = birthdateInput.parentNode.querySelector('.error-message');

  // Déclare une constante afin de stocker la date actuelle en utilisant l'objet 'Date'
  // Défini un âge minimum et le stocke dans 'minAge'
  const currentDate = new Date();
  const minAge = 15;

  // Déclare une connstante qui soustrait la date acutelle à l'âge minimum autorisé
  const minBirthdate = new Date(currentDate.getFullYear() - minAge, currentDate.getMonth(), currentDate.getDate());

  // Vérifie si le champ est vide
  if (birthdateValue === '') {
    console.log("Date de naissance invalide");

    // Création et ajout du message d'erreur s'il n'existe pas encore
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');

      // ajoute une classe à 'newErrorMessage'
      // ajoute du texte à 'newErrorMessage'
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Vous devez entrer votre date de naissance.";

      //  ajoute 'newErrorMessage' en tant qu'enfant du parent de 'birthdateInput'.
      birthdateInput.parentNode.appendChild(newErrorMessage);

      //  si le message existe déjà, modifie son texte
    } else {
      errorMessage.textContent = "Vous devez entrer votre date de naissance.";
    }
    return false;
  }

  // Créé un nouvel objet 'Date' à partir de la date de naissance donnée par l'utilisateur
  const birthdate = new Date(birthdateValue);

  //vérifie si la date fournie est suppérieure à l'âge minimum requis
  if (birthdate > minBirthdate) {
    console.log("Date de naissance invalide");

    // Création et ajout du message d'erreur s'il n'existe pas encore
    // ajoute une classe à 'newErrorMessage'
    // ajoute du texte à 'newErrorMessage'
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Vous devez être âgé d'au moins 15 ans.";

      //  ajoute 'newErrorMessage' en tant qu'enfant du parent de 'birthdateInput'.
      birthdateInput.parentNode.appendChild(newErrorMessage);

      // si le message d'erreur existe déjà, mets à jour son texte 
    } else {
      errorMessage.textContent = "Vous devez être âgé d'au moins 15 ans.";
    }
    return false;
  }

  console.log("Date de naissance valide");

  // En cas de validité, stocke la valeur de 'birthdateValue' dans 'dateOfBirthValue'
  dateOfBirthValue = birthdateValue;

  // Suppression du message d'erreur s'il existe
  if (errorMessage) {
    errorMessage.remove();
  }

  return true;
}

//            VALIDATION NOMBRE DE TOURNOIS

function quantityCheck() {

  // récupère la valeur du champ 'quantity' et la définie dans une constante 'quantityinput'
  // défini une constante en utilisant la propriété value de 'quantityinput'
  const quantityInput = document.querySelector('#quantity');
  const quantityValue = quantityInput.value.trim();

  // Recherche d'un message d'erreur éventuellement déjà créé dans le parent de 'quantityInput'
  const errorMessage = quantityInput.parentNode.querySelector('.error-message');

  // Vérifie si le champ est vide ou si l'utilisateur y a mis un caractère spécial
  if (quantityValue === '' || isNaN(quantityValue)) {
    console.log("Nombre invalide");

    // Création et ajout du message d'erreur s'il n'existe pas encore
    // ajoute une classe à 'newErrorMessage'
    // ajoute du texte à 'newErrorMessage'
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Veuillez indiquer un nombre.";

      //  ajoute 'newErrorMessage' en tant qu'enfant du parent de 'quantityInput'.
      quantityInput.parentNode.appendChild(newErrorMessage);
    }
    return false;
  }

  // Suppression du message d'erreur s'il existe
  if (errorMessage) {
    errorMessage.remove();
  }

  console.log("Nombre valide");

  // En cas de validité, stocke la valeur de 'quantityValue' dans 'NumberOfTournamentValue'
  NumberOfTournamentValue = quantityValue;

  return true;
}

//            VALIDATION BOUTONS RADIO

function locationCheck() {

  // Sélectionne tous les éléments HTML avec un attribut name égal à "location" et les place dans 'locationInputs'
  const locationInputs = document.querySelectorAll('input[name="location"]');

  // initialise une variable 'isLocationValid' à 'false'
  let isLocationValid = false;

  // Recherche d'un message d'erreur éventuellement déjà créé dans le parent de 'quantityInput'
  const errorMessage = document.querySelector('#location-error-message');

  // vérifie si un élement de 'locationInput' est coché
  // si la condition est vérifiée, stocke la valeur cochée dans 'locationValue' et sors de la boucle
  for (let i = 0; i < locationInputs.length; i++) {
    if (locationInputs[i].checked) {
      isLocationValid = true;
      locationValue = locationInputs[i].value;
      break;
    }
  }
  // vérifie si 'locationIsValid' est 'false'
  if (!isLocationValid) {
    console.log("Bouton radio invalide");

    // Création et ajout du message d'erreur s'il n'existe pas encore
    // ajoute une classe à 'newErrorMessage'
    // ajoute du texte à 'newErrorMessage'
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');
      newErrorMessage.setAttribute('id', 'location-error-message');
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Vous devez sélectionner une localisation.";

      // insére l'élément de message d'erreur juste après le parent du dernier bouton radio.
      const lastLocationInput = locationInputs[locationInputs.length - 1];
      lastLocationInput.parentNode.parentNode.insertBefore(newErrorMessage, lastLocationInput.parentNode.nextSibling);
    }
    return false;

  } else {
    console.log("Bouton radio valide");

    // Suppression du message d'erreur s'il existe
    if (errorMessage) {
      errorMessage.remove();
    }
    return true;
  }
}

//            VALIDATION CONDITIONS GENERALES

function checkboxCheck() {

  // récupère la valeur de l'élément à cocher et la stocke dans une constante 'checkBosInput'
  // défini une constante en utilisant la propriété value de 'quantityinput'
  const checkboxInput = document.querySelector('#checkbox1');

  // Recherche d'un message d'erreur éventuellement déjà créé dans le parent de 'checkBoxInput'
  const errorMessage = checkboxInput.parentNode.querySelector('.error-message');

  if (!checkboxInput.checked) {
    console.log("Conditions générales invalides");
    // Création et ajout du message d'erreur s'il n'existe pas encore
    // ajoute une classe à 'newErrorMessage'
    // ajoute du texte à 'newErrorMessage'
    if (!errorMessage) {
      const newErrorMessage = document.createElement('div');
      newErrorMessage.classList.add('error-message');
      newErrorMessage.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";

      //  ajoute 'newErrorMessage' en tant qu'enfant du parent de 'checkboxInput'.
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

// AFFICHAGE MESSAGE DE VALIDATION
function showSuccessMessage() {
  // Supprime le formulaire
  const form = document.getElementById('form');
  if (form) {
    form.remove();
  }

  // Supprime l'étiquette "A quel tournoi souhaitez-vous participer cette année ?"
  const locationLabel = document.querySelector('.text-label');
  if (locationLabel) {
    locationLabel.remove();
  }

  // Supprime le bouton "C'est parti"
  const submitButton = document.getElementById('formSubmit');
  if (submitButton) {
    submitButton.remove();
  }

  // Recherche d'un message de validation éventuellement déjà créé dans le parent de '.success-message'
  // Suppression du message de validation s'il existe pour éviter le doublon
  const successMessage = document.querySelector('.success-message');
  if (successMessage) {
    successMessage.remove();
  }

  // Créé un élément "p" qui va contenir le message de validation
  const newSuccessMessage = document.createElement('p');

  // ajoute une classe à 'success-message' à l'élément créé
  // ajoute du texte à l'élément
  // ajoute l'élément à la modale
  newSuccessMessage.classList.add('success-message');
  newSuccessMessage.textContent = "Merci ! Votre réservation a été reçue.";
  const modalBody = document.querySelector('.modal-body');
  if (modalBody) {
    modalBody.appendChild(newSuccessMessage);
  }
}

// VALIDATION DU FORMULAIRE
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

submitButton.addEventListener('click', function (event) {
  event.preventDefault(); // empêche l'envoi automatique du formulaire
  if (validate()) {
    // Afficher le message de succès
    showSuccessMessage();
  }
});