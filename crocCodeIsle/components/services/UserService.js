const baseUsersURL = 'http://localhost:8080/users/';

const UserService = {

    async getUsers() {
        const response = await fetch(baseUsersURL)
        .then(res => res.json())
        .then(responseJSON => console.log('getUsers() result:', responseJSON));

        return response;
    },

    // async getUserByName(name) {
    //     console.log('name in getuserbyname:')
    //     console.log(name)
    //     var stringedName = name.toString()
    //     var urlToHit = baseUsersURL + "name/" + stringedName 
    //     const response = await fetch(urlToHit)
    //     .then(res => res.json())
    //     .then(responseJSON => console.log('getUserByName() result:', responseJSON));
    //     return response;

    // },


    async getTop5Users() {
        const response = await fetch(baseUsersURL + "top5")
        .then(res => res.json())
        // .then(responseJSON => console.log('getTop5Users() result:', responseJSON));

        console.log("Inside Top5Users here is response - ")
        console.log(response);
        return response;
    },
    // getTop5Users() {
    //     return fetch(baseUsersURL + "top5")
    //     .then(res => res.json());
    // },

    addUser(payload) {

        console.log("Payload before stringification = " + payload)
        console.log("JSON Stringified = " +JSON.stringify(payload))

        return fetch(baseUsersURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    },

    updateUser(user, name) {
        var stringedName = name.toString()
        return fetch(baseUsersURL + "/name/" + stringedName, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then(res => res.json());
        },

};

export default UserService;