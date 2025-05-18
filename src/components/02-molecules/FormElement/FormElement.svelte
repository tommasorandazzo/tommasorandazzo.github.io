<script>
  const { type, label, id, labelDisplay, options, placeholder, attributes = {} } = $props();

  const inputAttributes = {
    type,
    id,
    placeholder,
    name: id,
    class: [
      'border-2',
      'border-offwhite',
      'p-[4px]',
      'placeholder:text-neutral',
      'focus:'
    ],
    ...attributes
  };
</script>

<div class="flex flex-col mt-2">
  {#if label && labelDisplay !== 'hidden'}
    <label class="font-bold mb-[4px]" for={id}>{label}</label>
  {/if}
  {#if type === 'select'}
    <select {...inputAttributes}>
      {#each options as label, value}
        <option value={value}>{label}</option>
      {/each}
    </select>
  {:else if type === 'textarea'}
    <textarea {...inputAttributes}></textarea>
  {:else}
    <input {...inputAttributes} />
  {/if}
</div>
