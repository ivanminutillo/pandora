// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace OmenxdaiTypes {
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

export type Aggregation_interval =
  | 'hour'
  | 'day';

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

export type Condition = {
  id: Scalars['ID']['output'];
  oracle: Scalars['Bytes']['output'];
  questionId: Scalars['Bytes']['output'];
  question?: Maybe<Question>;
  outcomeSlotCount: Scalars['Int']['output'];
  resolutionTimestamp?: Maybe<Scalars['BigInt']['output']>;
  payouts?: Maybe<Array<Scalars['BigDecimal']['output']>>;
  scalarLow?: Maybe<Scalars['BigInt']['output']>;
  scalarHigh?: Maybe<Scalars['BigInt']['output']>;
  fixedProductMarketMakers: Array<FixedProductMarketMaker>;
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
  oracle?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_not?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_gt?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_lt?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_gte?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_lte?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oracle_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  oracle_contains?: InputMaybe<Scalars['Bytes']['input']>;
  oracle_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  questionId?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_not?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_gt?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_lt?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_gte?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_lte?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  questionId_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  questionId_contains?: InputMaybe<Scalars['Bytes']['input']>;
  questionId_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
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
  outcomeSlotCount?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_not?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_gt?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_lt?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_gte?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_lte?: InputMaybe<Scalars['Int']['input']>;
  outcomeSlotCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  outcomeSlotCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  fixedProductMarketMakers_?: InputMaybe<FixedProductMarketMaker_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Condition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Condition_filter>>>;
};

export type Condition_orderBy =
  | 'id'
  | 'oracle'
  | 'questionId'
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
  | 'outcomeSlotCount'
  | 'resolutionTimestamp'
  | 'payouts'
  | 'scalarLow'
  | 'scalarHigh'
  | 'fixedProductMarketMakers';

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

export type Global = {
  id: Scalars['ID']['output'];
  numConditions: Scalars['Int']['output'];
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Global_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Global_filter>>>;
};

export type Global_orderBy =
  | 'id'
  | 'numConditions'
  | 'numOpenConditions'
  | 'numClosedConditions'
  | 'usdPerEth'
  | 'usdVolume';

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

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

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

export type Query = {
  question?: Maybe<Question>;
  questions: Array<Question>;
  answer?: Maybe<Answer>;
  answers: Array<Answer>;
  scalarQuestionLink?: Maybe<ScalarQuestionLink>;
  scalarQuestionLinks: Array<ScalarQuestionLink>;
  category?: Maybe<Category>;
  categories: Array<Category>;
  condition?: Maybe<Condition>;
  conditions: Array<Condition>;
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
  global?: Maybe<Global>;
  globals: Array<Global>;
  klerosSubmission?: Maybe<KlerosSubmission>;
  klerosSubmissions: Array<KlerosSubmission>;
  marketSearch: Array<FixedProductMarketMaker>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
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
  arbitrator: Scalars['Bytes']['output'];
  openingTimestamp: Scalars['BigInt']['output'];
  timeout: Scalars['BigInt']['output'];
  currentAnswer?: Maybe<Scalars['Bytes']['output']>;
  currentAnswerBond?: Maybe<Scalars['BigInt']['output']>;
  currentAnswerTimestamp?: Maybe<Scalars['BigInt']['output']>;
  isPendingArbitration: Scalars['Boolean']['output'];
  arbitrationOccurred: Scalars['Boolean']['output'];
  answerFinalizedTimestamp?: Maybe<Scalars['BigInt']['output']>;
  indexedFixedProductMarketMakers: Array<FixedProductMarketMaker>;
  conditions: Array<Condition>;
  answers?: Maybe<Array<Answer>>;
};


export type QuestionindexedFixedProductMarketMakersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedProductMarketMaker_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FixedProductMarketMaker_filter>;
};


export type QuestionconditionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Condition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Condition_filter>;
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
  indexedFixedProductMarketMakers?: InputMaybe<Array<Scalars['String']['input']>>;
  indexedFixedProductMarketMakers_not?: InputMaybe<Array<Scalars['String']['input']>>;
  indexedFixedProductMarketMakers_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  indexedFixedProductMarketMakers_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  indexedFixedProductMarketMakers_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  indexedFixedProductMarketMakers_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  indexedFixedProductMarketMakers_?: InputMaybe<FixedProductMarketMaker_filter>;
  conditions_?: InputMaybe<Condition_filter>;
  answers_?: InputMaybe<Answer_filter>;
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
  | 'indexedFixedProductMarketMakers'
  | 'conditions'
  | 'answers';

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
  question?: Maybe<Question>;
  questions: Array<Question>;
  answer?: Maybe<Answer>;
  answers: Array<Answer>;
  scalarQuestionLink?: Maybe<ScalarQuestionLink>;
  scalarQuestionLinks: Array<ScalarQuestionLink>;
  category?: Maybe<Category>;
  categories: Array<Category>;
  condition?: Maybe<Condition>;
  conditions: Array<Condition>;
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
  global?: Maybe<Global>;
  globals: Array<Global>;
  klerosSubmission?: Maybe<KlerosSubmission>;
  klerosSubmissions: Array<KlerosSubmission>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
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


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

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
  question: InContextSdkMethod<Query['question'], QueryquestionArgs, MeshContext>,
  /** null **/
  questions: InContextSdkMethod<Query['questions'], QueryquestionsArgs, MeshContext>,
  /** null **/
  answer: InContextSdkMethod<Query['answer'], QueryanswerArgs, MeshContext>,
  /** null **/
  answers: InContextSdkMethod<Query['answers'], QueryanswersArgs, MeshContext>,
  /** null **/
  scalarQuestionLink: InContextSdkMethod<Query['scalarQuestionLink'], QueryscalarQuestionLinkArgs, MeshContext>,
  /** null **/
  scalarQuestionLinks: InContextSdkMethod<Query['scalarQuestionLinks'], QueryscalarQuestionLinksArgs, MeshContext>,
  /** null **/
  category: InContextSdkMethod<Query['category'], QuerycategoryArgs, MeshContext>,
  /** null **/
  categories: InContextSdkMethod<Query['categories'], QuerycategoriesArgs, MeshContext>,
  /** null **/
  condition: InContextSdkMethod<Query['condition'], QueryconditionArgs, MeshContext>,
  /** null **/
  conditions: InContextSdkMethod<Query['conditions'], QueryconditionsArgs, MeshContext>,
  /** null **/
  fixedProductMarketMaker: InContextSdkMethod<Query['fixedProductMarketMaker'], QueryfixedProductMarketMakerArgs, MeshContext>,
  /** null **/
  fixedProductMarketMakers: InContextSdkMethod<Query['fixedProductMarketMakers'], QueryfixedProductMarketMakersArgs, MeshContext>,
  /** null **/
  fpmmPoolMembership: InContextSdkMethod<Query['fpmmPoolMembership'], QueryfpmmPoolMembershipArgs, MeshContext>,
  /** null **/
  fpmmPoolMemberships: InContextSdkMethod<Query['fpmmPoolMemberships'], QueryfpmmPoolMembershipsArgs, MeshContext>,
  /** null **/
  fpmmParticipation: InContextSdkMethod<Query['fpmmParticipation'], QueryfpmmParticipationArgs, MeshContext>,
  /** null **/
  fpmmParticipations: InContextSdkMethod<Query['fpmmParticipations'], QueryfpmmParticipationsArgs, MeshContext>,
  /** null **/
  fpmmTrade: InContextSdkMethod<Query['fpmmTrade'], QueryfpmmTradeArgs, MeshContext>,
  /** null **/
  fpmmTrades: InContextSdkMethod<Query['fpmmTrades'], QueryfpmmTradesArgs, MeshContext>,
  /** null **/
  fpmmLiquidity: InContextSdkMethod<Query['fpmmLiquidity'], QueryfpmmLiquidityArgs, MeshContext>,
  /** null **/
  fpmmLiquidities: InContextSdkMethod<Query['fpmmLiquidities'], QueryfpmmLiquiditiesArgs, MeshContext>,
  /** null **/
  fpmmTransaction: InContextSdkMethod<Query['fpmmTransaction'], QueryfpmmTransactionArgs, MeshContext>,
  /** null **/
  fpmmTransactions: InContextSdkMethod<Query['fpmmTransactions'], QueryfpmmTransactionsArgs, MeshContext>,
  /** null **/
  gelatoUser: InContextSdkMethod<Query['gelatoUser'], QuerygelatoUserArgs, MeshContext>,
  /** null **/
  gelatoUsers: InContextSdkMethod<Query['gelatoUsers'], QuerygelatoUsersArgs, MeshContext>,
  /** null **/
  task: InContextSdkMethod<Query['task'], QuerytaskArgs, MeshContext>,
  /** null **/
  tasks: InContextSdkMethod<Query['tasks'], QuerytasksArgs, MeshContext>,
  /** null **/
  provider: InContextSdkMethod<Query['provider'], QueryproviderArgs, MeshContext>,
  /** null **/
  providers: InContextSdkMethod<Query['providers'], QueryprovidersArgs, MeshContext>,
  /** null **/
  taskReceiptWrapper: InContextSdkMethod<Query['taskReceiptWrapper'], QuerytaskReceiptWrapperArgs, MeshContext>,
  /** null **/
  taskReceiptWrappers: InContextSdkMethod<Query['taskReceiptWrappers'], QuerytaskReceiptWrappersArgs, MeshContext>,
  /** null **/
  taskCycle: InContextSdkMethod<Query['taskCycle'], QuerytaskCycleArgs, MeshContext>,
  /** null **/
  taskCycles: InContextSdkMethod<Query['taskCycles'], QuerytaskCyclesArgs, MeshContext>,
  /** null **/
  taskReceipt: InContextSdkMethod<Query['taskReceipt'], QuerytaskReceiptArgs, MeshContext>,
  /** null **/
  taskReceipts: InContextSdkMethod<Query['taskReceipts'], QuerytaskReceiptsArgs, MeshContext>,
  /** null **/
  taskCondition: InContextSdkMethod<Query['taskCondition'], QuerytaskConditionArgs, MeshContext>,
  /** null **/
  taskConditions: InContextSdkMethod<Query['taskConditions'], QuerytaskConditionsArgs, MeshContext>,
  /** null **/
  action: InContextSdkMethod<Query['action'], QueryactionArgs, MeshContext>,
  /** null **/
  actions: InContextSdkMethod<Query['actions'], QueryactionsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Query['account'], QueryaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Query['accounts'], QueryaccountsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  registeredToken: InContextSdkMethod<Query['registeredToken'], QueryregisteredTokenArgs, MeshContext>,
  /** null **/
  registeredTokens: InContextSdkMethod<Query['registeredTokens'], QueryregisteredTokensArgs, MeshContext>,
  /** null **/
  tokenList: InContextSdkMethod<Query['tokenList'], QuerytokenListArgs, MeshContext>,
  /** null **/
  tokenLists: InContextSdkMethod<Query['tokenLists'], QuerytokenListsArgs, MeshContext>,
  /** null **/
  uniswapPair: InContextSdkMethod<Query['uniswapPair'], QueryuniswapPairArgs, MeshContext>,
  /** null **/
  uniswapPairs: InContextSdkMethod<Query['uniswapPairs'], QueryuniswapPairsArgs, MeshContext>,
  /** null **/
  global: InContextSdkMethod<Query['global'], QueryglobalArgs, MeshContext>,
  /** null **/
  globals: InContextSdkMethod<Query['globals'], QueryglobalsArgs, MeshContext>,
  /** null **/
  klerosSubmission: InContextSdkMethod<Query['klerosSubmission'], QueryklerosSubmissionArgs, MeshContext>,
  /** null **/
  klerosSubmissions: InContextSdkMethod<Query['klerosSubmissions'], QueryklerosSubmissionsArgs, MeshContext>,
  /** null **/
  marketSearch: InContextSdkMethod<Query['marketSearch'], QuerymarketSearchArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  question: InContextSdkMethod<Subscription['question'], SubscriptionquestionArgs, MeshContext>,
  /** null **/
  questions: InContextSdkMethod<Subscription['questions'], SubscriptionquestionsArgs, MeshContext>,
  /** null **/
  answer: InContextSdkMethod<Subscription['answer'], SubscriptionanswerArgs, MeshContext>,
  /** null **/
  answers: InContextSdkMethod<Subscription['answers'], SubscriptionanswersArgs, MeshContext>,
  /** null **/
  scalarQuestionLink: InContextSdkMethod<Subscription['scalarQuestionLink'], SubscriptionscalarQuestionLinkArgs, MeshContext>,
  /** null **/
  scalarQuestionLinks: InContextSdkMethod<Subscription['scalarQuestionLinks'], SubscriptionscalarQuestionLinksArgs, MeshContext>,
  /** null **/
  category: InContextSdkMethod<Subscription['category'], SubscriptioncategoryArgs, MeshContext>,
  /** null **/
  categories: InContextSdkMethod<Subscription['categories'], SubscriptioncategoriesArgs, MeshContext>,
  /** null **/
  condition: InContextSdkMethod<Subscription['condition'], SubscriptionconditionArgs, MeshContext>,
  /** null **/
  conditions: InContextSdkMethod<Subscription['conditions'], SubscriptionconditionsArgs, MeshContext>,
  /** null **/
  fixedProductMarketMaker: InContextSdkMethod<Subscription['fixedProductMarketMaker'], SubscriptionfixedProductMarketMakerArgs, MeshContext>,
  /** null **/
  fixedProductMarketMakers: InContextSdkMethod<Subscription['fixedProductMarketMakers'], SubscriptionfixedProductMarketMakersArgs, MeshContext>,
  /** null **/
  fpmmPoolMembership: InContextSdkMethod<Subscription['fpmmPoolMembership'], SubscriptionfpmmPoolMembershipArgs, MeshContext>,
  /** null **/
  fpmmPoolMemberships: InContextSdkMethod<Subscription['fpmmPoolMemberships'], SubscriptionfpmmPoolMembershipsArgs, MeshContext>,
  /** null **/
  fpmmParticipation: InContextSdkMethod<Subscription['fpmmParticipation'], SubscriptionfpmmParticipationArgs, MeshContext>,
  /** null **/
  fpmmParticipations: InContextSdkMethod<Subscription['fpmmParticipations'], SubscriptionfpmmParticipationsArgs, MeshContext>,
  /** null **/
  fpmmTrade: InContextSdkMethod<Subscription['fpmmTrade'], SubscriptionfpmmTradeArgs, MeshContext>,
  /** null **/
  fpmmTrades: InContextSdkMethod<Subscription['fpmmTrades'], SubscriptionfpmmTradesArgs, MeshContext>,
  /** null **/
  fpmmLiquidity: InContextSdkMethod<Subscription['fpmmLiquidity'], SubscriptionfpmmLiquidityArgs, MeshContext>,
  /** null **/
  fpmmLiquidities: InContextSdkMethod<Subscription['fpmmLiquidities'], SubscriptionfpmmLiquiditiesArgs, MeshContext>,
  /** null **/
  fpmmTransaction: InContextSdkMethod<Subscription['fpmmTransaction'], SubscriptionfpmmTransactionArgs, MeshContext>,
  /** null **/
  fpmmTransactions: InContextSdkMethod<Subscription['fpmmTransactions'], SubscriptionfpmmTransactionsArgs, MeshContext>,
  /** null **/
  gelatoUser: InContextSdkMethod<Subscription['gelatoUser'], SubscriptiongelatoUserArgs, MeshContext>,
  /** null **/
  gelatoUsers: InContextSdkMethod<Subscription['gelatoUsers'], SubscriptiongelatoUsersArgs, MeshContext>,
  /** null **/
  task: InContextSdkMethod<Subscription['task'], SubscriptiontaskArgs, MeshContext>,
  /** null **/
  tasks: InContextSdkMethod<Subscription['tasks'], SubscriptiontasksArgs, MeshContext>,
  /** null **/
  provider: InContextSdkMethod<Subscription['provider'], SubscriptionproviderArgs, MeshContext>,
  /** null **/
  providers: InContextSdkMethod<Subscription['providers'], SubscriptionprovidersArgs, MeshContext>,
  /** null **/
  taskReceiptWrapper: InContextSdkMethod<Subscription['taskReceiptWrapper'], SubscriptiontaskReceiptWrapperArgs, MeshContext>,
  /** null **/
  taskReceiptWrappers: InContextSdkMethod<Subscription['taskReceiptWrappers'], SubscriptiontaskReceiptWrappersArgs, MeshContext>,
  /** null **/
  taskCycle: InContextSdkMethod<Subscription['taskCycle'], SubscriptiontaskCycleArgs, MeshContext>,
  /** null **/
  taskCycles: InContextSdkMethod<Subscription['taskCycles'], SubscriptiontaskCyclesArgs, MeshContext>,
  /** null **/
  taskReceipt: InContextSdkMethod<Subscription['taskReceipt'], SubscriptiontaskReceiptArgs, MeshContext>,
  /** null **/
  taskReceipts: InContextSdkMethod<Subscription['taskReceipts'], SubscriptiontaskReceiptsArgs, MeshContext>,
  /** null **/
  taskCondition: InContextSdkMethod<Subscription['taskCondition'], SubscriptiontaskConditionArgs, MeshContext>,
  /** null **/
  taskConditions: InContextSdkMethod<Subscription['taskConditions'], SubscriptiontaskConditionsArgs, MeshContext>,
  /** null **/
  action: InContextSdkMethod<Subscription['action'], SubscriptionactionArgs, MeshContext>,
  /** null **/
  actions: InContextSdkMethod<Subscription['actions'], SubscriptionactionsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Subscription['account'], SubscriptionaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Subscription['accounts'], SubscriptionaccountsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  registeredToken: InContextSdkMethod<Subscription['registeredToken'], SubscriptionregisteredTokenArgs, MeshContext>,
  /** null **/
  registeredTokens: InContextSdkMethod<Subscription['registeredTokens'], SubscriptionregisteredTokensArgs, MeshContext>,
  /** null **/
  tokenList: InContextSdkMethod<Subscription['tokenList'], SubscriptiontokenListArgs, MeshContext>,
  /** null **/
  tokenLists: InContextSdkMethod<Subscription['tokenLists'], SubscriptiontokenListsArgs, MeshContext>,
  /** null **/
  uniswapPair: InContextSdkMethod<Subscription['uniswapPair'], SubscriptionuniswapPairArgs, MeshContext>,
  /** null **/
  uniswapPairs: InContextSdkMethod<Subscription['uniswapPairs'], SubscriptionuniswapPairsArgs, MeshContext>,
  /** null **/
  global: InContextSdkMethod<Subscription['global'], SubscriptionglobalArgs, MeshContext>,
  /** null **/
  globals: InContextSdkMethod<Subscription['globals'], SubscriptionglobalsArgs, MeshContext>,
  /** null **/
  klerosSubmission: InContextSdkMethod<Subscription['klerosSubmission'], SubscriptionklerosSubmissionArgs, MeshContext>,
  /** null **/
  klerosSubmissions: InContextSdkMethod<Subscription['klerosSubmissions'], SubscriptionklerosSubmissionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["omenxdai"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
