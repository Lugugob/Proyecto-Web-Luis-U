/*fucionalidad de los botones previous y next*/
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slideWidth = slides.clientWidth;
  const siguiente = document.querySelector(".siguiente");
  const anterior = document.querySelector(".anterior");
  const paginationLinks = document.querySelectorAll(".carousel-pagination a");

  let currentIndex = 0;

  /*funcion para que los pagination actualicen*/
  function updatePagination(index) {
    paginationLinks.forEach((link, btnIndex) => {
      if (btnIndex === index) {
        link.style.opacity = 1; /*activa el pagination que corresponde*/
      } else {
        link.style.opacity = 0.75; /*desactiva los demas pagination*/
      }
    });
  }

  /*Función para hacer scroll al siguiente slide (con bucle de vuelta al inicio)*/
  siguiente.addEventListener("click", () => {
    if (currentIndex < paginationLinks.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Vuelve a la primera diapositiva
    }
    slides.scrollTo({ left: slideWidth * currentIndex, behavior: "smooth" });
    updatePagination(currentIndex); /*este hace el update de la opacidad del pagination*/
  });

  /*Función para hacer scroll al slide anterior (con bucle al final)*/
  anterior.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = paginationLinks.length - 1; // Vuelve a la última diapositiva
    }
    slides.scrollTo({ left: slideWidth * currentIndex, behavior: "smooth" });
    updatePagination(currentIndex); /*este hace el update de la opacidad del pagination*/
  });

  /*registro del evento de clic en los botones de paginación*/
  paginationLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      currentIndex = index;
      slides.scrollTo({ left: slideWidth * currentIndex, behavior: "smooth" });
      updatePagination(currentIndex); // Actualiza la opacidad del botón de paginación
    });
  });

  /* hago la opacidad, nel, esta la iniciaba la opacidad de los botones de paginación*/
  updatePagination(currentIndex); /*va a empezar siempre con el primer botón de paginación activo*/
});

/*funcion pa que abra el modal de contacto*/
  const btnEnviar = document.getElementById('btnSolicitud');
  const modal = document.getElementById('modalConfirmacion');
  const btnCerrar = document.getElementById('btnCerrar');

  btnEnviar.addEventListener('click', () => {
    modal.showModal();
  });

  btnCerrar.addEventListener('click', () => {
    modal.close();
  });

