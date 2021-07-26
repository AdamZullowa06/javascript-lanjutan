// tagged templates
// const nama = 'Sandhika Galih';
// const umur = 33;

// function coba(string, ...values) {
    // let result = '';
    // string.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;

//     return string.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// highlight
const nama = 'Sandhika Galih';
const umur = 33;
const email = 'sandhikagalih@gmail.com'

function highlight(string, ...values) {
    // let result = '';
    // string.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;

    return string.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya ${email}`;
document.body.innerHTML = str;   