export function getUser(email) {

    // const data = {
    //     email: email,
    //     password: ''
    // }
    // return fetch(`https://reqres.in/api/login/`, {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     mode:'cors'
    // })
    //     .then((data) => data.json())
    //     .then(({ data }) => data);

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(true)
        }, 3000);
    })

};


function aleatorio(inferior, superior) {
    var resAleatorio = Math.floor((Math.random() * (superior - inferior + 1)) + inferior);
    return resAleatorio;
}