/**
 *    Copyright 2018 LeBlanc Codes, LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *     Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const {baseUrl} = require('./constants');

module.exports = exports = {
  connectionLabel: '{{bundle.authData.investorId}}',

  fields: [
    {
      key: 'apiKey',
      label: 'API Key',
      required: true,
      type: 'string',
    },
    {
      key: 'investorId',
      label: 'Investor ID',
      required: true,
      type: 'integer',
    },
    {
      default: baseUrl,
      key: 'baseUrl',
      label: 'Lending Club Base URL',
      required: true,
      type: 'string',
    },
  ],
  test: {
    url: '{{bundle.authData.baseUrl}}/accounts/{{bundle.authData.investorId}}/summary',
  },
  type: 'custom',
};
