const ERC1155Demo = artifacts.require("ERC1155Demo");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(ERC1155Demo);
};