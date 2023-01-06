import './App.css';
import Searchbar from './components/Searchbar.js';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBcrvf9jbJtf-yl1QKWIaCIawVvbhupl0E",
    authDomain: "searchslang.firebaseapp.com",
    projectId: "searchslang",
    storageBucket: "searchslang.appspot.com",
    messagingSenderId: "828810951928",
    appId: "1:828810951928:web:5dbce9a03aef25364f4f0d",
    measurementId: "G-99XGBEJYN7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className="App">
    <Searchbar></Searchbar>
    </div>
  );
}

export default App;
