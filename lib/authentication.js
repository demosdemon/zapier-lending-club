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

/**
 * The Lending Club Base Url
 */
const BASE_URL = 'https://api.lendingclub.com/api/investor/v1';

module.exports = exports = {
  // assuming "username" is a key in the json returned from testAuth
  connectionLabel: (z, bundle) => bundle.authData.investorId,
  // Define any auth fields your app requires here. The user will be prompted to enter this info when
  // they connect their account.
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
      default: BASE_URL,
      key: 'baseUrl',
      label: 'Lending Club Base URL',
      required: true,
      type: 'string',
    },
  ],
  // The test method allows Zapier to verify that the credentials a user provides are valid. We'll execute this
  // method whenver a user connects their account for the first time.
  test: '{{bundle.authData.baseUrl}}/accounts/{{bundle.authData.investorId}}/summary',
  type: 'custom',
};
