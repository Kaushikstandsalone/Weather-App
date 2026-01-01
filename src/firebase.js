// Import Firebase core
import { initializeApp } from "firebase/app";

// Import Firebase services
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtGn1My2i3HC__aCuYM4vd3S0may292tU",
  authDomain: "weather-app-8832d.firebaseapp.com",
  projectId: "weather-app-8832d",
  storageBucket: "weather-app-8832d.firebasestorage.app",
  messagingSenderId: "48333222258",
  appId: "1:48333222258:web:784425c2bf189427feadeb",
  measurementId: "G-K67JSP0EW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Authentication
export const auth = getAuth(app);

// Optional (only for production)
export const analytics = getAnalytics(app);

export default app;
