// src/hooks/useAuth.js
export const useAuth = () => {
 const isAuthenticated = localStorage.getItem("authenticated") === "true";
 return { isAuthenticated };
};