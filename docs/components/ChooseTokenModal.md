---
sidebar_position: 5
---

# ChooseTokenModal

The `ChooseTokenModal` component is a modal that allows users to select a token from a list of supported tokens.

## Import

```tsx
import { ChooseTokenModal, type Token } from "$lib/components/scaffold-eth";
```

## Usage

```tsx
let token = $state<Token | undefined>();

<ChooseTokenModal
  bind:token
  chainId={1}
  suggestedTokens={[
    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // WETH
    "0xdac17f958d2ee523a2206206994597c13d831ec7", // USDT
    "0x6b175474e89094c44da98b954eedeac495271d0f", // DAI
  ]}
>
  {#snippet button(token)}
    {#if token}
      <div class="flex">
        <img src={token.logoURI} alt={token.name} class="w-6 h-6 mr-2" />
        <span>{token.name}</span>
      </div>
    {:else}
      <span>Select a token</span>
    {/if}
  {/snippet}
</ChooseTokenModal>
```

## Props

| Prop                | Type       | Default Value | Description                                                                                                                                        |
| ------------------- | ---------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **token**           | `Token`    | `undefined`   | Token object selected by the user.                                                                                                                 |
| **chainId**         | `number`   | `undefined`   | Chain ID to get tokens for. If not provided, will default to the chain the user is currently connected to, with a fallback of `targetNetworks[0]`. |
| **suggestedTokens** | `string[]` | `[]`          | List of token addresses to suggest to the user at the top of the modal.                                                                            |
| **onchange**        | `function` | `undefined`   | Callback function that is called when the user selects a token.                                                                                    |

The `Token` type is defined like so (which you can import from `$lib/components/scaffold-eth`):

```tsx
type Token = {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
};
```

## Bindable Props

- **token**: The selected token object.

## Snippets

- **button(token)**: The contents of the button. The `token` parameter is the currently selected token object, or `undefined` if none has been selected.
