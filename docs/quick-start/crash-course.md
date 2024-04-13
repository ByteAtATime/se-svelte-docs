---
sidebar_position: 3
---

# Crash Course

Here's a quick guide to get you started with Scaffold-ETH-Svelte.

## Reactivity

In order for components to be reactive in Svelte, we use [runes](https://svelte.dev/blog/introducing-runes), a new feature introduced in Svelte 5.

The equivalent of "hooks" in React are "rune factories", which are functions that return functions that return runes. I understand that sentence probably made no sense, so let's look at an example:

```tsx
<script>
  import {createAccount} from "@byteatatime/wagmi-svelte"; const accountRune =
  createAccount();
</script>
```

Great! Now, we can use the `accountRune` in our component to access the account data:

```tsx
{#if accountRune().address}
  <p>Address: {accountRune().address}</p>
{/if}
```

Oh, god, this looks like a mess. What if there was a rune that would take in a function, and output a reactive variable? Oh, wait, there is! Let's take a look at the [`$derived.by` rune](https://svelte-5-preview.vercel.app/docs/runes#$derived-by):

```tsx
<script>
  import { createAccount } from "@byteatatime/wagmi-svelte";

  const account = $derived.by(createAccount());
</script>

{#if account.address}
  <p>Address: {account.address}</p>
{/if}
```

Much better! The `$derived.by` rune takes in a function that returns a value, and calls it whenever the value changes. This way, we can access the value directly, without having to call the function every time.

But wait, there's more! Using `$derived.by`, we can also destructure the object returned by the function:

```tsx
<script>
  import { createAccount } from "@byteatatime/wagmi-svelte";

  const { address } = $derived.by(createAccount());
</script>

{#if address}
  <p>Address: {address}</p>
{/if}
```

This way, we can access the `address` directly, without having to call the function every time. Much cleaner!

### Parameters

What if we want to pass parameters to the function? We can do that too! Let's take a look at an example:

```tsx
<script>
  import { createAccount } from "@byteatatime/wagmi-svelte";

  const { data: balance } = $derived.by(() => createBalance({ address: "0x34aA3F359A9D614239015126635CE7732c18fDF3" }));
</script>

{#if balance}
  <p>Balance: {balance.value}</p>
{/if}
```

Okay, this makes sense so far. However, this breaks down if we want to pass a reactive variable as a parameter. If that's the case, instead of a value, what we really want to do is pass in a function that returns the parameters. Here's what I mean:

```tsx
<script>
  import { createAccount } from "@byteatatime/wagmi-svelte";

  let address = $state("0x34aA3F359A9D614239015126635CE7732c18fDF3");

  const { data: balance } = $derived.by(
    () => createBalance(() => ({ address })), // we need parentheses around the object so that it's not treated like a code block
  );
</script>

{#if balance}
  <p>Balance: {balance.value}</p>
{/if}
```

Now, the `address` parameter is reactive, and the `createBalance` function will update whenever the `address` changes.
