//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.16;

contract Freelance {
    struct Profile {
        string fName;
        string lName;
        string country;
        string bio;
    }

    mapping(address => Profile) public profiles;
    address[] public allAddresses;

    // Add new profile
    function addProfile(string memory _fName, string memory _lName, string memory _country, string memory _bio) public {
        Profile memory profile = Profile(_fName, _lName, _country, _bio);
        profiles[msg.sender] = profile;
        allAddresses.push(msg.sender);
    }

    function getAllProfiles() public view returns (Profile[] memory) {
        Profile[] memory _profiles = new Profile[](allAddresses.length);
        for(uint8 i = 0; i < allAddresses.length; i++) {
            address owner = allAddresses[i];
            _profiles[i] = profiles[owner];
        }
        return _profiles;
    }
}