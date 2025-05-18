<script>
  import fetchJson from "$lib/fetchJson"
	import { onMount } from "svelte";

  let projects = $state([]);
  let data = $state({
    title: 'My Work',
    metatags: '',
  });

  onMount(async () => {
    projects = await fetchJson('/api/project/all');
    const result = await fetchJson('/api/work');
    data = result[0];
  });
</script>

<svelte:head>
  {@html data.metatags}
</svelte:head>

<h1>{data.title}</h1>
<div class="grid grid-cols-2 gap-1 md:gap-3 mt-1 mb-1 md:mt-3 md:mb-3">
  {#each projects as project}
    <div class="flex justify-center items-center" key={project.nid}>
      <a href={project.path.startsWith('/work') ? project.path : `/work${project.path}`}>{project.title}</a>
    </div>
  {/each}
</div>
