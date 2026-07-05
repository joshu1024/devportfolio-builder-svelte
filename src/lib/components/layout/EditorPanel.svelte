<script lang="ts">
	import SectionCard from "$lib/components/ui/SectionCard.svelte";
    import Input from "$lib/components/ui/Input.svelte";
    import Textarea from "../ui/Textarea.svelte";
    import type{ Portfolio } from "$lib/types/portfolio";
  
   interface Props {
    portfolio:Portfolio
   }
   let {portfolio}:Props = $props()
</script>

<SectionCard title="Hero Section">
	<div class="space-y-5">
        <Input label="Name" bind:value={portfolio.hero.name} placeholder="Your name"/>
        <Input label="Professional Title"
			bind:value={portfolio.hero.title}
			placeholder="Your title"/>
        <Textarea label="Bio" bind:value={portfolio.hero.bio} placeholder="Tell visitors about yourself"/>    
    </div>
</SectionCard>