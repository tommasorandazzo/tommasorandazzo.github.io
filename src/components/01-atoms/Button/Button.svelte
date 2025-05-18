<script>
  const { type, modifier, href, classes, children } = $props();

  const attributes = {
    type,
    href,
    class: [
      'font-bold',
      'pt-[8px]',
      'pb-[8px]',
      'pl-1',
      'pr-1',
      'mt-1',
      'mb-1',
    ],
  };

  if (modifier === 'secondary') {
    attributes.class.push('text-charcoal', 'bg-secondary-1', 'hover:bg-offwhite');
  } else {
    attributes.class.push('text-primary-5', 'bg-primary-1', 'hover:bg-primary-4', 'hover:text-neutral-1');
  }

  if (classes?.length) attributes.class.push(...classes);
</script>

{#if href}
  <a {...attributes}>{@render children()}</a>
{:else}
  <button {...attributes}>{@render children()}</button>
{/if}
