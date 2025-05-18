<script>
  import Menu from '@molecules/Menu/Menu.svelte';
  import fetchJson from '$lib/fetchJson';
  import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

  const menuItems = $state([]);
  const siteName = $state('tommaso.cc');

  onMount(async () => {
    const result = await fetchJson('/system/menu/main/linkset');
    if (result?.linkset[0]?.item) menuItems.push(...result.linkset[0].item);
  });
</script>

{#if menuItems.length}
  <header transition:fly={{ delay: 200, duration: 600, y: '-150%', opacity: 1 }} class="sticky flex justify-center items-stretch top-[var(--header-offset)] w-fit max-w-full pt-0.25 pb-0.25 pl-6 pr-6 bg-nearblack z-10 ml-auto mr-auto">
    <div>
      <Menu menuItems={menuItems} siteName={siteName} label="Main navigation" id="main-menu" />
    </div>
  </header>
{/if}
