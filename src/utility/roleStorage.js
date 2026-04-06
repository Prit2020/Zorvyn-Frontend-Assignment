const ROLE_KEY = "user_role";

// Get role (default = Viewer)
export const getStoredRole = () => {
  return localStorage.getItem(ROLE_KEY) || "Viewer";
};

// Save role
export const setStoredRole = (role) => {
  localStorage.setItem(ROLE_KEY, role);
};

export const clearStoredRole = () => {
  localStorage.removeItem(ROLE_KEY);
};