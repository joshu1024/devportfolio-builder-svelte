<script lang="ts">
	import {getPortfolioContext} from "$lib/context/portfolio";
	import {fade} from "svelte/transition"
	let portfolio = getPortfolioContext()
	const skillCount = $derived(portfolio.skills.length)
</script>

<div style="
		font-size: {portfolio.theme.fontSize}px;
		border-radius: {portfolio.theme.borderRadius}px;
	" in:fade={{ duration:300}} class="p-8 border rounded-2xl border-zinc-800 bg-zinc-950">
	<h1 style="color:{portfolio.theme.accent}" class="text-4xl font-bold">{portfolio.hero.name}</h1>
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
	<section in:fade={{duration:200}} class="mt-10">
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
		<h2 class="mb-6 text-2xl font-bold">
			Experience
		</h2>

		{#if portfolio.experience.length === 0}

			<p class="text-zinc-500 italic">
				No experience added yet.
			</p>

		{:else}

			<div class="space-y-6">

				{#each portfolio.experience as experience (experience.id)}

					{@const exp = experience}

					<div class="border-l-2 border-blue-500 pl-4">

						<h3 class="text-lg font-semibold">
							{exp.role}
						</h3>

						<p class="text-blue-400">
							{exp.company}
						</p>

						<p class="text-sm text-zinc-500">
							{exp.duration}
						</p>

						<p class="mt-2 text-zinc-300">
							{exp.description}
						</p>

					</div>

				{/each}

			</div>

		{/if}
    </section>

	<section class="mt-10 ">

		<h2 class=" text-2xl font-bold  ml-0">Contact</h2>

		<div class="space-y-2  px-3 py-2">

			<p class="mt-2 text-zinc-300 border-b border-zinc-700 py-2">{portfolio.contact.email}</p>

			<p class="mt-2 text-zinc-300 border-b border-zinc-700 py-2">{portfolio.contact.phone}</p>

			<p class="mt-2 text-zinc-300 border-b border-zinc-700 py-2">{portfolio.contact.location}</p>

			<p class="mt-2 text-zinc-300 border-b border-zinc-700 py-2">{portfolio.contact.github}</p>

			<p class="mt-2 text-zinc-300 border-b border-zinc-700 py-2">{portfolio.contact.linkedin}</p>

			<p class="mt-2 text-zinc-300 border-b border-zinc-700 py-2">{portfolio.contact.website}</p>

		</div>

</section>
</div>