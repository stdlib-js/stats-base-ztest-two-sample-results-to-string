/** @license Apache-2.0 */

'use strict';

/**
* Serialize a two-sample Z-test results object as a formatted string.
*
* @module @stdlib/stats-base-ztest-two-sample-results-to-string
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var res2str = require( '@stdlib/stats-base-ztest-two-sample-results-to-string' );
*
* var results = {
*     'rejected': true,
*     'alpha': 0.05,
*     'pValue': 0.0132,
*     'statistic': 2.4773,
*     'nullValue': 0.0,
*     'xmean': 3.7561,
*     'ymean': 3.0129,
*     'ci': new Float64Array( [ 0.1552, 1.3311 ] ),
*     'alternative': 'two-sided',
*     'method': 'Two-sample Z-test'
* };
*
* var str = res2str( results );
* // returns <string>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
