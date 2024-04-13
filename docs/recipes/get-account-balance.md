---
sidebar_position: 1
title: Get balance of the connected account
description: Learn how to retrieve and display the ETH balance of the connected account in your dApp.
---

# Get the Current Balance of the Connected Account

This recipe shows how to fetch and display the ETH balance of the currently connected account.

<details open>
<summary>Here is the full code, which we will be implementing in the guide below:</summary>

```tsx title="src/lib/components/ConnectedAddressBalance.svelte"
<script lang="ts">
  import { createAccount } from "@byteatatime/wagmi-svelte";
  import { Address, Balance } from "$lib/components/scaffold-eth";

  const { address: connectedAddress } = $derived.by(createAccount());
</script>

<div class="bg-base-300 p-6 rounded-lg max-w-md mx-auto mt-6">
  <h2 class="text-2xl font-bold mb-4">Your Ethereum Balance</h2>

  <div class="text-sm font-semibold mb-2">
    Address: <Address address={connectedAddress} />
  </div>

  <div class="text-sm font-semibold mb-2">
    Balance: <Balance address={connectedAddress} />
  </div>
</div>
```

</details>

## Implementation guide

### Step 1: Create a new Component

Begin by creating a new component in `src/lib/componentscomponents`, which is where all the components are stored:

```tsx title="src/lib/components/ConnectedAddressBalance.svelte"
<div>
  <h2>Your Ethereum Balance</h2>
</div>
```

### Step 2: Retrieve the Connected Account

Use the createAccount rune to fetch the Ethereum address of the currently connected account. This rune will return an object with the `address` property:

```tsx title="src/lib/components/ConnectedAddressBalance.svelte"
// highlight-start
<script lang="ts">
  import { createAccount } from "@byteatatime/wagmi-svelte";

  const { address: connectedAddress } = $derived.by(createAccount());
</script>
// highlight-end

<div>
  <h2>Your Ethereum Balance</h2>
</div>
```

### Step 3: Display the Data

Scaffold-ETH-Svelte provides two great components to display data:

- [`Address`](../components/Address.md) to display an address (and ENS, if they have one) along with a utility icon to copy the address.
- [`Balance`](../components/Balance.md) to display the ETH balance of an account.

You can import these components from `$lib/components/scaffold-eth`, which is where all the built-in components are stored:

```tsx title="src/lib/components/ConnectedAddressBalance.svelte"
<script lang="ts">
  import { createAccount } from "@byteatatime/wagmi-svelte";
  // highlight-next-line
  import { Address, Balance } from "$lib/components/scaffold-eth";

  const { address: connectedAddress } = $derived.by(createAccount());
</script>

<div>
  <h2>Your Ethereum Balance</h2>

  // highlight-start
  Address: <Address address={connectedAddress} />
  Balance: <Balance address={connectedAddress} />
  // highlight-end
</div>
```

### Step 4: Apply Styles

This isn't Scaffold-ETH-Svelte specific, but you can add some styles to make your component look nice:

```tsx title="src/lib/components/ConnectedAddressBalance.svelte"
<script lang="ts">
  import { createAccount } from "@byteatatime/wagmi-svelte";
  import { Address, Balance } from "$lib/components/scaffold-eth";

  const { address: connectedAddress } = $derived.by(createAccount());
</script>

// highlight-next-line
<div class="bg-base-300 p-6 rounded-lg max-w-md mx-auto mt-6">
  // highlight-next-line
  <h2 class="text-2xl font-bold mb-4">Your Ethereum Balance</h2>

  // highlight-next-line
  <div class="text-sm font-semibold mb-2">
    Address: <Address address={connectedAddress} />
  </div>

  // highlight-next-line
  <div class="text-sm font-semibold mb-2">
    Balance: <Balance address={connectedAddress} />
  </div>
</div>
```

And tada! You now have a component that displays the Ethereum balance of the connected account. See how painless that was? 🚀
