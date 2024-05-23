import React from 'react';
import './loginForm.css';
import QR from "../../media/qrcode.png"
import { Link, useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate()
    
    function Login(){
        navigate('/home')
    }
	return (
		<section className="loginForm">
			<form className="loginForm__user">
				<h1 className="loginForm__title">Welcome back!</h1>
				<p className="loginForm__subtitle">
					We're so excited to see you again!
				</p>
				<label>
					<h3>
						EMAIL OR NUMBER <span>*</span>
					</h3>
					<input className="loginForm__input" type="text" name="username" />
				</label>
				<label>
					<h3>
						PASSWORD <span>*</span>
					</h3>
					<input className="loginForm__input" type="text" name="password" />
				</label>
				<a href="#" className="loginForm__link">
					Forgot your password?
				</a>
				<button className="btn" onClick={Login}>
					Log In
				</button>
				<p className="loginForm__register">
					Need an account?{' '}
					<a href="#" className="loginForm__link">
						Register
					</a>
				</p>
			</form>
			<aside className="loginForm__qrcode">
				<img className="loginForm__qrcode__img" src={QR} alt="qr code" />
				<p className="loginForm__qrcode__header">Log in with QR Code</p>
				<p className="loginForm__qrcode__text">
					Scan this with the
					<span className="loginForm__qrcode__text__span">
						{' '}
						Discord mobile app{' '}
					</span>
					to log in instantly.
				</p>
			</aside>
		</section>
	);
}
