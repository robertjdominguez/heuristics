<script lang="ts">
	import type { PageData } from './$types';
	import Gallery from '../../components/Gallery.svelte';

	let title = 'Thinking Clearly (about Development)';
	let description =
		'Thinking Clearly (about Development) is my public airing of all the ways I’ve managed to outsmart myself as an engineer. Inspired by Dobelli’s dry humor and Feynman’s cheerful warning that you’re your own worst enemy, this site is basically a catalog of my faceplants, served up with just enough structure to pretend it’s helpful. Feel free to poke around, but let’s be honest—you’ll probably still have to trip over these same mistakes on your own.';
	let ogImage = 'https://avatars.githubusercontent.com/u/24390149?v=4';
	let url = 'https://heuristics.dominguezdev.com/faq';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<h1>The Ways I've Fooled Myself</h1>
<h2>Mistakes are normal</h2>
<p>I make a lot of mistakes. Don't worry, I'm in good company: you do, too.</p>
<p>
	And, as <a href="https://www.hbs.edu/faculty/Pages/item.aspx?num=64186">Amy Edmondson</a> tells
	us, this is perfectly normal. What's critical is that we learn from these mistakes and seek to
	reduce their impact on our progress. Often, we're forced to learn the same lessons because they
	haven't stuck the first or second or tenth time. However, we can transform our error rate by being
	reflective and actually attempting to <i>learn</i> from the mistake...not simply "encounter" it and
	move on.
</p>
<p>
	So, with that in mind, here are my nearly 100 ways I've been fooled (by myself) with a
	concentration on building software day in and day out. Hopefully they help you see the err of your
	own ways.
</p>
<p class="admonition">
	Have questions about how to use this site? Check out the <a href="/faq">FAQ</a>.
</p>
<Gallery items={data.heuristicsData} />

<style>
	a {
		color: black;
		text-decoration: none;
		transition: ease-in-out 0.15s;
		border-bottom: solid 1px black;
	}

	a:hover {
		border-bottom: solid 2px black;
	}
</style>
