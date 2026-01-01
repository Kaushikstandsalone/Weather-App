
import Weather from './components/Weather'
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import "./App.css"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { signOut } from "firebase/auth";


function App() {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  // 🔐 Not logged in
  if (!user) {
    return showSignup ? (
      <Signup switchToLogin={() => setShowSignup(false)} />
    ) : (
      <Login switchToSignup={() => setShowSignup(true)} />
    );
  }

  // ✅ Logged in
  return (
   <>
      <h1> Welcome To Weather-App</h1>
      <Weather />
      <div className="signout_button">
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
   </>

  )
}

export default App;

