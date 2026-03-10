function testFunction (){

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello");
    }, 5000);
    });

}

console.log("взлетаем...");

/*const testValue = testFunction();




testValue.then((testValue) => {
    console.log("res = ", testValue);
}).catch((err) => {
    console.log("err = ", err);
}).finally(()=> {
    console.log("finaly detected");
});*/


try{
    const testValue = await testFunction();
    console.log('res = ', testValue);  
}catch(err){
    console.log("err = ", err);
}
console.log("finaly detected");

