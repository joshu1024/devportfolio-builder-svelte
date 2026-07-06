<script lang="ts">
	import type { Portfolio } from "$lib/types/portfolio";
	interface Props {
		portfolio:Portfolio
	}
	let {portfolio}:Props = $props();
</script>

<div class="p-8 border rounded-2xl border-zinc-800 bg-zinc-950">
	<h1 class="text-4xl font-bold">{portfolio.hero.name}</h1>
	<p class="mt-2 text-blue-400 text-lg">{portfolio.hero.title}</p>
	<p class="mt-6 text-zinc-400 leading-7">{portfolio.hero.bio}</p>
	<section class="mt-10">
	<h2 class="mb-3 text-2xl font-semibold">
		About
	</h2>

	<p class="leading-7 text-zinc-400">
		{portfolio.about.description}
	</p>

	<p class="mt-4 text-sm text-zinc-500">
		📍 {portfolio.about.location}
	</p>

	{#if portfolio.about.available}
		<p class="mt-2 text-green-400 font-medium">
			<span class="animate-pulse ">🟢</span> Available for work
		</p>
	{/if}
</section>
<section class="mt-10">
	<h2 class="text-2xl font-semibold">Projects</h2>
	{#each portfolio.projects as project(project.id)}
	<div class="mt-6 border  rounded-xl border-zinc-800 p-4">
		<h3 class="text-xl font-semibold">{project.title}</h3>
		<p class="mt-2 text-zinc-400">{project.description}</p>
	</div>
	{/each}
</section>
</div>