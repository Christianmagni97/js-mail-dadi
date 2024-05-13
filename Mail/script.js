const listaEmailRegistrate = ['Ugo@gmail.com', 'Sayer@gmail.com', 'Kate@gmail.com','Jack@gmail.com','John@gmail.com','Vittorio@gmail.com'];
const theEmail = prompt('what is your email?');
if ( listaEmailRegistrate. includes(theEmail)){
    console. log('you can enter');
}
else {
    console. log('you cant enter, sorry');
}