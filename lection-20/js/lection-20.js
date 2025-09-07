// const test = new Promise((resolve, reject) => {
//     const random = Math.random();
    

//     setTimeout(() => {
//         if (random > 0.3 && random < 0.7) {
//             resolve("OK")
//         } else {
//             reject("Error")
//         }
//     }, 500)
// });
// test
//     .then((result) => {
//     console.log("then", result);
    
//     })
//     .catch((error) => {
//         console.log("error", error);
//     })
//     .finally(() => {
//         console.log("whatever");
        
//     })


//  const test = new Promise((resolve, reject) => {
//     const random = Math.random();
    

//     setTimeout(() => {
//         if (true) {
//             resolve(10)
//         } else {
//             reject("Error")
//         }
//     }, 500)
// });
// test
//     .then((result) => {
//         console.log(result);
//         return result * 2
//     })
//     .then(data => {
//         console.log(data);
        
//         return data * 100;
//     })
//     .then(data => {
//         console.log(data);
//         return data * 100;
        
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("error", error);
//     })
//     .finally(() => {
//         console.log("whatever");
//     })


// console.log("step 1");

// setTimeout(() => {
//     console.log("step 2");
    
// }, 0)

// new Promise((res) => {
//     res("step 3")
// })
// .then(data => console.log(data))
// setTimeout(() => {
//     console.log("step 4");
    
// })


// const makeOrder = (dish, onSuccess, onError) => {
//     const random = Math.random();

//     setTimeout(() => {
//         if (random > 0.5) {
//             onSuccess(`Ваше замовлення ${dish}`)
//         } else {
//             onError("Закінчилися продукти")
//         }
//     }, 1000)
// }

// makeOrder(
//     "Пиріжок",
//     (str) => { console.log("onSuccess", str) },
//     (error) => {console.log("onError", error)}
// )

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const makeOrder = (dish) => {
//     return new Promise((res, rej) => {
//         const random = Math.random();

//         setTimeout(() => {
//             if (random > 0.5) {
//                 res(`Ваше замовлення ${dish}`)
//             } else {
//                 rej("Закінчилися продукти")
//         }
//     }, 1000)

//     })
// }

// makeOrder("Борщ")
// .then(data => console.log(data))
// .catch(error => console.log(error))
// .finally(() => console.log("Їжте не обляпайтесь"))

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const startTime = Date.now();

const res1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const currentTime = Date.now();
            const delta = currentTime - startTime;

            res({ title: "first", time: delta })
        }, 2000)
    })
}
const res2 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const currentTime = Date.now();
            const delta = currentTime - startTime;

            res({ title: "second", time: delta })
        }, 1000)
    })
}
const res3 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const currentTime = Date.now();
            const delta = currentTime - startTime;

            res({ title: "third", time: delta })
        }, 4000)
    })
}


Promise.all([res1(), res2(), res3()])
.then(data => console.log(data))
.catch(error => console.log(error))


Promise.race([res1(), res2(), res3()])

.then(data => console.log(data))
.catch(error => console.log(error))


