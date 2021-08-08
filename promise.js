// $.ajax({
//     url: 'http://www.omdbapi.com/?s=avengers&apikey=6fe68e94',
//     success: m => console.log(m)
// });


// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.status === 200) {
//         console.log(JSON.parse(xhr.response));
//     } else {
//         console.log(xhr.response);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?s=avengers&apikey=6fe68e94');
// xhr.send();


// fetch('http://www.omdbapi.com/?s=avengers&apikey=6fe68e94').then(response => response.json()).then(response => console.log(response));


// promise
// object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// staets (fullfield / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('janji telah ditepati');
//     } else {
//         reject('ingkar janji');
//     }
// });

// janji1.then(response => console.log('OK : ' + response)).catch(response => console.log('NOT OK : ' + response));

// contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//             resolve('ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('tidak ditepati setelah beberaa waktu');
//         }, 2000);
//     }
// });
// console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
// janji2.finally(() => console.log('selesai menunggu')).then(response => console.log(response)).catch(response => console.log(response));
// console.log('selesai');


// promise.all()

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Sandhika Galih',
            pemeran: 'Dody, Erik'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'bandung',
            temp: 26,
            kondisi: 'cerah berawan'
        }])
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response))
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });