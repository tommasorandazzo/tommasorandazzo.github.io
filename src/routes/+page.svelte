<script>
  import fetchJson from '$lib/fetchJson';
	import { onMount } from 'svelte';

  let data = $state({
    label: 'Tommaso Randazzo',
    field_headshot: '',
    field_about_content: '',
    field_experience_export: [
      {
        position: '',
        start_date: '',
        company: '',
      }
    ],
    field_featured_blog_posts_export: [],
    field_featured_work_export: [],
    field_skills_export: [],
    field_additional_content_export: [],
  });

  onMount(async () => {
    const result = await fetchJson('/api/homepage');
    if (result) data = { ...data, ...result[0] };
  });
</script>

<svelte:head>
  <title>tommaso.cc</title>
</svelte:head>

<h1>{data.label}</h1>

<div>
  <div>{@html data.field_headshot}</div>
  <div>{@html data.field_about_content}</div>

  <h2>Experience</h2>
  <ul>
    {#each data.field_experience_export as experience}
      <li>
        <b>{experience.position}</b>: {experience.company}<br />
        {@html experience.start_date}{@html experience.end_date
          ? ' — ' + experience.end_date
          : ''}
      </li>
    {/each}
  </ul>

  <h2>Skills</h2>
  <ul>
    {#each data.field_skills_export as skill}
      <li>
        <div>
          {@html skill.icon}
        </div>
        {skill.name}<br />
        <div>{@html skill.description}</div>
      </li>
    {/each}
  </ul>

  <div>
    {#each data.field_additional_content_export as item}
      {#if item.bundle === 'cta'}
        <div>
          {@html item.cta_image}
          <h2>{@html item.cta_heading}</h2>
          {@html item.cta_text}
          {#if item.cta_link}
            <a href={item.cta_link.url}>{item.cta_link.text}</a>
          {/if}
        </div>
      {/if}
    {/each}
  </div>
</div>

