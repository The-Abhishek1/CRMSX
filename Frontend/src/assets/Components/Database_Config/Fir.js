import { authentication } from "../Config/Firebase";
import firebase from "firebase/compat/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(authentication);

const response = await getDocs(collection(db, "FIR"));

response.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
