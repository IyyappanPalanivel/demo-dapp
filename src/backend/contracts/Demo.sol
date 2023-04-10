// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Demo {

    uint public result;

  /**
     * @dev Store value in variable
     * @param num1 and @param num2 value to add
     */
    function add(uint256 num1,uint num2) public {
        result = num1+num2;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return result;
    }
}