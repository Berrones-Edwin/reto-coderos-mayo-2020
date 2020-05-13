
import { html, define } from 'hybrids';

export function increaseCount(host) {
  host.count += 1;
}
export const FormEmail = {
  count: 0,
  render:()=> html`

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

  <div class="container bg-dark p-5">
    <h4 class="mt-4 text-center">Reto Coderos Mayo 2020</h4>
    <form >
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" required placeholder="Enter your email" class="form-control" id="exampleInputEmail1" >
      </div>
      
      <button type="submit" class="btn btn-block btn-primary">Send </button>
    </form>
  </div>

  `,
};

define('form-email', FormEmail);
