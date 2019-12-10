import React from 'react';

export function LoginForm() {
	return (
		<div>
			<form>
				<label for="loginEmail">Email</label>
				<input type="email" name="loginEmail" placeholder="email"/>
				<label for="loginPassword">Password</label>
				<input type="password" name="loginPassword"/>
				<button>Log in</button>
			</form>
		</div>
	);
}