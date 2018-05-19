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

require('should');
const {load} = require('dotenv');
const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('App.authentication', function() {
  it('should pass authentication', function(done) {
    load();

    const bundle = {
      authData: {
        apiKey: process.env.LENDING_CLUB_API_KEY,
        investorId: Number(process.env.LENDING_CLUB_INVESTOR_ID),
      },
    };

    appTester(App.authentication.test, bundle)
      .then(function(jsonResponse) {
        jsonResponse.should.have.property('investorId');
        done();
      })
      .catch(done);
  });
  // intentionally blank
});