import { staticData } from "@/data/staticData";

const STORAGE_KEY = "transactions";

// Get transactions 
export const getTransactions = () => {
if (typeof window === "undefined") return staticData;

const stored = localStorage.getItem(STORAGE_KEY);

if (!stored) {
// First time → seed with static data
localStorage.setItem(STORAGE_KEY, JSON.stringify(staticData));
return staticData;
}

try {
return JSON.parse(stored);
} catch (error) {
console.error("Error parsing transactions from localStorage", error);
return staticData;
}
};

// Save transactions
export const setTransactionsToStorage = (transactions) => {
if (typeof window === "undefined") return;
localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
};

export const clearTransactions = () => {
if (typeof window === "undefined") return;
localStorage.removeItem(STORAGE_KEY);
};