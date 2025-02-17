import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAXKYE5J4xtqe7nEL0Msb_hQYtQKjGgfhM",
	authDomain: "expgo-b23ec.firebaseapp.com",
	projectId: "expgo-b23ec",
	storageBucket: "expgo-b23ec.firebasestorage.app",
	messagingSenderId: "543417508855",
	appId: "1:543417508855:web:ccfcffad3568e7a97844f2",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);