(()=>{
//    泛型接口
interface Icrud<T>{
    data:T[]
    add:(t:T)=>T
    getId:(id:number)=>T
}

class User{
    id?:number
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
}

class Usercrud implements Icrud<User>{
data:User[]=[]
add(user:User):User{
    user.id=Date.now()+Math.random()
    this.data.push(user)
    return user
}
getId(id:number):User{
return this.data.find(user=>user.id===id)
}
}

const usercrud:Usercrud=new Usercrud();
usercrud.add(new User('欧力',20))
console.log(usercrud);
const {id}=usercrud.add(new User('何超',20))
const user=usercrud.getId(id)
console.log(user);


})()