<script lang="ts">
    import { getPortfolioContext } from "$lib/context/portfolio";
	import SectionCard from "../ui/SectionCard.svelte";

    const portfolio = getPortfolioContext();
</script>
<SectionCard title="Theme">

	<div class="space-y-4">

		<div>
			<label for="color" class="mb-2 block text-sm font-medium">
				Accent Color
			</label>

			<input
				type="color"
				bind:value={portfolio.theme.accent}
				class="h-12 w-full rounded-lg border border-zinc-700"
			/>
		</div>

	</div>

    <div>

        <label for="range" class="mb-2 block">
            Font Size
        </label>

        <input
            type="range"
            min="14"
            max="22"
            bind:value={portfolio.theme.fontSize}
            class="w-full"
        />

    </div>

    <div>

        <label for="range" class="mb-2 block">
            Border Radius
        </label>

        <input
            type="range"
            min="0"
            max="30"
            bind:value={portfolio.theme.borderRadius}
            class="w-full"
        />

    </div>

    <label class="flex items-center gap-3">

        <input
            type="checkbox"
            bind:checked={portfolio.theme.darkMode}
        />

        Dark Mode

    </label>
</SectionCard>


