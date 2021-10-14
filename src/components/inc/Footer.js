import React, { Component } from 'react';
// import logo from '../assets/logo-footer.svg'
// import fb from '../assets/fb.svg'
// import ig from '../assets/instagram.svg'
// import logo2 from "../assets/logo2.svg"
import fb from "../images/fb.svg";
import ig from "../images/ig.svg";
import ps from "../images/ps.svg";

class Footer extends Component{
    render(){
        return(
        //     <section id="footer">
        //     <div class="container py-4">
        //         <div class="row px-lg-5 px-md-3 text-center text-sm-start">
        //             <div class="col-xs-12 col-sm-4 col-md-3">
        //                 <div class="logo-footer text-start mt-5 text-center">
        //                     <img src={logo2} alt="logo-footer" class="w-100" />
        //                 </div>
        //             </div>
              
        //             <div class="col-xs-12 ps-md-5 col-sm-4 col-md-3">
        //                 <ul class="list-unstyled quick-links mt-5">
        //                     <li>
        //                         <a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Home</a>
        //                     </li>
        //                     <li>
        //                         <a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Login Admin</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div class="col-xs-12 col-sm-4 col-md-3">
        //                 <ul class="list-unstyled quick-links mt-5">
        //                     <li>
        //                         <a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>About Us</a>
        //                     </li>
        //                     <li>
        //                         <a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i>Login Admin</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div class="col-xs-12 col-sm-4 col-md-3">
        //                 <h6 class="mt-5 text-white">Contact Us:</h6>
        //                 <p class="text-break">govio@gmail.com</p>
        //                 <div class="flex flex-wrap">
        //                     <a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i><img src={fb} /></a>
        //                     <a class="ms-3" href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-angle-double-right"></i><img src={ig}/></a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section class="section-footer">
        <footer>
            <div class="container pt-5">
            <div class="row">
                <div class="col">
                    <div class="wrapper-col-1 mb-3">
                        <h6>Home</h6>
                        <a href="#">Apa yang kita lakukan</a>
                        <a href="#">Layanan</a>
                        <a href="#">Kenapa Rapilah?</a>
                        <a href="#">Pertanyaan Umum</a>
                    </div>
                </div>
                <div class="col">
                    <div class="wrapper-col-2">
                      <h6>Tentang Kami</h6>  
                      <a href="#">Tentang Rapilah</a>
                      <a href="#">Reduce,Reuse,Recycle</a>
                    </div>
                </div>
                <div class="col">
                    <div class="wrapper-col-3">
                        <h6>Layanan</h6>
                        <a href="#">Pick Up</a>
                        <a href="#">Drop Off</a>
                        <a href="#">Company</a>
                        <a href="#">Cara Download</a>
                    </div>
                </div>
                <div class="col">
                    <div class="wrapper-col-4">
                        <h6>Cara Pakai</h6>
                        <a href="#">Mulai Download</a>
                        <a href="#">Mulai Aplikasi</a>
                    </div>
                </div>
                <div class="col">
                   <div class="wrapper-col-5">
                    <h6>Login</h6>
                    <a href="#">Login Admin</a>
                    <a href="#">Login User</a> 
                   </div> 
                </div>
                <div class="col">
                    <div class="wrapper-col-6">
                        <h6>Ikuti Kami</h6>
                    </div>
                    <div class="wrapper-icon d-flex">
                        <a href="#"><img src={ig} alt=""/></a>
                        <a href="#"><img src={fb} alt=""/></a>
                    </div>
                </div>
                <div class="col">
                    <div class="wrapper-col-7">
                        <h6>Download App</h6>
                    </div>
                    <div class="wrapper-icon2">
                        <a href="#"><img src={ps} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
        </footer>

    </section>
        )
    }
}

export default Footer;
