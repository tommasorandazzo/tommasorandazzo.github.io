<script>
  import FormElement from "@molecules/FormElement/FormElement.svelte";
  import Button from "@atoms/Button/Button.svelte";
  import fetchJson from "$lib/fetchJson"
	import { onMount } from "svelte";

  let data = $state({
    metatags: '<title>Contact :: tommaso.cc</title>',
    title: 'Contact',
    body: '',
  });

  onMount(async () => {
    const result = await fetchJson('/api/page/5');
    data = result[0];
  });

  function submitForm(event) {
    event.preventDefault();
  }
</script>

<svelte:head>
  {@html data.metatags}
</svelte:head>

<h1>{data.title}</h1>

{#if data.body}
  <div id="contact-body" class="ck-content">{@html data.body}</div>
{/if}

<form onsubmit={(e) => submitForm(e)} aria-describedby={data.body ? 'contact-body' : null}>
  <FormElement labelDisplay="hidden" label="Name" type="text" id="name" placeholder="Name" />
  <FormElement labelDisplay="hidden" label="Email" type="email" id="email" placeholder="Email" />
  <FormElement labelDisplay="hidden" label="Message" type="textarea" id="message" placeholder="Message" attributes={{ rows: '4' }} />
  <div class="mt-1">
    <Button type="submit">Send Message</Button>
  </div>
</form>

