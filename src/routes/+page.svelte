<script>
	export let title = 'Thinking Clearly (about Development)';
	export let description =
		'Thinking Clearly (about Development) is my public airing of all the ways I’ve managed to outsmart myself as an engineer. Inspired by Dobelli’s dry humor and Feynman’s cheerful warning that you’re your own worst enemy, this site is basically a catalog of my faceplants, served up with just enough structure to pretend it’s helpful. Feel free to poke around, but let’s be honest—you’ll probably still have to trip over these same mistakes on your own.';
	export let ogImage = 'https://avatars.githubusercontent.com/u/24390149?v=4';
	export let url = 'https://heuristics.dominguezdev.com';
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

<h1>Thinking Clearly (about Development)</h1>
<p>
	A little over a year ago, I stumbled on a book called <a
		href="https://www.harperacademic.com/book/9780062219695/the-art-of-thinking-clearly/"
		target="_blank"
		rel="noopener noreferrer">The Art of Thinking Clealry</a
	>. To say I was hooked is a understatement. Rolf Dobelli's austere sense of humor and trademark
	German bluntness make this hard to put down. You'll find yourself wanting to reach his nugget of
	wisdom at the end of each chapter, take your dopamine hit, and flip the page to learn how you've
	managed to fool yourself another way.
</p>
<p>
	Dobelli never intended to publish his personal checklist of rationality bugs; he wanted to use
	them as tool for self reflection and to catch himself when he easily — and sometimes eagerly —
	wandered into one of these biases. Similarly, I never intended to document running into these
	traps myself — but, then I wanted to learn a <a
		href="https://svelte.dev/"
		target="_blank"
		rel="noopener noreferrer">new framekwork</a
	>. So, here we all are.
</p>
<p>
	I know myself (to a certain degree) and, if you're anything like me, you also know that <a
		href="https://en.wikipedia.org/wiki/Richard_Feynman"
		target="_blank"
		rel="noopener noreferrer">Richard Feynman's</a
	> first principle of learning is the most important:
</p>
<blockquote>
	The first principle is that you must not fool yourself and you are the easiest person to fool.
</blockquote>
<p>
	So, welcome to a structured framework of all the ways I've fooled myself as an engineer. Visit <a
		href="/heuristics">the heuristics</a
	> to learn from my mistakes, but know that you'll probably have to learn these lessons yourself as
	well.
</p>

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
