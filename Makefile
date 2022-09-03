compile-contract:
	npx hardhat compile

deploy-contract: compile-contract
	npx hardhat run scripts/deploy.js --network ropsten