import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      {/* ============= SignIn-area start =============*/}
      <div className='signin-area pd-top-110'>
        <Container>
          <div className='signin-area-inner text-center'>
            <img src='/Assets/Images/other/2.png' alt='img' />
            <h3>لنقم بتسجيل الدخول</h3>
            <p>مرحبًا بعودتك ، لقد فاتتك!</p>
            <a className='btn btn-white w-100 mt-3' href='#'>
              <img
                className='mb-0'
                src='/Assets/Images/icon/google.png'
                alt='img'
              />
              Login With Google
            </a>
            <a className='btn btn-white w-100' href='#'>
              <FaFacebookF /> <span>Login With Facebook</span>
            </a>
            <div className='or'>
              <span>or</span>
            </div>
          </div>
          <form className='contact-form-inner float-end'>
            <label className='single-input-wrap'>
              <input
                className='text-end'
                type='text'
                placeholder='aron.banking@gmail.com'
              />
            </label>
            <label className='single-input-wrap'>
              <input
                className='text-end'
                type='password'
                placeholder='************'
              />
            </label>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                defaultValue=''
                id='flexCheckDefault'
              />
              <label className='form-check-label' htmlFor='flexCheckDefault'>
                تذكرنى
              </label>
              <a className='float-end' href='#'>
                نسيت كلمة المرور؟
              </a>
            </div>
            <a className='btn-large btn-blue w-100' href='#'>
              تسجيل الدخول
            </a>
            <div className='text-center'>
              <p>
                بالفعل ليس لديك حساب؟ <Link to='/rtl-signup'>اشتراك !</Link>
              </p>
            </div>
          </form>
        </Container>
      </div>
      {/*============= SignIn-area End =============*/}
    </>
  );
};

export default SignIn;
