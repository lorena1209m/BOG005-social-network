
import { login } from './components/login.js';
import { register } from './components/register.js';
import { wall } from './components/wall.js';


const routes = {
  '/': login,
  '/register': register,
  '/wall': wall,
  'https://lorena1209m.github.io/BOG005-social-network/src/': login
};

// función para anexar un registro al historial del navegador (.pushState)  
export const onNavigate = (pathname, routesList = routes) => {
  const root = document.getElementById('root');
  window.history.pushState(/// historial de rutas a alas que ha entrado
    {}, // estado vacio
    pathname, // title
    window.location.origin + pathname, // URL + (Ruta)
  );
  root.replaceChildren(routesList[pathname]());
};

// onpopstate, se dispara realizando una acción en el navegador como volver
/* window.onpopstate = () => {
  onNavigate(window.location.pathname);
}; */
window.addEventListener('load', () => onNavigate(window.location.pathname));  
