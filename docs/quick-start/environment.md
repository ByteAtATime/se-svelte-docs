---
sidebar_position: 2
description: How to set up your development environment for Scaffold ETH-2.
---

# Environment

Now that our installation is complete, let's configure the development environment for Scaffold ETH-2.

### 1. Initialize a Local Blockchain:

In the first terminal, run a local network:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat or Foundry, depending on which one you selected in the CLI. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in:

- Hardhat => `packages/hardhat/hardhat.config.ts`
- Foundry => `packages/foundry/foundry.toml`

### 2. Deploy Your Smart Contract:

In the second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract can be modified to suit your needs and can be found in:

- Hardhat => `packages/hardhat/contracts`
- Foundry => `packages/foundry/contracts`

The `yarn deploy` command uses a deploy script to deploy the contract to the network. You can customize the deployment script located in:

- Hardhat => `packages/hardhat/deploy`
- Foundry => `packages/foundry/script`

### 3. Launch your Svelte Application:

In the third terminal, start your Svelte app:

```
yarn start
```

Visit your app on `http://localhost:5173`. You can interact with your smart contract using the contract component or the example ui in the frontend.

## What's Next:

- Edit your smart contract:
  - Hardhat => `YourContract.sol` in `packages/hardhat/contracts`
  - Foundry => `YourContract.sol` in `packages/foundry/contracts`
- Edit your deployment scripts:
  - Hardhat => `packages/hardhat/deploy`
  - Foundry => `packages/foundry/script`
- Edit your frontend homepage at `packages/svelte/src/routes/+page.svelte`. For guidance on [routing](https://kit.svelte.dev/docs/routing), check out the Next.js documentation.
- Edit the app config in `packages/svelte/scaffold.config.ts`
- Edit your smart contract test in:
  - Hardhat => `packages/hardhat/test` to run test use `yarn hardhat:test`
  - Foundry => `packages/foundry/test` to run test use `yarn foundry:test`
