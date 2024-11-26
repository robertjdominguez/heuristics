<script>
	export let title = 'Thinking Clearly (about Development)';
	export let description =
		'Thinking Clearly (about Development) is my public airing of all the ways I’ve managed to outsmart myself as an engineer. Inspired by Dobelli’s dry humor and Feynman’s cheerful warning that you’re your own worst enemy, this site is basically a catalog of my faceplants, served up with just enough structure to pretend it’s helpful. Feel free to poke around, but let’s be honest—you’ll probably still have to trip over these same mistakes on your own.';
	export let ogImage = 'https://avatars.githubusercontent.com/u/24390149?v=4';
	export let url = 'https://heuristics.dominguezdev.com/faq';
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

<h1>FAQ</h1>
<ol>
	<li>
		<h2>What are heuristics, and why do they matter in development?</h2>
		<p>
			Heuristics are mental shortcuts or rules of thumb that help simplify decision-making. While
			they're useful for quick judgments, they often lead to biases or errors. In development,
			understanding these heuristics can help you avoid common pitfalls, make better technical
			decisions, and improve your team's processes.
		</p>
	</li>
	<li>
		<h2>How do I use the heuristics?</h2>
		<p>
			Each listing on the <a href="/heuristics#the-heuristics">heuristics page</a> has a title and a
			short blurb and — if it's been encountered — it serves as a link to a post with more detail.
			Of course, some of these biases haven't been encountered or, rather, I haven't connected the
			dots between an experience and a bias. Those are grayed-out and will <kbd>404</kbd> if you try
			to be cute.
		</p>
		<p>Each heuristic gets its own page and always follows the same structure:</p>
		<ol>
			<li><b>The heuristic</b> | The bias explained as simply as possible.</li>
			<li>
				<b>The real world</b> | A real-world development example of the bias and how it played out.
			</li>
			<li>
				<b>The lesson</b> | The point I try to remember and use as a 🚩 on a daily basis to
				<a
					href="https://www.youtube.com/watch?v=UDfAdHBtK_Q"
					target="_blank"
					rel="noopener noreferrer">not...</a
				>
			</li>
		</ol>
	</li>
	<li>
		<h2>How often do you update the heuristics?</h2>
		<p>
			Updates are based on my personal encounters with the heuristics during my projects. That means
			new examples or lessons might pop up whenever I connect the dots between a bias and a
			real-world experience. There’s no set schedule, so check back occasionally for fresh content.
			You can also add me on LinkedIn where a GitHub Action will take care of shouting about my
			inadequcies since I refuse to self-promote.
		</p>
	</li>
	<li>
		<h2>Can I contribute my own experiences with heuristics?</h2>
		<p>
			I mean, you <i>could</i>, but honestly, shouldn't you be busy living your own life instead of
			validating my biases? That said, if you're dying to share a story about how a bias absolutely
			wrecked your sprint planning or why you ended up naming a variable <code>stuff3</code>, feel
			free to drop me a <a href="#your_mom">note</a>. No promises I'll use it, but hey, it's your
			time.
		</p>
	</li>
</ol>

<style>
	li > h2 {
		font-size: 1.2rem;
	}

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
