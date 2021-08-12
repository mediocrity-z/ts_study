(() => {
    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Usercrud {
        constructor() {
            this.data = [];
        }
        add(user) {
            user.id = Date.now() + Math.random();
            this.data.push(user);
            return user;
        }
        getId(id) {
            return this.data.find(user => user.id === id);
        }
    }
    const usercrud = new Usercrud();
    usercrud.add(new User('欧力', 20));
    console.log(usercrud);
    const { id } = usercrud.add(new User('何超', 20));
    const user = usercrud.getId(id);
    console.log(user);
})();
