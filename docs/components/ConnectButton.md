---
sidebar_position: 6
---

# ConnectButton

Scaffold-ETH-Svelte uses a custom _"Connect Button"_, powered by Web3Modal, that is enhanced with several useful features:

- **Balance Display**: Shows the balance of the native token from the connected address.
- **Chain Name and Color**: Displays the name of the connected blockchain and uses a distinct color for each chain.
- **Custom Modal**: Includes copy address feature, view its QR code, access address details in blockexplorer, and disconnect.

You can extend this component to suit your app's needs.

![ConnectButton Example](/img/components/ConnectButton.gif)

## Import

```tsx
import ConnectButton from "~~/components/scaffold-eth/connect-button/ConnectButton.svelte";
```

## Usage

```tsx
<ConnectButton />
```
