import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // Corrected `getFireStore` to `getFirestore`

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
export const initializeFirebase = () => {
    const app = initializeApp(firebaseConfig); // Store the app instance
    console.log(apiKey)
    if (typeof window !== "undefined") {
        getAnalytics(app);  // Initialize analytics only if running in a browser environment
    }
    return app; // Return the app instance if you need to access it elsewhere
};
