<script lang="ts">
	import { page } from '$app/stores';

	export let links: Array<{ href: string; label: string }> = [];
</script>

<nav>
	<ul>
		{#each links as { href, label }}
			<li>
				<a {href} class:active={$page.url.pathname === href}>{label}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		background-color: white;
		padding: 1rem;
		color: black;
	}

	ul {
		display: flex;
		justify-content: end;
		gap: 1rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	a {
		color: black;
		text-decoration: none;
		font-weight: bold;
	}

	a:hover {
		border-bottom: solid 1px black;
	}

	a.active {
		border-bottom: solid 1px black;
	}
</style>
