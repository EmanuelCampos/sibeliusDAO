/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ERC4626Interface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "asset()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "convertToAssets(uint256)": FunctionFragment;
    "convertToShares(uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "deposit(uint256,address)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "maxDeposit(address)": FunctionFragment;
    "maxMint(address)": FunctionFragment;
    "maxRedeem(address)": FunctionFragment;
    "maxWithdraw(address)": FunctionFragment;
    "mint(uint256,address)": FunctionFragment;
    "name()": FunctionFragment;
    "previewDeposit(uint256)": FunctionFragment;
    "previewMint(uint256)": FunctionFragment;
    "previewRedeem(uint256)": FunctionFragment;
    "previewWithdraw(uint256)": FunctionFragment;
    "redeem(uint256,address,address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalAssets()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "withdraw(uint256,address,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
  encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "asset", values?: undefined): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "convertToAssets", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "convertToShares", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "deposit", values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "maxDeposit", values: [string]): string;
  encodeFunctionData(functionFragment: "maxMint", values: [string]): string;
  encodeFunctionData(functionFragment: "maxRedeem", values: [string]): string;
  encodeFunctionData(functionFragment: "maxWithdraw", values: [string]): string;
  encodeFunctionData(functionFragment: "mint", values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "previewDeposit", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "previewMint", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "previewRedeem", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "previewWithdraw", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "redeem", values: [BigNumberish, string, string]): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "totalAssets", values?: undefined): string;
  encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
  encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish, string, string]): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "convertToAssets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "convertToShares", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxWithdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "previewDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "previewMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "previewRedeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "previewWithdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalAssets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Deposit(address,address,uint256,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "Withdraw(address,address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber] & {
    owner: string;
    spender: string;
    value: BigNumber;
  }
>;

export type DepositEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    caller: string;
    owner: string;
    assets: BigNumber;
    shares: BigNumber;
  }
>;

export type TransferEvent = TypedEvent<[string, string, BigNumber] & { from: string; to: string; value: BigNumber }>;

export type WithdrawEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber] & {
    caller: string;
    receiver: string;
    owner: string;
    assets: BigNumber;
    shares: BigNumber;
  }
>;

export class ERC4626 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ERC4626Interface;

  functions: {
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    asset(overrides?: CallOverrides): Promise<[string]>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & { assets: BigNumber }>;

    convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & { shares: BigNumber }>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      assets: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    maxDeposit(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    maxMint(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    maxRedeem(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    maxWithdraw(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      shares: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    redeem(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalAssets(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  asset(overrides?: CallOverrides): Promise<string>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    assets: BigNumberish,
    receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  maxDeposit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  maxMint(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    shares: BigNumberish,
    receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  redeem(
    shares: BigNumberish,
    receiver: string,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    assets: BigNumberish,
    receiver: string,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    asset(overrides?: CallOverrides): Promise<string>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    deposit(assets: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    maxDeposit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxMint(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    mint(shares: BigNumberish, receiver: string, overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    redeem(shares: BigNumberish, receiver: string, owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    withdraw(assets: BigNumberish, receiver: string, owner: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<[string, string, BigNumber], { owner: string; spender: string; value: BigNumber }>;

    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): TypedEventFilter<[string, string, BigNumber], { owner: string; spender: string; value: BigNumber }>;

    "Deposit(address,address,uint256,uint256)"(
      caller?: string | null,
      owner?: string | null,
      assets?: null,
      shares?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { caller: string; owner: string; assets: BigNumber; shares: BigNumber }
    >;

    Deposit(
      caller?: string | null,
      owner?: string | null,
      assets?: null,
      shares?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { caller: string; owner: string; assets: BigNumber; shares: BigNumber }
    >;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<[string, string, BigNumber], { from: string; to: string; value: BigNumber }>;

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TypedEventFilter<[string, string, BigNumber], { from: string; to: string; value: BigNumber }>;

    "Withdraw(address,address,address,uint256,uint256)"(
      caller?: string | null,
      receiver?: string | null,
      owner?: string | null,
      assets?: null,
      shares?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        caller: string;
        receiver: string;
        owner: string;
        assets: BigNumber;
        shares: BigNumber;
      }
    >;

    Withdraw(
      caller?: string | null,
      receiver?: string | null,
      owner?: string | null,
      assets?: null,
      shares?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        caller: string;
        receiver: string;
        owner: string;
        assets: BigNumber;
        shares: BigNumber;
      }
    >;
  };

  estimateGas: {
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    asset(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      assets: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    maxDeposit(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxMint(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      shares: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    convertToAssets(shares: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    convertToShares(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      assets: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    maxDeposit(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxMint(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxRedeem(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxWithdraw(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      shares: BigNumberish,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    previewDeposit(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    previewMint(shares: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    previewRedeem(shares: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    previewWithdraw(assets: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeem(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
