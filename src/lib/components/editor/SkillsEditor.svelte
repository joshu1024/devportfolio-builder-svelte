<script lang="ts">
	import type { Portfolio } from "$lib/types/portfolio";
	import SectionCard from "../ui/SectionCard.svelte";
    interface Props {
        portfolio:Portfolio
    }
    let {portfolio}:Props = $props();
    let newSkill = $state("");
    let skillCount = $derived(portfolio.skills.length);

    function addSkill(){
        const skill = newSkill.trim();
        if(!skill) return;
        if(portfolio.skills.includes(skill)) return;

        portfolio.skills.push(skill)
        newSkill = "";
    }
    function removeSkill(skill:string){
        portfolio.skills = portfolio.skills.filter((s)=>s!==skill)
    }

</script>

<SectionCard title="Skills">
<div class="space-y-4">
    <div class="flex items-center justify-between"><p class="text-sm text-zinc-400">{skillCount} skills</p></div>
    <div class="flex gap-2">
        <input onkeydown={(event)=>{
            if(event.key === "Enter"){addSkill()}
        }} bind:value={newSkill} placeholder="Add a skill..." type="text" class="flex-1 border rounded-lg px-3 py-2 border-zinc-700 bg-zinc-900 focus:border-blue-500">
        <button onclick={addSkill} class="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Add</button>
    </div>
    <div class="flex flex-wrap gap-2">
        {#each portfolio.skills as skill (skill)}
           <div class="flex items-center gap-2 bg-zinc-800 px-3 py-2 rounded-full">
            <span>{skill}</span>
            <button onclick={()=>removeSkill(skill)} class="text-red-400 hover:text-red-300">✕</button>
           </div> 
        {/each}
    </div>
</div>
</SectionCard>