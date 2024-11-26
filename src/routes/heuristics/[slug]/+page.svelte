<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const readableDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	}).format(new Date(data.metadata.encounteredAt));
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta name="description" content={data.metadata.description} />

	<meta property="og:title" content={data.metadata.title} />
	<meta property="og:description" content={data.metadata.hook} />
	<meta property="og:image" content={data.metadata.imageUrl} />
	<meta
		property="og:url"
		content="https:heuristics.dominguezdev.com/heuristics/{data.metadata.slug}"
	/>
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.metadata.title} />
	<meta name="twitter:description" content={data.metadata.hook} />
	<meta name="twitter:image" content={data.metadata.imageUrl} />
</svelte:head>

<article>
	<h1>{data.metadata.title}</h1>
	<p>{readableDate}</p>
	<img class="post-image" src={data.metadata.imageUrl} alt="Jackman" />
	{@html data.htmlContent}
</article>

<style>
	article {
		display: flex;
		width: 100%;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
	}

	article h1 {
		font-size: 2rem;
		margin-bottom: 0;
	}

	:global(article h2) {
		margin-bottom: 0;
	}

	.post-image {
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
