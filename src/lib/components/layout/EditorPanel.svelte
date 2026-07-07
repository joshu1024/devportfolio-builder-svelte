<script lang="ts">
	import SectionCard from "$lib/components/ui/SectionCard.svelte";
    import Input from "$lib/components/ui/Input.svelte";
    import Textarea from "../ui/Textarea.svelte";
    import type{ Portfolio } from "$lib/types/portfolio";
    import Checkbox from "../ui/Checkbox.svelte";
	import ProjectCard from "../editor/ProjectCard.svelte";
	import SkillsEditor from "../editor/SkillsEditor.svelte";


   interface Props {
    portfolio:Portfolio
   }
   let {portfolio}:Props = $props()
   	function addProject(){
		portfolio.projects.push({
			id: Date.now(),
			title: "",
			description: "",
			github: "",
			liveDemo: ""
		})
	}
	function deleteProject(id:number){
		portfolio.projects = portfolio.projects.filter((project)=>project.id !== id)
	}
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
</SectionCard>

<div class="mb-4 flex justify-between items-center">
	<h2 class="text-xl font-semibold">Projects</h2>

	<button
		onclick={addProject}
		class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
	>
		+ Add Project
	</button>
</div>

{#each portfolio.projects as project, index(project.id)}
	<ProjectCard {project} {index} onDelete={()=>deleteProject(project.id)}/>
{/each}
<SkillsEditor {portfolio}/>
</div>


