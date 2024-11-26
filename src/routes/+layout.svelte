<script lang="ts">
	import Navigation from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/heuristics', label: 'Heuristics' },
		{ href: '/faq', label: 'FAQ' }
	];

	const footerLinks = [
		{ href: 'https://dominguezdev.com', label: 'Main Site' },
		{ href: 'https://dominguezdev.com/posts', label: 'Blog' }
	];

	const paragraph = `Thinking Clearly (about Development) is my public airing of all the ways I’ve managed to outsmart myself as an engineer. Inspired by Dobelli’s dry humor and Feynman’s cheerful warning that you’re your own worst enemy, this site is basically a catalog of my faceplants, served up with just enough structure to pretend it’s helpful. Feel free to poke around, but let’s be honest—you’ll probably still have to trip over these same mistakes on your own.`;
</script>

<div class="layout">
	<Navigation links={navLinks} />
	<div class="wrapper">
		<slot />
	</div>
	<Footer links={footerLinks} {paragraph} />
</div>

<style global>
	@import '../app.css';
</style>
