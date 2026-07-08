<script lang="ts">
	import type { Portfolio } from "$lib/types/portfolio";
	interface Props {
		portfolio:Portfolio
	}
	let {portfolio}:Props = $props();
	const skillCount = $derived(portfolio.skills.length)
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
			<p class="mt-2 text-zinc-400 ">{project.github}</p>
			<p class="mt-2 text-zinc-400">{project.liveDemo}</p>
		</div>
		{/each}
	</section>
	<section class="mt-10">
	<div class="flex items-center justify-between">
	<h2 class="text-xl font-semibold">Skills</h2>

	<p class="text-sm text-zinc-400">
		{skillCount} skills
	</p>
    </div>
		<div class="flex flex-wrap gap-3">
			{#each portfolio.skills as skill (skill)}
		<span class="bg-blue-600 px-3 py-1 rounded text-sm font-medium">
			{skill}
		</span>
		{/each}
		</div>
	</section>
	<section class="mt-10">
		<h3 class="text-2xl font-semibold">Experience</h3>
		{#each portfolio.experience as experience (experience.id)}
		{@const exp = experience}
		<h3 class="text-xl font-semibold">{exp.company}</h3>
		<p class="mt-2 text-zinc-400">{exp.role}</p>
		<p class="mt-2 text-zinc-400">{exp.duration}</p>
		<p class="mt-2 text-zinc-400">{exp.description}</p>
		{/each}
	</section>
</div>