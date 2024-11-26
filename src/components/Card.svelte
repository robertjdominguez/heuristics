<script lang="ts">
	export let content: { slug: string; name: string; description: string; encountered: boolean };
	const opacity = content.encountered ? '1' : '0.3';
</script>

<li style="--opacity: {opacity}">
	<h3>{content.name}</h3>
	<p>{content.description}</p>
	{#if content.encountered}
		<a href="heuristics/{content.slug}">Read »</a>
	{/if}
</li>

<style>
	li {
		flex: 1 1 calc(33.333% - 1rem);
		box-sizing: border-box;
		padding: 1rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		background: #f9f9f9;
		display: flex;
		flex-direction: column;
		opacity: var(--opacity);
	}

	li a {
		margin-left: auto;
		text-align: right;
		text-decoration: none;
		color: black;
		border: solid 1px black;
		border-radius: 8px;
		padding: 0.25rem 1.5rem;
		transition: ease-in-out 0.15s;
	}

	li a:hover {
		color: white;
		background: black;
	}

	@media (max-width: 768px) {
		li {
			flex: 1 1 calc(50% - 1rem);
		}
	}

	@media (max-width: 480px) {
		li {
			flex: 1 1 100%;
		}
	}
</style>
