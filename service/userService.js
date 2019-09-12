let users = [{
    id: 1,
    name: '小明',
    age: 18
},
{
    id: 2,
    name: '小红',
    age: 19
},
{
    id: 3,
    name: '小天',
    age: 18
}]

module.exports = {
    getUsers: () => {
        return users;
    },
    getUser: (id) => {
        return users.find((key) => {
            return key.id == id;
        })
    },
    delUser: (id) => {
        let resIndex = users.findIndex((v) => {
            return v.id == id;
        })
        if (resIndex !== -1) {
            users.splice(resIndex, 1);
            return true;
        }
        return false;
    },
    updateUser: (id, user) => {
        let nowData = users.find(v => {
            return v.id == id;
        })
        if (!!nowData) {
            for (const key in user) {
                if (user.hasOwnProperty(key)) {
                    nowData[key] = user[key];
                }
            }
            return true;
        } else {
            return false;
        }
    }

}