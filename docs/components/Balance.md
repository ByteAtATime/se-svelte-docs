---
sidebar_position: 3
---

# Balance

Displays the balance of a given address in both ether (ETH) and US dollars (USD).

![Balance Example](/img/components/Balance.gif)

## Import

```tsx
import { Balance } from "$lib/components/scaffold-eth";
```

## Usage

```tsx
<Balance address="0x34aA3F359A9D614239015126635CE7732c18fDF3" />
```

## Props

| Prop                 | Type     | Default Value | Description                                                                                                                    |
| -------------------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **address**          | `string` | `undefined`   | Address in `0x___` format.                                                                                                     |
| **class** (optional) | `string` | `""`          | Prop to pass additional CSS styling to the wrapper button. You can use Tailwind / daisyUI classes like `text-3xl` for styling. |
