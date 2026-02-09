/**
 * 1. SELEZIONE DEGLI ELEMENTI (Riferimenti al DOM)
 * Usiamo document.getElementById per "agganciare" gli elementi HTML 
 * e salvarli in variabili costanti (const), così da poterli usare nel codice.
 */

// Seleziona la finestra modale (il rettangolo bianco con i campi da compilare)
const addMovieModal = document.getElementById('add-modal');

// Seleziona il bottone arancione "ADD MOVIE" situato nell'header
const startAddMovieButton = document.getElementById('bottonemod');

// Seleziona l'elemento che oscura la pagina quando la modale è aperta
const backdrop = document.getElementById('backdrop');
const tastocancel= document.querySelector('.btn--passive');


/**
 * 2. DEFINIZIONE DELLA FUNZIONE (La logica)
 * Qui creiamo una "Arrow Function" (funzione a freccia) chiamata toggleMovieModal.
 * Il suo compito è fare da "interruttore" (toggle).
 */
const toggleMovieModal = () => {
  // .classList.toggle('visible') controlla se la classe CSS "visible" esiste:
  // - Se NON c'è: la aggiunge (mostrando l'elemento).
  // - Se C'È: la toglie (nascondendo l'elemento).

  
  addMovieModal.classList.toggle('visible'); // Accende/Spegne la modale
  backdrop.classList.toggle('visible');      // Accende/Spegne lo sfondo scuro
};
/**
 * 3. GESTIONE DEGLI EVENTI (L'azione)
 */

// Ascolta il click sul tasto "ADD MOVIE" per APRIRE la modale
startAddMovieButton.addEventListener('click', toggleMovieModal);

// Ascolta il click sul tasto "Cancel" per CHIUDERE la modale
// Poiché toggleMovieModal inverte lo stato (se è aperta, chiude), 
// riutilizziamo la stessa funzione.
tastocancel.addEventListener('click', toggleMovieModal);

// Ascolta il click sullo sfondo scuro (backdrop)
// Questo permette di chiudere la modale cliccando ovunque fuori dal rettangolo bianco
backdrop.addEventListener('click', toggleMovieModal);

