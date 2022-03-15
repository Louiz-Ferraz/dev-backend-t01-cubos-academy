const filterUser = (users, stack, callback) => {
    let filteredUsers = [];
    for (let user of users) {
        if (callback(user.stack, stack)) {
            filteredUsers.push(user);
        }
    }
    console.log(filteredUsers);
}

const filterByStack = (stack, filteredStack) => {
    return stack === filteredStack;
}

const users = [
    {
        nome: "Luiz",
        stack: "Back"
    },
    {
        nome: "Agneia",
        stack: "Front"
    },
    {
        nome: "Geraldo",
        stack: "Front"
    },
    {
        nome: "Luiz2",
        stack: "Back"
    }, {
        nome: "Luiz3",
        stack: "Back"
    }
]

let stack = "Back";

filterUser(users, stack, filterByStack);