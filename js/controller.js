const loadFile = {

// fungsi untuk mempreview gambar
    upload(event){
        let image = document.getElementById('output');
        url.push(URL.createObjectURL(event.target.files[0]));
        image.src = URL.createObjectURL(event.target.files[0])
    },

// fusngi untuk menampilkan popup
    card(){
        back.classList.remove('display');
        card1.classList.remove('display');
    },

    cardGambar(){
        card1.classList.add('display');
        card2.classList.remove('display');
    },

    cardText(){
        card1.classList.add('display');
        card3.classList.remove('display');
    },
    closeBtn(){
        card1.classList.add('display');
        card2.classList.add('display');
        card3.classList.add('display');
        back.classList.add('display');
    },
//

//fungsi untuk mendapatkan idSlide yang ada di tombol hapus
    hapusBtn(){
        const btnHapus = document.querySelectorAll('.btnHapus');
        btnHapus.forEach((btn)=>{
            btn.addEventListener("click",function (e){
                e.preventDefault();
                let idSlide = this.dataset.idslide;
                    datas.deleteSlide(idSlide);
            });
        })
    }
}

const datas = {

//fungsi untuk membuat slide text
    createSlideText(
        {
            tipe,
            judul,
            teks,
        }
    ){     
        const newSlide = {
            id:this.uniqid(),
            tipe,
            judul,
            teks,
        }
        slides.push(newSlide);
        console.log(slides);
        this.rendering();
        return true;
    },

//fungsi untuk membuat slide gambar
    createSlideGambar(
        {
            tipe,
            urlGambar,
        }
    ){     
        const newSlide = {
            id:this.uniqid(),
            tipe,
            urlGambar,
        }
        slides.push(newSlide);
        this.rendering();
        return true;
    },

//fungsi untuk menghapus slide
    deleteSlide(data){
        const index = slides.findIndex((slide) => slide.id === data );
        console.log(slides[index]);
        slides.splice(index, 1);
        this.rendering();
    },

    //fungsi untuk mengupdate slide 
    rendering(){
        let renderPlace = "";
        let count = 0;
        place.innerHTML = renderPlace;
        slides.forEach((slide)=>{
            count++
            if(slide.tipe == "teks"){
                renderPlace += textRender(slide,count);
                place.innerHTML = renderPlace;
            }
            else if(slide.tipe == "gambar"){
                renderPlace +=gambarRender(slide,count);
                place.innerHTML = renderPlace;
            }else{
                place.innerHTML = renderPlace;
            }
            loadFile.hapusBtn();
        });
    },
    //fungsi ini digunakan untuk membuat id
    uniqid(){
        const id = Math.random().toString();
        return id.slice(2);
    }
}
