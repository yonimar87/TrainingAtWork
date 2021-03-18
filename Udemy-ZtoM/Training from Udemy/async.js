// const myPromise = new Promise((resolve, reject) => {
//     if (false) { ///change between true and false. If true = it will work
  
//     setTimeout(() => {
//         resolve('i have succeeded');
//     }, 1000);
//     } else {
//         reject('i have failed')
//     }
// })

// myPromise
//     .then(value => console.log(value))
//     .catch(rejectValue => console.log(rejectValue))

//     /////// AWAIT

const myAsynchFunction = async () => {
    try {
        const userResponse = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    );
    const users = await userResponse.json();
    const secondUser = users[1];

    console.log(secondUser);

    const postResponse = await fetch (
        'https://jsonplaceholder.typicode.com/users' + secondUser.id);
    const posts = await postResponse.json();

    console.log(posts)
    }
    catch (err) {
        console.log(err)
    }
}