// chiedere nome all'utente
const yourName = prompt('quale è il tuo nome?');

console.log(yourName)

// chiedere cognome all'utente
const yourSurname = prompt('quale è il tuo cognome?');

console.log(yourSurname)

// chiedere il colore preferito all'utente
const yourFavouriteColor = prompt('quale è il tuo colore preferito?');

console.log(yourFavouriteColor)

// creo una password con i dati dell'utente piu il numero 21
const password = yourName + yourSurname + yourFavouriteColor + 21;

// scrivo in console la password creata
console.log(password)

// aggiungo in document nel tag h1 la password creata
document.getElementById('your-password').innerText = 'La tua password è ' + password