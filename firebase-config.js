--- js/firebase-config.js (原始)


+++ js/firebase-config.js (修改后)
// Configuración centralizada de Firebase para INELRED v2.0

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBMcHFfBlG76ua3fVTOdpyXNXqXTooELf8",
    authDomain: "inelred-e8f50.firebaseapp.com",
    projectId: "inelred-e8f50",
    storageBucket: "inelred-e8f50.firebasestorage.app",
    messagingSenderId: "412934833273",
    appId: "1:412934833273:web:734337299e2557ed8f40a8"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar para usar en otros módulos
export { app, auth, db };

// Funciones utilitarias compartidas

// Manejo del tema oscuro/claro
export function initTheme() {
    const themeToggle = document.getElementById('themeToggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        });
    }

    // Carga inicial del tema
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// Verificación de autenticación
export function checkAuth(redirectPath = 'index.html') {
    return new Promise((resolve) => {
        import("https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js")
            .then(({ onAuthStateChanged }) => {
                onAuthStateChanged(auth, (user) => {
                    if (!user) {
                        window.location.href = redirectPath;
                    }
                    resolve(user);
                });
            });
    });
}

// Formateo de fechas
export function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
}

// Generar ID único
export function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}