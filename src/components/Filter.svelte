<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let items: Array<{
		slug: string;
		name: string;
		description: string;
		encountered: boolean;
	}> = [];

	const dispatch = createEventDispatcher();

	let filterEncountered: boolean | null = null;
	let searchTerm = '';

	function applyFilter() {
		let filteredItems = items;

		// Filter based on encountered status
		if (filterEncountered !== null) {
			filteredItems = filteredItems.filter((item) => item.encountered === filterEncountered);
		}

		// Filter based on search term
		if (searchTerm.trim() !== '') {
			const lowercasedSearchTerm = searchTerm.toLowerCase();
			filteredItems = filteredItems.filter(
				(item) =>
					item.name.toLowerCase().includes(lowercasedSearchTerm) ||
					item.description.toLowerCase().includes(lowercasedSearchTerm)
			);
		}

		dispatch('filter', { filteredItems });
	}
</script>

<div class="filter-controls">
	<input
		type="text"
		placeholder="Search by name..."
		bind:value={searchTerm}
		on:input={applyFilter}
	/>
	<button
		on:click={() => {
			filterEncountered = null;
			applyFilter();
		}}
	>
		Show All
	</button>
	<button
		on:click={() => {
			filterEncountered = true;
			applyFilter();
		}}
	>
		Show Encountered
	</button>
</div>

<style>
	.filter-controls {
		display: flex;
		align-items: center;
		min-width: 100%;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	input[type='text'] {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 100%;
		max-width: 300px;
	}

	button {
		padding: 0.5rem 1rem;
		border: solid 1px black;
		background-color: white;
		color: black;
		border-radius: 4px;
		cursor: pointer;
		transition: ease-in-out 0.15s;
	}

	button:hover {
		background-color: black;
		color: white;
	}

	button:active {
		background-color: #003d80;
	}

	@media (max-width: 480px) {
		.filter-controls {
			flex-direction: column;
		}
	}
</style>
