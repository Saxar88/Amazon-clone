import React, {useState} from "react";
import "./SignIn.css";
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../hooks/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";

function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const signIn = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((auth) => {
				if (auth) {
					navigate("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="signIn">
			<Link to="/">
				<img className="signIn--logo" src="images/logo-b.png" alt="logo" />
			</Link>
			<div className="singIn--container">
				<h1>Sign in</h1>
				<form>
					<h5>Email or mobile phone number</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="signIn--input"
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="signIn--input"
					/>
					<button
						type="submit"
						className="signIn--signInButton"
						onClick={signIn}>
						Continue
					</button>
				</form>
				<p>
					By signing-in you agree to Amazon's{" "}
					<a href="">Conditions of Use & Sale</a>. Please see our{" "}
					<a href="">Privacy Notice</a>, our <a href="">Cookies Notice</a> and
					our <a href="">Interest-Based Ads Notice</a>.
				</p>
			</div>
			<div className="signIn--register">
				<p>
					<span>New to Amazon?</span>
				</p>
				<Link to="/register">
					<button className="signIn--registerButton">
						Create your Amazon account
					</button>
				</Link>
			</div>
		</div>
	);
}

export default SignIn;
