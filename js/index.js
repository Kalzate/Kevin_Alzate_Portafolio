/**/const buttonMenu = document.querySelector('.nav-mobile');
const navMenu = document.querySelector('.nav-menu');

buttonMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('nav-open');
  navMenu.classList.toggle('open-menu');
});

const colum1 = document.querySelector('.colum1');
const colum2 = document.querySelector('.colum2');
const colum3 = document.querySelector('.colum3');

const cuadro1 = document.querySelector('#cuadro1');
const cuadro2 = document.querySelector('#cuadro2');
const cuadro3 = document.querySelector('#cuadro3');

colum1.addEventListener('click', (e) => {
  borrar(cuadro1);
  mostrar(cuadro1);
});
colum2.addEventListener('click', (e) => {
  borrar(cuadro2);
  mostrar(cuadro2);
});
colum3.addEventListener('click', (e) => {
  borrar(cuadro3);
  mostrar(cuadro3);
});


function mostrar (elemento){
  
  elemento.style.display = "block";
  setTimeout(function() {
    elemento.style.opacity = "1";
    elemento.style.transform = "translateY(0)";
  }, 10);
};

function borrar (elemento){
  
  const elementos = Array.from(document.querySelectorAll('#cuadro1, #cuadro2, #cuadro3'));
  var i=0;
  while (i < elementos.length) {
    if (elemento !== elementos[i]) {
      elementos[i].style.display = "none";
      
      elementos[i].style.transform = "translateY(-20px)";
    } 

    // Incrementar el índice
    i++;
  };
};



  /*const images_adetec = document.querySelectorAll('.image_adetec');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const close = document.getElementById('close');
  const carouselThumbnails = document.querySelectorAll('.carousel-thumbnail');
*/


document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('.thumbnail');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const close = document.getElementById('close');
    const carouselThumbnails = document.querySelectorAll('.carousel-thumbnail');

    var container = document.getElementById('imagen_container');
    var ADETEC = ['images/ADETEC1.jpeg', 'images/ADETEC2.jpeg', 'images/ADETEC3.jpeg', 'images/ADETEC4.jpeg'];

  // Mostrar el modal

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src; // Cambia la imagen en el modal al hacer clic
      
      modalborrar();
    });
  });


  /*images_adetec.forEach(image_adetec => {
    image_adetec.addEventListener('click', function() {
      modalborrar();
      ADETEC.forEach( url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Imagen';
        container.appendChild(img);
      })
      modal.style.display = 'block';
      modalImg.src = this.src; // Cambia la imagen en el modal al hacer clic
    });
  });*/

  /*function modalborrar (){
    while (container.firstChild){
      //container.removeChild(container.firstChild);
    };
    ADETEC.forEach( function(imagen){
      url => {
        var img = imagen.cloneNode();
        img.src = url;
        img.alt = 'Imagen1';
        img.className = 'carousel-thumbnail';
        imagen.parentNode.replaceChild(img, imagen);
        container.appendChild(img);
      }
    })
  };*/

  
  /*---------------------------------------------------------*/ 
  
/*------------------------------------------------------------*/

  // Ocultar el modal
  close.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  // Cambiar la imagen grande al hacer clic en las miniaturas del carrusel
  carouselThumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          modalImg.src = this.src; // Cambia la imagen grande
      });
  });

  // Cerrar el modal si se hace clic fuera de él
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});
