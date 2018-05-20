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

const options = require('../.eslintrc');

options.env.mocha = true;
options.rules['func-names'] = 'off';
options.rules['no-invalid-this'] = 'off';
options.rules['node/no-unpublished-require'] = 'off';
options.rules['prefer-arrow-callback'] = 'off';

Object.getOwnPropertyNames(options.rules).forEach(rule => {
  if (rule.search(/jsdoc/i))
    options.rules[rule] = 'off';
})

module.exports = exports = options;
