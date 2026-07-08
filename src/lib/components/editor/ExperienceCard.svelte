<script lang="ts">
	import type { Experience } from "$lib/types/portfolio";
	import Input from "../ui/Input.svelte";
	import SectionCard from "../ui/SectionCard.svelte";
	import Textarea from "../ui/Textarea.svelte";

    interface Props {
        experience:Experience;
        index:number;
        onDelete:()=>void;
    }
    let {experience,index,onDelete}:Props = $props();
</script>
<SectionCard title={`Experience ${index + 1}`}>
<div class="space-y-4">
<Input label="Company" bind:value={experience.company}/>
<Input label="Role" bind:value={experience.role}/>
<Input label="Duration" bind:value={experience.duration}/>
<Textarea label="Description" bind:value={experience.description} placeholder="Tell me about your job experience"/>
</div>
</SectionCard>
<button onclick={onDelete} class="mt-4 bg-blue-600 hover:bg-blue-700 rounded-lg px-4 text-white py-2">Delete experience</button>