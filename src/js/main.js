// Año del footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Manejador simple de formulario (mailto) — usado en contacto.html
function handleSubmit(e){
  e.preventDefault();
  const nombre = document.getElementById('nombre')?.value || '';
  const email = document.getElementById('email')?.value || '';
  const mensaje = document.getElementById('mensaje')?.value || '';
  const asunto = encodeURIComponent('Contacto desde Portafolio');
  const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`);
  window.location.href = `mailto:tucorreo@dominio.com?subject=${asunto}&body=${cuerpo}`;
}
window.handleSubmit = handleSubmit;

// Marca el enlace activo según la página
(function markActive(){
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if (!href) return;
    const file = href.split('/').pop();
    if (file === path || (path==='' && href.endsWith('index.html'))) {
      a.style.textDecoration = 'underline';
    }
  });
})();
