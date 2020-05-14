export function getUser(email) {

      return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(true)
        }, 3000);
    })

};
