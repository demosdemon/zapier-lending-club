/**
 *   Copyright 2018 LeBlanc Codes, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const fetchListings = require('../lending-club/secondary-market/fetch-listings');

module.exports = {
  key: 'secondary_note',
  list: {
    display: {
      description: 'Lists the Secondary Notes.',
      label: 'List Secondary Note',
    },
    operation: {
      inputFields: [
        {
          helpText: 'The loan to filter results on.',
          key: 'loanId',
          label: 'Loan ID',
          required: false,
          type: 'integer',
        },
        {
          helpText: 'The maximum markup allowed.',
          key: 'markupOrDiscount',
          label: 'Markup or Discount',
          required: false,
          type: 'number',
        },
      ],
      perform: fetchListings,
    },
  },
  noun: 'Secondary Note Listing',
  outputFields: [
    {
      key: 'id',
      label: 'ID',
      type: 'integer',
    },
    {
      key: 'noteId',
      label: 'Note ID',
      type: 'integer',
    },
    {
      key: 'loanId',
      label: 'Loan ID',
      type: 'integer',
    },
    {
      key: 'outstandingPrincipal',
      label: 'Outstanding Principal',
      type: 'number',
    },
    {
      key: 'accruedInterest',
      label: 'Accrued Interest',
      type: 'number',
    },
    {
      key: 'loanStatus',
      label: 'Loan Status',
      type: 'string',
    },
    {
      key: 'price',
      label: 'Price',
      type: 'number',
    },
    {
      key: 'markupOrDiscount',
      label: 'Markup or Discount',
      type: 'number',
    },
    {
      key: 'yieldToMaturity',
      label: 'Yield to Maturity',
      type: 'number',
    },
    {
      key: 'daysSinceLastPayment',
      label: 'Days Since Last Payment',
      type: 'integer',
    },
    {
      key: 'creditScoreTrend',
      label: 'Credit Score Trend',
      type: 'string',
    },
    {
      key: 'ficoEndRangeHigh',
      label: 'FICO End Range (High)',
      type: 'integer',
    },
    {
      key: 'ficoEndRangeLow',
      label: 'FICO End Range (Low)',
      type: 'integer',
    },
    {
      key: 'listingStartDate',
      label: 'Listing Start Date',
      type: 'datetime',
    },
    {
      key: 'expirationDate',
      label: 'Expiration Date',
      type: 'datetime',
    },
    {
      key: 'isNeverLate',
      label: 'Is Never Late?',
      type: 'boolean',
    },
    {
      key: 'subGrade',
      label: 'SubGrade',
      type: 'string',
    },
    {
      key: 'term',
      label: 'Term',
      type: 'integer',
    },
    {
      key: 'originalNoteAmount',
      label: 'Original Note Amount',
      type: 'number',
    },
    {
      key: 'interestRate',
      label: 'Interest Rate',
      type: 'number',
    },
    {
      key: 'remainingPayments',
      label: 'Remaining Payments',
      type: 'integer',
    },
    {
      key: 'applicationType',
      label: 'Application Type',
      type: 'string',
    },
  ],
  sample: {
    accruedInterest: 0.06858636284075,
    applicationType: 'INDIVIDUAL',
    creditScoreTrend: 'DOWN',
    daysSinceLastPayment: 130,
    expirationDate: new Date('2017-01-16T00:00:00.000-08:00'),
    ficoEndRangeHigh: 604,
    ficoEndRangeLow: 600,
    id: 44480407,
    interestRate: 0.1825,
    isNeverLate: false,
    listingStartDate: new Date('2017-01-09T14:35:53.000-08:00'),
    loanStatus: 'Late (31-120 days)',
    markupOrDiscount: -0.5343,
    noteId: 44480407,
    originalNoteAmount: 25.0,
    outstandingPrincipal: 0.790297895,
    price: 0.4,
    remainingPayments: 1,
    subGrade: 'D3',
    term: 36,
    yieldToMaturity: null,
  },

};
