// ts-node ./src/inGuard.ts

type NormalUser = {
    name : string,
}

type AdminUser = {
    name : string ,
    role : 'Admin'
} 

const getUserInfo = (user : NormalUser | AdminUser) => {

    if ("role" in user) {
        console.log(`This is ${user?.name} and role is ${user?.role}`);
    }
    else{

        console.log(`This is ${user?.name} and role is normal`);
    }
}

getUserInfo({name : "Shourov" , role : "Admin"})