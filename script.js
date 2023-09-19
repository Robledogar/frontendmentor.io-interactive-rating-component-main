document.addEventListener("DOMContentLoaded", cargarDivPrincipal);
let valorDelDivPulsado;

function cargarDivPrincipal() {

    const contenedorPrincipal = document.createElement('DIV');
    contenedorPrincipal.classList.add('contenedorPrincipal');
    contenedorPrincipal.innerHTML = `
    

    <div class="contenedorIcono">
      <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
    </div>

    <div class="contenedorTextos">
      <h1 class="tituloPrincipal">How did we do?</h1>
      <p class="parrafoPrincipal">Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!</p>

    </div>

    <div class="contenedorValoraciones">
      <div class="valor"><span class="textoValor">1</span></div>
      <div class="valor"><span class="textoValor">2</span></div>
      <div class="valor"><span class="textoValor">3</span></div>
      <div class="valor"><span class="textoValor">4</span></div>
      <div class="valor"><span class="textoValor">5</span></div>
    </div>

    <div class="contenedorBoton">
      <form class="formulario">
        <button class="botonSubmit" type="submit">SUBMIT</button>
      </form>
    </div>
  
  `
    const divAtribucion = document.createElement('DIV');
    divAtribucion.classList.add('atribucion');
    divAtribucion.innerHTML = `
        <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">robledogar</a>.
        </div>`
    document.body.appendChild(contenedorPrincipal);
    document.body.appendChild(divAtribucion);

    const contenedorValoraciones = document.querySelector(".contenedorValoraciones");

    // Agregar un evento de clic a los divs dentro de .contenedorValoraciones
    const divsValoracion = contenedorValoraciones.querySelectorAll(".valor");

  divsValoracion.forEach((div) => {
    div.addEventListener("click", function() {
      // Obtener el valor del atributo personalizado data-valor
      valorDelDivPulsado = div.textContent;
      div.classList.add('divMarcado');
      
    });
  });

    const formulario = document.querySelector('.formulario');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        captarValorDelDivPulsado();
    });

    function captarValorDelDivPulsado() {
        alert(valorDelDivPulsado);
       
    }


}




