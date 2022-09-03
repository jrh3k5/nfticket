# NFTicket

This is a very simple example of using NFTs to generate tickets for an event. It was mostly just intended as a 'proof of concept' for an idea of NFTs and to teach myself how to deploy and interact with a smart contract.

This is a developer's first attempt at creating a smart contract, and it's not terribly robust, so you probably shouldn't use it as-is. However, feel free to fork this and run with the idea.

## Development

This describes how to develop this project.

This project only works on the Ropsten test ethereum network, because who wants to pay actual money for this?

### Deploying the Contract

If you haven't already, copy the `.env-sample` file in this directory and fill out the specified fields. You will need to provide the private key of a wallet (probably shouldn't use the one that has all your cool coins in it) and an Alchemy API key, which you can get [here](https://docs.alchemy.com/docs/alchemy-quickstart-guide).

First, make sure you have all of the Node dependencies installed by running:

```
npm ci
```

Then, to make sure you can compile the `nfticket.sol` contract, run:

```
make contract-compile
```

To compile _and_ deploy the contract, run:

```
make contract-deploy
```

You'll see output like:

```
Deploying contracts with the account: <your public key here>
Account balance: 10000000000000000000
Contract deployed to address: 0xa6357741dD7599a05Ca17C5D72c16dEc18295Ba1
```

Congratulations! The contract is now deployed on the network.