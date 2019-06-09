import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBxbyssZ629rISw_8EW_kCwX0NfSxsjivE",
	authDomain: "idm364-plb45.firebaseapp.com",
	databaseURL: "https://idm364-plb45.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;