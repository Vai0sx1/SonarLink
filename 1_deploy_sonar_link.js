const SonarLink = artifacts.require("SonarLink");

module.exports = function (deployer, network, accounts) {
  const ETHER_TOKEN_ADDRESS = "";

  deployer.deploy(SonarLink, ETHER_TOKEN_ADDRESS);
};
