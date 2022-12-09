const baseUsersURL = 'http://localhost:8080/users';

const UserService = {

    getUsers() {
        return fetch(baseUsersURL)
        .then(res => res.json());
    },

    addUser(payload) {

        console.log("Payload before stringification = " + payload)
        console.log("JSON Stringified = " +JSON.stringify(payload))

        return fetch(baseUsersURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    }

};

export default UserService;