// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IGovernor, Governor, GovernorProposalThreshold} from "@openzeppelin/contracts/governance/extensions/GovernorProposalThreshold.sol";
import {GovernorSettings} from "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";
import {GovernorCountingSimple} from "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import {GovernorVotesQuorumFraction, GovernorVotes, IVotes} from "@openzeppelin/contracts/governance/extensions/GovernorVotesQuorumFraction.sol";
import {EnumerableSet} from "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "./IVault.sol";
import "hardhat/console.sol";

contract GovernorWithTwoTokens is 
    GovernorCountingSimple, 
    GovernorSettings, 
    GovernorProposalThreshold, 
    GovernorVotesQuorumFraction 
{
    using EnumerableSet for EnumerableSet.AddressSet;
    EnumerableSet.AddressSet private _vaults;

    constructor(
        string memory name_,
        IVotes token_,
        uint256 votingDelay_,
        uint256 votingPeriod_,
        uint256 quorumNumerator_
    )
        Governor(name_)
        GovernorSettings(votingDelay_, votingPeriod_, 0)
        GovernorVotes(token_)
        GovernorVotesQuorumFraction(quorumNumerator_)
    {}

   function proposalThreshold()
        public
        view
        override(Governor, GovernorSettings)
        returns (uint256)
    {
        return super.proposalThreshold();
    }

    function propose(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        string memory description
    )
        public
        virtual
        override(Governor, GovernorProposalThreshold)
        returns (uint256)
    {
        return super.propose(targets, values, calldatas, description);
    }

    function getVotes(
        address account, 
        uint256 blockNumber
    )
        public
        view
        virtual
        override(IGovernor, GovernorVotes)
        returns (uint256 votes)
    {
        require(
            !_vaults.contains(account),
            "GovernorERC4626Aware: The vault cannot vote with its underlying asset tokens as that would be double voting"
        );

        votes = token.getPastVotes(account, blockNumber);

        // If the user has no votes from the token, maybe they do from the vaults
        if (votes == 0) {
            uint256 length = _vaults.length();
            for (uint256 i = 0; i < length; ) {
                votes = IVault(_vaults.at(i)).getPastVotes(account, blockNumber);

                if (votes != 0) {
                    break;
                }

                unchecked {
                    ++i;
                }
            }
        }
    }
        
    // The functions below are for demostrantion purpose only

    function addVaultForVoting(address vault) public virtual onlyGovernance {
        _vaults.add(vault);
    }

    function removeVaultForVoting(address vault) public virtual onlyGovernance {
        _vaults.remove(vault);
    }

    function hasVault(address vault) public virtual view returns (bool) {
        return _vaults.contains(vault);
    }
}