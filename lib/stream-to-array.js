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

const Promise = require('bluebird');
const stream = require('stream');

/**
 * Filters elements in the `streamToArray` function.
 *
 * @typedef {(x: any) => boolean} streamToArrayCallback
 */

/**
 * Reads the readable stream into an array.
 *
 * @param {stream.Readable} readableStream - The readable stream.
 * @param {streamToArrayCallback} callback - Handle the record before inserting into the list.
 * @returns {Buffer[] | any[]} The readable stream as an array.
 */
const streamToArray = function streamToArray(readableStream, callback) {
  const result = [];

  return new Promise((resolve, reject) => {
    readableStream
      .on('readable', () => {
        let data;
        try {
          while ((data = readableStream.read())) {
            data.id = data.noteId;

            if (typeof callback === 'function') {
              if (callback(data))
                result.push(data);
            }
            else
              result.push(data);
          }
        }
        catch (err) {
          reject(err);
        }
      })
      .on('error', reject)
      .on('end', () => resolve(result));
  });
};

module.exports = exports = streamToArray;

