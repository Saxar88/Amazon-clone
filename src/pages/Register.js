import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../hooks/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const navigate = useNavigate();

	const register = (e) => {
		e.preventDefault();
		if (repeatPassword === password) {
			createUserWithEmailAndPassword(auth, email, password)
				.then((auth) => {
					if (auth) {
						navigate('/');
					}
				})
				.catch((error) => alert(error.message));
		}
	};

	return (
		<div className='register'>
			<Link to='/'>
				<img className='register--logo' src='images/logo-b.png' alt='logo' />
			</Link>
			<div className='register--container'>
				<h1>Create account</h1>
				<form>
					<h5>Email or mobile phone number</h5>
					<input
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type='password'
						value={password}
						placeholder='At least six characters'
						onChange={(e) => setPassword(e.target.value)}
					/>
					<span className='register--info'>
						<FontAwesomeIcon icon={faInfo} className='register--infoIcon' />
						<p className='register--infoText'>
							Passwords must be at least 6 characters.
						</p>
					</span>
					<h5>Re-enter password</h5>
					<input
						type='password'
						value={repeatPassword}
						onChange={(e) => setRepeatPassword(e.target.value)}
					/>
					<button
						type='submit'
						className='register--registerButton'
						onClick={register}>
						Verify e-mail
					</button>
				</form>
				<p>
					By creating an account you agree to Amazon's{' '}
					<a href=''>Conditions of Use & Sale</a>. Please see our{' '}
					<a href=''>Privacy Notice</a>, our <a href=''>Cookies Notice</a> and
					our <a href=''>Interest-Based Ads Notice</a>.
				</p>
				<hr />
				<div className='register--smallPrint'>
					<p>
						Already have an account? <a href=''>Sign in</a>
					</p>
					<p>
						Buying for work? <a href=''>Create a free business account</a>
					</p>
				</div>
			</div>
			<hr />
			<div className='register--bottomInfo'>
				<div className='register--bottomLinks'>
					<a href=''>Conditions of Use</a>
					<a href=''>Privacy Notice</a>
					<a href=''>Help</a>
					<a href=''>Legal Notice</a>
					<a href=''>Cookies Notice</a>
					<a href=''>Interest-Based Ads Notice</a>
				</div>
				<p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
			</div>
		</div>
	);
}

export default Register;
