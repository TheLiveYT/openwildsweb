import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Element s id 'root' nebyl nalezen!");
  console.log("Aktuální HTML body:", document.body.innerHTML);
  throw new Error("Root element not found - zkontrolujte, zda máte <div id='root'></div> v HTML");
}

console.log("Root element nalezen:", rootElement);
createRoot(rootElement).render(<App />);