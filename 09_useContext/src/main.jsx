import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import "./index.css";
import ScrollToTop from "./components/functional/ScrollToTop.jsx";
import { AuthProvider } from "./features/context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ScrollToTop />
                <App />
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
);
