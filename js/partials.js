// fungsi ini berfungsi sebagai template untuk ditampilkan di file html
function textRender(data,count){
    let result = `
    <div class="parent-slide">
    <div class="tit">
        <p>Slide ${count}</p>
        <button data-idslide="${data.id}" class="hapus btnHapus" >Hapus</button>
    </div>
    <div class="slides">
        <h1>${data.judul}</h1>
        <p>${data.teks}</p>
    </div>
    </div>
    `;
    return result;
}
function gambarRender(data,count){
    let result = `
    <div class="parent-slide">
    <div class="tit">
        <p>Slide ${count}</p>
        <button data-idslide="${data.id}" class="hapus btnHapus" >Hapus</button>
    </div>
    <div class="slides">
        <img style="width:700px;" src="${data.urlGambar}" alt="">
    </div>
    </div>
    `;
    return result;
}