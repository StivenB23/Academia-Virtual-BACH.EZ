// Traducciones
const resources = {
    es: {
      translation: {
        titulo: "Academia Virtual BACH.EZ",
        inicio: "Inicio",
        asignaturas: "Asignaturas",
        quienes: "Quienes Somos",
        informacion: "Información",
        admisiones: "Admisiones",
        reserva: "RESERVA TU CLASE: (+0) 123 456 789",
        lugar: "Palmas de Mayorca",
        solicitar: "Solicitar Información",
        extranet: "Extranet Para Alumnos"
      }
    },
    ca: {
      translation: {
        titulo: "Acadèmia Virtual BACH.EZ",
        inicio: "Inici",
        asignaturas: "Assignatures",
        quienes: "Qui Som",
        informacion: "Informació",
        admisiones: "Admissió",
        reserva: "RESERVA LA TEVA CLASSE: (+0) 123 456 789",
        lugar: "Palmes de Mallorca",
        solicitar: "Sol·licitar Informació",
        extranet: "Extranet per a Alumnes"
      }
    }
  };
  
  // Inicializar i18next
  i18next.init({
    lng: 'es', // idioma por defecto
    debug: true,
    resources
  }, function(err, t) {
    updateContent();
  });
  
  // Función para actualizar textos
  function updateContent() {
    document.title = i18next.t('titulo');
    document.querySelector('[data-i18n="reserva"]').textContent = i18next.t('reserva');
    document.querySelector('[data-i18n="lugar"]').textContent = i18next.t('lugar');
    document.querySelector('[data-i18n="solicitar"]').textContent = i18next.t('solicitar');
    document.querySelector('[data-i18n="extranet"]').textContent = i18next.t('extranet');
  
    const navItems = document.querySelectorAll('[data-i18n-nav]');
    const keys = ['inicio', 'asignaturas', 'quienes', 'informacion', 'admisiones'];
  
    navItems.forEach((item, index) => {
      item.textContent = i18next.t(keys[index]);
    });
  }
  
  // Listeners para cambiar idioma
  document.getElementById('idioma__spanish').addEventListener('click', () => {
    i18next.changeLanguage('es', updateContent);
  });
  
  document.getElementById('idioma__catalan').addEventListener('click', () => {
    i18next.changeLanguage('ca', updateContent);
  });
  