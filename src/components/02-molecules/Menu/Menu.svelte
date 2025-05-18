<script>
  import logo from '$lib/assets/logo.png';
  const { id, label, menuItems, siteName } = $props();

</script>

<nav {id} aria-label={label}>
  <ul class="flex justify-center items-middle gap-1">
    {#each menuItems as item}
      <li class="flex items-center">
        <a
          href={item.href}
          class={item.href !== '/' ? "flex justify-center items-center text-2xl text-neutral-1 hover:text-secondary-1 bg-linear-to-r from-secondary-1 to-secondary-1 bg-bottom-left bg-size-[0_1px] hover:bg-size-[100%_1px] bg-no-repeat leading-3" : ''}
        >
          {#if item.href === '/'}
            <img class="w-3 mt-0.5 mb-0.5" src={logo} alt={siteName} />
            <span class="visually-hidden">{item.title}</span>
          {:else}
            {item.title}
          {/if}
        </a>
      </li>
    {/each}
  </ul>
</nav>
