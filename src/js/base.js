import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCR2w8iea3svfc_vHgjYMSxeigtg7y31k8",
	authDomain: "plb45-64b59.firebaseapp.com",
	databaseURL: "https://plb45-64b59.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;