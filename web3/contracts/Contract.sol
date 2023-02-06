// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract MyContract {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountcollected;
        string image;
        address[] donators;
        uint256[] donations;
    }
    mapping(uint256 => Campaign) public campaigns;

    uint256 public numberOfcampaign = 0;

    function createCampaign(address _owner, string memory _title, string memory _description, uint256 _target) {}
    function donateToCampaign() {}
    function getDonators() {}
    function getCampaigns() {} 




    
     
}