/**
 *    Copyright 2018 LeBlanc Codes, LLC
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

const csv = require('csv');
const zapier = require('zapier-platform-core');
const streamToArray = require('../../stream-to-array');

const {hasOwnProperty} = Object.prototype;

/**
 * Parses the CSV number value.
 *
 * @param {string} x - The input string.
 * @returns {number} The parsed number value.
 */
const number = x => Number(x);

/**
 * Returns the string untouched.
 *
 * @param {string} x - The input string.
 * @returns {string} The input string.
 */
const identity = x => String(x);

/**
 * Returns the CSV date parsed.
 *
 * @param {string} x - The input string.
 * @returns {Date} The parsed date.
 */
const newDate = x => new Date(x);

/**
 * Parses a boolean-like string.
 *
 * @param {string} x - The input string.
 * @returns {boolean} The parsed result.
 */
const bool = x => {
  x = x.toString()
    .toLocaleLowerCase();
  return x === 'true' || x === 'yes' || x === '1' || x === 'on';
};

const csvPropertyMap = {
  accruedInterest: number,
  applicationType: identity,
  creditScoreTrend: identity,
  daysSinceLastPayment: number,
  expirationDate: newDate,
  ficoEndRangeHigh: number,
  ficoEndRangeLow: number,
  interestRate: number,
  isNeverLate: bool,
  listingStartDate: newDate,
  loanId: number,
  loanStatus: identity,
  markupOrDiscount: number,
  noteId: number,
  originalNoteAmount: number,
  outstandingPrincipal: number,
  price: number,
  remainingPayments: number,
  subGrade: identity,
  term: number,
  yieldToMaturity: number,
};

/**
 * Cast each column value to it's appropriate value.
 *
 * @param {string} input - The csv column input.
 * @param {{column: string, header: boolean}} context - The csv context.
 * @returns {number | string | Date | boolean} The parsed csv row.
 */
const cast = (input, context) => {
  if (context.header)
    return input;
  const {column} = context;

  if (hasOwnProperty.call(csvPropertyMap, column)) {
    const func = csvPropertyMap[column];
    return func(input);
  }

  return input;
};

/**
 * @typedef {Object} SecondaryNoteListing
 * @property {number} noteId
 * @property {number} loanId
 * @property {number} outstandingPrincipal
 * @property {number} accruedInterest
 * @property {string} loanStatus
 * @property {number} price
 * @property {number} markupOrDiscount
 * @property {number} yieldToMaturity
 * @property {number} daysSinceLastPayment
 * @property {string} creditScoreTrend
 * @property {number} ficoEndRangeHigh
 * @property {number} ficoEndRangeLow
 * @property {Date} listingStartDate
 * @property {Date} expirationDate
 * @property {boolean} isNeverLate
 * @property {string} subGrade
 * @property {number} term
 * @property {number} originalNoteAmount
 * @property {number} interestRate
 * @property {number} remainingPayments
 * @property {string} applicationType
 */

/**
 * Fetches the secondary market listings.
 *
 * @param {zapier.zObject} z - The z object.
 * @param {zapier.Bundle} bundle - The zapier bundle.
 * @returns {SecondaryNoteListing[]} The secondary market listings.
 */
const fetchListings = (z, bundle) => {
  const params = {
    updatedSince: 24 * 60 * 3,
  };

  if (bundle.meta.test_poll)
    params.updatedSince = 5;

  if (!bundle.meta.first_poll)
    params.updatedSince = 30;

  let filter = identity;

  if (bundle.inputData.loanId)
    filter = x => x.loanId === bundle.inputData.loanId;

  if (bundle.inputData.markupOrDiscount)
    filter = x => filter(x) && x.markupOrDiscount <= bundle.inputData.markupOrDiscount;

  const requestObject = {
    headers: {
      Accept: 'text/csv',
    },
    params,
    raw: true,
    url: '{{bundle.authData.baseUrl}}/secondarymarket/listings',
  };

  const parseOptions = {
    cast,
    columns: true,
  };

  return z
    .request(requestObject)
    .then(rawResponse => rawResponse.body.pipe(csv.parse(parseOptions)))
    .then(pipe => streamToArray(pipe, filter));
};

module.exports = exports = fetchListings;
