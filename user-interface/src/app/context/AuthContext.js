// AuthContext.js
import { createContext, useState } from "react";

// Create the context
export const AuthContext = createContext();

// Create a provider component
export function AuthProvider({ children }) {
    const [user, setUser] = useState('John');

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}
