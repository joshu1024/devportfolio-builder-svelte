<script lang="ts">
    import {Moon,FileArchive,Save} from "lucide-svelte"
    import Icon from "$lib/components/ui/Icon.svelte"
    import { exportPortfolio } from "$lib/utils/exportPortfolio";
    import { getPortfolioContext } from "$lib/context/portfolio";

    const portfolio = getPortfolioContext();
</script>

<header class="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-6 h-16">
    <!--left-->
    <div class="flex items-center gap-3">
        <div class="flex bg-blue-600 hover:bg-blue-500 items-center justify-center font-bold h-10 w-10 text-white rounded-xl">D</div>
        <div>
            <h1 class="text-lg font-semibold tracking-tight">DevPortfolio Builder</h1>
            <p class="text-xs">Create your developer portolio visually</p>
        </div>
    </div>
    <!--right-->
    <div class="flex items-center gap-4">
         <button onclick={()=> exportPortfolio(portfolio)} class="flex border py-2 px-4 rounded-lg gap-2 items-center transition bg-blue-600 hover:bg-zinc-700 text-sm border-zinc-700"><FileArchive size={18}/><span >Archive</span></button>
         <button class="flex border py-2 px-4 rounded-lg gap-2 items-center transition bg-blue-600 hover:bg-zinc-700 text-sm border-zinc-700"><Save size={18}/><span >Save</span></button>
         <button class="rounded-lg border p-2 border-zinc-700 transition hover:bg-zinc-700"><Moon size={18}/></button>
         <div class="flex items-center gap-2">
            <Icon name="user" size={30}/>
            <div>
                <p class="text-sm font-medium">Joshua</p>
                <p class="text-xs">Developer</p>
            </div>
        </div>
    </div>
</header>