<script lang="ts">
	export let links: Array<{ href: string; label: string }> = [];
	export let paragraph: string = 'Default footer text. You can update this message dynamically.';
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<section class="footer-content">
		<p class="clever-text">{paragraph}</p>
		<nav>
			<ul>
				{#each links as { href, label }}
					<li>
						<a {href} target="_blank" rel="noopener noreferrer">
							{label}
						</a>
					</li>
				{/each}
				<li>
					<a href="https://github.com/roberjdominguez" target="_blank" rel="noopener noreferrer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							width="24"
							height="24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 2C6.478 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.01-1.02-.014-1.852-2.782.603-3.369-1.34-3.369-1.34-.454-1.15-1.11-1.456-1.11-1.456-.908-.62.068-.608.068-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.939 0-1.091.39-1.985 1.03-2.683-.104-.253-.446-1.273.098-2.654 0 0 .84-.269 2.75 1.025A9.577 9.577 0 0112 6.844a9.58 9.58 0 012.5.337c1.91-1.293 2.75-1.025 2.75-1.025.544 1.381.202 2.401.1 2.654.642.698 1.03 1.592 1.03 2.683 0 3.84-2.338 4.684-4.566 4.932.36.31.682.92.682 1.856 0 1.341-.013 2.421-.013 2.75 0 .266.18.577.688.479A10.005 10.005 0 0022 12c0-5.523-4.478-10-10-10z"
							/>
						</svg>
					</a>
				</li>
			</ul>
		</nav>
	</section>
	<div class="footer-bottom">
		<p>&copy; {currentYear} Rob Dominguez. All rights reserved.</p>
	</div>
</footer>

<style>
	footer {
		background-color: white;
		color: black;
		padding: 2rem 1rem;
		border-top: 1px solid #ccc;
	}

	.footer-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.footer-content p {
		margin: 0;
	}

	.clever-text {
		max-width: 1200px;
		font-size: 0.9rem;
		opacity: 0.7;
	}

	nav ul {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	nav a {
		color: black;
		text-decoration: none;
		font-weight: bold;
	}

	nav a:hover {
		text-decoration: underline;
	}

	.footer-bottom {
		text-align: center;
		margin-top: 1rem;
		font-size: 0.9rem;
		color: #555;
	}
</style>
