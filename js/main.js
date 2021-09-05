const btn = document.querySelector('.add');
const place = document.querySelector('.place')
const inputGambar = document.querySelector('.inputGambar');
const inputGambar2 = document.querySelector('.inputGambar-2');
const inputText = document.querySelector('.inputText');
const inputText2 = document.querySelector('.inputText-2');


const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const card3 = document.querySelector('.card-3');
const back = document.querySelector('.back');
const closeBtn = document.querySelectorAll('.close');


// ketika user menekan tombol tambah slide
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    //menampilkan popup dengan cara mengilangkan class bernama display
    loadFile.card();

});

// ketika user menekan tombol Gambar di jenis slide
inputGambar.addEventListener('click',(e)=>{
    e.preventDefault();
    //menampilkan popup dengan cara mengilangkan class bernama display
    loadFile.cardGambar();
});

// ketika user menekan tombol text di jenis slide
inputText.addEventListener('click',(e)=>{
    e.preventDefault();
    //menampilkan popup dengan cara mengilangkan class bernama display
    loadFile.cardText();
});

// ketika user menekan tombol x di setiap popup
closeBtn.forEach(cls => {
    cls.addEventListener('click',(e)=>{
        e.preventDefault();
        //menghilangkan popup dengan cara menmbahkan class display
        loadFile.closeBtn();
    });
});

//keitka tombol submit di klik maka program akan mengambil value dari setiap element yang di pilih
card3.addEventListener('submit',(e)=>{
    e.preventDefault();
    const judul = document.querySelector('#judul');
    const teks = document.querySelector('#teks');

    datas.createSlideText({
        tipe:'teks',
        judul: judul.value,
        teks: teks.value,
    });
    loadFile.closeBtn();
});

//keitka tombol submit di klik maka program akan mengambil value dari setiap element yang di pilih
card2.addEventListener('submit',(e)=>{
    e.preventDefault();
    const dataIndex = url.length - 1;
    
    datas.createSlideGambar({
        tipe:'gambar',
        urlGambar: url[dataIndex],
    });
    loadFile.closeBtn();
});
