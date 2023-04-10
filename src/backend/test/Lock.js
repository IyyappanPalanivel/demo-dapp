const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Demo", function () {

  let demo;
  const num1 = 5,num2=6,result=11;
 
  beforeEach(async function () {
    // Get the ContractFactories and Signers here.
    const DEMO = await ethers.getContractFactory("Demo");
  
    // Get signers
    [deployer, addr1, addr2] = await ethers.getSigners()
    // Deploy contracts
    demo = await DEMO.deploy();
  })

  describe("Add", function () {
    it("Should add the inputs num1 and num2", async function () {

      await demo.add(num1,num2);
      expect(await demo.retrieve()).to.equal(result);
    });
  });
});
