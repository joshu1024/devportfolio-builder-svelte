<script lang="ts">
	import type { Hero } from "$lib/types/portfolio";
	interface Props {
		hero:Hero
	}
	let {hero}:Props = $props();
</script>

<div class="p-8 border rounded-2xl border-zinc-800 bg-zinc-950">
	<h1 class="text-4xl font-bold">{hero.name}</h1>
	<p class="mt-2 text-blue-400 text-lg">{hero.title}</p>
	<p class="mt-6 text-zinc-400 leading-7">{hero.bio}</p>
</div>