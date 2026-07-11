<script lang="ts">
	import { getPortfolioContext } from "$lib/context/portfolio";
	import SectionCard from "../ui/SectionCard.svelte";
	import TextField from "../ui/TextField.svelte";
   
   let portfolio = getPortfolioContext()
</script>
<section id="Contact">
	<SectionCard title="Contact">

		<TextField
			label="Email"
			bind:value={portfolio.contact.email}
		/>

		<TextField
			label="Phone"
			bind:value={portfolio.contact.phone}
		/>

		<TextField
			label="Location"
			bind:value={portfolio.contact.location}
		/>

		<TextField
			label="GitHub"
			bind:value={portfolio.contact.github}
		/>

		<TextField
			label="LinkedIn"
			bind:value={portfolio.contact.linkedin}
		/>

		<TextField
			label="Website"
			bind:value={portfolio.contact.website}
		/>

	</SectionCard>
</section>