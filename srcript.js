const btnDOM = document.getElementById('activeButton');
let n = 1;
const judul = document.title;

btnDOM.addEventListener('click', function(){
    alert(`sudah berada pada halaman ${judul}`)
});