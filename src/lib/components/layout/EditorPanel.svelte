<script lang="ts">
	import SectionCard from "$lib/components/ui/SectionCard.svelte";
    import Input from "$lib/components/ui/Input.svelte";
    import Textarea from "../ui/Textarea.svelte";
    import type{ Portfolio } from "$lib/types/portfolio";
    import Checkbox from "../ui/Checkbox.svelte";
   interface Props {
    portfolio:Portfolio
   }
   let {portfolio}:Props = $props()
</script>

<div class="space-y-6"><SectionCard title="Hero Section">
	<div class="space-y-5">
        <Input label="Name" bind:value={portfolio.hero.name} placeholder="Your name"/>
        <Input label="Professional Title"
			bind:value={portfolio.hero.title}
			placeholder="Your title"/>
        <Textarea label="Bio" bind:value={portfolio.hero.bio} placeholder="Tell visitors about yourself"/>    
          </div>
</SectionCard>
<SectionCard title="About Section">
	<div class="space-y-5">
		<Input
			label="Location"
			bind:value={portfolio.about.location}
			placeholder="Your location"
		/>

		<Textarea
			label="About Me"
			bind:value={portfolio.about.description}
			placeholder="Tell visitors about yourself..."
		/>

		<Checkbox
			label="Available for work"
			bind:checked={portfolio.about.available}
		/>
	</div>
</SectionCard></div>
