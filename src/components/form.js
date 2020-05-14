import { html, define } from 'hybrids';
// Components
import  './alert'
import  './loading'

import { getUser } from '../api';

function setEmail(host, event) {

  event.preventDefault();
  host.show='disabled'
  host.email = event.target.email.value;
  host.contador=0

  setTimeout(() => {
    host.email = ""
    host.show=''
  }, 7000);

}

function validatedBtn(host, event) {

  host.contador++;

  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  host.show = (re.test(event.target.value) ? '' : 'disabled');

}
export const FormComponent = {
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
     
       <app-alert type="${show === 'disabled' ? 'danger' : 'primary'}"
                  message="${show === 'disabled' ? 'Email no valido' : 'Email Valido'} ">
       </app-alert>

      </span>
    </form>
    <div class="mt-4"  style="visibility: ${ email.length > 3 ? 'visible' : 'hidden'}" >
    
    ${html.resolve(
    data
      .then(() => html`<app-alert type="primary" message="Credenciales Correctas"></app-alert> `)
      .catch(() => html`<app-alert type="primary" message="Credenciales no validas"></app-alert> `),
    html` <app-loading class="d-flex justify-content-center" ></app-loading>   `,
  )}
    </div>
    <hr/>
  </div>

  `,



};

define('app-form-email', FormComponent);
