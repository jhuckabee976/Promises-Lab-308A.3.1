import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
    const dbs = {
        db1: db1,
        db2: db2,
        db3: db3
    };
    //Using Promise.all
   
    const dataBaseName = await central(id);
    console.log(dataBaseName);

    const [basicInfo, personalData] = await
        Promise.all([dbs[dataBaseName](id), vault(id)]);
    
    console.log(basicInfo);
    console.log(personalData);

    return {
        ...basicInfo,
        ...personalData,
    };
}





//     //Step one find users in the databeses using central
//     const dataBaseName = await central(id);
//     console.log(dataBaseName)
//     //Step two user's basic info
//     const basicInfo = await dbs[dataBaseName](id) 
//     console.log(basicInfo)
//     //Step three access to vault an steal personal data
//     const personalData = await vault(id);
//     console.log(personalData);
//     return {
//         ...basicInfo, 
//         ...personalData
//     }
// }



const user = await getUserData(10);
console.log(user);