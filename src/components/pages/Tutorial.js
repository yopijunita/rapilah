import React, { Component } from 'react';
import '../styles/carapakai.css';

class Tutorial extends Component{
    render(){
        return(
            <div class="container-fluid mb-4">
                <div id="caraPakai" class="row pt-5">
                    <div class="col-12">
                        <div id="carouselCaraPakai" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div class="carousel-indicators mb-0" id="caraIndicators"></div>
                            <div class="carousel-inner py-3" id="caraPakaiContainer"></div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselCaraPakai" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselCaraPakai" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        )
        const caraPakai = [
            {
                title: "Download Aplikasi Rapilah Di PlayStore",
                desc: "Buka Playstore, tekan tombol search dan ketik keyword Rapilah, lalu instal.",
                img: "Playstore mockup 1.png"
            },
            {
                title: "Buka Aplikasi Rapilah",
                desc: "Buka aplikasi Rapilah lalu login atau buat akun baru di menu Sign Up.",
                img: "splashacreen mockup 1.png"
            },
            {
                title: "Pilih “Lihat Kategori”",
                desc: "Pilih “Lihat Ketegori” dan pilih fitur apa yang ingin kalian pakai.",
                img: "homepage mockup 1.png"
            },
            {
                title: "Pilih Sampah",
                desc: "Pilih sampah yang ingin kalian daur ulang, kalian bisa memilih lebih dari 1 sampah.",
                img: "pick up mockup 1.png"
            },
            {
                title: "Input Foto",
                desc: "Input foto sampah yang sudah kalian kumpulkan dan isi format yang ada disana.",
                img: "pickup2 1.png"
            },
            {
                title: "Pilih Metode Pembayaran",
                desc: "Kalian bisa pilih metode pembayaran, terdapat pilihan transfer atau tukar menjadi poin.",
                img: "pembayaran mockup 1.png"
            }
        ];

        const caraPakaiContainer = document.getElementById("caraPakaiContainer");
        const caraIndicators = document.getElementById("caraIndicators");

        let i = 1;
        caraPakai.forEach((cara, index) => {
            console.log(cara, i);
            const indicator = `<button type="button" data-bs-target="#carouselCaraPakai" data-bs-slide-to="${index}" ${
                i == 1 ? 'class="active" aria-current="true"' : ""
            } aria-label="Slide ${i}"></button>`;

            const item = `
            <div class="carousel-item ${i == 1 ? "active" : ""}">
                <div class="row">
                    <div class="col-12 col-md-5">
                        <div class="img-container position-relative">
                            <img class="position-absolute" src="./src/images/${cara.img}" class="d-block w-100" alt="Cara ${i}" />
                            <svg class="position-absolute bottom-0 end-0" width="350" height="350" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M652.443 232.705C675.866 290.058 624.996 348.863 610.893 409.188C597.52 466.388 610.262 532.055 572.031 576.654C532.27 623.038 468.354 641.712 407.45 646.519C348.304 651.187 291.702 630.883 239.382 602.909C186.269 574.511 129.314 542.183 107.393 486.086C85.9169 431.126 110.498 371.222 126.673 314.475C141.445 262.647 157.397 210.082 196.601 173.105C235.975 135.968 288.629 117.718 342.342 111.055C396.16 104.379 448.663 115.77 499.148 135.575C556.875 158.22 628.998 175.298 652.443 232.705Z"
                                    fill="#0B9444"
                                />
                            </svg>
                        </div>
                    </div>
                    <div class="col-12 col-md-7 px-4 ps-md-0 pt-3 pt-md-5 pe-md-5">
                        <h2 class="position-relative text-success ms-5 ms-md-0 w-75 pb-2">
                            ${cara.title}
                            <span class="position-absolute top-0 step text-white bg-success translate-middle d-flex justify-content-center rounded-circle fs-5">
                                ${i}
                            </span>
                        </h2>
                        <p class="pe-md-4">${cara.desc}</p>
                    </div>
                </div>
            </div>`;

            caraIndicators.innerHTML += indicator;
            caraPakaiContainer.innerHTML += item;
            i++;
        });
    }
}

export default Tutorial;