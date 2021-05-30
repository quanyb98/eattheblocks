const Arbitrage = artifacts.require("Arbitrage.sol");

module.exports = function (deployer) {
  deployer.deploy(
    Arbitrage,
    '0xBCfCcbde45cE874adCB698cC183deBcF17952812', //PancakeSwapV1 factory
    '0x10ED43C718714eb63d5aA57B78B54704E256024E#code', //BakerySwapV2 router
  );
};
