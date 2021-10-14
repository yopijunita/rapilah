import React from 'react';
import mockup from '../images/mockup.svg';
import google from '../images/google.svg';

function Register() {
    return(
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 position-relative">
                <img src={mockup} alt="mockup" class="mockup mt-5"/>
            </div>
            <div class="col-md-4">
                <div class="card login-form mt-5">
                    <div class="card-body">
                        <h2 class="card-title text-center">Sign In</h2>
                        <h6 class="card-subtitle text-center mb-5 mt-3">Mulai hidup bersih bersama Rapilah!</h6>
                        <form>
                            <div class="mb-3 mt-3">
                                <input type="username" class="form-control" id="exampleInputEmail1" placeholder="Username"/>
                               
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>

                            <div class="d-flex justify-content-between">
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label check" for="exampleCheck1">Ingat saya</label>
                                </div>
                                <div>
                                    <a href="#" class="link1">Lupa Password?</a>
                                </div>
                            </div>

                            <div class="d-grid mt-2">
                                <button type="submit" class="btn btn-login">Login</button>
                            </div>
                            <div class="d-grid mt-3">
                                <button type="submit" class="btn btn-light btn-gmail"><img src={google} class="img-google me-2" alt="Gmail"/>Login dengan Google</button>
                            </div>

                            <div class="mt-3 text-center">
                                <label>Belum punya akun ? <a href="index2.html" class="link">Sign Up</a> </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Register;