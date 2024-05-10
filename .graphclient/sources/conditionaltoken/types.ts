// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ConditionaltokenTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
  oracle: Scalars['String']['output'];
  questionId: Scalars['String']['output'];
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
  oracle?: InputMaybe<Scalars['String']['input']>;
  oracle_not?: InputMaybe<Scalars['String']['input']>;
  oracle_gt?: InputMaybe<Scalars['String']['input']>;
  oracle_lt?: InputMaybe<Scalars['String']['input']>;
  oracle_gte?: InputMaybe<Scalars['String']['input']>;
  oracle_lte?: InputMaybe<Scalars['String']['input']>;
  oracle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oracle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oracle_contains?: InputMaybe<Scalars['String']['input']>;
  oracle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_not_contains?: InputMaybe<Scalars['String']['input']>;
  oracle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_starts_with?: InputMaybe<Scalars['String']['input']>;
  oracle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  oracle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_ends_with?: InputMaybe<Scalars['String']['input']>;
  oracle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  oracle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  questionId?: InputMaybe<Scalars['String']['input']>;
  questionId_not?: InputMaybe<Scalars['String']['input']>;
  questionId_gt?: InputMaybe<Scalars['String']['input']>;
  questionId_lt?: InputMaybe<Scalars['String']['input']>;
  questionId_gte?: InputMaybe<Scalars['String']['input']>;
  questionId_lte?: InputMaybe<Scalars['String']['input']>;
  questionId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  questionId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  questionId_contains?: InputMaybe<Scalars['String']['input']>;
  questionId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  questionId_not_contains?: InputMaybe<Scalars['String']['input']>;
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
  | 'positions';

export type Global = {
  id: Scalars['ID']['output'];
  numConditions: Scalars['Int']['output'];
  numCollections: Scalars['Int']['output'];
  numPositions: Scalars['Int']['output'];
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
};

export type Global_orderBy =
  | 'id'
  | 'numConditions'
  | 'numCollections'
  | 'numPositions';

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

export type Question = {
  id: Scalars['ID']['output'];
  templateId: Scalars['BigInt']['output'];
  data: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  outcomes?: Maybe<Array<Scalars['String']['output']>>;
  category?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  arbitrator: Scalars['String']['output'];
  openingTimestamp: Scalars['BigInt']['output'];
  timeout: Scalars['BigInt']['output'];
  currentAnswer?: Maybe<Scalars['Bytes']['output']>;
  currentAnswerBond?: Maybe<Scalars['BigInt']['output']>;
  currentAnswerTimestamp?: Maybe<Scalars['BigInt']['output']>;
  isPendingArbitration: Scalars['Boolean']['output'];
  arbitrationOccurred: Scalars['Boolean']['output'];
  answerFinalizedTimestamp?: Maybe<Scalars['BigInt']['output']>;
  conditions: Array<Condition>;
};


export type QuestionconditionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Condition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Condition_filter>;
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
  arbitrator?: InputMaybe<Scalars['String']['input']>;
  arbitrator_not?: InputMaybe<Scalars['String']['input']>;
  arbitrator_gt?: InputMaybe<Scalars['String']['input']>;
  arbitrator_lt?: InputMaybe<Scalars['String']['input']>;
  arbitrator_gte?: InputMaybe<Scalars['String']['input']>;
  arbitrator_lte?: InputMaybe<Scalars['String']['input']>;
  arbitrator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  arbitrator_contains?: InputMaybe<Scalars['String']['input']>;
  arbitrator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  arbitrator_not_contains?: InputMaybe<Scalars['String']['input']>;
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
  | 'conditions';

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

  export type QuerySdk = {
      /** null **/
  condition: InContextSdkMethod<Query['condition'], QueryconditionArgs, MeshContext>,
  /** null **/
  conditions: InContextSdkMethod<Query['conditions'], QueryconditionsArgs, MeshContext>,
  /** null **/
  collection: InContextSdkMethod<Query['collection'], QuerycollectionArgs, MeshContext>,
  /** null **/
  collections: InContextSdkMethod<Query['collections'], QuerycollectionsArgs, MeshContext>,
  /** null **/
  position: InContextSdkMethod<Query['position'], QuerypositionArgs, MeshContext>,
  /** null **/
  positions: InContextSdkMethod<Query['positions'], QuerypositionsArgs, MeshContext>,
  /** null **/
  userPosition: InContextSdkMethod<Query['userPosition'], QueryuserPositionArgs, MeshContext>,
  /** null **/
  userPositions: InContextSdkMethod<Query['userPositions'], QueryuserPositionsArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  collateralToken: InContextSdkMethod<Query['collateralToken'], QuerycollateralTokenArgs, MeshContext>,
  /** null **/
  collateralTokens: InContextSdkMethod<Query['collateralTokens'], QuerycollateralTokensArgs, MeshContext>,
  /** null **/
  wrappedToken: InContextSdkMethod<Query['wrappedToken'], QuerywrappedTokenArgs, MeshContext>,
  /** null **/
  wrappedTokens: InContextSdkMethod<Query['wrappedTokens'], QuerywrappedTokensArgs, MeshContext>,
  /** null **/
  question: InContextSdkMethod<Query['question'], QueryquestionArgs, MeshContext>,
  /** null **/
  questions: InContextSdkMethod<Query['questions'], QueryquestionsArgs, MeshContext>,
  /** null **/
  category: InContextSdkMethod<Query['category'], QuerycategoryArgs, MeshContext>,
  /** null **/
  categories: InContextSdkMethod<Query['categories'], QuerycategoriesArgs, MeshContext>,
  /** null **/
  scalarQuestionLink: InContextSdkMethod<Query['scalarQuestionLink'], QueryscalarQuestionLinkArgs, MeshContext>,
  /** null **/
  scalarQuestionLinks: InContextSdkMethod<Query['scalarQuestionLinks'], QueryscalarQuestionLinksArgs, MeshContext>,
  /** null **/
  global: InContextSdkMethod<Query['global'], QueryglobalArgs, MeshContext>,
  /** null **/
  globals: InContextSdkMethod<Query['globals'], QueryglobalsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  condition: InContextSdkMethod<Subscription['condition'], SubscriptionconditionArgs, MeshContext>,
  /** null **/
  conditions: InContextSdkMethod<Subscription['conditions'], SubscriptionconditionsArgs, MeshContext>,
  /** null **/
  collection: InContextSdkMethod<Subscription['collection'], SubscriptioncollectionArgs, MeshContext>,
  /** null **/
  collections: InContextSdkMethod<Subscription['collections'], SubscriptioncollectionsArgs, MeshContext>,
  /** null **/
  position: InContextSdkMethod<Subscription['position'], SubscriptionpositionArgs, MeshContext>,
  /** null **/
  positions: InContextSdkMethod<Subscription['positions'], SubscriptionpositionsArgs, MeshContext>,
  /** null **/
  userPosition: InContextSdkMethod<Subscription['userPosition'], SubscriptionuserPositionArgs, MeshContext>,
  /** null **/
  userPositions: InContextSdkMethod<Subscription['userPositions'], SubscriptionuserPositionsArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  collateralToken: InContextSdkMethod<Subscription['collateralToken'], SubscriptioncollateralTokenArgs, MeshContext>,
  /** null **/
  collateralTokens: InContextSdkMethod<Subscription['collateralTokens'], SubscriptioncollateralTokensArgs, MeshContext>,
  /** null **/
  wrappedToken: InContextSdkMethod<Subscription['wrappedToken'], SubscriptionwrappedTokenArgs, MeshContext>,
  /** null **/
  wrappedTokens: InContextSdkMethod<Subscription['wrappedTokens'], SubscriptionwrappedTokensArgs, MeshContext>,
  /** null **/
  question: InContextSdkMethod<Subscription['question'], SubscriptionquestionArgs, MeshContext>,
  /** null **/
  questions: InContextSdkMethod<Subscription['questions'], SubscriptionquestionsArgs, MeshContext>,
  /** null **/
  category: InContextSdkMethod<Subscription['category'], SubscriptioncategoryArgs, MeshContext>,
  /** null **/
  categories: InContextSdkMethod<Subscription['categories'], SubscriptioncategoriesArgs, MeshContext>,
  /** null **/
  scalarQuestionLink: InContextSdkMethod<Subscription['scalarQuestionLink'], SubscriptionscalarQuestionLinkArgs, MeshContext>,
  /** null **/
  scalarQuestionLinks: InContextSdkMethod<Subscription['scalarQuestionLinks'], SubscriptionscalarQuestionLinksArgs, MeshContext>,
  /** null **/
  global: InContextSdkMethod<Subscription['global'], SubscriptionglobalArgs, MeshContext>,
  /** null **/
  globals: InContextSdkMethod<Subscription['globals'], SubscriptionglobalsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["conditionaltoken"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
