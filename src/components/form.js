import { html, define } from 'hybrids';
import { getUser } from '../api';

function setEmail(host, event) {

  event.preventDefault();
  host.show='disabled'
  host.email = event.target.email.value;
  host.contador=0
  setTimeout(() => {
    host.email = ""
  }, 7000);

}

function validatedBtn(host, event) {

  host.contador++;

  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  host.show = (re.test(event.target.value) ? '' : 'disabled');

}
export const FormEmail = {
  email: '',
  show: 'disabled',
  contador: 0,
  data: ({ email }) => getUser(email),
  render: ({ email, data, show, contador }) => html`

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

  <div class="container  p-5" style="border:1px solid blue;border-radius:10px">
    <h4 class="mt-4 text-center">Reto Coderos Mayo 2020</h4>
    <form onsubmit=${setEmail} >
      <div class="form-group">
        <input type="email" 
              required 
              autocomplete="off" 
              placeholder="Enter your email" 
              class="form-control"   
              name="email" 
              defaultValue="${email}" 
              onkeyup="${validatedBtn}">
 
           
      </div>
   
      <button type="submit" disabled=${show} class="btn btn-block mb-2 btn-primary">Send </button>
      <span style="visibility: ${ contador > 3 ? 'visible' : 'hidden'}"> 
       <div class="alert alert-${show === 'disabled' ? 'danger' : 'primary'} " role="alert"> ${show === 'disabled' ? 'Email no valido' : 'Email Valido'}  </div>
         
      </span>
    </form>
    <div class="mt-4"  style="visibility: ${ email.length > 3 ? 'visible' : 'hidden'}" >
    
    ${html.resolve(
    data
      .then(() => html`<div class="alert alert-primary" role="alert">Datos Correctos </div> `)
      .catch(() => html`<div class="alert alert-danger" role="alert"> Credenciales Invalidas</div>`),
    html`
      <div class="d-flex justify-content-center">
          <img height="100" class="ml-5 text-center mx-auto" src="https://media1.tenor.com/images/57b62c1192938f43f61a45817166c4e2/tenor.gif" alt="">
      </div>
    `,
  )}
    </div>
    <hr/>
  </div>

  `,



};

define('form-email', FormEmail);
