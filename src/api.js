export function getUser(email) {
    return fetch(`https://reqres.in/api/login/${email}`)
        .then(data => data.json())
        .then(({ data }) => data);
};