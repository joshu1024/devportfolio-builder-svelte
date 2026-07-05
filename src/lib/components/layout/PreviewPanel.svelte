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
</div>