import { html, define } from 'hybrids';

export const AlertComponent = {
    message:'',
    type:'',
    render: ({ message, type }) => html`

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <div class="alert alert-${type} " role="alert"> ${message} </div>
    
  `,



};

define('app-alert', AlertComponent);
