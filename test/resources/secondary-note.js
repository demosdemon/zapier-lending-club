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

const should = require('should');
const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

const {load} = require('dotenv');
load();
const {baseUrl} = require('../../lib/constants');

describe('My App', function() {
  it('should run resources.secondary_note', function(done) {
    this.timeout(1000 * 30);

    const bundle = {
      authData: {
        apiKey: process.env.LENDING_CLUB_API_KEY,
        baseUrl,
        investorId: Number(process.env.LENDING_CLUB_INVESTOR_ID),
      },
      inputData: {},
    };
    debugger; // eslint-disable-line no-debugger
    appTester(App.resources.secondary_note.list.operation.perform, bundle)
      .then(results => {
        should.exist(results);
        done();
      })
      .catch(done);
  });
});
