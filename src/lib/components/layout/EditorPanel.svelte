<script lang="ts">
	import SectionCard from "$lib/components/ui/SectionCard.svelte";
    import Input from "$lib/components/ui/Input.svelte";
    import Textarea from "../ui/Textarea.svelte";
    import Checkbox from "../ui/Checkbox.svelte";
	import ProjectCard from "../editor/ProjectCard.svelte";
	import SkillsEditor from "../editor/SkillsEditor.svelte";
	import ExperienceCard from "../editor/ExperienceCard.svelte";
	import EducationCard from "../editor/EducationCard.svelte";
	import ThemeEditor from "../editor/ThemeEditor.svelte";
	import { getPortfolioContext } from "$lib/context/portfolio";
	import {flip} from "svelte/animate"
	import ContactEditor from "$lib/components/editor/ContactEditor.svelte"

	const portfolio = getPortfolioContext()
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
	function addExperince(){
		portfolio.experience.push({
			id:Date.now(),
			company:"",
			role:'',
			duration:"",
			description:""
		})
	}
	function deleteExperince(id:number){
		portfolio.experience = portfolio.experience.filter((e)=>e.id !== id)
	}
	function moveProjectUp(index: number) {
	if (index === 0) return;

	[
		portfolio.projects[index - 1],
		portfolio.projects[index]
	] = [
		portfolio.projects[index],
		portfolio.projects[index - 1]
	];
}

	function moveProjectDown(index: number) {
		if (index === portfolio.projects.length - 1) return;

		[
			portfolio.projects[index],
			portfolio.projects[index + 1]
		] = [
			portfolio.projects[index + 1],
			portfolio.projects[index]
		];
	}
</script>

<div class="space-y-6">
<section id="Hero"><SectionCard title="Hero Section">
	<div  class="space-y-5">
        <Input label="Name" bind:value={portfolio.hero.name} placeholder="Your name"/>
        <Input label="Professional Title"
			bind:value={portfolio.hero.title}
			placeholder="Your title"/>
        <Textarea label="Bio" bind:value={portfolio.hero.bio} placeholder="Tell visitors about yourself"/>    
          </div>
</SectionCard></section>

<section id="About"><SectionCard title="About Section">
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
</SectionCard></section>

<section id="Projects">
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
	<div animate:flip><ProjectCard {project} {index} onMoveUp={() => moveProjectUp(index)}
		onMoveDown={() => moveProjectDown(index)} onDelete={()=>deleteProject(project.id)}/>
	</div>	
	{/each}
</section>

<section id="Skills"><SkillsEditor/></section>

<section id="Experience">
<div class="mb-4 flex justify-between items-center">
	<h2 class="text-xl font-semibold">Experience</h2>

	<button
		onclick={addExperince}
		class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
	>
		+ Add Experince
	</button>
</div>
{#each portfolio.experience as experience, index(experience.id)}
<ExperienceCard {experience} {index} onDelete={()=>deleteExperince(experience.id)}/>
{/each}
</section>

<section id="Education">
{#each portfolio.education as education, index(education.id)}
<EducationCard {education} {index} onDelete={()=>deleteExperince(education.id)}/>
{/each}
</section>
<section id="Contact"><ContactEditor/></section>
<section id="Theme"><ThemeEditor/></section>
</div>


