// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { printWithCache } from '@graphql-mesh/utils';
import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { OmenxdaiTypes } from './sources/omenxdai/types';
import type { ConditionaltokenTypes } from './sources/conditionaltoken/types';
import * as importedModule$0 from "./sources/conditionaltoken/introspectionSchema";
import * as importedModule$1 from "./sources/omenxdai/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Query = {
  condition?: Maybe<Condition>;
  conditions: Array<Condition>;
  collection?: Maybe<Collection>;
  collections: Array<Collection>;
  position?: Maybe<Position>;
  positions: Array<Position>;
  userPosition?: Maybe<UserPosition>;
  userPositions: Array<UserPosition>;
  user?: Maybe<User>;
  users: Array<User>;
  collateralToken?: Maybe<CollateralToken>;
  collateralTokens: Array<CollateralToken>;
  wrappedToken?: Maybe<WrappedToken>;
  wrappedTokens: Array<WrappedToken>;
  question?: Maybe<Question>;
  questions: Array<Question>;
  category?: Maybe<Category>;
  categories: Array<Category>;
  scalarQuestionLink?: Maybe<ScalarQuestionLink>;
  scalarQuestionLinks: Array<ScalarQuestionLink>;
  global?: Maybe<Global>;
  globals: Array<Global>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  answer?: Maybe<Answer>;
  answers: Array<Answer>;
  fixedProductMarketMaker?: Maybe<FixedProductMarketMaker>;
  fixedProductMarketMakers: Array<FixedProductMarketMaker>;
  fpmmPoolMembership?: Maybe<FpmmPoolMembership>;
  fpmmPoolMemberships: Array<FpmmPoolMembership>;
  fpmmParticipation?: Maybe<FpmmParticipation>;
  fpmmParticipations: Array<FpmmParticipation>;
  fpmmTrade?: Maybe<FpmmTrade>;
  fpmmTrades: Array<FpmmTrade>;
  fpmmLiquidity?: Maybe<FpmmLiquidity>;
  fpmmLiquidities: Array<FpmmLiquidity>;
  fpmmTransaction?: Maybe<FpmmTransaction>;
  fpmmTransactions: Array<FpmmTransaction>;
  gelatoUser?: Maybe<GelatoUser>;
  gelatoUsers: Array<GelatoUser>;
  task?: Maybe<Task>;
  tasks: Array<Task>;
  provider?: Maybe<Provider>;
  providers: Array<Provider>;
  taskReceiptWrapper?: Maybe<TaskReceiptWrapper>;
  taskReceiptWrappers: Array<TaskReceiptWrapper>;
  taskCycle?: Maybe<TaskCycle>;
  taskCycles: Array<TaskCycle>;
  taskReceipt?: Maybe<TaskReceipt>;
  taskReceipts: Array<TaskReceipt>;
  taskCondition?: Maybe<TaskCondition>;
  taskConditions: Array<TaskCondition>;
  action?: Maybe<Action>;
  actions: Array<Action>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  registeredToken?: Maybe<RegisteredToken>;
  registeredTokens: Array<RegisteredToken>;
  tokenList?: Maybe<TokenList>;
  tokenLists: Array<TokenList>;
  uniswapPair?: Maybe<UniswapPair>;
  uniswapPairs: Array<UniswapPair>;
  klerosSubmission?: Maybe<KlerosSubmission>;
  klerosSubmissions: Array<KlerosSubmission>;
  marketSearch: Array<FixedProductMarketMaker>;
};


export type QueryconditionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryconditionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Condition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Condition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Collection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collection_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollateralTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollateralTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollateralToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywrappedTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywrappedTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WrappedToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WrappedToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryquestionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryquestionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Question_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Question_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycategoryArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycategoriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Category_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Category_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryscalarQuestionLinkArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryscalarQuestionLinksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ScalarQuestionLink_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ScalarQuestionLink_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglobalArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglobalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Global_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Global_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type QueryanswerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryanswersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Answer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Answer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfixedProductMarketMakerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfixedProductMarketMakersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedProductMarketMaker_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FixedProductMarketMaker_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfpmmPoolMembershipArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfpmmPoolMembershipsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FpmmPoolMembership_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FpmmPoolMembership_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfpmmParticipationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfpmmParticipationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FpmmParticipation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FpmmParticipation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfpmmTradeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfpmmTradesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FpmmTrade_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FpmmTrade_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfpmmLiquidityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfpmmLiquiditiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FpmmLiquidity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FpmmLiquidity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfpmmTransactionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfpmmTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FpmmTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FpmmTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygelatoUserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygelatoUsersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GelatoUser_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GelatoUser_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytasksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Task_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Task_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproviderArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprovidersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Provider_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Provider_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskReceiptWrapperArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskReceiptWrappersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskReceiptWrapper_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskReceiptWrapper_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskCycleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskCyclesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskCycle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskCycle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskReceiptArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskReceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskReceipt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskReceipt_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskConditionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytaskConditionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskCondition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskCondition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Action_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Action_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregisteredTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregisteredTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RegisteredToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegisteredToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenListArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenListsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenList_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenList_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniswapPairArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuniswapPairsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UniswapPair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapPair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryklerosSubmissionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryklerosSubmissionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<KlerosSubmission_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<KlerosSubmission_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketSearchArgs = {
  text: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  block?: InputMaybe<Block_height>;
  where?: InputMaybe<FixedProductMarketMaker_filter>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscription = {
  condition?: Maybe<Condition>;
  conditions: Array<Condition>;
  collection?: Maybe<Collection>;
  collections: Array<Collection>;
  position?: Maybe<Position>;
  positions: Array<Position>;
  userPosition?: Maybe<UserPosition>;
  userPositions: Array<UserPosition>;
  user?: Maybe<User>;
  users: Array<User>;
  collateralToken?: Maybe<CollateralToken>;
  collateralTokens: Array<CollateralToken>;
  wrappedToken?: Maybe<WrappedToken>;
  wrappedTokens: Array<WrappedToken>;
  question?: Maybe<Question>;
  questions: Array<Question>;
  category?: Maybe<Category>;
  categories: Array<Category>;
  scalarQuestionLink?: Maybe<ScalarQuestionLink>;
  scalarQuestionLinks: Array<ScalarQuestionLink>;
  global?: Maybe<Global>;
  globals: Array<Global>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  answer?: Maybe<Answer>;
  answers: Array<Answer>;
  fixedProductMarketMaker?: Maybe<FixedProductMarketMaker>;
  fixedProductMarketMakers: Array<FixedProductMarketMaker>;
  fpmmPoolMembership?: Maybe<FpmmPoolMembership>;
  fpmmPoolMemberships: Array<FpmmPoolMembership>;
  fpmmParticipation?: Maybe<FpmmParticipation>;
  fpmmParticipations: Array<FpmmParticipation>;
  fpmmTrade?: Maybe<FpmmTrade>;
  fpmmTrades: Array<FpmmTrade>;
  fpmmLiquidity?: Maybe<FpmmLiquidity>;
  fpmmLiquidities: Array<FpmmLiquidity>;
  fpmmTransaction?: Maybe<FpmmTransaction>;
  fpmmTransactions: Array<FpmmTransaction>;
  gelatoUser?: Maybe<GelatoUser>;
  gelatoUsers: Array<GelatoUser>;
  task?: Maybe<Task>;
  tasks: Array<Task>;
  provider?: Maybe<Provider>;
  providers: Array<Provider>;
  taskReceiptWrapper?: Maybe<TaskReceiptWrapper>;
  taskReceiptWrappers: Array<TaskReceiptWrapper>;
  taskCycle?: Maybe<TaskCycle>;
  taskCycles: Array<TaskCycle>;
  taskReceipt?: Maybe<TaskReceipt>;
  taskReceipts: Array<TaskReceipt>;
  taskCondition?: Maybe<TaskCondition>;
  taskConditions: Array<TaskCondition>;
  action?: Maybe<Action>;
  actions: Array<Action>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  registeredToken?: Maybe<RegisteredToken>;
  registeredTokens: Array<RegisteredToken>;
  tokenList?: Maybe<TokenList>;
  tokenLists: Array<TokenList>;
  uniswapPair?: Maybe<UniswapPair>;
  uniswapPairs: Array<UniswapPair>;
  klerosSubmission?: Maybe<KlerosSubmission>;
  klerosSubmissions: Array<KlerosSubmission>;
};


export type SubscriptionconditionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionconditionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Condition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Condition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Collection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collection_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollateralTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollateralTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollateralToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwrappedTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwrappedTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WrappedToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WrappedToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionquestionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionquestionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Question_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Question_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncategoryArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncategoriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Category_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Category_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionscalarQuestionLinkArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionscalarQuestionLinksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ScalarQuestionLink_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ScalarQuestionLink_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglobalArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglobalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Global_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Global_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type SubscriptionanswerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionanswersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Answer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Answer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfixedProductMarketMakerArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfixedProductMarketMakersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedProductMarketMaker_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FixedProductMarketMaker_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfpmmPoolMembershipArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfpmmPoolMembershipsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FpmmPoolMembership_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FpmmPoolMembership_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfpmmParticipationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfpmmParticipationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FpmmParticipation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FpmmParticipation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfpmmTradeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfpmmTradesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FpmmTrade_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FpmmTrade_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfpmmLiquidityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfpmmLiquiditiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FpmmLiquidity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FpmmLiquidity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfpmmTransactionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfpmmTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FpmmTransaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FpmmTransaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongelatoUserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongelatoUsersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GelatoUser_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GelatoUser_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontasksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Task_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Task_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproviderArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprovidersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Provider_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Provider_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskReceiptWrapperArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskReceiptWrappersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskReceiptWrapper_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskReceiptWrapper_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskCycleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskCyclesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskCycle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskCycle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskReceiptArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskReceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskReceipt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskReceipt_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskConditionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontaskConditionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskCondition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskCondition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Action_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Action_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregisteredTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregisteredTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RegisteredToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegisteredToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenListArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenListsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenList_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenList_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniswapPairArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuniswapPairsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UniswapPair_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UniswapPair_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionklerosSubmissionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionklerosSubmissionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<KlerosSubmission_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<KlerosSubmission_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  id: Scalars['ID']['output'];
  numConditions: Scalars['Int']['output'];
  numOpenConditions: Scalars['Int']['output'];
  numClosedConditions: Scalars['Int']['output'];
};

export type Category_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  numConditions?: InputMaybe<Scalars['Int']['input']>;
  numConditions_not?: InputMaybe<Scalars['Int']['input']>;
  numConditions_gt?: InputMaybe<Scalars['Int']['input']>;
  numConditions_lt?: InputMaybe<Scalars['Int']['input']>;
  numConditions_gte?: InputMaybe<Scalars['Int']['input']>;
  numConditions_lte?: InputMaybe<Scalars['Int']['input']>;
  numConditions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numConditions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numOpenConditions?: InputMaybe<Scalars['Int']['input']>;
  numOpenConditions_not?: InputMaybe<Scalars['Int']['input']>;
  numOpenConditions_gt?: InputMaybe<Scalars['Int']['input']>;
  numOpenConditions_lt?: InputMaybe<Scalars['Int']['input']>;
  numOpenConditions_gte?: InputMaybe<Scalars['Int']['input']>;
  numOpenConditions_lte?: InputMaybe<Scalars['Int']['input']>;
  numOpenConditions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numOpenConditions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numClosedConditions?: InputMaybe<Scalars['Int']['input']>;
  numClosedConditions_not?: InputMaybe<Scalars['Int']['input']>;
  numClosedConditions_gt?: InputMaybe<Scalars['Int']['input']>;
  numClosedConditions_lt?: InputMaybe<Scalars['Int']['input']>;
  numClosedConditions_gte?: InputMaybe<Scalars['Int']['input']>;
  numClosedConditions_lte?: InputMaybe<Scalars['Int']['input']>;
  numClosedConditions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numClosedConditions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Category_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Category_filter>>>;
};

export type Category_orderBy =
  | 'id'
  | 'numConditions'
  | 'numOpenConditions'
  | 'numClosedConditions';

export type CollateralToken = {
  id: Scalars['ID']['output'];
  activeAmount: Scalars['BigInt']['output'];
  splitAmount: Scalars['BigInt']['output'];
  mergedAmount: Scalars['BigInt']['output'];
  redeemedAmount: Scalars['BigInt']['output'];
  positions?: Maybe<Array<Position>>;
};


export type CollateralTokenpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
};

export type CollateralToken_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  activeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  activeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  activeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  activeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  activeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  activeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  activeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  splitAmount?: InputMaybe<Scalars['BigInt']['input']>;
  splitAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  splitAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  splitAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  splitAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  splitAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  splitAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  splitAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mergedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  mergedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  mergedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  mergedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  mergedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  mergedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  mergedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mergedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  redeemedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  redeemedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  redeemedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  redeemedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  redeemedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  redeemedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positions_?: InputMaybe<Position_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollateralToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CollateralToken_filter>>>;
};

export type CollateralToken_orderBy =
  | 'id'
  | 'activeAmount'
  | 'splitAmount'
  | 'mergedAmount'
  | 'redeemedAmount'
  | 'positions';

export type Collection = {
  id: Scalars['ID']['output'];
  conditions: Array<Condition>;
  conditionIds: Array<Scalars['ID']['output']>;
  conditionIdsStr: Scalars['String']['output'];
  indexSets: Array<Scalars['BigInt']['output']>;
  multiplicities: Array<Scalars['Int']['output']>;
  positions?: Maybe<Array<Position>>;
};


export type CollectionconditionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Condition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Condition_filter>;
};


export type CollectionpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
};

export type Collection_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditions?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_not?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_?: InputMaybe<Condition_filter>;
  conditionIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditionIds_not?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditionIds_contains?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditionIds_contains_nocase?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditionIds_not_contains?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditionIds_not_contains_nocase?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditionIdsStr?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_not?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_gt?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_lt?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_gte?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_lte?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_in?: InputMaybe<Array<Scalars['String']['input']>>;
  conditionIdsStr_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  conditionIdsStr_contains?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_not_contains?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_starts_with?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_ends_with?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexSets?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexSets_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexSets_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexSets_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexSets_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexSets_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  multiplicities?: InputMaybe<Array<Scalars['Int']['input']>>;
  multiplicities_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  multiplicities_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  multiplicities_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  multiplicities_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  multiplicities_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  positions_?: InputMaybe<Position_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Collection_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Collection_filter>>>;
};

export type Collection_orderBy =
  | 'id'
  | 'conditions'
  | 'conditionIds'
  | 'conditionIdsStr'
  | 'indexSets'
  | 'multiplicities'
  | 'positions';

export type Condition = {
  id: Scalars['ID']['output'];
  conditionId: Scalars['String']['output'];
  oracle: Scalars['Bytes']['output'];
  questionId: Scalars['Bytes']['output'];
  outcomeSlotCount: Scalars['Int']['output'];
  creator: Scalars['String']['output'];
  createTransaction: Scalars['Bytes']['output'];
  createTimestamp: Scalars['BigInt']['output'];
  createBlockNumber: Scalars['BigInt']['output'];
  resolved: Scalars['Boolean']['output'];
  resolveTransaction?: Maybe<Scalars['Bytes']['output']>;
  resolveTimestamp?: Maybe<Scalars['BigInt']['output']>;
  resolveBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  payoutNumerators?: Maybe<Array<Scalars['BigInt']['output']>>;
  payoutDenominator?: Maybe<Scalars['BigInt']['output']>;
  payouts?: Maybe<Array<Scalars['BigDecimal']['output']>>;
  question?: Maybe<Question>;
  title?: Maybe<Scalars['String']['output']>;
  outcomes?: Maybe<Array<Scalars['String']['output']>>;
  scalarLow?: Maybe<Scalars['BigInt']['output']>;
  scalarHigh?: Maybe<Scalars['BigInt']['output']>;
  collections?: Maybe<Array<Collection>>;
  positions?: Maybe<Array<Position>>;
  resolutionTimestamp?: Maybe<Scalars['BigInt']['output']>;
  fixedProductMarketMakers: Array<FixedProductMarketMaker>;
};


export type ConditioncollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Collection_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Collection_filter>;
};


export type ConditionpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
};


export type ConditionfixedProductMarketMakersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedProductMarketMaker_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FixedProductMarketMaker_filter>;
};

export type Condition_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditionId?: InputMaybe<Scalars['String']['input']>;
  conditionId_not?: InputMaybe<Scalars['String']['input']>;
  conditionId_gt?: InputMaybe<Scalars['String']['input']>;
  conditionId_lt?: InputMaybe<Scalars['String']['input']>;
  conditionId_gte?: InputMaybe<Scalars['String']['input']>;
  conditionId_lte?: InputMaybe<Scalars['String']['input']>;
  conditionId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  conditionId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  conditionId_contains?: InputMaybe<Scalars['String']['input']>;
  conditionId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  conditionId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionId_starts_with?: InputMaybe<Scalars['String']['input']>;
  conditionId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  conditionId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionId_ends_with?: InputMaybe<Scalars['String']['input']>;
  conditionId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  conditionId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_not?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_gt?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_lt?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_gte?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_lte?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oracle_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oracle_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_starts_with?: InputMaybe<Scalars['String']['input']>;
  oracle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  oracle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_ends_with?: InputMaybe<Scalars['String']['input']>;
  oracle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  oracle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  questionId?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_not?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  questionId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  questionId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  questionId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  questionId_starts_with?: InputMaybe<Scalars['String']['input']>;
  questionId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  questionId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  questionId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  questionId_ends_with?: InputMaybe<Scalars['String']['input']>;
  questionId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  questionId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  questionId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  outcomeSlotCount?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_not?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_gt?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_lt?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_gte?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_lte?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  outcomeSlotCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_not?: InputMaybe<Scalars['String']['input']>;
  creator_gt?: InputMaybe<Scalars['String']['input']>;
  creator_lt?: InputMaybe<Scalars['String']['input']>;
  creator_gte?: InputMaybe<Scalars['String']['input']>;
  creator_lte?: InputMaybe<Scalars['String']['input']>;
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_contains?: InputMaybe<Scalars['String']['input']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createTransaction?: InputMaybe<Scalars['Bytes']['input']>;
  createTransaction_not?: InputMaybe<Scalars['Bytes']['input']>;
  createTransaction_gt?: InputMaybe<Scalars['Bytes']['input']>;
  createTransaction_lt?: InputMaybe<Scalars['Bytes']['input']>;
  createTransaction_gte?: InputMaybe<Scalars['Bytes']['input']>;
  createTransaction_lte?: InputMaybe<Scalars['Bytes']['input']>;
  createTransaction_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createTransaction_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createTransaction_contains?: InputMaybe<Scalars['Bytes']['input']>;
  createTransaction_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  createTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  resolved?: InputMaybe<Scalars['Boolean']['input']>;
  resolved_not?: InputMaybe<Scalars['Boolean']['input']>;
  resolved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  resolved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  resolveTransaction?: InputMaybe<Scalars['Bytes']['input']>;
  resolveTransaction_not?: InputMaybe<Scalars['Bytes']['input']>;
  resolveTransaction_gt?: InputMaybe<Scalars['Bytes']['input']>;
  resolveTransaction_lt?: InputMaybe<Scalars['Bytes']['input']>;
  resolveTransaction_gte?: InputMaybe<Scalars['Bytes']['input']>;
  resolveTransaction_lte?: InputMaybe<Scalars['Bytes']['input']>;
  resolveTransaction_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  resolveTransaction_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  resolveTransaction_contains?: InputMaybe<Scalars['Bytes']['input']>;
  resolveTransaction_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  resolveTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  resolveTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  resolveTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  resolveTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  resolveTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  resolveTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  resolveTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  resolveTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  resolveBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  resolveBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  resolveBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  resolveBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  resolveBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  resolveBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  resolveBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  resolveBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  payoutNumerators?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  payoutNumerators_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  payoutNumerators_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  payoutNumerators_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  payoutNumerators_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  payoutNumerators_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  payoutDenominator?: InputMaybe<Scalars['BigInt']['input']>;
  payoutDenominator_not?: InputMaybe<Scalars['BigInt']['input']>;
  payoutDenominator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  payoutDenominator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  payoutDenominator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  payoutDenominator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  payoutDenominator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  payoutDenominator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  payouts?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  payouts_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  payouts_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  payouts_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  payouts_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  payouts_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  question?: InputMaybe<Scalars['String']['input']>;
  question_not?: InputMaybe<Scalars['String']['input']>;
  question_gt?: InputMaybe<Scalars['String']['input']>;
  question_lt?: InputMaybe<Scalars['String']['input']>;
  question_gte?: InputMaybe<Scalars['String']['input']>;
  question_lte?: InputMaybe<Scalars['String']['input']>;
  question_in?: InputMaybe<Array<Scalars['String']['input']>>;
  question_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  question_contains?: InputMaybe<Scalars['String']['input']>;
  question_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  question_not_contains?: InputMaybe<Scalars['String']['input']>;
  question_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  question_starts_with?: InputMaybe<Scalars['String']['input']>;
  question_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  question_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_ends_with?: InputMaybe<Scalars['String']['input']>;
  question_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  question_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_?: InputMaybe<Question_filter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  outcomes?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_not?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  scalarLow?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_not?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_gt?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_lt?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_gte?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_lte?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scalarLow_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scalarHigh?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_not?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_gt?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_lt?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_gte?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_lte?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scalarHigh_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collections_?: InputMaybe<Collection_filter>;
  positions_?: InputMaybe<Position_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Condition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Condition_filter>>>;
  resolutionTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  resolutionTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  resolutionTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  resolutionTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  resolutionTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  resolutionTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  resolutionTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  resolutionTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fixedProductMarketMakers_?: InputMaybe<FixedProductMarketMaker_filter>;
};

export type Condition_orderBy =
  | 'id'
  | 'conditionId'
  | 'oracle'
  | 'questionId'
  | 'outcomeSlotCount'
  | 'creator'
  | 'createTransaction'
  | 'createTimestamp'
  | 'createBlockNumber'
  | 'resolved'
  | 'resolveTransaction'
  | 'resolveTimestamp'
  | 'resolveBlockNumber'
  | 'payoutNumerators'
  | 'payoutDenominator'
  | 'payouts'
  | 'question'
  | 'question__id'
  | 'question__templateId'
  | 'question__data'
  | 'question__title'
  | 'question__category'
  | 'question__language'
  | 'question__arbitrator'
  | 'question__openingTimestamp'
  | 'question__timeout'
  | 'question__currentAnswer'
  | 'question__currentAnswerBond'
  | 'question__currentAnswerTimestamp'
  | 'question__isPendingArbitration'
  | 'question__arbitrationOccurred'
  | 'question__answerFinalizedTimestamp'
  | 'title'
  | 'outcomes'
  | 'scalarLow'
  | 'scalarHigh'
  | 'collections'
  | 'positions'
  | 'resolutionTimestamp'
  | 'fixedProductMarketMakers';

export type Global = {
  id: Scalars['ID']['output'];
  numConditions: Scalars['Int']['output'];
  numCollections: Scalars['Int']['output'];
  numPositions: Scalars['Int']['output'];
  numOpenConditions: Scalars['Int']['output'];
  numClosedConditions: Scalars['Int']['output'];
  usdPerEth?: Maybe<Scalars['BigDecimal']['output']>;
  usdVolume: Scalars['BigDecimal']['output'];
};

export type Global_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  numConditions?: InputMaybe<Scalars['Int']['input']>;
  numConditions_not?: InputMaybe<Scalars['Int']['input']>;
  numConditions_gt?: InputMaybe<Scalars['Int']['input']>;
  numConditions_lt?: InputMaybe<Scalars['Int']['input']>;
  numConditions_gte?: InputMaybe<Scalars['Int']['input']>;
  numConditions_lte?: InputMaybe<Scalars['Int']['input']>;
  numConditions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numConditions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numCollections?: InputMaybe<Scalars['Int']['input']>;
  numCollections_not?: InputMaybe<Scalars['Int']['input']>;
  numCollections_gt?: InputMaybe<Scalars['Int']['input']>;
  numCollections_lt?: InputMaybe<Scalars['Int']['input']>;
  numCollections_gte?: InputMaybe<Scalars['Int']['input']>;
  numCollections_lte?: InputMaybe<Scalars['Int']['input']>;
  numCollections_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numCollections_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numPositions?: InputMaybe<Scalars['Int']['input']>;
  numPositions_not?: InputMaybe<Scalars['Int']['input']>;
  numPositions_gt?: InputMaybe<Scalars['Int']['input']>;
  numPositions_lt?: InputMaybe<Scalars['Int']['input']>;
  numPositions_gte?: InputMaybe<Scalars['Int']['input']>;
  numPositions_lte?: InputMaybe<Scalars['Int']['input']>;
  numPositions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numPositions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Global_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Global_filter>>>;
  numOpenConditions?: InputMaybe<Scalars['Int']['input']>;
  numOpenConditions_not?: InputMaybe<Scalars['Int']['input']>;
  numOpenConditions_gt?: InputMaybe<Scalars['Int']['input']>;
  numOpenConditions_lt?: InputMaybe<Scalars['Int']['input']>;
  numOpenConditions_gte?: InputMaybe<Scalars['Int']['input']>;
  numOpenConditions_lte?: InputMaybe<Scalars['Int']['input']>;
  numOpenConditions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numOpenConditions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numClosedConditions?: InputMaybe<Scalars['Int']['input']>;
  numClosedConditions_not?: InputMaybe<Scalars['Int']['input']>;
  numClosedConditions_gt?: InputMaybe<Scalars['Int']['input']>;
  numClosedConditions_lt?: InputMaybe<Scalars['Int']['input']>;
  numClosedConditions_gte?: InputMaybe<Scalars['Int']['input']>;
  numClosedConditions_lte?: InputMaybe<Scalars['Int']['input']>;
  numClosedConditions_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  numClosedConditions_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  usdPerEth?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdPerEth_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdPerEth_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdPerEth_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdPerEth_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdPerEth_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdPerEth_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdPerEth_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type Global_orderBy =
  | 'id'
  | 'numConditions'
  | 'numCollections'
  | 'numPositions'
  | 'numOpenConditions'
  | 'numClosedConditions'
  | 'usdPerEth'
  | 'usdVolume';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Position = {
  id: Scalars['ID']['output'];
  positionId: Scalars['String']['output'];
  collateralToken: CollateralToken;
  collateralTokenAddress: Scalars['String']['output'];
  collection: Collection;
  conditions: Array<Condition>;
  conditionIds: Array<Scalars['ID']['output']>;
  conditionIdsStr: Scalars['String']['output'];
  indexSets: Array<Scalars['BigInt']['output']>;
  multiplicities: Array<Scalars['Int']['output']>;
  createTimestamp: Scalars['BigInt']['output'];
  lifetimeValue: Scalars['BigInt']['output'];
  activeValue: Scalars['BigInt']['output'];
  wrappedTokens: Array<WrappedToken>;
  wrappedTokenAddress?: Maybe<Scalars['String']['output']>;
};


export type PositionconditionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Condition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Condition_filter>;
};


export type PositionwrappedTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WrappedToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WrappedToken_filter>;
};

export type Position_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  positionId?: InputMaybe<Scalars['String']['input']>;
  positionId_not?: InputMaybe<Scalars['String']['input']>;
  positionId_gt?: InputMaybe<Scalars['String']['input']>;
  positionId_lt?: InputMaybe<Scalars['String']['input']>;
  positionId_gte?: InputMaybe<Scalars['String']['input']>;
  positionId_lte?: InputMaybe<Scalars['String']['input']>;
  positionId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  positionId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  positionId_contains?: InputMaybe<Scalars['String']['input']>;
  positionId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  positionId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_starts_with?: InputMaybe<Scalars['String']['input']>;
  positionId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  positionId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_ends_with?: InputMaybe<Scalars['String']['input']>;
  positionId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  positionId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  positionId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not?: InputMaybe<Scalars['String']['input']>;
  collateralToken_gt?: InputMaybe<Scalars['String']['input']>;
  collateralToken_lt?: InputMaybe<Scalars['String']['input']>;
  collateralToken_gte?: InputMaybe<Scalars['String']['input']>;
  collateralToken_lte?: InputMaybe<Scalars['String']['input']>;
  collateralToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralToken_contains?: InputMaybe<Scalars['String']['input']>;
  collateralToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_?: InputMaybe<CollateralToken_filter>;
  collateralTokenAddress?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_not?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_gt?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_lt?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_gte?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_lte?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralTokenAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralTokenAddress_contains?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralTokenAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['String']['input']>;
  collection_not?: InputMaybe<Scalars['String']['input']>;
  collection_gt?: InputMaybe<Scalars['String']['input']>;
  collection_lt?: InputMaybe<Scalars['String']['input']>;
  collection_gte?: InputMaybe<Scalars['String']['input']>;
  collection_lte?: InputMaybe<Scalars['String']['input']>;
  collection_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_contains?: InputMaybe<Scalars['String']['input']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_?: InputMaybe<Collection_filter>;
  conditions?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_not?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_?: InputMaybe<Condition_filter>;
  conditionIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditionIds_not?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditionIds_contains?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditionIds_contains_nocase?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditionIds_not_contains?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditionIds_not_contains_nocase?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditionIdsStr?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_not?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_gt?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_lt?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_gte?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_lte?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_in?: InputMaybe<Array<Scalars['String']['input']>>;
  conditionIdsStr_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  conditionIdsStr_contains?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_not_contains?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_starts_with?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_ends_with?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  conditionIdsStr_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  indexSets?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexSets_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexSets_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexSets_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexSets_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexSets_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  multiplicities?: InputMaybe<Array<Scalars['Int']['input']>>;
  multiplicities_not?: InputMaybe<Array<Scalars['Int']['input']>>;
  multiplicities_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  multiplicities_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  multiplicities_not_contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  multiplicities_not_contains_nocase?: InputMaybe<Array<Scalars['Int']['input']>>;
  createTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lifetimeValue?: InputMaybe<Scalars['BigInt']['input']>;
  lifetimeValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  lifetimeValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lifetimeValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lifetimeValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lifetimeValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lifetimeValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lifetimeValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activeValue?: InputMaybe<Scalars['BigInt']['input']>;
  activeValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  activeValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  activeValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  activeValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  activeValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  activeValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activeValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wrappedTokens_?: InputMaybe<WrappedToken_filter>;
  wrappedTokenAddress?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_not?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_gt?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_lt?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_gte?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_lte?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wrappedTokenAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wrappedTokenAddress_contains?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  wrappedTokenAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Position_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Position_filter>>>;
};

export type Position_orderBy =
  | 'id'
  | 'positionId'
  | 'collateralToken'
  | 'collateralToken__id'
  | 'collateralToken__activeAmount'
  | 'collateralToken__splitAmount'
  | 'collateralToken__mergedAmount'
  | 'collateralToken__redeemedAmount'
  | 'collateralTokenAddress'
  | 'collection'
  | 'collection__id'
  | 'collection__conditionIdsStr'
  | 'conditions'
  | 'conditionIds'
  | 'conditionIdsStr'
  | 'indexSets'
  | 'multiplicities'
  | 'createTimestamp'
  | 'lifetimeValue'
  | 'activeValue'
  | 'wrappedTokens'
  | 'wrappedTokenAddress';

export type Question = {
  id: Scalars['ID']['output'];
  templateId: Scalars['BigInt']['output'];
  data: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  outcomes?: Maybe<Array<Scalars['String']['output']>>;
  category?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  arbitrator: Scalars['Bytes']['output'];
  openingTimestamp: Scalars['BigInt']['output'];
  timeout: Scalars['BigInt']['output'];
  currentAnswer?: Maybe<Scalars['Bytes']['output']>;
  currentAnswerBond?: Maybe<Scalars['BigInt']['output']>;
  currentAnswerTimestamp?: Maybe<Scalars['BigInt']['output']>;
  isPendingArbitration: Scalars['Boolean']['output'];
  arbitrationOccurred: Scalars['Boolean']['output'];
  answerFinalizedTimestamp?: Maybe<Scalars['BigInt']['output']>;
  conditions: Array<Condition>;
  indexedFixedProductMarketMakers: Array<FixedProductMarketMaker>;
  answers?: Maybe<Array<Answer>>;
};


export type QuestionconditionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Condition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Condition_filter>;
};


export type QuestionindexedFixedProductMarketMakersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedProductMarketMaker_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FixedProductMarketMaker_filter>;
};


export type QuestionanswersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Answer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Answer_filter>;
};

export type Question_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  templateId?: InputMaybe<Scalars['BigInt']['input']>;
  templateId_not?: InputMaybe<Scalars['BigInt']['input']>;
  templateId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  templateId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  templateId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  templateId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  templateId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  templateId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data?: InputMaybe<Scalars['String']['input']>;
  data_not?: InputMaybe<Scalars['String']['input']>;
  data_gt?: InputMaybe<Scalars['String']['input']>;
  data_lt?: InputMaybe<Scalars['String']['input']>;
  data_gte?: InputMaybe<Scalars['String']['input']>;
  data_lte?: InputMaybe<Scalars['String']['input']>;
  data_in?: InputMaybe<Array<Scalars['String']['input']>>;
  data_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  data_contains?: InputMaybe<Scalars['String']['input']>;
  data_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  data_not_contains?: InputMaybe<Scalars['String']['input']>;
  data_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  data_starts_with?: InputMaybe<Scalars['String']['input']>;
  data_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  data_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  data_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  data_ends_with?: InputMaybe<Scalars['String']['input']>;
  data_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  data_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  data_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  outcomes?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_not?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_not?: InputMaybe<Scalars['String']['input']>;
  category_gt?: InputMaybe<Scalars['String']['input']>;
  category_lt?: InputMaybe<Scalars['String']['input']>;
  category_gte?: InputMaybe<Scalars['String']['input']>;
  category_lte?: InputMaybe<Scalars['String']['input']>;
  category_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  language_not?: InputMaybe<Scalars['String']['input']>;
  language_gt?: InputMaybe<Scalars['String']['input']>;
  language_lt?: InputMaybe<Scalars['String']['input']>;
  language_gte?: InputMaybe<Scalars['String']['input']>;
  language_lte?: InputMaybe<Scalars['String']['input']>;
  language_in?: InputMaybe<Array<Scalars['String']['input']>>;
  language_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  language_contains?: InputMaybe<Scalars['String']['input']>;
  language_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  language_not_contains?: InputMaybe<Scalars['String']['input']>;
  language_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  language_starts_with?: InputMaybe<Scalars['String']['input']>;
  language_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  language_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  language_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  language_ends_with?: InputMaybe<Scalars['String']['input']>;
  language_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  language_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  language_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrator?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_not?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  arbitrator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrator_starts_with?: InputMaybe<Scalars['String']['input']>;
  arbitrator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  arbitrator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrator_ends_with?: InputMaybe<Scalars['String']['input']>;
  arbitrator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  arbitrator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  openingTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openingTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeout?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_not?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeout_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAnswer?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswer_not?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currentAnswer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currentAnswer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswerBond?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerBond_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerBond_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerBond_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerBond_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerBond_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerBond_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAnswerBond_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAnswerTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAnswerTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  isPendingArbitration?: InputMaybe<Scalars['Boolean']['input']>;
  isPendingArbitration_not?: InputMaybe<Scalars['Boolean']['input']>;
  isPendingArbitration_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isPendingArbitration_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  arbitrationOccurred?: InputMaybe<Scalars['Boolean']['input']>;
  arbitrationOccurred_not?: InputMaybe<Scalars['Boolean']['input']>;
  arbitrationOccurred_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  arbitrationOccurred_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  answerFinalizedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  answerFinalizedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  answerFinalizedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  answerFinalizedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  answerFinalizedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  answerFinalizedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  answerFinalizedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  answerFinalizedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  conditions_?: InputMaybe<Condition_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Question_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Question_filter>>>;
  indexedFixedProductMarketMakers?: InputMaybe<Array<Scalars['String']['input']>>;
  indexedFixedProductMarketMakers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  indexedFixedProductMarketMakers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  indexedFixedProductMarketMakers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  indexedFixedProductMarketMakers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  indexedFixedProductMarketMakers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  indexedFixedProductMarketMakers_?: InputMaybe<FixedProductMarketMaker_filter>;
  answers_?: InputMaybe<Answer_filter>;
};

export type Question_orderBy =
  | 'id'
  | 'templateId'
  | 'data'
  | 'title'
  | 'outcomes'
  | 'category'
  | 'language'
  | 'arbitrator'
  | 'openingTimestamp'
  | 'timeout'
  | 'currentAnswer'
  | 'currentAnswerBond'
  | 'currentAnswerTimestamp'
  | 'isPendingArbitration'
  | 'arbitrationOccurred'
  | 'answerFinalizedTimestamp'
  | 'conditions'
  | 'indexedFixedProductMarketMakers'
  | 'answers';

export type ScalarQuestionLink = {
  id: Scalars['ID']['output'];
  conditionQuestionId: Scalars['Bytes']['output'];
  realityEthQuestionId: Scalars['Bytes']['output'];
  question?: Maybe<Question>;
  scalarLow: Scalars['BigInt']['output'];
  scalarHigh: Scalars['BigInt']['output'];
};

export type ScalarQuestionLink_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditionQuestionId?: InputMaybe<Scalars['Bytes']['input']>;
  conditionQuestionId_not?: InputMaybe<Scalars['Bytes']['input']>;
  conditionQuestionId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  conditionQuestionId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  conditionQuestionId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  conditionQuestionId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  conditionQuestionId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  conditionQuestionId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  conditionQuestionId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  conditionQuestionId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  realityEthQuestionId?: InputMaybe<Scalars['Bytes']['input']>;
  realityEthQuestionId_not?: InputMaybe<Scalars['Bytes']['input']>;
  realityEthQuestionId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  realityEthQuestionId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  realityEthQuestionId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  realityEthQuestionId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  realityEthQuestionId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  realityEthQuestionId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  realityEthQuestionId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  realityEthQuestionId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  question_not?: InputMaybe<Scalars['String']['input']>;
  question_gt?: InputMaybe<Scalars['String']['input']>;
  question_lt?: InputMaybe<Scalars['String']['input']>;
  question_gte?: InputMaybe<Scalars['String']['input']>;
  question_lte?: InputMaybe<Scalars['String']['input']>;
  question_in?: InputMaybe<Array<Scalars['String']['input']>>;
  question_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  question_contains?: InputMaybe<Scalars['String']['input']>;
  question_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  question_not_contains?: InputMaybe<Scalars['String']['input']>;
  question_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  question_starts_with?: InputMaybe<Scalars['String']['input']>;
  question_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  question_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_ends_with?: InputMaybe<Scalars['String']['input']>;
  question_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  question_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_?: InputMaybe<Question_filter>;
  scalarLow?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_not?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_gt?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_lt?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_gte?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_lte?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scalarLow_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scalarHigh?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_not?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_gt?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_lt?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_gte?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_lte?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scalarHigh_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ScalarQuestionLink_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ScalarQuestionLink_filter>>>;
};

export type ScalarQuestionLink_orderBy =
  | 'id'
  | 'conditionQuestionId'
  | 'realityEthQuestionId'
  | 'question'
  | 'question__id'
  | 'question__templateId'
  | 'question__data'
  | 'question__title'
  | 'question__category'
  | 'question__language'
  | 'question__arbitrator'
  | 'question__openingTimestamp'
  | 'question__timeout'
  | 'question__currentAnswer'
  | 'question__currentAnswerBond'
  | 'question__currentAnswerTimestamp'
  | 'question__isPendingArbitration'
  | 'question__arbitrationOccurred'
  | 'question__answerFinalizedTimestamp'
  | 'scalarLow'
  | 'scalarHigh';

export type User = {
  id: Scalars['ID']['output'];
  firstParticipation: Scalars['BigInt']['output'];
  lastActive: Scalars['BigInt']['output'];
  userPositions?: Maybe<Array<UserPosition>>;
};


export type UseruserPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserPosition_filter>;
};

export type UserPosition = {
  id: Scalars['ID']['output'];
  position: Position;
  balance: Scalars['BigInt']['output'];
  wrappedBalance: Scalars['BigInt']['output'];
  totalBalance: Scalars['BigInt']['output'];
  user: User;
};

export type UserPosition_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_gt?: InputMaybe<Scalars['String']['input']>;
  position_lt?: InputMaybe<Scalars['String']['input']>;
  position_gte?: InputMaybe<Scalars['String']['input']>;
  position_lte?: InputMaybe<Scalars['String']['input']>;
  position_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_?: InputMaybe<Position_filter>;
  balance?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wrappedBalance?: InputMaybe<Scalars['BigInt']['input']>;
  wrappedBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  wrappedBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  wrappedBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  wrappedBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  wrappedBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  wrappedBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wrappedBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBalance?: InputMaybe<Scalars['BigInt']['input']>;
  totalBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UserPosition_filter>>>;
};

export type UserPosition_orderBy =
  | 'id'
  | 'position'
  | 'position__id'
  | 'position__positionId'
  | 'position__collateralTokenAddress'
  | 'position__conditionIdsStr'
  | 'position__createTimestamp'
  | 'position__lifetimeValue'
  | 'position__activeValue'
  | 'position__wrappedTokenAddress'
  | 'balance'
  | 'wrappedBalance'
  | 'totalBalance'
  | 'user'
  | 'user__id'
  | 'user__firstParticipation'
  | 'user__lastActive';

export type User_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  firstParticipation?: InputMaybe<Scalars['BigInt']['input']>;
  firstParticipation_not?: InputMaybe<Scalars['BigInt']['input']>;
  firstParticipation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  firstParticipation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  firstParticipation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  firstParticipation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  firstParticipation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  firstParticipation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastActive?: InputMaybe<Scalars['BigInt']['input']>;
  lastActive_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastActive_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastActive_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastActive_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastActive_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastActive_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastActive_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userPositions_?: InputMaybe<UserPosition_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'firstParticipation'
  | 'lastActive'
  | 'userPositions';

export type WrappedToken = {
  id: Scalars['ID']['output'];
  position: Position;
};

export type WrappedToken_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_gt?: InputMaybe<Scalars['String']['input']>;
  position_lt?: InputMaybe<Scalars['String']['input']>;
  position_gte?: InputMaybe<Scalars['String']['input']>;
  position_lte?: InputMaybe<Scalars['String']['input']>;
  position_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_?: InputMaybe<Position_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<WrappedToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<WrappedToken_filter>>>;
};

export type WrappedToken_orderBy =
  | 'id'
  | 'position'
  | 'position__id'
  | 'position__positionId'
  | 'position__collateralTokenAddress'
  | 'position__conditionIdsStr'
  | 'position__createTimestamp'
  | 'position__lifetimeValue'
  | 'position__activeValue'
  | 'position__wrappedTokenAddress';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type Account = {
  id: Scalars['ID']['output'];
  tradeNonce: Scalars['BigInt']['output'];
  fpmmPoolMemberships?: Maybe<Array<FpmmPoolMembership>>;
  fpmmParticipations?: Maybe<Array<FpmmParticipation>>;
};


export type AccountfpmmPoolMembershipsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FpmmPoolMembership_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FpmmPoolMembership_filter>;
};


export type AccountfpmmParticipationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FpmmParticipation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FpmmParticipation_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tradeNonce?: InputMaybe<Scalars['BigInt']['input']>;
  tradeNonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  tradeNonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tradeNonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tradeNonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tradeNonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tradeNonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradeNonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fpmmPoolMemberships_?: InputMaybe<FpmmPoolMembership_filter>;
  fpmmParticipations_?: InputMaybe<FpmmParticipation_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Account_filter>>>;
};

export type Account_orderBy =
  | 'id'
  | 'tradeNonce'
  | 'fpmmPoolMemberships'
  | 'fpmmParticipations';

export type Action = {
  id: Scalars['ID']['output'];
  addr: Scalars['Bytes']['output'];
  data: Scalars['Bytes']['output'];
  operation: Scalars['BigInt']['output'];
  dataFlow: Scalars['BigInt']['output'];
  value: Scalars['BigInt']['output'];
  termsOkCheck: Scalars['Boolean']['output'];
};

export type Action_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  addr?: InputMaybe<Scalars['Bytes']['input']>;
  addr_not?: InputMaybe<Scalars['Bytes']['input']>;
  addr_gt?: InputMaybe<Scalars['Bytes']['input']>;
  addr_lt?: InputMaybe<Scalars['Bytes']['input']>;
  addr_gte?: InputMaybe<Scalars['Bytes']['input']>;
  addr_lte?: InputMaybe<Scalars['Bytes']['input']>;
  addr_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addr_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addr_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addr_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data?: InputMaybe<Scalars['Bytes']['input']>;
  data_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operation?: InputMaybe<Scalars['BigInt']['input']>;
  operation_not?: InputMaybe<Scalars['BigInt']['input']>;
  operation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  operation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  operation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  operation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  operation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  operation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dataFlow?: InputMaybe<Scalars['BigInt']['input']>;
  dataFlow_not?: InputMaybe<Scalars['BigInt']['input']>;
  dataFlow_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dataFlow_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dataFlow_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dataFlow_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dataFlow_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dataFlow_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  termsOkCheck?: InputMaybe<Scalars['Boolean']['input']>;
  termsOkCheck_not?: InputMaybe<Scalars['Boolean']['input']>;
  termsOkCheck_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  termsOkCheck_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Action_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Action_filter>>>;
};

export type Action_orderBy =
  | 'id'
  | 'addr'
  | 'data'
  | 'operation'
  | 'dataFlow'
  | 'value'
  | 'termsOkCheck';

export type Answer = {
  id: Scalars['ID']['output'];
  answer: Scalars['Bytes']['output'];
  bondAggregate: Scalars['BigInt']['output'];
  question: Question;
};

export type Answer_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  answer?: InputMaybe<Scalars['Bytes']['input']>;
  answer_not?: InputMaybe<Scalars['Bytes']['input']>;
  answer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  answer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  answer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  answer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  answer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  answer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  answer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  answer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bondAggregate?: InputMaybe<Scalars['BigInt']['input']>;
  bondAggregate_not?: InputMaybe<Scalars['BigInt']['input']>;
  bondAggregate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  bondAggregate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  bondAggregate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  bondAggregate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  bondAggregate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bondAggregate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  question?: InputMaybe<Scalars['String']['input']>;
  question_not?: InputMaybe<Scalars['String']['input']>;
  question_gt?: InputMaybe<Scalars['String']['input']>;
  question_lt?: InputMaybe<Scalars['String']['input']>;
  question_gte?: InputMaybe<Scalars['String']['input']>;
  question_lte?: InputMaybe<Scalars['String']['input']>;
  question_in?: InputMaybe<Array<Scalars['String']['input']>>;
  question_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  question_contains?: InputMaybe<Scalars['String']['input']>;
  question_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  question_not_contains?: InputMaybe<Scalars['String']['input']>;
  question_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  question_starts_with?: InputMaybe<Scalars['String']['input']>;
  question_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  question_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_ends_with?: InputMaybe<Scalars['String']['input']>;
  question_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  question_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_?: InputMaybe<Question_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Answer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Answer_filter>>>;
};

export type Answer_orderBy =
  | 'id'
  | 'answer'
  | 'bondAggregate'
  | 'question'
  | 'question__id'
  | 'question__templateId'
  | 'question__data'
  | 'question__title'
  | 'question__category'
  | 'question__language'
  | 'question__arbitrator'
  | 'question__openingTimestamp'
  | 'question__timeout'
  | 'question__currentAnswer'
  | 'question__currentAnswerBond'
  | 'question__currentAnswerTimestamp'
  | 'question__isPendingArbitration'
  | 'question__arbitrationOccurred'
  | 'question__answerFinalizedTimestamp';

export type FixedProductMarketMaker = {
  id: Scalars['ID']['output'];
  creator: Scalars['Bytes']['output'];
  creationTimestamp: Scalars['BigInt']['output'];
  collateralToken: Scalars['Bytes']['output'];
  conditions: Array<Condition>;
  fee: Scalars['BigInt']['output'];
  collateralVolume: Scalars['BigInt']['output'];
  scaledCollateralVolume: Scalars['BigDecimal']['output'];
  usdVolume: Scalars['BigDecimal']['output'];
  outcomeTokenAmounts: Array<Scalars['BigInt']['output']>;
  outcomeTokenMarginalPrices?: Maybe<Array<Scalars['BigDecimal']['output']>>;
  outcomeSlotCount?: Maybe<Scalars['Int']['output']>;
  liquidityMeasure: Scalars['BigInt']['output'];
  scaledLiquidityMeasure: Scalars['BigDecimal']['output'];
  usdLiquidityMeasure: Scalars['BigDecimal']['output'];
  liquidityParameter: Scalars['BigInt']['output'];
  scaledLiquidityParameter: Scalars['BigDecimal']['output'];
  usdLiquidityParameter: Scalars['BigDecimal']['output'];
  lastActiveDay: Scalars['BigInt']['output'];
  lastActiveHour: Scalars['BigInt']['output'];
  collateralVolumeBeforeLastActiveDayByHour: Array<Scalars['BigInt']['output']>;
  usdVolumeBeforeLastActiveDayByHour: Array<Scalars['BigDecimal']['output']>;
  runningDailyVolume: Scalars['BigInt']['output'];
  scaledRunningDailyVolume: Scalars['BigDecimal']['output'];
  usdRunningDailyVolume: Scalars['BigDecimal']['output'];
  lastActiveDayAndRunningDailyVolume: Scalars['BigInt']['output'];
  lastActiveDayAndScaledRunningDailyVolume: Scalars['BigInt']['output'];
  runningDailyVolumeByHour: Array<Scalars['BigInt']['output']>;
  usdRunningDailyVolumeByHour: Array<Scalars['BigDecimal']['output']>;
  sort24HourVolume0: Scalars['BigDecimal']['output'];
  sort24HourVolume1: Scalars['BigDecimal']['output'];
  sort24HourVolume2: Scalars['BigDecimal']['output'];
  sort24HourVolume3: Scalars['BigDecimal']['output'];
  sort24HourVolume4: Scalars['BigDecimal']['output'];
  sort24HourVolume5: Scalars['BigDecimal']['output'];
  sort24HourVolume6: Scalars['BigDecimal']['output'];
  sort24HourVolume7: Scalars['BigDecimal']['output'];
  sort24HourVolume8: Scalars['BigDecimal']['output'];
  sort24HourVolume9: Scalars['BigDecimal']['output'];
  sort24HourVolume10: Scalars['BigDecimal']['output'];
  sort24HourVolume11: Scalars['BigDecimal']['output'];
  sort24HourVolume12: Scalars['BigDecimal']['output'];
  sort24HourVolume13: Scalars['BigDecimal']['output'];
  sort24HourVolume14: Scalars['BigDecimal']['output'];
  sort24HourVolume15: Scalars['BigDecimal']['output'];
  sort24HourVolume16: Scalars['BigDecimal']['output'];
  sort24HourVolume17: Scalars['BigDecimal']['output'];
  sort24HourVolume18: Scalars['BigDecimal']['output'];
  sort24HourVolume19: Scalars['BigDecimal']['output'];
  sort24HourVolume20: Scalars['BigDecimal']['output'];
  sort24HourVolume21: Scalars['BigDecimal']['output'];
  sort24HourVolume22: Scalars['BigDecimal']['output'];
  sort24HourVolume23: Scalars['BigDecimal']['output'];
  indexedOnQuestion: Scalars['Boolean']['output'];
  curatedByDxDao: Scalars['Boolean']['output'];
  condition?: Maybe<Condition>;
  question?: Maybe<Question>;
  scalarLow?: Maybe<Scalars['BigInt']['output']>;
  scalarHigh?: Maybe<Scalars['BigInt']['output']>;
  templateId?: Maybe<Scalars['BigInt']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  outcomes?: Maybe<Array<Scalars['String']['output']>>;
  category?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  arbitrator?: Maybe<Scalars['Bytes']['output']>;
  openingTimestamp?: Maybe<Scalars['BigInt']['output']>;
  timeout?: Maybe<Scalars['BigInt']['output']>;
  resolutionTimestamp?: Maybe<Scalars['BigInt']['output']>;
  payouts?: Maybe<Array<Scalars['BigDecimal']['output']>>;
  currentAnswer?: Maybe<Scalars['Bytes']['output']>;
  currentAnswerBond?: Maybe<Scalars['BigInt']['output']>;
  currentAnswerTimestamp?: Maybe<Scalars['BigInt']['output']>;
  isPendingArbitration?: Maybe<Scalars['Boolean']['output']>;
  arbitrationOccurred?: Maybe<Scalars['Boolean']['output']>;
  answerFinalizedTimestamp?: Maybe<Scalars['BigInt']['output']>;
  poolMembers?: Maybe<Array<FpmmPoolMembership>>;
  participants?: Maybe<Array<FpmmParticipation>>;
  submissionIDs: Array<KlerosSubmission>;
  klerosTCRregistered: Scalars['Boolean']['output'];
  curatedByDxDaoOrKleros: Scalars['Boolean']['output'];
};


export type FixedProductMarketMakerconditionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Condition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Condition_filter>;
};


export type FixedProductMarketMakerpoolMembersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FpmmPoolMembership_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FpmmPoolMembership_filter>;
};


export type FixedProductMarketMakerparticipantsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FpmmParticipation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FpmmParticipation_filter>;
};


export type FixedProductMarketMakersubmissionIDsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<KlerosSubmission_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<KlerosSubmission_filter>;
};

export type FixedProductMarketMaker_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  creator?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  creator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  creator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  creator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  creationTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creationTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralToken?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  conditions?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_not?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_?: InputMaybe<Condition_filter>;
  fee?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralVolume?: InputMaybe<Scalars['BigInt']['input']>;
  collateralVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateralVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scaledCollateralVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledCollateralVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledCollateralVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledCollateralVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledCollateralVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledCollateralVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledCollateralVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  scaledCollateralVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  outcomeTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeTokenMarginalPrices?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  outcomeTokenMarginalPrices_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  outcomeTokenMarginalPrices_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  outcomeTokenMarginalPrices_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  outcomeTokenMarginalPrices_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  outcomeTokenMarginalPrices_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  outcomeSlotCount?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_not?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_gt?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_lt?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_gte?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_lte?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  outcomeSlotCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  liquidityMeasure?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityMeasure_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityMeasure_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityMeasure_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityMeasure_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityMeasure_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityMeasure_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityMeasure_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scaledLiquidityMeasure?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledLiquidityMeasure_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledLiquidityMeasure_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledLiquidityMeasure_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledLiquidityMeasure_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledLiquidityMeasure_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledLiquidityMeasure_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  scaledLiquidityMeasure_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdLiquidityMeasure?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdLiquidityMeasure_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdLiquidityMeasure_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdLiquidityMeasure_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdLiquidityMeasure_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdLiquidityMeasure_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdLiquidityMeasure_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdLiquidityMeasure_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityParameter?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityParameter_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityParameter_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityParameter_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityParameter_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityParameter_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityParameter_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityParameter_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scaledLiquidityParameter?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledLiquidityParameter_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledLiquidityParameter_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledLiquidityParameter_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledLiquidityParameter_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledLiquidityParameter_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledLiquidityParameter_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  scaledLiquidityParameter_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdLiquidityParameter?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdLiquidityParameter_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdLiquidityParameter_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdLiquidityParameter_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdLiquidityParameter_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdLiquidityParameter_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdLiquidityParameter_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdLiquidityParameter_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lastActiveDay?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDay_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDay_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastActiveDay_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastActiveHour?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveHour_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveHour_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveHour_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveHour_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveHour_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveHour_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastActiveHour_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralVolumeBeforeLastActiveDayByHour?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralVolumeBeforeLastActiveDayByHour_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralVolumeBeforeLastActiveDayByHour_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralVolumeBeforeLastActiveDayByHour_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralVolumeBeforeLastActiveDayByHour_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralVolumeBeforeLastActiveDayByHour_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  usdVolumeBeforeLastActiveDayByHour?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdVolumeBeforeLastActiveDayByHour_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdVolumeBeforeLastActiveDayByHour_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdVolumeBeforeLastActiveDayByHour_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdVolumeBeforeLastActiveDayByHour_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdVolumeBeforeLastActiveDayByHour_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  runningDailyVolume?: InputMaybe<Scalars['BigInt']['input']>;
  runningDailyVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  runningDailyVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  runningDailyVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  runningDailyVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  runningDailyVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  runningDailyVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  runningDailyVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scaledRunningDailyVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledRunningDailyVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledRunningDailyVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledRunningDailyVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledRunningDailyVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledRunningDailyVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  scaledRunningDailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  scaledRunningDailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdRunningDailyVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdRunningDailyVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdRunningDailyVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdRunningDailyVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdRunningDailyVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdRunningDailyVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdRunningDailyVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdRunningDailyVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lastActiveDayAndRunningDailyVolume?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDayAndRunningDailyVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDayAndRunningDailyVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDayAndRunningDailyVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDayAndRunningDailyVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDayAndRunningDailyVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDayAndRunningDailyVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastActiveDayAndRunningDailyVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastActiveDayAndScaledRunningDailyVolume?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDayAndScaledRunningDailyVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDayAndScaledRunningDailyVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDayAndScaledRunningDailyVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDayAndScaledRunningDailyVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDayAndScaledRunningDailyVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastActiveDayAndScaledRunningDailyVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastActiveDayAndScaledRunningDailyVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  runningDailyVolumeByHour?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  runningDailyVolumeByHour_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  runningDailyVolumeByHour_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  runningDailyVolumeByHour_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  runningDailyVolumeByHour_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  runningDailyVolumeByHour_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  usdRunningDailyVolumeByHour?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdRunningDailyVolumeByHour_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdRunningDailyVolumeByHour_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdRunningDailyVolumeByHour_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdRunningDailyVolumeByHour_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdRunningDailyVolumeByHour_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume0?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume1?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume2?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume2_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume2_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume2_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume2_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume2_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume2_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume2_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume3?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume3_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume3_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume3_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume3_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume3_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume3_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume3_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume4?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume4_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume4_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume4_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume4_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume4_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume4_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume4_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume5?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume5_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume5_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume5_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume5_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume5_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume5_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume5_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume6?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume6_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume6_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume6_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume6_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume6_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume6_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume6_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume7?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume7_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume7_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume7_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume7_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume7_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume7_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume7_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume8?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume8_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume8_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume8_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume8_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume8_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume8_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume8_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume9?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume9_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume9_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume9_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume9_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume9_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume9_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume9_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume10?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume10_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume10_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume10_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume10_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume10_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume10_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume10_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume11?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume11_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume11_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume11_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume11_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume11_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume11_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume11_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume12?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume12_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume12_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume12_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume12_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume12_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume12_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume12_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume13?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume13_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume13_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume13_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume13_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume13_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume13_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume13_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume14?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume14_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume14_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume14_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume14_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume14_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume14_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume14_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume15?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume15_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume15_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume15_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume15_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume15_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume15_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume15_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume16?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume16_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume16_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume16_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume16_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume16_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume16_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume16_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume17?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume17_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume17_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume17_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume17_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume17_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume17_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume17_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume18?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume18_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume18_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume18_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume18_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume18_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume18_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume18_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume19?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume19_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume19_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume19_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume19_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume19_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume19_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume19_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume20?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume20_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume20_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume20_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume20_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume20_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume20_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume20_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume21?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume21_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume21_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume21_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume21_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume21_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume21_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume21_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume22?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume22_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume22_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume22_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume22_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume22_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume22_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume22_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume23?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume23_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume23_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume23_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume23_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume23_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sort24HourVolume23_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sort24HourVolume23_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  indexedOnQuestion?: InputMaybe<Scalars['Boolean']['input']>;
  indexedOnQuestion_not?: InputMaybe<Scalars['Boolean']['input']>;
  indexedOnQuestion_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  indexedOnQuestion_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  curatedByDxDao?: InputMaybe<Scalars['Boolean']['input']>;
  curatedByDxDao_not?: InputMaybe<Scalars['Boolean']['input']>;
  curatedByDxDao_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  curatedByDxDao_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  condition?: InputMaybe<Scalars['String']['input']>;
  condition_not?: InputMaybe<Scalars['String']['input']>;
  condition_gt?: InputMaybe<Scalars['String']['input']>;
  condition_lt?: InputMaybe<Scalars['String']['input']>;
  condition_gte?: InputMaybe<Scalars['String']['input']>;
  condition_lte?: InputMaybe<Scalars['String']['input']>;
  condition_in?: InputMaybe<Array<Scalars['String']['input']>>;
  condition_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  condition_contains?: InputMaybe<Scalars['String']['input']>;
  condition_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  condition_not_contains?: InputMaybe<Scalars['String']['input']>;
  condition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  condition_starts_with?: InputMaybe<Scalars['String']['input']>;
  condition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  condition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  condition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  condition_ends_with?: InputMaybe<Scalars['String']['input']>;
  condition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  condition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  condition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  condition_?: InputMaybe<Condition_filter>;
  question?: InputMaybe<Scalars['String']['input']>;
  question_not?: InputMaybe<Scalars['String']['input']>;
  question_gt?: InputMaybe<Scalars['String']['input']>;
  question_lt?: InputMaybe<Scalars['String']['input']>;
  question_gte?: InputMaybe<Scalars['String']['input']>;
  question_lte?: InputMaybe<Scalars['String']['input']>;
  question_in?: InputMaybe<Array<Scalars['String']['input']>>;
  question_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  question_contains?: InputMaybe<Scalars['String']['input']>;
  question_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  question_not_contains?: InputMaybe<Scalars['String']['input']>;
  question_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  question_starts_with?: InputMaybe<Scalars['String']['input']>;
  question_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  question_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_ends_with?: InputMaybe<Scalars['String']['input']>;
  question_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  question_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  question_?: InputMaybe<Question_filter>;
  scalarLow?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_not?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_gt?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_lt?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_gte?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_lte?: InputMaybe<Scalars['BigInt']['input']>;
  scalarLow_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scalarLow_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scalarHigh?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_not?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_gt?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_lt?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_gte?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_lte?: InputMaybe<Scalars['BigInt']['input']>;
  scalarHigh_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scalarHigh_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  templateId?: InputMaybe<Scalars['BigInt']['input']>;
  templateId_not?: InputMaybe<Scalars['BigInt']['input']>;
  templateId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  templateId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  templateId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  templateId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  templateId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  templateId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  data?: InputMaybe<Scalars['String']['input']>;
  data_not?: InputMaybe<Scalars['String']['input']>;
  data_gt?: InputMaybe<Scalars['String']['input']>;
  data_lt?: InputMaybe<Scalars['String']['input']>;
  data_gte?: InputMaybe<Scalars['String']['input']>;
  data_lte?: InputMaybe<Scalars['String']['input']>;
  data_in?: InputMaybe<Array<Scalars['String']['input']>>;
  data_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  data_contains?: InputMaybe<Scalars['String']['input']>;
  data_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  data_not_contains?: InputMaybe<Scalars['String']['input']>;
  data_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  data_starts_with?: InputMaybe<Scalars['String']['input']>;
  data_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  data_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  data_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  data_ends_with?: InputMaybe<Scalars['String']['input']>;
  data_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  data_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  data_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  outcomes?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_not?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  outcomes_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_not?: InputMaybe<Scalars['String']['input']>;
  category_gt?: InputMaybe<Scalars['String']['input']>;
  category_lt?: InputMaybe<Scalars['String']['input']>;
  category_gte?: InputMaybe<Scalars['String']['input']>;
  category_lte?: InputMaybe<Scalars['String']['input']>;
  category_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  language_not?: InputMaybe<Scalars['String']['input']>;
  language_gt?: InputMaybe<Scalars['String']['input']>;
  language_lt?: InputMaybe<Scalars['String']['input']>;
  language_gte?: InputMaybe<Scalars['String']['input']>;
  language_lte?: InputMaybe<Scalars['String']['input']>;
  language_in?: InputMaybe<Array<Scalars['String']['input']>>;
  language_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  language_contains?: InputMaybe<Scalars['String']['input']>;
  language_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  language_not_contains?: InputMaybe<Scalars['String']['input']>;
  language_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  language_starts_with?: InputMaybe<Scalars['String']['input']>;
  language_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  language_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  language_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  language_ends_with?: InputMaybe<Scalars['String']['input']>;
  language_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  language_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  language_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrator?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_not?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  arbitrator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  openingTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openingTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeout?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_not?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeout_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  resolutionTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  resolutionTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  resolutionTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  resolutionTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  resolutionTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  resolutionTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  resolutionTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  resolutionTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  payouts?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  payouts_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  payouts_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  payouts_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  payouts_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  payouts_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  currentAnswer?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswer_not?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currentAnswer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currentAnswer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  currentAnswerBond?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerBond_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerBond_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerBond_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerBond_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerBond_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerBond_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAnswerBond_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAnswerTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentAnswerTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentAnswerTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  isPendingArbitration?: InputMaybe<Scalars['Boolean']['input']>;
  isPendingArbitration_not?: InputMaybe<Scalars['Boolean']['input']>;
  isPendingArbitration_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isPendingArbitration_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  arbitrationOccurred?: InputMaybe<Scalars['Boolean']['input']>;
  arbitrationOccurred_not?: InputMaybe<Scalars['Boolean']['input']>;
  arbitrationOccurred_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  arbitrationOccurred_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  answerFinalizedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  answerFinalizedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  answerFinalizedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  answerFinalizedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  answerFinalizedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  answerFinalizedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  answerFinalizedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  answerFinalizedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolMembers_?: InputMaybe<FpmmPoolMembership_filter>;
  participants_?: InputMaybe<FpmmParticipation_filter>;
  submissionIDs?: InputMaybe<Array<Scalars['String']['input']>>;
  submissionIDs_not?: InputMaybe<Array<Scalars['String']['input']>>;
  submissionIDs_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  submissionIDs_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  submissionIDs_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  submissionIDs_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  submissionIDs_?: InputMaybe<KlerosSubmission_filter>;
  klerosTCRregistered?: InputMaybe<Scalars['Boolean']['input']>;
  klerosTCRregistered_not?: InputMaybe<Scalars['Boolean']['input']>;
  klerosTCRregistered_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  klerosTCRregistered_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  curatedByDxDaoOrKleros?: InputMaybe<Scalars['Boolean']['input']>;
  curatedByDxDaoOrKleros_not?: InputMaybe<Scalars['Boolean']['input']>;
  curatedByDxDaoOrKleros_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  curatedByDxDaoOrKleros_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FixedProductMarketMaker_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FixedProductMarketMaker_filter>>>;
};

export type FixedProductMarketMaker_orderBy =
  | 'id'
  | 'creator'
  | 'creationTimestamp'
  | 'collateralToken'
  | 'conditions'
  | 'fee'
  | 'collateralVolume'
  | 'scaledCollateralVolume'
  | 'usdVolume'
  | 'outcomeTokenAmounts'
  | 'outcomeTokenMarginalPrices'
  | 'outcomeSlotCount'
  | 'liquidityMeasure'
  | 'scaledLiquidityMeasure'
  | 'usdLiquidityMeasure'
  | 'liquidityParameter'
  | 'scaledLiquidityParameter'
  | 'usdLiquidityParameter'
  | 'lastActiveDay'
  | 'lastActiveHour'
  | 'collateralVolumeBeforeLastActiveDayByHour'
  | 'usdVolumeBeforeLastActiveDayByHour'
  | 'runningDailyVolume'
  | 'scaledRunningDailyVolume'
  | 'usdRunningDailyVolume'
  | 'lastActiveDayAndRunningDailyVolume'
  | 'lastActiveDayAndScaledRunningDailyVolume'
  | 'runningDailyVolumeByHour'
  | 'usdRunningDailyVolumeByHour'
  | 'sort24HourVolume0'
  | 'sort24HourVolume1'
  | 'sort24HourVolume2'
  | 'sort24HourVolume3'
  | 'sort24HourVolume4'
  | 'sort24HourVolume5'
  | 'sort24HourVolume6'
  | 'sort24HourVolume7'
  | 'sort24HourVolume8'
  | 'sort24HourVolume9'
  | 'sort24HourVolume10'
  | 'sort24HourVolume11'
  | 'sort24HourVolume12'
  | 'sort24HourVolume13'
  | 'sort24HourVolume14'
  | 'sort24HourVolume15'
  | 'sort24HourVolume16'
  | 'sort24HourVolume17'
  | 'sort24HourVolume18'
  | 'sort24HourVolume19'
  | 'sort24HourVolume20'
  | 'sort24HourVolume21'
  | 'sort24HourVolume22'
  | 'sort24HourVolume23'
  | 'indexedOnQuestion'
  | 'curatedByDxDao'
  | 'condition'
  | 'condition__id'
  | 'condition__oracle'
  | 'condition__questionId'
  | 'condition__outcomeSlotCount'
  | 'condition__resolutionTimestamp'
  | 'condition__scalarLow'
  | 'condition__scalarHigh'
  | 'question'
  | 'question__id'
  | 'question__templateId'
  | 'question__data'
  | 'question__title'
  | 'question__category'
  | 'question__language'
  | 'question__arbitrator'
  | 'question__openingTimestamp'
  | 'question__timeout'
  | 'question__currentAnswer'
  | 'question__currentAnswerBond'
  | 'question__currentAnswerTimestamp'
  | 'question__isPendingArbitration'
  | 'question__arbitrationOccurred'
  | 'question__answerFinalizedTimestamp'
  | 'scalarLow'
  | 'scalarHigh'
  | 'templateId'
  | 'data'
  | 'title'
  | 'outcomes'
  | 'category'
  | 'language'
  | 'arbitrator'
  | 'openingTimestamp'
  | 'timeout'
  | 'resolutionTimestamp'
  | 'payouts'
  | 'currentAnswer'
  | 'currentAnswerBond'
  | 'currentAnswerTimestamp'
  | 'isPendingArbitration'
  | 'arbitrationOccurred'
  | 'answerFinalizedTimestamp'
  | 'poolMembers'
  | 'participants'
  | 'submissionIDs'
  | 'klerosTCRregistered'
  | 'curatedByDxDaoOrKleros';

export type FpmmLiquidity = {
  id: Scalars['ID']['output'];
  fpmm: FixedProductMarketMaker;
  type: LiquidityType;
  outcomeTokenAmounts?: Maybe<Array<Scalars['BigInt']['output']>>;
  collateralTokenAmount: Scalars['BigInt']['output'];
  additionalLiquidityParameter: Scalars['BigInt']['output'];
  funder: Account;
  sharesAmount: Scalars['BigInt']['output'];
  collateralRemovedFromFeePool?: Maybe<Scalars['BigInt']['output']>;
  creationTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  additionalSharesCost: Scalars['BigInt']['output'];
};

export type FpmmLiquidity_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  fpmm?: InputMaybe<Scalars['String']['input']>;
  fpmm_not?: InputMaybe<Scalars['String']['input']>;
  fpmm_gt?: InputMaybe<Scalars['String']['input']>;
  fpmm_lt?: InputMaybe<Scalars['String']['input']>;
  fpmm_gte?: InputMaybe<Scalars['String']['input']>;
  fpmm_lte?: InputMaybe<Scalars['String']['input']>;
  fpmm_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fpmm_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fpmm_contains?: InputMaybe<Scalars['String']['input']>;
  fpmm_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_contains?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_starts_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_ends_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_?: InputMaybe<FixedProductMarketMaker_filter>;
  type?: InputMaybe<LiquidityType>;
  type_not?: InputMaybe<LiquidityType>;
  type_in?: InputMaybe<Array<LiquidityType>>;
  type_not_in?: InputMaybe<Array<LiquidityType>>;
  outcomeTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTokenAmount?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  additionalLiquidityParameter?: InputMaybe<Scalars['BigInt']['input']>;
  additionalLiquidityParameter_not?: InputMaybe<Scalars['BigInt']['input']>;
  additionalLiquidityParameter_gt?: InputMaybe<Scalars['BigInt']['input']>;
  additionalLiquidityParameter_lt?: InputMaybe<Scalars['BigInt']['input']>;
  additionalLiquidityParameter_gte?: InputMaybe<Scalars['BigInt']['input']>;
  additionalLiquidityParameter_lte?: InputMaybe<Scalars['BigInt']['input']>;
  additionalLiquidityParameter_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  additionalLiquidityParameter_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  funder?: InputMaybe<Scalars['String']['input']>;
  funder_not?: InputMaybe<Scalars['String']['input']>;
  funder_gt?: InputMaybe<Scalars['String']['input']>;
  funder_lt?: InputMaybe<Scalars['String']['input']>;
  funder_gte?: InputMaybe<Scalars['String']['input']>;
  funder_lte?: InputMaybe<Scalars['String']['input']>;
  funder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  funder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  funder_contains?: InputMaybe<Scalars['String']['input']>;
  funder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  funder_not_contains?: InputMaybe<Scalars['String']['input']>;
  funder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  funder_starts_with?: InputMaybe<Scalars['String']['input']>;
  funder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  funder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  funder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  funder_ends_with?: InputMaybe<Scalars['String']['input']>;
  funder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  funder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  funder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  funder_?: InputMaybe<Account_filter>;
  sharesAmount?: InputMaybe<Scalars['BigInt']['input']>;
  sharesAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharesAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharesAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralRemovedFromFeePool?: InputMaybe<Scalars['BigInt']['input']>;
  collateralRemovedFromFeePool_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateralRemovedFromFeePool_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralRemovedFromFeePool_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralRemovedFromFeePool_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralRemovedFromFeePool_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralRemovedFromFeePool_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralRemovedFromFeePool_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creationTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creationTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  additionalSharesCost?: InputMaybe<Scalars['BigInt']['input']>;
  additionalSharesCost_not?: InputMaybe<Scalars['BigInt']['input']>;
  additionalSharesCost_gt?: InputMaybe<Scalars['BigInt']['input']>;
  additionalSharesCost_lt?: InputMaybe<Scalars['BigInt']['input']>;
  additionalSharesCost_gte?: InputMaybe<Scalars['BigInt']['input']>;
  additionalSharesCost_lte?: InputMaybe<Scalars['BigInt']['input']>;
  additionalSharesCost_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  additionalSharesCost_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FpmmLiquidity_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FpmmLiquidity_filter>>>;
};

export type FpmmLiquidity_orderBy =
  | 'id'
  | 'fpmm'
  | 'fpmm__id'
  | 'fpmm__creator'
  | 'fpmm__creationTimestamp'
  | 'fpmm__collateralToken'
  | 'fpmm__fee'
  | 'fpmm__collateralVolume'
  | 'fpmm__scaledCollateralVolume'
  | 'fpmm__usdVolume'
  | 'fpmm__outcomeSlotCount'
  | 'fpmm__liquidityMeasure'
  | 'fpmm__scaledLiquidityMeasure'
  | 'fpmm__usdLiquidityMeasure'
  | 'fpmm__liquidityParameter'
  | 'fpmm__scaledLiquidityParameter'
  | 'fpmm__usdLiquidityParameter'
  | 'fpmm__lastActiveDay'
  | 'fpmm__lastActiveHour'
  | 'fpmm__runningDailyVolume'
  | 'fpmm__scaledRunningDailyVolume'
  | 'fpmm__usdRunningDailyVolume'
  | 'fpmm__lastActiveDayAndRunningDailyVolume'
  | 'fpmm__lastActiveDayAndScaledRunningDailyVolume'
  | 'fpmm__sort24HourVolume0'
  | 'fpmm__sort24HourVolume1'
  | 'fpmm__sort24HourVolume2'
  | 'fpmm__sort24HourVolume3'
  | 'fpmm__sort24HourVolume4'
  | 'fpmm__sort24HourVolume5'
  | 'fpmm__sort24HourVolume6'
  | 'fpmm__sort24HourVolume7'
  | 'fpmm__sort24HourVolume8'
  | 'fpmm__sort24HourVolume9'
  | 'fpmm__sort24HourVolume10'
  | 'fpmm__sort24HourVolume11'
  | 'fpmm__sort24HourVolume12'
  | 'fpmm__sort24HourVolume13'
  | 'fpmm__sort24HourVolume14'
  | 'fpmm__sort24HourVolume15'
  | 'fpmm__sort24HourVolume16'
  | 'fpmm__sort24HourVolume17'
  | 'fpmm__sort24HourVolume18'
  | 'fpmm__sort24HourVolume19'
  | 'fpmm__sort24HourVolume20'
  | 'fpmm__sort24HourVolume21'
  | 'fpmm__sort24HourVolume22'
  | 'fpmm__sort24HourVolume23'
  | 'fpmm__indexedOnQuestion'
  | 'fpmm__curatedByDxDao'
  | 'fpmm__scalarLow'
  | 'fpmm__scalarHigh'
  | 'fpmm__templateId'
  | 'fpmm__data'
  | 'fpmm__title'
  | 'fpmm__category'
  | 'fpmm__language'
  | 'fpmm__arbitrator'
  | 'fpmm__openingTimestamp'
  | 'fpmm__timeout'
  | 'fpmm__resolutionTimestamp'
  | 'fpmm__currentAnswer'
  | 'fpmm__currentAnswerBond'
  | 'fpmm__currentAnswerTimestamp'
  | 'fpmm__isPendingArbitration'
  | 'fpmm__arbitrationOccurred'
  | 'fpmm__answerFinalizedTimestamp'
  | 'fpmm__klerosTCRregistered'
  | 'fpmm__curatedByDxDaoOrKleros'
  | 'type'
  | 'outcomeTokenAmounts'
  | 'collateralTokenAmount'
  | 'additionalLiquidityParameter'
  | 'funder'
  | 'funder__id'
  | 'funder__tradeNonce'
  | 'sharesAmount'
  | 'collateralRemovedFromFeePool'
  | 'creationTimestamp'
  | 'transactionHash'
  | 'additionalSharesCost';

export type FpmmParticipation = {
  id: Scalars['ID']['output'];
  fpmm: FixedProductMarketMaker;
  participant: Account;
  creationTimestamp: Scalars['BigInt']['output'];
  collateralToken: Scalars['Bytes']['output'];
  fee: Scalars['BigInt']['output'];
  title?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  arbitrator?: Maybe<Scalars['Bytes']['output']>;
  openingTimestamp?: Maybe<Scalars['BigInt']['output']>;
  timeout?: Maybe<Scalars['BigInt']['output']>;
};

export type FpmmParticipation_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  fpmm?: InputMaybe<Scalars['String']['input']>;
  fpmm_not?: InputMaybe<Scalars['String']['input']>;
  fpmm_gt?: InputMaybe<Scalars['String']['input']>;
  fpmm_lt?: InputMaybe<Scalars['String']['input']>;
  fpmm_gte?: InputMaybe<Scalars['String']['input']>;
  fpmm_lte?: InputMaybe<Scalars['String']['input']>;
  fpmm_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fpmm_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fpmm_contains?: InputMaybe<Scalars['String']['input']>;
  fpmm_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_contains?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_starts_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_ends_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_?: InputMaybe<FixedProductMarketMaker_filter>;
  participant?: InputMaybe<Scalars['String']['input']>;
  participant_not?: InputMaybe<Scalars['String']['input']>;
  participant_gt?: InputMaybe<Scalars['String']['input']>;
  participant_lt?: InputMaybe<Scalars['String']['input']>;
  participant_gte?: InputMaybe<Scalars['String']['input']>;
  participant_lte?: InputMaybe<Scalars['String']['input']>;
  participant_in?: InputMaybe<Array<Scalars['String']['input']>>;
  participant_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  participant_contains?: InputMaybe<Scalars['String']['input']>;
  participant_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  participant_not_contains?: InputMaybe<Scalars['String']['input']>;
  participant_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  participant_starts_with?: InputMaybe<Scalars['String']['input']>;
  participant_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  participant_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  participant_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  participant_ends_with?: InputMaybe<Scalars['String']['input']>;
  participant_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  participant_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  participant_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  participant_?: InputMaybe<Account_filter>;
  creationTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creationTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralToken?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  fee?: InputMaybe<Scalars['BigInt']['input']>;
  fee_not?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  category_not?: InputMaybe<Scalars['String']['input']>;
  category_gt?: InputMaybe<Scalars['String']['input']>;
  category_lt?: InputMaybe<Scalars['String']['input']>;
  category_gte?: InputMaybe<Scalars['String']['input']>;
  category_lte?: InputMaybe<Scalars['String']['input']>;
  category_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  category_contains?: InputMaybe<Scalars['String']['input']>;
  category_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_contains?: InputMaybe<Scalars['String']['input']>;
  category_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  category_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  category_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  category_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  language_not?: InputMaybe<Scalars['String']['input']>;
  language_gt?: InputMaybe<Scalars['String']['input']>;
  language_lt?: InputMaybe<Scalars['String']['input']>;
  language_gte?: InputMaybe<Scalars['String']['input']>;
  language_lte?: InputMaybe<Scalars['String']['input']>;
  language_in?: InputMaybe<Array<Scalars['String']['input']>>;
  language_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  language_contains?: InputMaybe<Scalars['String']['input']>;
  language_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  language_not_contains?: InputMaybe<Scalars['String']['input']>;
  language_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  language_starts_with?: InputMaybe<Scalars['String']['input']>;
  language_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  language_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  language_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  language_ends_with?: InputMaybe<Scalars['String']['input']>;
  language_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  language_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  language_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrator?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_not?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  arbitrator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  arbitrator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  openingTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openingTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openingTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeout?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_not?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timeout_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeout_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FpmmParticipation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FpmmParticipation_filter>>>;
};

export type FpmmParticipation_orderBy =
  | 'id'
  | 'fpmm'
  | 'fpmm__id'
  | 'fpmm__creator'
  | 'fpmm__creationTimestamp'
  | 'fpmm__collateralToken'
  | 'fpmm__fee'
  | 'fpmm__collateralVolume'
  | 'fpmm__scaledCollateralVolume'
  | 'fpmm__usdVolume'
  | 'fpmm__outcomeSlotCount'
  | 'fpmm__liquidityMeasure'
  | 'fpmm__scaledLiquidityMeasure'
  | 'fpmm__usdLiquidityMeasure'
  | 'fpmm__liquidityParameter'
  | 'fpmm__scaledLiquidityParameter'
  | 'fpmm__usdLiquidityParameter'
  | 'fpmm__lastActiveDay'
  | 'fpmm__lastActiveHour'
  | 'fpmm__runningDailyVolume'
  | 'fpmm__scaledRunningDailyVolume'
  | 'fpmm__usdRunningDailyVolume'
  | 'fpmm__lastActiveDayAndRunningDailyVolume'
  | 'fpmm__lastActiveDayAndScaledRunningDailyVolume'
  | 'fpmm__sort24HourVolume0'
  | 'fpmm__sort24HourVolume1'
  | 'fpmm__sort24HourVolume2'
  | 'fpmm__sort24HourVolume3'
  | 'fpmm__sort24HourVolume4'
  | 'fpmm__sort24HourVolume5'
  | 'fpmm__sort24HourVolume6'
  | 'fpmm__sort24HourVolume7'
  | 'fpmm__sort24HourVolume8'
  | 'fpmm__sort24HourVolume9'
  | 'fpmm__sort24HourVolume10'
  | 'fpmm__sort24HourVolume11'
  | 'fpmm__sort24HourVolume12'
  | 'fpmm__sort24HourVolume13'
  | 'fpmm__sort24HourVolume14'
  | 'fpmm__sort24HourVolume15'
  | 'fpmm__sort24HourVolume16'
  | 'fpmm__sort24HourVolume17'
  | 'fpmm__sort24HourVolume18'
  | 'fpmm__sort24HourVolume19'
  | 'fpmm__sort24HourVolume20'
  | 'fpmm__sort24HourVolume21'
  | 'fpmm__sort24HourVolume22'
  | 'fpmm__sort24HourVolume23'
  | 'fpmm__indexedOnQuestion'
  | 'fpmm__curatedByDxDao'
  | 'fpmm__scalarLow'
  | 'fpmm__scalarHigh'
  | 'fpmm__templateId'
  | 'fpmm__data'
  | 'fpmm__title'
  | 'fpmm__category'
  | 'fpmm__language'
  | 'fpmm__arbitrator'
  | 'fpmm__openingTimestamp'
  | 'fpmm__timeout'
  | 'fpmm__resolutionTimestamp'
  | 'fpmm__currentAnswer'
  | 'fpmm__currentAnswerBond'
  | 'fpmm__currentAnswerTimestamp'
  | 'fpmm__isPendingArbitration'
  | 'fpmm__arbitrationOccurred'
  | 'fpmm__answerFinalizedTimestamp'
  | 'fpmm__klerosTCRregistered'
  | 'fpmm__curatedByDxDaoOrKleros'
  | 'participant'
  | 'participant__id'
  | 'participant__tradeNonce'
  | 'creationTimestamp'
  | 'collateralToken'
  | 'fee'
  | 'title'
  | 'category'
  | 'language'
  | 'arbitrator'
  | 'openingTimestamp'
  | 'timeout';

export type FpmmPoolMembership = {
  id: Scalars['ID']['output'];
  pool: FixedProductMarketMaker;
  funder: Account;
  amount: Scalars['BigInt']['output'];
};

export type FpmmPoolMembership_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<FixedProductMarketMaker_filter>;
  funder?: InputMaybe<Scalars['String']['input']>;
  funder_not?: InputMaybe<Scalars['String']['input']>;
  funder_gt?: InputMaybe<Scalars['String']['input']>;
  funder_lt?: InputMaybe<Scalars['String']['input']>;
  funder_gte?: InputMaybe<Scalars['String']['input']>;
  funder_lte?: InputMaybe<Scalars['String']['input']>;
  funder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  funder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  funder_contains?: InputMaybe<Scalars['String']['input']>;
  funder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  funder_not_contains?: InputMaybe<Scalars['String']['input']>;
  funder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  funder_starts_with?: InputMaybe<Scalars['String']['input']>;
  funder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  funder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  funder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  funder_ends_with?: InputMaybe<Scalars['String']['input']>;
  funder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  funder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  funder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  funder_?: InputMaybe<Account_filter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FpmmPoolMembership_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FpmmPoolMembership_filter>>>;
};

export type FpmmPoolMembership_orderBy =
  | 'id'
  | 'pool'
  | 'pool__id'
  | 'pool__creator'
  | 'pool__creationTimestamp'
  | 'pool__collateralToken'
  | 'pool__fee'
  | 'pool__collateralVolume'
  | 'pool__scaledCollateralVolume'
  | 'pool__usdVolume'
  | 'pool__outcomeSlotCount'
  | 'pool__liquidityMeasure'
  | 'pool__scaledLiquidityMeasure'
  | 'pool__usdLiquidityMeasure'
  | 'pool__liquidityParameter'
  | 'pool__scaledLiquidityParameter'
  | 'pool__usdLiquidityParameter'
  | 'pool__lastActiveDay'
  | 'pool__lastActiveHour'
  | 'pool__runningDailyVolume'
  | 'pool__scaledRunningDailyVolume'
  | 'pool__usdRunningDailyVolume'
  | 'pool__lastActiveDayAndRunningDailyVolume'
  | 'pool__lastActiveDayAndScaledRunningDailyVolume'
  | 'pool__sort24HourVolume0'
  | 'pool__sort24HourVolume1'
  | 'pool__sort24HourVolume2'
  | 'pool__sort24HourVolume3'
  | 'pool__sort24HourVolume4'
  | 'pool__sort24HourVolume5'
  | 'pool__sort24HourVolume6'
  | 'pool__sort24HourVolume7'
  | 'pool__sort24HourVolume8'
  | 'pool__sort24HourVolume9'
  | 'pool__sort24HourVolume10'
  | 'pool__sort24HourVolume11'
  | 'pool__sort24HourVolume12'
  | 'pool__sort24HourVolume13'
  | 'pool__sort24HourVolume14'
  | 'pool__sort24HourVolume15'
  | 'pool__sort24HourVolume16'
  | 'pool__sort24HourVolume17'
  | 'pool__sort24HourVolume18'
  | 'pool__sort24HourVolume19'
  | 'pool__sort24HourVolume20'
  | 'pool__sort24HourVolume21'
  | 'pool__sort24HourVolume22'
  | 'pool__sort24HourVolume23'
  | 'pool__indexedOnQuestion'
  | 'pool__curatedByDxDao'
  | 'pool__scalarLow'
  | 'pool__scalarHigh'
  | 'pool__templateId'
  | 'pool__data'
  | 'pool__title'
  | 'pool__category'
  | 'pool__language'
  | 'pool__arbitrator'
  | 'pool__openingTimestamp'
  | 'pool__timeout'
  | 'pool__resolutionTimestamp'
  | 'pool__currentAnswer'
  | 'pool__currentAnswerBond'
  | 'pool__currentAnswerTimestamp'
  | 'pool__isPendingArbitration'
  | 'pool__arbitrationOccurred'
  | 'pool__answerFinalizedTimestamp'
  | 'pool__klerosTCRregistered'
  | 'pool__curatedByDxDaoOrKleros'
  | 'funder'
  | 'funder__id'
  | 'funder__tradeNonce'
  | 'amount';

export type FpmmTrade = {
  id: Scalars['ID']['output'];
  fpmm: FixedProductMarketMaker;
  title?: Maybe<Scalars['String']['output']>;
  collateralToken: Scalars['Bytes']['output'];
  outcomeTokenMarginalPrice: Scalars['BigDecimal']['output'];
  oldOutcomeTokenMarginalPrice: Scalars['BigDecimal']['output'];
  type: TradeType;
  creator: Account;
  creationTimestamp: Scalars['BigInt']['output'];
  collateralAmount: Scalars['BigInt']['output'];
  collateralAmountUSD: Scalars['BigDecimal']['output'];
  feeAmount: Scalars['BigInt']['output'];
  outcomeIndex: Scalars['BigInt']['output'];
  outcomeTokensTraded: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type FpmmTrade_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  fpmm?: InputMaybe<Scalars['String']['input']>;
  fpmm_not?: InputMaybe<Scalars['String']['input']>;
  fpmm_gt?: InputMaybe<Scalars['String']['input']>;
  fpmm_lt?: InputMaybe<Scalars['String']['input']>;
  fpmm_gte?: InputMaybe<Scalars['String']['input']>;
  fpmm_lte?: InputMaybe<Scalars['String']['input']>;
  fpmm_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fpmm_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fpmm_contains?: InputMaybe<Scalars['String']['input']>;
  fpmm_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_contains?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_starts_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_ends_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_?: InputMaybe<FixedProductMarketMaker_filter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  outcomeTokenMarginalPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  outcomeTokenMarginalPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  outcomeTokenMarginalPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  outcomeTokenMarginalPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  outcomeTokenMarginalPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  outcomeTokenMarginalPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  outcomeTokenMarginalPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  outcomeTokenMarginalPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  oldOutcomeTokenMarginalPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldOutcomeTokenMarginalPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldOutcomeTokenMarginalPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldOutcomeTokenMarginalPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldOutcomeTokenMarginalPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldOutcomeTokenMarginalPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldOutcomeTokenMarginalPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  oldOutcomeTokenMarginalPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  type?: InputMaybe<TradeType>;
  type_not?: InputMaybe<TradeType>;
  type_in?: InputMaybe<Array<TradeType>>;
  type_not_in?: InputMaybe<Array<TradeType>>;
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_not?: InputMaybe<Scalars['String']['input']>;
  creator_gt?: InputMaybe<Scalars['String']['input']>;
  creator_lt?: InputMaybe<Scalars['String']['input']>;
  creator_gte?: InputMaybe<Scalars['String']['input']>;
  creator_lte?: InputMaybe<Scalars['String']['input']>;
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_contains?: InputMaybe<Scalars['String']['input']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_?: InputMaybe<Account_filter>;
  creationTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creationTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralAmount?: InputMaybe<Scalars['BigInt']['input']>;
  collateralAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateralAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralAmountUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  collateralAmountUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  collateralAmountUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collateralAmountUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collateralAmountUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collateralAmountUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collateralAmountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collateralAmountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  feeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeIndex?: InputMaybe<Scalars['BigInt']['input']>;
  outcomeIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  outcomeIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  outcomeIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  outcomeIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  outcomeIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  outcomeIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeTokensTraded?: InputMaybe<Scalars['BigInt']['input']>;
  outcomeTokensTraded_not?: InputMaybe<Scalars['BigInt']['input']>;
  outcomeTokensTraded_gt?: InputMaybe<Scalars['BigInt']['input']>;
  outcomeTokensTraded_lt?: InputMaybe<Scalars['BigInt']['input']>;
  outcomeTokensTraded_gte?: InputMaybe<Scalars['BigInt']['input']>;
  outcomeTokensTraded_lte?: InputMaybe<Scalars['BigInt']['input']>;
  outcomeTokensTraded_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outcomeTokensTraded_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FpmmTrade_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FpmmTrade_filter>>>;
};

export type FpmmTrade_orderBy =
  | 'id'
  | 'fpmm'
  | 'fpmm__id'
  | 'fpmm__creator'
  | 'fpmm__creationTimestamp'
  | 'fpmm__collateralToken'
  | 'fpmm__fee'
  | 'fpmm__collateralVolume'
  | 'fpmm__scaledCollateralVolume'
  | 'fpmm__usdVolume'
  | 'fpmm__outcomeSlotCount'
  | 'fpmm__liquidityMeasure'
  | 'fpmm__scaledLiquidityMeasure'
  | 'fpmm__usdLiquidityMeasure'
  | 'fpmm__liquidityParameter'
  | 'fpmm__scaledLiquidityParameter'
  | 'fpmm__usdLiquidityParameter'
  | 'fpmm__lastActiveDay'
  | 'fpmm__lastActiveHour'
  | 'fpmm__runningDailyVolume'
  | 'fpmm__scaledRunningDailyVolume'
  | 'fpmm__usdRunningDailyVolume'
  | 'fpmm__lastActiveDayAndRunningDailyVolume'
  | 'fpmm__lastActiveDayAndScaledRunningDailyVolume'
  | 'fpmm__sort24HourVolume0'
  | 'fpmm__sort24HourVolume1'
  | 'fpmm__sort24HourVolume2'
  | 'fpmm__sort24HourVolume3'
  | 'fpmm__sort24HourVolume4'
  | 'fpmm__sort24HourVolume5'
  | 'fpmm__sort24HourVolume6'
  | 'fpmm__sort24HourVolume7'
  | 'fpmm__sort24HourVolume8'
  | 'fpmm__sort24HourVolume9'
  | 'fpmm__sort24HourVolume10'
  | 'fpmm__sort24HourVolume11'
  | 'fpmm__sort24HourVolume12'
  | 'fpmm__sort24HourVolume13'
  | 'fpmm__sort24HourVolume14'
  | 'fpmm__sort24HourVolume15'
  | 'fpmm__sort24HourVolume16'
  | 'fpmm__sort24HourVolume17'
  | 'fpmm__sort24HourVolume18'
  | 'fpmm__sort24HourVolume19'
  | 'fpmm__sort24HourVolume20'
  | 'fpmm__sort24HourVolume21'
  | 'fpmm__sort24HourVolume22'
  | 'fpmm__sort24HourVolume23'
  | 'fpmm__indexedOnQuestion'
  | 'fpmm__curatedByDxDao'
  | 'fpmm__scalarLow'
  | 'fpmm__scalarHigh'
  | 'fpmm__templateId'
  | 'fpmm__data'
  | 'fpmm__title'
  | 'fpmm__category'
  | 'fpmm__language'
  | 'fpmm__arbitrator'
  | 'fpmm__openingTimestamp'
  | 'fpmm__timeout'
  | 'fpmm__resolutionTimestamp'
  | 'fpmm__currentAnswer'
  | 'fpmm__currentAnswerBond'
  | 'fpmm__currentAnswerTimestamp'
  | 'fpmm__isPendingArbitration'
  | 'fpmm__arbitrationOccurred'
  | 'fpmm__answerFinalizedTimestamp'
  | 'fpmm__klerosTCRregistered'
  | 'fpmm__curatedByDxDaoOrKleros'
  | 'title'
  | 'collateralToken'
  | 'outcomeTokenMarginalPrice'
  | 'oldOutcomeTokenMarginalPrice'
  | 'type'
  | 'creator'
  | 'creator__id'
  | 'creator__tradeNonce'
  | 'creationTimestamp'
  | 'collateralAmount'
  | 'collateralAmountUSD'
  | 'feeAmount'
  | 'outcomeIndex'
  | 'outcomeTokensTraded'
  | 'transactionHash';

export type FpmmTransaction = {
  id: Scalars['ID']['output'];
  fpmm: FixedProductMarketMaker;
  user: Account;
  fpmmType: FpmmType;
  transactionType: TransactionType;
  collateralTokenAmount: Scalars['BigInt']['output'];
  sharesOrPoolTokenAmount: Scalars['BigInt']['output'];
  creationTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  additionalSharesCost?: Maybe<Scalars['BigInt']['output']>;
};

export type FpmmTransaction_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  fpmm?: InputMaybe<Scalars['String']['input']>;
  fpmm_not?: InputMaybe<Scalars['String']['input']>;
  fpmm_gt?: InputMaybe<Scalars['String']['input']>;
  fpmm_lt?: InputMaybe<Scalars['String']['input']>;
  fpmm_gte?: InputMaybe<Scalars['String']['input']>;
  fpmm_lte?: InputMaybe<Scalars['String']['input']>;
  fpmm_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fpmm_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fpmm_contains?: InputMaybe<Scalars['String']['input']>;
  fpmm_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_contains?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_starts_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_ends_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fpmm_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fpmm_?: InputMaybe<FixedProductMarketMaker_filter>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<Account_filter>;
  fpmmType?: InputMaybe<FpmmType>;
  fpmmType_not?: InputMaybe<FpmmType>;
  fpmmType_in?: InputMaybe<Array<FpmmType>>;
  fpmmType_not_in?: InputMaybe<Array<FpmmType>>;
  transactionType?: InputMaybe<TransactionType>;
  transactionType_not?: InputMaybe<TransactionType>;
  transactionType_in?: InputMaybe<Array<TransactionType>>;
  transactionType_not_in?: InputMaybe<Array<TransactionType>>;
  collateralTokenAmount?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharesOrPoolTokenAmount?: InputMaybe<Scalars['BigInt']['input']>;
  sharesOrPoolTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  sharesOrPoolTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesOrPoolTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sharesOrPoolTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesOrPoolTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sharesOrPoolTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sharesOrPoolTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creationTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  creationTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creationTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  additionalSharesCost?: InputMaybe<Scalars['BigInt']['input']>;
  additionalSharesCost_not?: InputMaybe<Scalars['BigInt']['input']>;
  additionalSharesCost_gt?: InputMaybe<Scalars['BigInt']['input']>;
  additionalSharesCost_lt?: InputMaybe<Scalars['BigInt']['input']>;
  additionalSharesCost_gte?: InputMaybe<Scalars['BigInt']['input']>;
  additionalSharesCost_lte?: InputMaybe<Scalars['BigInt']['input']>;
  additionalSharesCost_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  additionalSharesCost_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FpmmTransaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FpmmTransaction_filter>>>;
};

export type FpmmTransaction_orderBy =
  | 'id'
  | 'fpmm'
  | 'fpmm__id'
  | 'fpmm__creator'
  | 'fpmm__creationTimestamp'
  | 'fpmm__collateralToken'
  | 'fpmm__fee'
  | 'fpmm__collateralVolume'
  | 'fpmm__scaledCollateralVolume'
  | 'fpmm__usdVolume'
  | 'fpmm__outcomeSlotCount'
  | 'fpmm__liquidityMeasure'
  | 'fpmm__scaledLiquidityMeasure'
  | 'fpmm__usdLiquidityMeasure'
  | 'fpmm__liquidityParameter'
  | 'fpmm__scaledLiquidityParameter'
  | 'fpmm__usdLiquidityParameter'
  | 'fpmm__lastActiveDay'
  | 'fpmm__lastActiveHour'
  | 'fpmm__runningDailyVolume'
  | 'fpmm__scaledRunningDailyVolume'
  | 'fpmm__usdRunningDailyVolume'
  | 'fpmm__lastActiveDayAndRunningDailyVolume'
  | 'fpmm__lastActiveDayAndScaledRunningDailyVolume'
  | 'fpmm__sort24HourVolume0'
  | 'fpmm__sort24HourVolume1'
  | 'fpmm__sort24HourVolume2'
  | 'fpmm__sort24HourVolume3'
  | 'fpmm__sort24HourVolume4'
  | 'fpmm__sort24HourVolume5'
  | 'fpmm__sort24HourVolume6'
  | 'fpmm__sort24HourVolume7'
  | 'fpmm__sort24HourVolume8'
  | 'fpmm__sort24HourVolume9'
  | 'fpmm__sort24HourVolume10'
  | 'fpmm__sort24HourVolume11'
  | 'fpmm__sort24HourVolume12'
  | 'fpmm__sort24HourVolume13'
  | 'fpmm__sort24HourVolume14'
  | 'fpmm__sort24HourVolume15'
  | 'fpmm__sort24HourVolume16'
  | 'fpmm__sort24HourVolume17'
  | 'fpmm__sort24HourVolume18'
  | 'fpmm__sort24HourVolume19'
  | 'fpmm__sort24HourVolume20'
  | 'fpmm__sort24HourVolume21'
  | 'fpmm__sort24HourVolume22'
  | 'fpmm__sort24HourVolume23'
  | 'fpmm__indexedOnQuestion'
  | 'fpmm__curatedByDxDao'
  | 'fpmm__scalarLow'
  | 'fpmm__scalarHigh'
  | 'fpmm__templateId'
  | 'fpmm__data'
  | 'fpmm__title'
  | 'fpmm__category'
  | 'fpmm__language'
  | 'fpmm__arbitrator'
  | 'fpmm__openingTimestamp'
  | 'fpmm__timeout'
  | 'fpmm__resolutionTimestamp'
  | 'fpmm__currentAnswer'
  | 'fpmm__currentAnswerBond'
  | 'fpmm__currentAnswerTimestamp'
  | 'fpmm__isPendingArbitration'
  | 'fpmm__arbitrationOccurred'
  | 'fpmm__answerFinalizedTimestamp'
  | 'fpmm__klerosTCRregistered'
  | 'fpmm__curatedByDxDaoOrKleros'
  | 'user'
  | 'user__id'
  | 'user__tradeNonce'
  | 'fpmmType'
  | 'transactionType'
  | 'collateralTokenAmount'
  | 'sharesOrPoolTokenAmount'
  | 'creationTimestamp'
  | 'transactionHash'
  | 'additionalSharesCost';

export type FpmmType =
  | 'Trade'
  | 'Liquidity';

export type GelatoUser = {
  id: Scalars['ID']['output'];
  address: Scalars['Bytes']['output'];
  signUpDate: Scalars['BigInt']['output'];
  executor?: Maybe<Scalars['Bytes']['output']>;
};

export type GelatoUser_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  signUpDate?: InputMaybe<Scalars['BigInt']['input']>;
  signUpDate_not?: InputMaybe<Scalars['BigInt']['input']>;
  signUpDate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  signUpDate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  signUpDate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  signUpDate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  signUpDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  signUpDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executor?: InputMaybe<Scalars['Bytes']['input']>;
  executor_not?: InputMaybe<Scalars['Bytes']['input']>;
  executor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  executor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  executor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  executor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  executor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  executor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  executor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  executor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GelatoUser_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GelatoUser_filter>>>;
};

export type GelatoUser_orderBy =
  | 'id'
  | 'address'
  | 'signUpDate'
  | 'executor';

export type KlerosStatus =
  /** The item is not registered on the TCR and there are no pending requests. */
  | 'Absent'
  /** The item is registered and there are no pending requests. */
  | 'Registered'
  /** The item is not registered on the TCR, but there is a pending registration request. */
  | 'RegistrationRequested'
  /** The item is registered on the TCR, but there is a pending removal request. These are sometimes also called removal requests. */
  | 'ClearingRequested';

export type KlerosSubmission = {
  id: Scalars['ID']['output'];
  status: KlerosStatus;
  listAddress: Scalars['String']['output'];
  market: FixedProductMarketMaker;
};

export type KlerosSubmission_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  status?: InputMaybe<KlerosStatus>;
  status_not?: InputMaybe<KlerosStatus>;
  status_in?: InputMaybe<Array<KlerosStatus>>;
  status_not_in?: InputMaybe<Array<KlerosStatus>>;
  listAddress?: InputMaybe<Scalars['String']['input']>;
  listAddress_not?: InputMaybe<Scalars['String']['input']>;
  listAddress_gt?: InputMaybe<Scalars['String']['input']>;
  listAddress_lt?: InputMaybe<Scalars['String']['input']>;
  listAddress_gte?: InputMaybe<Scalars['String']['input']>;
  listAddress_lte?: InputMaybe<Scalars['String']['input']>;
  listAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  listAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  listAddress_contains?: InputMaybe<Scalars['String']['input']>;
  listAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  listAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  listAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  listAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  listAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  listAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  listAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  listAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  listAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  listAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  listAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<FixedProductMarketMaker_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<KlerosSubmission_filter>>>;
  or?: InputMaybe<Array<InputMaybe<KlerosSubmission_filter>>>;
};

export type KlerosSubmission_orderBy =
  | 'id'
  | 'status'
  | 'listAddress'
  | 'market'
  | 'market__id'
  | 'market__creator'
  | 'market__creationTimestamp'
  | 'market__collateralToken'
  | 'market__fee'
  | 'market__collateralVolume'
  | 'market__scaledCollateralVolume'
  | 'market__usdVolume'
  | 'market__outcomeSlotCount'
  | 'market__liquidityMeasure'
  | 'market__scaledLiquidityMeasure'
  | 'market__usdLiquidityMeasure'
  | 'market__liquidityParameter'
  | 'market__scaledLiquidityParameter'
  | 'market__usdLiquidityParameter'
  | 'market__lastActiveDay'
  | 'market__lastActiveHour'
  | 'market__runningDailyVolume'
  | 'market__scaledRunningDailyVolume'
  | 'market__usdRunningDailyVolume'
  | 'market__lastActiveDayAndRunningDailyVolume'
  | 'market__lastActiveDayAndScaledRunningDailyVolume'
  | 'market__sort24HourVolume0'
  | 'market__sort24HourVolume1'
  | 'market__sort24HourVolume2'
  | 'market__sort24HourVolume3'
  | 'market__sort24HourVolume4'
  | 'market__sort24HourVolume5'
  | 'market__sort24HourVolume6'
  | 'market__sort24HourVolume7'
  | 'market__sort24HourVolume8'
  | 'market__sort24HourVolume9'
  | 'market__sort24HourVolume10'
  | 'market__sort24HourVolume11'
  | 'market__sort24HourVolume12'
  | 'market__sort24HourVolume13'
  | 'market__sort24HourVolume14'
  | 'market__sort24HourVolume15'
  | 'market__sort24HourVolume16'
  | 'market__sort24HourVolume17'
  | 'market__sort24HourVolume18'
  | 'market__sort24HourVolume19'
  | 'market__sort24HourVolume20'
  | 'market__sort24HourVolume21'
  | 'market__sort24HourVolume22'
  | 'market__sort24HourVolume23'
  | 'market__indexedOnQuestion'
  | 'market__curatedByDxDao'
  | 'market__scalarLow'
  | 'market__scalarHigh'
  | 'market__templateId'
  | 'market__data'
  | 'market__title'
  | 'market__category'
  | 'market__language'
  | 'market__arbitrator'
  | 'market__openingTimestamp'
  | 'market__timeout'
  | 'market__resolutionTimestamp'
  | 'market__currentAnswer'
  | 'market__currentAnswerBond'
  | 'market__currentAnswerTimestamp'
  | 'market__isPendingArbitration'
  | 'market__arbitrationOccurred'
  | 'market__answerFinalizedTimestamp'
  | 'market__klerosTCRregistered'
  | 'market__curatedByDxDaoOrKleros';

export type LiquidityType =
  | 'Add'
  | 'Remove';

export type Provider = {
  id: Scalars['ID']['output'];
  addr: Scalars['Bytes']['output'];
  module: Scalars['Bytes']['output'];
  taskCount: Scalars['BigInt']['output'];
};

export type Provider_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  addr?: InputMaybe<Scalars['Bytes']['input']>;
  addr_not?: InputMaybe<Scalars['Bytes']['input']>;
  addr_gt?: InputMaybe<Scalars['Bytes']['input']>;
  addr_lt?: InputMaybe<Scalars['Bytes']['input']>;
  addr_gte?: InputMaybe<Scalars['Bytes']['input']>;
  addr_lte?: InputMaybe<Scalars['Bytes']['input']>;
  addr_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addr_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  addr_contains?: InputMaybe<Scalars['Bytes']['input']>;
  addr_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  module?: InputMaybe<Scalars['Bytes']['input']>;
  module_not?: InputMaybe<Scalars['Bytes']['input']>;
  module_gt?: InputMaybe<Scalars['Bytes']['input']>;
  module_lt?: InputMaybe<Scalars['Bytes']['input']>;
  module_gte?: InputMaybe<Scalars['Bytes']['input']>;
  module_lte?: InputMaybe<Scalars['Bytes']['input']>;
  module_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  module_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  module_contains?: InputMaybe<Scalars['Bytes']['input']>;
  module_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  taskCount?: InputMaybe<Scalars['BigInt']['input']>;
  taskCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  taskCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  taskCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  taskCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  taskCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  taskCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  taskCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Provider_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Provider_filter>>>;
};

export type Provider_orderBy =
  | 'id'
  | 'addr'
  | 'module'
  | 'taskCount';

export type RegisteredToken = {
  id: Scalars['ID']['output'];
  address: Scalars['Bytes']['output'];
  decimals: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
};

export type RegisteredToken_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RegisteredToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RegisteredToken_filter>>>;
};

export type RegisteredToken_orderBy =
  | 'id'
  | 'address'
  | 'decimals'
  | 'name'
  | 'symbol';

export type Task = {
  id: Scalars['ID']['output'];
  conditions?: Maybe<Array<TaskCondition>>;
  actions?: Maybe<Array<Action>>;
  selfProviderGasLimit: Scalars['BigInt']['output'];
  selfProviderGasPriceCeil: Scalars['BigInt']['output'];
};


export type TaskconditionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskCondition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskCondition_filter>;
};


export type TaskactionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Action_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Action_filter>;
};

export type TaskCondition = {
  id: Scalars['ID']['output'];
  inst: Scalars['Bytes']['output'];
  data: Scalars['Bytes']['output'];
};

export type TaskCondition_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  inst?: InputMaybe<Scalars['Bytes']['input']>;
  inst_not?: InputMaybe<Scalars['Bytes']['input']>;
  inst_gt?: InputMaybe<Scalars['Bytes']['input']>;
  inst_lt?: InputMaybe<Scalars['Bytes']['input']>;
  inst_gte?: InputMaybe<Scalars['Bytes']['input']>;
  inst_lte?: InputMaybe<Scalars['Bytes']['input']>;
  inst_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  inst_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  inst_contains?: InputMaybe<Scalars['Bytes']['input']>;
  inst_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data?: InputMaybe<Scalars['Bytes']['input']>;
  data_not?: InputMaybe<Scalars['Bytes']['input']>;
  data_gt?: InputMaybe<Scalars['Bytes']['input']>;
  data_lt?: InputMaybe<Scalars['Bytes']['input']>;
  data_gte?: InputMaybe<Scalars['Bytes']['input']>;
  data_lte?: InputMaybe<Scalars['Bytes']['input']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  data_contains?: InputMaybe<Scalars['Bytes']['input']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TaskCondition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TaskCondition_filter>>>;
};

export type TaskCondition_orderBy =
  | 'id'
  | 'inst'
  | 'data';

export type TaskCycle = {
  id: Scalars['ID']['output'];
  taskReceiptWrappers: Array<TaskReceiptWrapper>;
};


export type TaskCycletaskReceiptWrappersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TaskReceiptWrapper_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TaskReceiptWrapper_filter>;
};

export type TaskCycle_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  taskReceiptWrappers?: InputMaybe<Array<Scalars['String']['input']>>;
  taskReceiptWrappers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  taskReceiptWrappers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  taskReceiptWrappers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  taskReceiptWrappers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  taskReceiptWrappers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  taskReceiptWrappers_?: InputMaybe<TaskReceiptWrapper_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TaskCycle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TaskCycle_filter>>>;
};

export type TaskCycle_orderBy =
  | 'id'
  | 'taskReceiptWrappers';

export type TaskReceipt = {
  id: Scalars['ID']['output'];
  userProxy: Scalars['Bytes']['output'];
  provider: Provider;
  index: Scalars['BigInt']['output'];
  tasks?: Maybe<Array<Task>>;
  expiryDate: Scalars['BigInt']['output'];
  cycleId: Scalars['BigInt']['output'];
  submissionsLeft: Scalars['BigInt']['output'];
};


export type TaskReceipttasksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Task_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Task_filter>;
};

export type TaskReceiptStatus =
  | 'awaitingExec'
  | 'execSuccess'
  | 'execReverted'
  | 'canceled'
  | 'expired';

export type TaskReceiptWrapper = {
  id: Scalars['ID']['output'];
  user: GelatoUser;
  taskReceipt: TaskReceipt;
  submissionHash: Scalars['Bytes']['output'];
  status: TaskReceiptStatus;
  submissionDate: Scalars['BigInt']['output'];
  selectedExecutor: Scalars['Bytes']['output'];
  executionDate?: Maybe<Scalars['BigInt']['output']>;
  executionHash?: Maybe<Scalars['Bytes']['output']>;
  selfProvided: Scalars['Boolean']['output'];
};

export type TaskReceiptWrapper_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<GelatoUser_filter>;
  taskReceipt?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_not?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_gt?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_lt?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_gte?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_lte?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_in?: InputMaybe<Array<Scalars['String']['input']>>;
  taskReceipt_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  taskReceipt_contains?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_not_contains?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_starts_with?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_ends_with?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  taskReceipt_?: InputMaybe<TaskReceipt_filter>;
  submissionHash?: InputMaybe<Scalars['Bytes']['input']>;
  submissionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  submissionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  submissionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  submissionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  submissionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  submissionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  submissionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  submissionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  submissionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  status?: InputMaybe<TaskReceiptStatus>;
  status_not?: InputMaybe<TaskReceiptStatus>;
  status_in?: InputMaybe<Array<TaskReceiptStatus>>;
  status_not_in?: InputMaybe<Array<TaskReceiptStatus>>;
  submissionDate?: InputMaybe<Scalars['BigInt']['input']>;
  submissionDate_not?: InputMaybe<Scalars['BigInt']['input']>;
  submissionDate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  submissionDate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  submissionDate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  submissionDate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  submissionDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  submissionDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  selectedExecutor?: InputMaybe<Scalars['Bytes']['input']>;
  selectedExecutor_not?: InputMaybe<Scalars['Bytes']['input']>;
  selectedExecutor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  selectedExecutor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  selectedExecutor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  selectedExecutor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  selectedExecutor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  selectedExecutor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  selectedExecutor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  selectedExecutor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  executionDate?: InputMaybe<Scalars['BigInt']['input']>;
  executionDate_not?: InputMaybe<Scalars['BigInt']['input']>;
  executionDate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  executionDate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  executionDate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  executionDate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  executionDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executionDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  executionHash?: InputMaybe<Scalars['Bytes']['input']>;
  executionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  executionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  executionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  executionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  executionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  executionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  executionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  executionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  executionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  selfProvided?: InputMaybe<Scalars['Boolean']['input']>;
  selfProvided_not?: InputMaybe<Scalars['Boolean']['input']>;
  selfProvided_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  selfProvided_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TaskReceiptWrapper_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TaskReceiptWrapper_filter>>>;
};

export type TaskReceiptWrapper_orderBy =
  | 'id'
  | 'user'
  | 'user__id'
  | 'user__address'
  | 'user__signUpDate'
  | 'user__executor'
  | 'taskReceipt'
  | 'taskReceipt__id'
  | 'taskReceipt__userProxy'
  | 'taskReceipt__index'
  | 'taskReceipt__expiryDate'
  | 'taskReceipt__cycleId'
  | 'taskReceipt__submissionsLeft'
  | 'submissionHash'
  | 'status'
  | 'submissionDate'
  | 'selectedExecutor'
  | 'executionDate'
  | 'executionHash'
  | 'selfProvided';

export type TaskReceipt_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  userProxy?: InputMaybe<Scalars['Bytes']['input']>;
  userProxy_not?: InputMaybe<Scalars['Bytes']['input']>;
  userProxy_gt?: InputMaybe<Scalars['Bytes']['input']>;
  userProxy_lt?: InputMaybe<Scalars['Bytes']['input']>;
  userProxy_gte?: InputMaybe<Scalars['Bytes']['input']>;
  userProxy_lte?: InputMaybe<Scalars['Bytes']['input']>;
  userProxy_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userProxy_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userProxy_contains?: InputMaybe<Scalars['Bytes']['input']>;
  userProxy_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_not?: InputMaybe<Scalars['String']['input']>;
  provider_gt?: InputMaybe<Scalars['String']['input']>;
  provider_lt?: InputMaybe<Scalars['String']['input']>;
  provider_gte?: InputMaybe<Scalars['String']['input']>;
  provider_lte?: InputMaybe<Scalars['String']['input']>;
  provider_in?: InputMaybe<Array<Scalars['String']['input']>>;
  provider_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  provider_contains?: InputMaybe<Scalars['String']['input']>;
  provider_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_not_contains?: InputMaybe<Scalars['String']['input']>;
  provider_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_starts_with?: InputMaybe<Scalars['String']['input']>;
  provider_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  provider_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_ends_with?: InputMaybe<Scalars['String']['input']>;
  provider_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  provider_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_?: InputMaybe<Provider_filter>;
  index?: InputMaybe<Scalars['BigInt']['input']>;
  index_not?: InputMaybe<Scalars['BigInt']['input']>;
  index_gt?: InputMaybe<Scalars['BigInt']['input']>;
  index_lt?: InputMaybe<Scalars['BigInt']['input']>;
  index_gte?: InputMaybe<Scalars['BigInt']['input']>;
  index_lte?: InputMaybe<Scalars['BigInt']['input']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tasks?: InputMaybe<Array<Scalars['String']['input']>>;
  tasks_not?: InputMaybe<Array<Scalars['String']['input']>>;
  tasks_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tasks_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tasks_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tasks_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tasks_?: InputMaybe<Task_filter>;
  expiryDate?: InputMaybe<Scalars['BigInt']['input']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']['input']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cycleId?: InputMaybe<Scalars['BigInt']['input']>;
  cycleId_not?: InputMaybe<Scalars['BigInt']['input']>;
  cycleId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cycleId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cycleId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cycleId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cycleId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cycleId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  submissionsLeft?: InputMaybe<Scalars['BigInt']['input']>;
  submissionsLeft_not?: InputMaybe<Scalars['BigInt']['input']>;
  submissionsLeft_gt?: InputMaybe<Scalars['BigInt']['input']>;
  submissionsLeft_lt?: InputMaybe<Scalars['BigInt']['input']>;
  submissionsLeft_gte?: InputMaybe<Scalars['BigInt']['input']>;
  submissionsLeft_lte?: InputMaybe<Scalars['BigInt']['input']>;
  submissionsLeft_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  submissionsLeft_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TaskReceipt_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TaskReceipt_filter>>>;
};

export type TaskReceipt_orderBy =
  | 'id'
  | 'userProxy'
  | 'provider'
  | 'provider__id'
  | 'provider__addr'
  | 'provider__module'
  | 'provider__taskCount'
  | 'index'
  | 'tasks'
  | 'expiryDate'
  | 'cycleId'
  | 'submissionsLeft';

export type Task_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  conditions?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_not?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  conditions_?: InputMaybe<TaskCondition_filter>;
  actions?: InputMaybe<Array<Scalars['String']['input']>>;
  actions_not?: InputMaybe<Array<Scalars['String']['input']>>;
  actions_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  actions_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  actions_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  actions_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  actions_?: InputMaybe<Action_filter>;
  selfProviderGasLimit?: InputMaybe<Scalars['BigInt']['input']>;
  selfProviderGasLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
  selfProviderGasLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  selfProviderGasLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  selfProviderGasLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  selfProviderGasLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  selfProviderGasLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  selfProviderGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  selfProviderGasPriceCeil?: InputMaybe<Scalars['BigInt']['input']>;
  selfProviderGasPriceCeil_not?: InputMaybe<Scalars['BigInt']['input']>;
  selfProviderGasPriceCeil_gt?: InputMaybe<Scalars['BigInt']['input']>;
  selfProviderGasPriceCeil_lt?: InputMaybe<Scalars['BigInt']['input']>;
  selfProviderGasPriceCeil_gte?: InputMaybe<Scalars['BigInt']['input']>;
  selfProviderGasPriceCeil_lte?: InputMaybe<Scalars['BigInt']['input']>;
  selfProviderGasPriceCeil_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  selfProviderGasPriceCeil_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Task_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Task_filter>>>;
};

export type Task_orderBy =
  | 'id'
  | 'conditions'
  | 'actions'
  | 'selfProviderGasLimit'
  | 'selfProviderGasPriceCeil';

export type Token = {
  id: Scalars['ID']['output'];
  scale: Scalars['BigInt']['output'];
  ethPerToken?: Maybe<Scalars['BigDecimal']['output']>;
};

export type TokenList = {
  id: Scalars['ID']['output'];
  listId: Scalars['BigInt']['output'];
  listName: Scalars['String']['output'];
  tokens?: Maybe<Array<RegisteredToken>>;
  activeTokenCount: Scalars['BigInt']['output'];
};


export type TokenListtokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RegisteredToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegisteredToken_filter>;
};

export type TokenList_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  listId?: InputMaybe<Scalars['BigInt']['input']>;
  listId_not?: InputMaybe<Scalars['BigInt']['input']>;
  listId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listName?: InputMaybe<Scalars['String']['input']>;
  listName_not?: InputMaybe<Scalars['String']['input']>;
  listName_gt?: InputMaybe<Scalars['String']['input']>;
  listName_lt?: InputMaybe<Scalars['String']['input']>;
  listName_gte?: InputMaybe<Scalars['String']['input']>;
  listName_lte?: InputMaybe<Scalars['String']['input']>;
  listName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  listName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  listName_contains?: InputMaybe<Scalars['String']['input']>;
  listName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  listName_not_contains?: InputMaybe<Scalars['String']['input']>;
  listName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  listName_starts_with?: InputMaybe<Scalars['String']['input']>;
  listName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  listName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  listName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  listName_ends_with?: InputMaybe<Scalars['String']['input']>;
  listName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  listName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  listName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokens?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens_not?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tokens_?: InputMaybe<RegisteredToken_filter>;
  activeTokenCount?: InputMaybe<Scalars['BigInt']['input']>;
  activeTokenCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  activeTokenCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  activeTokenCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  activeTokenCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  activeTokenCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  activeTokenCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activeTokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenList_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenList_filter>>>;
};

export type TokenList_orderBy =
  | 'id'
  | 'listId'
  | 'listName'
  | 'tokens'
  | 'activeTokenCount';

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  scale?: InputMaybe<Scalars['BigInt']['input']>;
  scale_not?: InputMaybe<Scalars['BigInt']['input']>;
  scale_gt?: InputMaybe<Scalars['BigInt']['input']>;
  scale_lt?: InputMaybe<Scalars['BigInt']['input']>;
  scale_gte?: InputMaybe<Scalars['BigInt']['input']>;
  scale_lte?: InputMaybe<Scalars['BigInt']['input']>;
  scale_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  scale_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ethPerToken?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPerToken_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPerToken_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPerToken_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPerToken_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPerToken_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPerToken_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  ethPerToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'scale'
  | 'ethPerToken';

export type TradeType =
  | 'Buy'
  | 'Sell';

export type TransactionType =
  | 'Buy'
  | 'Sell'
  | 'Add'
  | 'Remove';

export type UniswapPair = {
  id: Scalars['ID']['output'];
  token0: Token;
  token1: Token;
  reserve0: Scalars['BigInt']['output'];
  reserve1: Scalars['BigInt']['output'];
};

export type UniswapPair_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  token0?: InputMaybe<Scalars['String']['input']>;
  token0_not?: InputMaybe<Scalars['String']['input']>;
  token0_gt?: InputMaybe<Scalars['String']['input']>;
  token0_lt?: InputMaybe<Scalars['String']['input']>;
  token0_gte?: InputMaybe<Scalars['String']['input']>;
  token0_lte?: InputMaybe<Scalars['String']['input']>;
  token0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_contains?: InputMaybe<Scalars['String']['input']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_?: InputMaybe<Token_filter>;
  token1?: InputMaybe<Scalars['String']['input']>;
  token1_not?: InputMaybe<Scalars['String']['input']>;
  token1_gt?: InputMaybe<Scalars['String']['input']>;
  token1_lt?: InputMaybe<Scalars['String']['input']>;
  token1_gte?: InputMaybe<Scalars['String']['input']>;
  token1_lte?: InputMaybe<Scalars['String']['input']>;
  token1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_contains?: InputMaybe<Scalars['String']['input']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_?: InputMaybe<Token_filter>;
  reserve0?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_not?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserve1?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_not?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_gt?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_lt?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_gte?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_lte?: InputMaybe<Scalars['BigInt']['input']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UniswapPair_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UniswapPair_filter>>>;
};

export type UniswapPair_orderBy =
  | 'id'
  | 'token0'
  | 'token0__id'
  | 'token0__scale'
  | 'token0__ethPerToken'
  | 'token1'
  | 'token1__id'
  | 'token1__scale'
  | 'token1__ethPerToken'
  | 'reserve0'
  | 'reserve1';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  Aggregation_interval: Aggregation_interval;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  Category: ResolverTypeWrapper<Category>;
  Category_filter: Category_filter;
  Category_orderBy: Category_orderBy;
  CollateralToken: ResolverTypeWrapper<CollateralToken>;
  CollateralToken_filter: CollateralToken_filter;
  CollateralToken_orderBy: CollateralToken_orderBy;
  Collection: ResolverTypeWrapper<Collection>;
  Collection_filter: Collection_filter;
  Collection_orderBy: Collection_orderBy;
  Condition: ResolverTypeWrapper<Condition>;
  Condition_filter: Condition_filter;
  Condition_orderBy: Condition_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Global: ResolverTypeWrapper<Global>;
  Global_filter: Global_filter;
  Global_orderBy: Global_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  OrderDirection: OrderDirection;
  Position: ResolverTypeWrapper<Position>;
  Position_filter: Position_filter;
  Position_orderBy: Position_orderBy;
  Question: ResolverTypeWrapper<Question>;
  Question_filter: Question_filter;
  Question_orderBy: Question_orderBy;
  ScalarQuestionLink: ResolverTypeWrapper<ScalarQuestionLink>;
  ScalarQuestionLink_filter: ScalarQuestionLink_filter;
  ScalarQuestionLink_orderBy: ScalarQuestionLink_orderBy;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  User: ResolverTypeWrapper<User>;
  UserPosition: ResolverTypeWrapper<UserPosition>;
  UserPosition_filter: UserPosition_filter;
  UserPosition_orderBy: UserPosition_orderBy;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  WrappedToken: ResolverTypeWrapper<WrappedToken>;
  WrappedToken_filter: WrappedToken_filter;
  WrappedToken_orderBy: WrappedToken_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  Account: ResolverTypeWrapper<Account>;
  Account_filter: Account_filter;
  Account_orderBy: Account_orderBy;
  Action: ResolverTypeWrapper<Action>;
  Action_filter: Action_filter;
  Action_orderBy: Action_orderBy;
  Answer: ResolverTypeWrapper<Answer>;
  Answer_filter: Answer_filter;
  Answer_orderBy: Answer_orderBy;
  FixedProductMarketMaker: ResolverTypeWrapper<FixedProductMarketMaker>;
  FixedProductMarketMaker_filter: FixedProductMarketMaker_filter;
  FixedProductMarketMaker_orderBy: FixedProductMarketMaker_orderBy;
  FpmmLiquidity: ResolverTypeWrapper<FpmmLiquidity>;
  FpmmLiquidity_filter: FpmmLiquidity_filter;
  FpmmLiquidity_orderBy: FpmmLiquidity_orderBy;
  FpmmParticipation: ResolverTypeWrapper<FpmmParticipation>;
  FpmmParticipation_filter: FpmmParticipation_filter;
  FpmmParticipation_orderBy: FpmmParticipation_orderBy;
  FpmmPoolMembership: ResolverTypeWrapper<FpmmPoolMembership>;
  FpmmPoolMembership_filter: FpmmPoolMembership_filter;
  FpmmPoolMembership_orderBy: FpmmPoolMembership_orderBy;
  FpmmTrade: ResolverTypeWrapper<FpmmTrade>;
  FpmmTrade_filter: FpmmTrade_filter;
  FpmmTrade_orderBy: FpmmTrade_orderBy;
  FpmmTransaction: ResolverTypeWrapper<FpmmTransaction>;
  FpmmTransaction_filter: FpmmTransaction_filter;
  FpmmTransaction_orderBy: FpmmTransaction_orderBy;
  FpmmType: FpmmType;
  GelatoUser: ResolverTypeWrapper<GelatoUser>;
  GelatoUser_filter: GelatoUser_filter;
  GelatoUser_orderBy: GelatoUser_orderBy;
  KlerosStatus: KlerosStatus;
  KlerosSubmission: ResolverTypeWrapper<KlerosSubmission>;
  KlerosSubmission_filter: KlerosSubmission_filter;
  KlerosSubmission_orderBy: KlerosSubmission_orderBy;
  LiquidityType: LiquidityType;
  Provider: ResolverTypeWrapper<Provider>;
  Provider_filter: Provider_filter;
  Provider_orderBy: Provider_orderBy;
  RegisteredToken: ResolverTypeWrapper<RegisteredToken>;
  RegisteredToken_filter: RegisteredToken_filter;
  RegisteredToken_orderBy: RegisteredToken_orderBy;
  Task: ResolverTypeWrapper<Task>;
  TaskCondition: ResolverTypeWrapper<TaskCondition>;
  TaskCondition_filter: TaskCondition_filter;
  TaskCondition_orderBy: TaskCondition_orderBy;
  TaskCycle: ResolverTypeWrapper<TaskCycle>;
  TaskCycle_filter: TaskCycle_filter;
  TaskCycle_orderBy: TaskCycle_orderBy;
  TaskReceipt: ResolverTypeWrapper<TaskReceipt>;
  TaskReceiptStatus: TaskReceiptStatus;
  TaskReceiptWrapper: ResolverTypeWrapper<TaskReceiptWrapper>;
  TaskReceiptWrapper_filter: TaskReceiptWrapper_filter;
  TaskReceiptWrapper_orderBy: TaskReceiptWrapper_orderBy;
  TaskReceipt_filter: TaskReceipt_filter;
  TaskReceipt_orderBy: TaskReceipt_orderBy;
  Task_filter: Task_filter;
  Task_orderBy: Task_orderBy;
  Token: ResolverTypeWrapper<Token>;
  TokenList: ResolverTypeWrapper<TokenList>;
  TokenList_filter: TokenList_filter;
  TokenList_orderBy: TokenList_orderBy;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  TradeType: TradeType;
  TransactionType: TransactionType;
  UniswapPair: ResolverTypeWrapper<UniswapPair>;
  UniswapPair_filter: UniswapPair_filter;
  UniswapPair_orderBy: UniswapPair_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  Category: Category;
  Category_filter: Category_filter;
  CollateralToken: CollateralToken;
  CollateralToken_filter: CollateralToken_filter;
  Collection: Collection;
  Collection_filter: Collection_filter;
  Condition: Condition;
  Condition_filter: Condition_filter;
  Float: Scalars['Float']['output'];
  Global: Global;
  Global_filter: Global_filter;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  Position: Position;
  Position_filter: Position_filter;
  Question: Question;
  Question_filter: Question_filter;
  ScalarQuestionLink: ScalarQuestionLink;
  ScalarQuestionLink_filter: ScalarQuestionLink_filter;
  String: Scalars['String']['output'];
  Timestamp: Scalars['Timestamp']['output'];
  User: User;
  UserPosition: UserPosition;
  UserPosition_filter: UserPosition_filter;
  User_filter: User_filter;
  WrappedToken: WrappedToken;
  WrappedToken_filter: WrappedToken_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
  Account: Account;
  Account_filter: Account_filter;
  Action: Action;
  Action_filter: Action_filter;
  Answer: Answer;
  Answer_filter: Answer_filter;
  FixedProductMarketMaker: FixedProductMarketMaker;
  FixedProductMarketMaker_filter: FixedProductMarketMaker_filter;
  FpmmLiquidity: FpmmLiquidity;
  FpmmLiquidity_filter: FpmmLiquidity_filter;
  FpmmParticipation: FpmmParticipation;
  FpmmParticipation_filter: FpmmParticipation_filter;
  FpmmPoolMembership: FpmmPoolMembership;
  FpmmPoolMembership_filter: FpmmPoolMembership_filter;
  FpmmTrade: FpmmTrade;
  FpmmTrade_filter: FpmmTrade_filter;
  FpmmTransaction: FpmmTransaction;
  FpmmTransaction_filter: FpmmTransaction_filter;
  GelatoUser: GelatoUser;
  GelatoUser_filter: GelatoUser_filter;
  KlerosSubmission: KlerosSubmission;
  KlerosSubmission_filter: KlerosSubmission_filter;
  Provider: Provider;
  Provider_filter: Provider_filter;
  RegisteredToken: RegisteredToken;
  RegisteredToken_filter: RegisteredToken_filter;
  Task: Task;
  TaskCondition: TaskCondition;
  TaskCondition_filter: TaskCondition_filter;
  TaskCycle: TaskCycle;
  TaskCycle_filter: TaskCycle_filter;
  TaskReceipt: TaskReceipt;
  TaskReceiptWrapper: TaskReceiptWrapper;
  TaskReceiptWrapper_filter: TaskReceiptWrapper_filter;
  TaskReceipt_filter: TaskReceipt_filter;
  Task_filter: Task_filter;
  Token: Token;
  TokenList: TokenList;
  TokenList_filter: TokenList_filter;
  Token_filter: Token_filter;
  UniswapPair: UniswapPair;
  UniswapPair_filter: UniswapPair_filter;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  condition?: Resolver<Maybe<ResolversTypes['Condition']>, ParentType, ContextType, RequireFields<QueryconditionArgs, 'id' | 'subgraphError'>>;
  conditions?: Resolver<Array<ResolversTypes['Condition']>, ParentType, ContextType, RequireFields<QueryconditionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<QuerycollectionArgs, 'id' | 'subgraphError'>>;
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<QuerycollectionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  position?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<QuerypositionArgs, 'id' | 'subgraphError'>>;
  positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<QuerypositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userPosition?: Resolver<Maybe<ResolversTypes['UserPosition']>, ParentType, ContextType, RequireFields<QueryuserPositionArgs, 'id' | 'subgraphError'>>;
  userPositions?: Resolver<Array<ResolversTypes['UserPosition']>, ParentType, ContextType, RequireFields<QueryuserPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  collateralToken?: Resolver<Maybe<ResolversTypes['CollateralToken']>, ParentType, ContextType, RequireFields<QuerycollateralTokenArgs, 'id' | 'subgraphError'>>;
  collateralTokens?: Resolver<Array<ResolversTypes['CollateralToken']>, ParentType, ContextType, RequireFields<QuerycollateralTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  wrappedToken?: Resolver<Maybe<ResolversTypes['WrappedToken']>, ParentType, ContextType, RequireFields<QuerywrappedTokenArgs, 'id' | 'subgraphError'>>;
  wrappedTokens?: Resolver<Array<ResolversTypes['WrappedToken']>, ParentType, ContextType, RequireFields<QuerywrappedTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  question?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<QueryquestionArgs, 'id' | 'subgraphError'>>;
  questions?: Resolver<Array<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<QueryquestionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QuerycategoryArgs, 'id' | 'subgraphError'>>;
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QuerycategoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  scalarQuestionLink?: Resolver<Maybe<ResolversTypes['ScalarQuestionLink']>, ParentType, ContextType, RequireFields<QueryscalarQuestionLinkArgs, 'id' | 'subgraphError'>>;
  scalarQuestionLinks?: Resolver<Array<ResolversTypes['ScalarQuestionLink']>, ParentType, ContextType, RequireFields<QueryscalarQuestionLinksArgs, 'skip' | 'first' | 'subgraphError'>>;
  global?: Resolver<Maybe<ResolversTypes['Global']>, ParentType, ContextType, RequireFields<QueryglobalArgs, 'id' | 'subgraphError'>>;
  globals?: Resolver<Array<ResolversTypes['Global']>, ParentType, ContextType, RequireFields<QueryglobalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  answer?: Resolver<Maybe<ResolversTypes['Answer']>, ParentType, ContextType, RequireFields<QueryanswerArgs, 'id' | 'subgraphError'>>;
  answers?: Resolver<Array<ResolversTypes['Answer']>, ParentType, ContextType, RequireFields<QueryanswersArgs, 'skip' | 'first' | 'subgraphError'>>;
  fixedProductMarketMaker?: Resolver<Maybe<ResolversTypes['FixedProductMarketMaker']>, ParentType, ContextType, RequireFields<QueryfixedProductMarketMakerArgs, 'id' | 'subgraphError'>>;
  fixedProductMarketMakers?: Resolver<Array<ResolversTypes['FixedProductMarketMaker']>, ParentType, ContextType, RequireFields<QueryfixedProductMarketMakersArgs, 'skip' | 'first' | 'subgraphError'>>;
  fpmmPoolMembership?: Resolver<Maybe<ResolversTypes['FpmmPoolMembership']>, ParentType, ContextType, RequireFields<QueryfpmmPoolMembershipArgs, 'id' | 'subgraphError'>>;
  fpmmPoolMemberships?: Resolver<Array<ResolversTypes['FpmmPoolMembership']>, ParentType, ContextType, RequireFields<QueryfpmmPoolMembershipsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fpmmParticipation?: Resolver<Maybe<ResolversTypes['FpmmParticipation']>, ParentType, ContextType, RequireFields<QueryfpmmParticipationArgs, 'id' | 'subgraphError'>>;
  fpmmParticipations?: Resolver<Array<ResolversTypes['FpmmParticipation']>, ParentType, ContextType, RequireFields<QueryfpmmParticipationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fpmmTrade?: Resolver<Maybe<ResolversTypes['FpmmTrade']>, ParentType, ContextType, RequireFields<QueryfpmmTradeArgs, 'id' | 'subgraphError'>>;
  fpmmTrades?: Resolver<Array<ResolversTypes['FpmmTrade']>, ParentType, ContextType, RequireFields<QueryfpmmTradesArgs, 'skip' | 'first' | 'subgraphError'>>;
  fpmmLiquidity?: Resolver<Maybe<ResolversTypes['FpmmLiquidity']>, ParentType, ContextType, RequireFields<QueryfpmmLiquidityArgs, 'id' | 'subgraphError'>>;
  fpmmLiquidities?: Resolver<Array<ResolversTypes['FpmmLiquidity']>, ParentType, ContextType, RequireFields<QueryfpmmLiquiditiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  fpmmTransaction?: Resolver<Maybe<ResolversTypes['FpmmTransaction']>, ParentType, ContextType, RequireFields<QueryfpmmTransactionArgs, 'id' | 'subgraphError'>>;
  fpmmTransactions?: Resolver<Array<ResolversTypes['FpmmTransaction']>, ParentType, ContextType, RequireFields<QueryfpmmTransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gelatoUser?: Resolver<Maybe<ResolversTypes['GelatoUser']>, ParentType, ContextType, RequireFields<QuerygelatoUserArgs, 'id' | 'subgraphError'>>;
  gelatoUsers?: Resolver<Array<ResolversTypes['GelatoUser']>, ParentType, ContextType, RequireFields<QuerygelatoUsersArgs, 'skip' | 'first' | 'subgraphError'>>;
  task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<QuerytaskArgs, 'id' | 'subgraphError'>>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<QuerytasksArgs, 'skip' | 'first' | 'subgraphError'>>;
  provider?: Resolver<Maybe<ResolversTypes['Provider']>, ParentType, ContextType, RequireFields<QueryproviderArgs, 'id' | 'subgraphError'>>;
  providers?: Resolver<Array<ResolversTypes['Provider']>, ParentType, ContextType, RequireFields<QueryprovidersArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskReceiptWrapper?: Resolver<Maybe<ResolversTypes['TaskReceiptWrapper']>, ParentType, ContextType, RequireFields<QuerytaskReceiptWrapperArgs, 'id' | 'subgraphError'>>;
  taskReceiptWrappers?: Resolver<Array<ResolversTypes['TaskReceiptWrapper']>, ParentType, ContextType, RequireFields<QuerytaskReceiptWrappersArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskCycle?: Resolver<Maybe<ResolversTypes['TaskCycle']>, ParentType, ContextType, RequireFields<QuerytaskCycleArgs, 'id' | 'subgraphError'>>;
  taskCycles?: Resolver<Array<ResolversTypes['TaskCycle']>, ParentType, ContextType, RequireFields<QuerytaskCyclesArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskReceipt?: Resolver<Maybe<ResolversTypes['TaskReceipt']>, ParentType, ContextType, RequireFields<QuerytaskReceiptArgs, 'id' | 'subgraphError'>>;
  taskReceipts?: Resolver<Array<ResolversTypes['TaskReceipt']>, ParentType, ContextType, RequireFields<QuerytaskReceiptsArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskCondition?: Resolver<Maybe<ResolversTypes['TaskCondition']>, ParentType, ContextType, RequireFields<QuerytaskConditionArgs, 'id' | 'subgraphError'>>;
  taskConditions?: Resolver<Array<ResolversTypes['TaskCondition']>, ParentType, ContextType, RequireFields<QuerytaskConditionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  action?: Resolver<Maybe<ResolversTypes['Action']>, ParentType, ContextType, RequireFields<QueryactionArgs, 'id' | 'subgraphError'>>;
  actions?: Resolver<Array<ResolversTypes['Action']>, ParentType, ContextType, RequireFields<QueryactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  registeredToken?: Resolver<Maybe<ResolversTypes['RegisteredToken']>, ParentType, ContextType, RequireFields<QueryregisteredTokenArgs, 'id' | 'subgraphError'>>;
  registeredTokens?: Resolver<Array<ResolversTypes['RegisteredToken']>, ParentType, ContextType, RequireFields<QueryregisteredTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenList?: Resolver<Maybe<ResolversTypes['TokenList']>, ParentType, ContextType, RequireFields<QuerytokenListArgs, 'id' | 'subgraphError'>>;
  tokenLists?: Resolver<Array<ResolversTypes['TokenList']>, ParentType, ContextType, RequireFields<QuerytokenListsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uniswapPair?: Resolver<Maybe<ResolversTypes['UniswapPair']>, ParentType, ContextType, RequireFields<QueryuniswapPairArgs, 'id' | 'subgraphError'>>;
  uniswapPairs?: Resolver<Array<ResolversTypes['UniswapPair']>, ParentType, ContextType, RequireFields<QueryuniswapPairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  klerosSubmission?: Resolver<Maybe<ResolversTypes['KlerosSubmission']>, ParentType, ContextType, RequireFields<QueryklerosSubmissionArgs, 'id' | 'subgraphError'>>;
  klerosSubmissions?: Resolver<Array<ResolversTypes['KlerosSubmission']>, ParentType, ContextType, RequireFields<QueryklerosSubmissionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  marketSearch?: Resolver<Array<ResolversTypes['FixedProductMarketMaker']>, ParentType, ContextType, RequireFields<QuerymarketSearchArgs, 'text' | 'first' | 'skip' | 'subgraphError'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  condition?: SubscriptionResolver<Maybe<ResolversTypes['Condition']>, "condition", ParentType, ContextType, RequireFields<SubscriptionconditionArgs, 'id' | 'subgraphError'>>;
  conditions?: SubscriptionResolver<Array<ResolversTypes['Condition']>, "conditions", ParentType, ContextType, RequireFields<SubscriptionconditionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  collection?: SubscriptionResolver<Maybe<ResolversTypes['Collection']>, "collection", ParentType, ContextType, RequireFields<SubscriptioncollectionArgs, 'id' | 'subgraphError'>>;
  collections?: SubscriptionResolver<Array<ResolversTypes['Collection']>, "collections", ParentType, ContextType, RequireFields<SubscriptioncollectionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  position?: SubscriptionResolver<Maybe<ResolversTypes['Position']>, "position", ParentType, ContextType, RequireFields<SubscriptionpositionArgs, 'id' | 'subgraphError'>>;
  positions?: SubscriptionResolver<Array<ResolversTypes['Position']>, "positions", ParentType, ContextType, RequireFields<SubscriptionpositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userPosition?: SubscriptionResolver<Maybe<ResolversTypes['UserPosition']>, "userPosition", ParentType, ContextType, RequireFields<SubscriptionuserPositionArgs, 'id' | 'subgraphError'>>;
  userPositions?: SubscriptionResolver<Array<ResolversTypes['UserPosition']>, "userPositions", ParentType, ContextType, RequireFields<SubscriptionuserPositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  collateralToken?: SubscriptionResolver<Maybe<ResolversTypes['CollateralToken']>, "collateralToken", ParentType, ContextType, RequireFields<SubscriptioncollateralTokenArgs, 'id' | 'subgraphError'>>;
  collateralTokens?: SubscriptionResolver<Array<ResolversTypes['CollateralToken']>, "collateralTokens", ParentType, ContextType, RequireFields<SubscriptioncollateralTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  wrappedToken?: SubscriptionResolver<Maybe<ResolversTypes['WrappedToken']>, "wrappedToken", ParentType, ContextType, RequireFields<SubscriptionwrappedTokenArgs, 'id' | 'subgraphError'>>;
  wrappedTokens?: SubscriptionResolver<Array<ResolversTypes['WrappedToken']>, "wrappedTokens", ParentType, ContextType, RequireFields<SubscriptionwrappedTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  question?: SubscriptionResolver<Maybe<ResolversTypes['Question']>, "question", ParentType, ContextType, RequireFields<SubscriptionquestionArgs, 'id' | 'subgraphError'>>;
  questions?: SubscriptionResolver<Array<ResolversTypes['Question']>, "questions", ParentType, ContextType, RequireFields<SubscriptionquestionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  category?: SubscriptionResolver<Maybe<ResolversTypes['Category']>, "category", ParentType, ContextType, RequireFields<SubscriptioncategoryArgs, 'id' | 'subgraphError'>>;
  categories?: SubscriptionResolver<Array<ResolversTypes['Category']>, "categories", ParentType, ContextType, RequireFields<SubscriptioncategoriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  scalarQuestionLink?: SubscriptionResolver<Maybe<ResolversTypes['ScalarQuestionLink']>, "scalarQuestionLink", ParentType, ContextType, RequireFields<SubscriptionscalarQuestionLinkArgs, 'id' | 'subgraphError'>>;
  scalarQuestionLinks?: SubscriptionResolver<Array<ResolversTypes['ScalarQuestionLink']>, "scalarQuestionLinks", ParentType, ContextType, RequireFields<SubscriptionscalarQuestionLinksArgs, 'skip' | 'first' | 'subgraphError'>>;
  global?: SubscriptionResolver<Maybe<ResolversTypes['Global']>, "global", ParentType, ContextType, RequireFields<SubscriptionglobalArgs, 'id' | 'subgraphError'>>;
  globals?: SubscriptionResolver<Array<ResolversTypes['Global']>, "globals", ParentType, ContextType, RequireFields<SubscriptionglobalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
  answer?: SubscriptionResolver<Maybe<ResolversTypes['Answer']>, "answer", ParentType, ContextType, RequireFields<SubscriptionanswerArgs, 'id' | 'subgraphError'>>;
  answers?: SubscriptionResolver<Array<ResolversTypes['Answer']>, "answers", ParentType, ContextType, RequireFields<SubscriptionanswersArgs, 'skip' | 'first' | 'subgraphError'>>;
  fixedProductMarketMaker?: SubscriptionResolver<Maybe<ResolversTypes['FixedProductMarketMaker']>, "fixedProductMarketMaker", ParentType, ContextType, RequireFields<SubscriptionfixedProductMarketMakerArgs, 'id' | 'subgraphError'>>;
  fixedProductMarketMakers?: SubscriptionResolver<Array<ResolversTypes['FixedProductMarketMaker']>, "fixedProductMarketMakers", ParentType, ContextType, RequireFields<SubscriptionfixedProductMarketMakersArgs, 'skip' | 'first' | 'subgraphError'>>;
  fpmmPoolMembership?: SubscriptionResolver<Maybe<ResolversTypes['FpmmPoolMembership']>, "fpmmPoolMembership", ParentType, ContextType, RequireFields<SubscriptionfpmmPoolMembershipArgs, 'id' | 'subgraphError'>>;
  fpmmPoolMemberships?: SubscriptionResolver<Array<ResolversTypes['FpmmPoolMembership']>, "fpmmPoolMemberships", ParentType, ContextType, RequireFields<SubscriptionfpmmPoolMembershipsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fpmmParticipation?: SubscriptionResolver<Maybe<ResolversTypes['FpmmParticipation']>, "fpmmParticipation", ParentType, ContextType, RequireFields<SubscriptionfpmmParticipationArgs, 'id' | 'subgraphError'>>;
  fpmmParticipations?: SubscriptionResolver<Array<ResolversTypes['FpmmParticipation']>, "fpmmParticipations", ParentType, ContextType, RequireFields<SubscriptionfpmmParticipationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fpmmTrade?: SubscriptionResolver<Maybe<ResolversTypes['FpmmTrade']>, "fpmmTrade", ParentType, ContextType, RequireFields<SubscriptionfpmmTradeArgs, 'id' | 'subgraphError'>>;
  fpmmTrades?: SubscriptionResolver<Array<ResolversTypes['FpmmTrade']>, "fpmmTrades", ParentType, ContextType, RequireFields<SubscriptionfpmmTradesArgs, 'skip' | 'first' | 'subgraphError'>>;
  fpmmLiquidity?: SubscriptionResolver<Maybe<ResolversTypes['FpmmLiquidity']>, "fpmmLiquidity", ParentType, ContextType, RequireFields<SubscriptionfpmmLiquidityArgs, 'id' | 'subgraphError'>>;
  fpmmLiquidities?: SubscriptionResolver<Array<ResolversTypes['FpmmLiquidity']>, "fpmmLiquidities", ParentType, ContextType, RequireFields<SubscriptionfpmmLiquiditiesArgs, 'skip' | 'first' | 'subgraphError'>>;
  fpmmTransaction?: SubscriptionResolver<Maybe<ResolversTypes['FpmmTransaction']>, "fpmmTransaction", ParentType, ContextType, RequireFields<SubscriptionfpmmTransactionArgs, 'id' | 'subgraphError'>>;
  fpmmTransactions?: SubscriptionResolver<Array<ResolversTypes['FpmmTransaction']>, "fpmmTransactions", ParentType, ContextType, RequireFields<SubscriptionfpmmTransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  gelatoUser?: SubscriptionResolver<Maybe<ResolversTypes['GelatoUser']>, "gelatoUser", ParentType, ContextType, RequireFields<SubscriptiongelatoUserArgs, 'id' | 'subgraphError'>>;
  gelatoUsers?: SubscriptionResolver<Array<ResolversTypes['GelatoUser']>, "gelatoUsers", ParentType, ContextType, RequireFields<SubscriptiongelatoUsersArgs, 'skip' | 'first' | 'subgraphError'>>;
  task?: SubscriptionResolver<Maybe<ResolversTypes['Task']>, "task", ParentType, ContextType, RequireFields<SubscriptiontaskArgs, 'id' | 'subgraphError'>>;
  tasks?: SubscriptionResolver<Array<ResolversTypes['Task']>, "tasks", ParentType, ContextType, RequireFields<SubscriptiontasksArgs, 'skip' | 'first' | 'subgraphError'>>;
  provider?: SubscriptionResolver<Maybe<ResolversTypes['Provider']>, "provider", ParentType, ContextType, RequireFields<SubscriptionproviderArgs, 'id' | 'subgraphError'>>;
  providers?: SubscriptionResolver<Array<ResolversTypes['Provider']>, "providers", ParentType, ContextType, RequireFields<SubscriptionprovidersArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskReceiptWrapper?: SubscriptionResolver<Maybe<ResolversTypes['TaskReceiptWrapper']>, "taskReceiptWrapper", ParentType, ContextType, RequireFields<SubscriptiontaskReceiptWrapperArgs, 'id' | 'subgraphError'>>;
  taskReceiptWrappers?: SubscriptionResolver<Array<ResolversTypes['TaskReceiptWrapper']>, "taskReceiptWrappers", ParentType, ContextType, RequireFields<SubscriptiontaskReceiptWrappersArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskCycle?: SubscriptionResolver<Maybe<ResolversTypes['TaskCycle']>, "taskCycle", ParentType, ContextType, RequireFields<SubscriptiontaskCycleArgs, 'id' | 'subgraphError'>>;
  taskCycles?: SubscriptionResolver<Array<ResolversTypes['TaskCycle']>, "taskCycles", ParentType, ContextType, RequireFields<SubscriptiontaskCyclesArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskReceipt?: SubscriptionResolver<Maybe<ResolversTypes['TaskReceipt']>, "taskReceipt", ParentType, ContextType, RequireFields<SubscriptiontaskReceiptArgs, 'id' | 'subgraphError'>>;
  taskReceipts?: SubscriptionResolver<Array<ResolversTypes['TaskReceipt']>, "taskReceipts", ParentType, ContextType, RequireFields<SubscriptiontaskReceiptsArgs, 'skip' | 'first' | 'subgraphError'>>;
  taskCondition?: SubscriptionResolver<Maybe<ResolversTypes['TaskCondition']>, "taskCondition", ParentType, ContextType, RequireFields<SubscriptiontaskConditionArgs, 'id' | 'subgraphError'>>;
  taskConditions?: SubscriptionResolver<Array<ResolversTypes['TaskCondition']>, "taskConditions", ParentType, ContextType, RequireFields<SubscriptiontaskConditionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  action?: SubscriptionResolver<Maybe<ResolversTypes['Action']>, "action", ParentType, ContextType, RequireFields<SubscriptionactionArgs, 'id' | 'subgraphError'>>;
  actions?: SubscriptionResolver<Array<ResolversTypes['Action']>, "actions", ParentType, ContextType, RequireFields<SubscriptionactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  registeredToken?: SubscriptionResolver<Maybe<ResolversTypes['RegisteredToken']>, "registeredToken", ParentType, ContextType, RequireFields<SubscriptionregisteredTokenArgs, 'id' | 'subgraphError'>>;
  registeredTokens?: SubscriptionResolver<Array<ResolversTypes['RegisteredToken']>, "registeredTokens", ParentType, ContextType, RequireFields<SubscriptionregisteredTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenList?: SubscriptionResolver<Maybe<ResolversTypes['TokenList']>, "tokenList", ParentType, ContextType, RequireFields<SubscriptiontokenListArgs, 'id' | 'subgraphError'>>;
  tokenLists?: SubscriptionResolver<Array<ResolversTypes['TokenList']>, "tokenLists", ParentType, ContextType, RequireFields<SubscriptiontokenListsArgs, 'skip' | 'first' | 'subgraphError'>>;
  uniswapPair?: SubscriptionResolver<Maybe<ResolversTypes['UniswapPair']>, "uniswapPair", ParentType, ContextType, RequireFields<SubscriptionuniswapPairArgs, 'id' | 'subgraphError'>>;
  uniswapPairs?: SubscriptionResolver<Array<ResolversTypes['UniswapPair']>, "uniswapPairs", ParentType, ContextType, RequireFields<SubscriptionuniswapPairsArgs, 'skip' | 'first' | 'subgraphError'>>;
  klerosSubmission?: SubscriptionResolver<Maybe<ResolversTypes['KlerosSubmission']>, "klerosSubmission", ParentType, ContextType, RequireFields<SubscriptionklerosSubmissionArgs, 'id' | 'subgraphError'>>;
  klerosSubmissions?: SubscriptionResolver<Array<ResolversTypes['KlerosSubmission']>, "klerosSubmissions", ParentType, ContextType, RequireFields<SubscriptionklerosSubmissionsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numConditions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numOpenConditions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numClosedConditions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollateralTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CollateralToken'] = ResolversParentTypes['CollateralToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  activeAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  splitAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  mergedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  redeemedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  positions?: Resolver<Maybe<Array<ResolversTypes['Position']>>, ParentType, ContextType, RequireFields<CollateralTokenpositionsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  conditions?: Resolver<Array<ResolversTypes['Condition']>, ParentType, ContextType, RequireFields<CollectionconditionsArgs, 'skip' | 'first'>>;
  conditionIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  conditionIdsStr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  indexSets?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  multiplicities?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  positions?: Resolver<Maybe<Array<ResolversTypes['Position']>>, ParentType, ContextType, RequireFields<CollectionpositionsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConditionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Condition'] = ResolversParentTypes['Condition']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  conditionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  oracle?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  questionId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  outcomeSlotCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createTransaction?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  createTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  resolved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  resolveTransaction?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  resolveTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  resolveBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  payoutNumerators?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  payoutDenominator?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  payouts?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  outcomes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  scalarLow?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  scalarHigh?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  collections?: Resolver<Maybe<Array<ResolversTypes['Collection']>>, ParentType, ContextType, RequireFields<ConditioncollectionsArgs, 'skip' | 'first'>>;
  positions?: Resolver<Maybe<Array<ResolversTypes['Position']>>, ParentType, ContextType, RequireFields<ConditionpositionsArgs, 'skip' | 'first'>>;
  resolutionTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  fixedProductMarketMakers?: Resolver<Array<ResolversTypes['FixedProductMarketMaker']>, ParentType, ContextType, RequireFields<ConditionfixedProductMarketMakersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GlobalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Global'] = ResolversParentTypes['Global']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numConditions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numCollections?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numPositions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numOpenConditions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numClosedConditions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  usdPerEth?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  usdVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type PositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  positionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collateralToken?: Resolver<ResolversTypes['CollateralToken'], ParentType, ContextType>;
  collateralTokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  conditions?: Resolver<Array<ResolversTypes['Condition']>, ParentType, ContextType, RequireFields<PositionconditionsArgs, 'skip' | 'first'>>;
  conditionIds?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  conditionIdsStr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  indexSets?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  multiplicities?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  createTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lifetimeValue?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  activeValue?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  wrappedTokens?: Resolver<Array<ResolversTypes['WrappedToken']>, ParentType, ContextType, RequireFields<PositionwrappedTokensArgs, 'skip' | 'first'>>;
  wrappedTokenAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  templateId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  outcomes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  arbitrator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  openingTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timeout?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  currentAnswer?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  currentAnswerBond?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  currentAnswerTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isPendingArbitration?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  arbitrationOccurred?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  answerFinalizedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  conditions?: Resolver<Array<ResolversTypes['Condition']>, ParentType, ContextType, RequireFields<QuestionconditionsArgs, 'skip' | 'first'>>;
  indexedFixedProductMarketMakers?: Resolver<Array<ResolversTypes['FixedProductMarketMaker']>, ParentType, ContextType, RequireFields<QuestionindexedFixedProductMarketMakersArgs, 'skip' | 'first'>>;
  answers?: Resolver<Maybe<Array<ResolversTypes['Answer']>>, ParentType, ContextType, RequireFields<QuestionanswersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ScalarQuestionLinkResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ScalarQuestionLink'] = ResolversParentTypes['ScalarQuestionLink']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  conditionQuestionId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  realityEthQuestionId?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType>;
  scalarLow?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  scalarHigh?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  firstParticipation?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastActive?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  userPositions?: Resolver<Maybe<Array<ResolversTypes['UserPosition']>>, ParentType, ContextType, RequireFields<UseruserPositionsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserPositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserPosition'] = ResolversParentTypes['UserPosition']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  wrappedBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WrappedTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WrappedToken'] = ResolversParentTypes['WrappedToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tradeNonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fpmmPoolMemberships?: Resolver<Maybe<Array<ResolversTypes['FpmmPoolMembership']>>, ParentType, ContextType, RequireFields<AccountfpmmPoolMembershipsArgs, 'skip' | 'first'>>;
  fpmmParticipations?: Resolver<Maybe<Array<ResolversTypes['FpmmParticipation']>>, ParentType, ContextType, RequireFields<AccountfpmmParticipationsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Action'] = ResolversParentTypes['Action']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  addr?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  operation?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dataFlow?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  termsOkCheck?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnswerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  answer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  bondAggregate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['Question'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FixedProductMarketMakerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FixedProductMarketMaker'] = ResolversParentTypes['FixedProductMarketMaker']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  creationTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralToken?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  conditions?: Resolver<Array<ResolversTypes['Condition']>, ParentType, ContextType, RequireFields<FixedProductMarketMakerconditionsArgs, 'skip' | 'first'>>;
  fee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralVolume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  scaledCollateralVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  usdVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  outcomeTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  outcomeTokenMarginalPrices?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
  outcomeSlotCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  liquidityMeasure?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  scaledLiquidityMeasure?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  usdLiquidityMeasure?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  liquidityParameter?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  scaledLiquidityParameter?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  usdLiquidityParameter?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  lastActiveDay?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastActiveHour?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralVolumeBeforeLastActiveDayByHour?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  usdVolumeBeforeLastActiveDayByHour?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  runningDailyVolume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  scaledRunningDailyVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  usdRunningDailyVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  lastActiveDayAndRunningDailyVolume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lastActiveDayAndScaledRunningDailyVolume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  runningDailyVolumeByHour?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  usdRunningDailyVolumeByHour?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  sort24HourVolume0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume2?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume3?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume4?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume5?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume6?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume7?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume8?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume9?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume10?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume11?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume12?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume13?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume14?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume15?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume16?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume17?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume18?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume19?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume20?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume21?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume22?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sort24HourVolume23?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  indexedOnQuestion?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  curatedByDxDao?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  condition?: Resolver<Maybe<ResolversTypes['Condition']>, ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType>;
  scalarLow?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  scalarHigh?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  templateId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  outcomes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  arbitrator?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  openingTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  timeout?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  resolutionTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  payouts?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
  currentAnswer?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  currentAnswerBond?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  currentAnswerTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isPendingArbitration?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  arbitrationOccurred?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  answerFinalizedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  poolMembers?: Resolver<Maybe<Array<ResolversTypes['FpmmPoolMembership']>>, ParentType, ContextType, RequireFields<FixedProductMarketMakerpoolMembersArgs, 'skip' | 'first'>>;
  participants?: Resolver<Maybe<Array<ResolversTypes['FpmmParticipation']>>, ParentType, ContextType, RequireFields<FixedProductMarketMakerparticipantsArgs, 'skip' | 'first'>>;
  submissionIDs?: Resolver<Array<ResolversTypes['KlerosSubmission']>, ParentType, ContextType, RequireFields<FixedProductMarketMakersubmissionIDsArgs, 'skip' | 'first'>>;
  klerosTCRregistered?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  curatedByDxDaoOrKleros?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FpmmLiquidityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FpmmLiquidity'] = ResolversParentTypes['FpmmLiquidity']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fpmm?: Resolver<ResolversTypes['FixedProductMarketMaker'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['LiquidityType'], ParentType, ContextType>;
  outcomeTokenAmounts?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  collateralTokenAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  additionalLiquidityParameter?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  funder?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  sharesAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralRemovedFromFeePool?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  creationTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  additionalSharesCost?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FpmmParticipationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FpmmParticipation'] = ResolversParentTypes['FpmmParticipation']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fpmm?: Resolver<ResolversTypes['FixedProductMarketMaker'], ParentType, ContextType>;
  participant?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  creationTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralToken?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  arbitrator?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  openingTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  timeout?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FpmmPoolMembershipResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FpmmPoolMembership'] = ResolversParentTypes['FpmmPoolMembership']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['FixedProductMarketMaker'], ParentType, ContextType>;
  funder?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FpmmTradeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FpmmTrade'] = ResolversParentTypes['FpmmTrade']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fpmm?: Resolver<ResolversTypes['FixedProductMarketMaker'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collateralToken?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  outcomeTokenMarginalPrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  oldOutcomeTokenMarginalPrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['TradeType'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  creationTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralAmountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feeAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  outcomeIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  outcomeTokensTraded?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FpmmTransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FpmmTransaction'] = ResolversParentTypes['FpmmTransaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fpmm?: Resolver<ResolversTypes['FixedProductMarketMaker'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  fpmmType?: Resolver<ResolversTypes['FpmmType'], ParentType, ContextType>;
  transactionType?: Resolver<ResolversTypes['TransactionType'], ParentType, ContextType>;
  collateralTokenAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sharesOrPoolTokenAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  creationTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  additionalSharesCost?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GelatoUserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GelatoUser'] = ResolversParentTypes['GelatoUser']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  signUpDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  executor?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KlerosSubmissionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KlerosSubmission'] = ResolversParentTypes['KlerosSubmission']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['KlerosStatus'], ParentType, ContextType>;
  listAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  market?: Resolver<ResolversTypes['FixedProductMarketMaker'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProviderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Provider'] = ResolversParentTypes['Provider']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  addr?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  module?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  taskCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RegisteredTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RegisteredToken'] = ResolversParentTypes['RegisteredToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  conditions?: Resolver<Maybe<Array<ResolversTypes['TaskCondition']>>, ParentType, ContextType, RequireFields<TaskconditionsArgs, 'skip' | 'first'>>;
  actions?: Resolver<Maybe<Array<ResolversTypes['Action']>>, ParentType, ContextType, RequireFields<TaskactionsArgs, 'skip' | 'first'>>;
  selfProviderGasLimit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  selfProviderGasPriceCeil?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskConditionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaskCondition'] = ResolversParentTypes['TaskCondition']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  inst?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskCycleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaskCycle'] = ResolversParentTypes['TaskCycle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  taskReceiptWrappers?: Resolver<Array<ResolversTypes['TaskReceiptWrapper']>, ParentType, ContextType, RequireFields<TaskCycletaskReceiptWrappersArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskReceiptResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaskReceipt'] = ResolversParentTypes['TaskReceipt']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userProxy?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tasks?: Resolver<Maybe<Array<ResolversTypes['Task']>>, ParentType, ContextType, RequireFields<TaskReceipttasksArgs, 'skip' | 'first'>>;
  expiryDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cycleId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  submissionsLeft?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskReceiptWrapperResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TaskReceiptWrapper'] = ResolversParentTypes['TaskReceiptWrapper']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['GelatoUser'], ParentType, ContextType>;
  taskReceipt?: Resolver<ResolversTypes['TaskReceipt'], ParentType, ContextType>;
  submissionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TaskReceiptStatus'], ParentType, ContextType>;
  submissionDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  selectedExecutor?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  executionDate?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executionHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  selfProvided?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  scale?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  ethPerToken?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenList'] = ResolversParentTypes['TokenList']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  listId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  listName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokens?: Resolver<Maybe<Array<ResolversTypes['RegisteredToken']>>, ParentType, ContextType, RequireFields<TokenListtokensArgs, 'skip' | 'first'>>;
  activeTokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UniswapPairResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UniswapPair'] = ResolversParentTypes['UniswapPair']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  reserve0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  reserve1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Category?: CategoryResolvers<ContextType>;
  CollateralToken?: CollateralTokenResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  Condition?: ConditionResolvers<ContextType>;
  Global?: GlobalResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  Position?: PositionResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  ScalarQuestionLink?: ScalarQuestionLinkResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserPosition?: UserPositionResolvers<ContextType>;
  WrappedToken?: WrappedTokenResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  Account?: AccountResolvers<ContextType>;
  Action?: ActionResolvers<ContextType>;
  Answer?: AnswerResolvers<ContextType>;
  FixedProductMarketMaker?: FixedProductMarketMakerResolvers<ContextType>;
  FpmmLiquidity?: FpmmLiquidityResolvers<ContextType>;
  FpmmParticipation?: FpmmParticipationResolvers<ContextType>;
  FpmmPoolMembership?: FpmmPoolMembershipResolvers<ContextType>;
  FpmmTrade?: FpmmTradeResolvers<ContextType>;
  FpmmTransaction?: FpmmTransactionResolvers<ContextType>;
  GelatoUser?: GelatoUserResolvers<ContextType>;
  KlerosSubmission?: KlerosSubmissionResolvers<ContextType>;
  Provider?: ProviderResolvers<ContextType>;
  RegisteredToken?: RegisteredTokenResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  TaskCondition?: TaskConditionResolvers<ContextType>;
  TaskCycle?: TaskCycleResolvers<ContextType>;
  TaskReceipt?: TaskReceiptResolvers<ContextType>;
  TaskReceiptWrapper?: TaskReceiptWrapperResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TokenList?: TokenListResolvers<ContextType>;
  UniswapPair?: UniswapPairResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = ConditionaltokenTypes.Context & OmenxdaiTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/conditionaltoken/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".graphclient/sources/omenxdai/introspectionSchema":
      return Promise.resolve(importedModule$1) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const omenxdaiTransforms = [];
const conditionaltokenTransforms = [];
const additionalTypeDefs = [] as any[];
const omenxdaiHandler = new GraphqlHandler({
              name: "omenxdai",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/protofire/omen-xdai"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("omenxdai"),
              logger: logger.child("omenxdai"),
              importFn,
            });
const conditionaltokenHandler = new GraphqlHandler({
              name: "conditionaltoken",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/gnosis/conditional-tokens-gc"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("conditionaltoken"),
              logger: logger.child("conditionaltoken"),
              importFn,
            });
sources[0] = {
          name: 'omenxdai',
          handler: omenxdaiHandler,
          transforms: omenxdaiTransforms
        }
sources[1] = {
          name: 'conditionaltoken',
          handler: conditionaltokenHandler,
          transforms: conditionaltokenTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })
const documentHashMap = {
        "6c7376c764b8376d2315d9a8512c4f3fef8d113a551218c87d2cf7ca180411d3": TradesDocument,
"6c7376c764b8376d2315d9a8512c4f3fef8d113a551218c87d2cf7ca180411d3": AllTradesDocument,
"6c7376c764b8376d2315d9a8512c4f3fef8d113a551218c87d2cf7ca180411d3": UserPositionsDocument
      }
additionalEnvelopPlugins.push(usePersistedOperations({
        getPersistedOperation(key) {
          return documentHashMap[key];
        },
      }))

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: TradesDocument,
        get rawSDL() {
          return printWithCache(TradesDocument);
        },
        location: 'TradesDocument.graphql',
        sha256Hash: '6c7376c764b8376d2315d9a8512c4f3fef8d113a551218c87d2cf7ca180411d3'
      },{
        document: AllTradesDocument,
        get rawSDL() {
          return printWithCache(AllTradesDocument);
        },
        location: 'AllTradesDocument.graphql',
        sha256Hash: '6c7376c764b8376d2315d9a8512c4f3fef8d113a551218c87d2cf7ca180411d3'
      },{
        document: UserPositionsDocument,
        get rawSDL() {
          return printWithCache(UserPositionsDocument);
        },
        location: 'UserPositionsDocument.graphql',
        sha256Hash: '6c7376c764b8376d2315d9a8512c4f3fef8d113a551218c87d2cf7ca180411d3'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type TradesQueryVariables = Exact<{
  creator: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  fromTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  toTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TradesQuery = { fpmmTrades: Array<(
    Pick<FpmmTrade, 'id' | 'title' | 'collateralToken' | 'outcomeTokenMarginalPrice' | 'oldOutcomeTokenMarginalPrice' | 'type' | 'creationTimestamp' | 'collateralAmount' | 'collateralAmountUSD' | 'feeAmount' | 'outcomeIndex' | 'outcomeTokensTraded' | 'transactionHash'>
    & { creator: Pick<Account, 'id'>, fpmm: (
      Pick<FixedProductMarketMaker, 'id' | 'outcomes' | 'title' | 'answerFinalizedTimestamp' | 'currentAnswer' | 'isPendingArbitration' | 'arbitrationOccurred' | 'openingTimestamp'>
      & { condition?: Maybe<Pick<Condition, 'id'>> }
    ) }
  )> };

export type AllTradesQueryVariables = Exact<{
  creator: Scalars['String']['input'];
}>;


export type AllTradesQuery = { fpmmTrades: Array<(
    Pick<FpmmTrade, 'id' | 'collateralToken' | 'outcomeTokenMarginalPrice' | 'oldOutcomeTokenMarginalPrice' | 'type' | 'collateralAmount' | 'collateralAmountUSD' | 'feeAmount' | 'outcomeIndex' | 'outcomeTokensTraded' | 'transactionHash'>
    & { fpmm: (
      Pick<FixedProductMarketMaker, 'id' | 'outcomes' | 'title' | 'answerFinalizedTimestamp' | 'currentAnswer' | 'isPendingArbitration' | 'arbitrationOccurred' | 'openingTimestamp'>
      & { condition?: Maybe<Pick<Condition, 'id'>> }
    ) }
  )> };

export type UserPositionsQueryVariables = Exact<{
  creator: Scalars['ID']['input'];
}>;


export type UserPositionsQuery = { user?: Maybe<{ userPositions?: Maybe<Array<(
      Pick<UserPosition, 'balance' | 'id' | 'totalBalance' | 'wrappedBalance'>
      & { position: Pick<Position, 'id' | 'conditionIds'> }
    )>> }> };


export const TradesDocument = gql`
    query Trades($creator: String!, $skip: Int, $fromTimestamp: BigInt, $toTimestamp: BigInt, $first: Int) {
  fpmmTrades(
    where: {type: Buy, creator: $creator, creationTimestamp_gte: $fromTimestamp, creationTimestamp_lte: $toTimestamp}
    first: $first
    skip: $skip
    orderDirection: desc
  ) {
    id
    title
    collateralToken
    outcomeTokenMarginalPrice
    oldOutcomeTokenMarginalPrice
    type
    creator {
      id
    }
    creationTimestamp
    collateralAmount
    collateralAmountUSD
    feeAmount
    outcomeIndex
    outcomeTokensTraded
    transactionHash
    fpmm {
      id
      outcomes
      title
      answerFinalizedTimestamp
      currentAnswer
      isPendingArbitration
      arbitrationOccurred
      openingTimestamp
      condition {
        id
      }
    }
  }
}
    ` as unknown as DocumentNode<TradesQuery, TradesQueryVariables>;
export const AllTradesDocument = gql`
    query AllTrades($creator: String!) {
  fpmmTrades(where: {type: Buy, creator: $creator}, first: 1000) {
    id
    collateralToken
    outcomeTokenMarginalPrice
    oldOutcomeTokenMarginalPrice
    type
    collateralAmount
    collateralAmountUSD
    feeAmount
    outcomeIndex
    outcomeTokensTraded
    transactionHash
    fpmm {
      id
      outcomes
      title
      answerFinalizedTimestamp
      currentAnswer
      isPendingArbitration
      arbitrationOccurred
      openingTimestamp
      condition {
        id
      }
    }
  }
}
    ` as unknown as DocumentNode<AllTradesQuery, AllTradesQueryVariables>;
export const UserPositionsDocument = gql`
    query UserPositions($creator: ID!) {
  user(id: $creator) {
    userPositions(first: 1000, orderBy: id) {
      balance
      id
      position {
        id
        conditionIds
      }
      totalBalance
      wrappedBalance
    }
  }
}
    ` as unknown as DocumentNode<UserPositionsQuery, UserPositionsQueryVariables>;




export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    Trades(variables: TradesQueryVariables, options?: C): Promise<TradesQuery> {
      return requester<TradesQuery, TradesQueryVariables>(TradesDocument, variables, options) as Promise<TradesQuery>;
    },
    AllTrades(variables: AllTradesQueryVariables, options?: C): Promise<AllTradesQuery> {
      return requester<AllTradesQuery, AllTradesQueryVariables>(AllTradesDocument, variables, options) as Promise<AllTradesQuery>;
    },
    UserPositions(variables: UserPositionsQueryVariables, options?: C): Promise<UserPositionsQuery> {
      return requester<UserPositionsQuery, UserPositionsQueryVariables>(UserPositionsDocument, variables, options) as Promise<UserPositionsQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;