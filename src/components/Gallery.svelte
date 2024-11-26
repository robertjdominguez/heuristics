<script lang="ts">
	import Card from './Card.svelte';
	import Filter from './Filter.svelte';
	export let items: Array<{
		slug: string;
		name: string;
		description: string;
		encountered: boolean;
	}> = [];

	let filteredItems = [...items];

	function handleFilter(event: any) {
		filteredItems = event.detail.filteredItems;
	}
</script>

<section class="gallery">
	<h2 id="the-heuristics">The heuristics</h2>
	<Filter {items} on:filter={handleFilter} />

	<ol>
		{#each filteredItems as item}
			<Card content={item} />
		{/each}
	</ol>
</section>

<style>
	.gallery {
		display: flex;
		flex-direction: column;
	}
	ol {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		padding: 0;
		margin: 0;
		list-style: none;
	}
</style>
