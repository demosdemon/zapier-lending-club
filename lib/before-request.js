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

const zapier = require('zapier-platform-core');

/**
 * Appends the API Key to the headers for every request.
 *
 * @param {zapier.HttpRequestOptions} request - The HTTP request to ammend.
 * @param {zapier.zObject} z - The Zapier object.
 * @param {zapier.Bundle} bundle - The Zapier bundle containing the API key.
 * @returns {zapier.HttpRequestOptions} The modified request object.
 */
const beforeRequest = (request, z, bundle) => {
  const {apiKey} = bundle.authData;
  request.headers.Authorization = apiKey;
  return request;
};

module.exports = exports = beforeRequest;
