import React from 'react';

export default function Header({ loggedIn }) {
	return (
		<header className="Head">
			<nav>
				{loggedIn &&<a href="/"></a>}
				{!loggedIn &&<a href="/login">Login</a>}
				{!loggedIn &&<a href="/sign-up">Sign Up</a>}
				{loggedIn &&<a href="/log-out">Log out</a>}
			</nav>
		</header>
	);
}