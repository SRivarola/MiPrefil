let portfolio = [];
async function peticion(){
  await fetch('./local.json')
    .then(res => {
      return res.json()
    })
    .then(data => portfolio.push(...data))
    
    const contenido = document.getElementsByClassName('contenido')[0]
    for (let i = 0; i < portfolio.length; i++) {
      const element = portfolio[i];
      const {id, name, imgLogo, imgPortada, color, desc, site} = element;
      const tarjeta = `
        <div class="cards" >
          <div class="circle" style="--clr:${color}">
            <img src=${imgLogo} class="logo_" alt="logo del producto">
          </div>
          <div class="content">
            <h3>${name}</h3>
            <p>${desc}</p>
            <a href=${site} target="_blank">Visitar</a>
          </div>
          <img src=${imgPortada} class="product_img" alt="foto del producto">
        </div>`
      contenido.innerHTML += tarjeta;
    }
}
peticion();

let btnTop = document.getElementsByClassName('btnTop')[0];
let btnSobreMi = document.getElementsByClassName('sobreMi')[0];
let btnPortfolio = document.getElementsByClassName('port')[0];
let btnContacto = document.getElementsByClassName('contact')[0];
btnSobreMi.classList.add('sobreMiHover');
btnPortfolio.classList.add('portHover');
btnContacto.classList.add('contactHover');

window.onscroll = function() {
    if (window.pageYOffset < 600) {
      btnTop.style.color = "#0c88ee";
      btnTop.classList.remove('btnTopHover');
      btnSobreMi.classList.add('sobreMiHover');
      btnContacto.classList.add('contactHover');
    }  else if (window.pageYOffset > 600 && window.pageYOffset < 1200) {
      btnTop.style.color = "#161616";
      btnTop.classList.add('btnTopHover');
      btnSobreMi.classList.remove('sobreMiHover');
      btnPortfolio.classList.add('portHover');
    } else if (window.pageYOffset > 1200 && window.pageYOffset < 1900) {
        btnSobreMi.classList.add('sobreMiHover');
        btnPortfolio.classList.remove('portHover');
        btnContacto.classList.add('contactHover');
      } else if (window.pageYOffset > 1900) {
        btnPortfolio.classList.add('portHover');
        btnContacto.classList.remove('contactHover');
      }
  }

const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

const COPIAR = document.getElementsByClassName('btnCopiar')[0];
const EMAIL = document.getElementsByClassName('textoMail')[0];
let validacion = document.getElementsByClassName('validacion')[0];
COPIAR.addEventListener('click', (e) => {
    e.preventDefault();
    EMAIL.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    validacion.innerHTML = 'copiado';
    $('.validacion').fadeIn(1500).fadeOut(500);
    
})