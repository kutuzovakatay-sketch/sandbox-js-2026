function testFunction (){

    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello");
    }, 5000);
    });

}

const testValue = testFunction();

console.log("взлетаем...");


testValue.then((testValue) => {
    console.log("res = ", testValue);
}).catch((err) => {
    console.log("err = ", err);
}).finally(()=> {
    console.log("finaly detected");
});
