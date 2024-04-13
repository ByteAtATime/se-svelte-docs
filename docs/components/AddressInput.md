---
sidebar_position: 2
---

# AddressInput

Display an Ethereum address input that validates the address format, resolves ENS domains, and shows their avatars.

Also shows a blockie image for each address.

![AddressInput Example](/img/components/AddressInput.gif)

## Import

```svelte
import { AddressInput } from "$lib/components/scaffold-eth";
```

## Usage

```tsx
let address = $state("");

<AddressInput bind:value={address} placeholder="Input your address" />;
```

## Props

| Prop                       | Type       | Default Value | Description                                                                                                          |
| -------------------------- | ---------- | ------------- | -------------------------------------------------------------------------------------------------------------------- |
| **value**                  | `string`   | `undefined`   | The currently inputted value &mdash; might be an address, ENS domain, something in the middle, or none of the above. |
| **onchange** (optional)    | `function` | `undefined`   | A callback invoked when the data in the address input changes.                                                       |
| **placeholder** (optional) | `string`   | `undefined`   | The string that will be rendered before address input has been entered.                                              |
| **name** (optional)        | `string`   | `undefined`   | Helps identify the data being sent if AddressInput is submitted into a form.                                         |
| **disabled** (optional)    | `boolean`  | `false`       | If `true`, sets the address input un-clickable and unusable.                                                         |

## Bindable Props

- **`value`**: The currently inputted value, not guaranteed to be an address or ENS domain.
- **`address`**: Equal to `value` if it's an address, otherwise `undefined`.
