<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# res2str

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Serialize a two-sample Z-test results object as a formatted string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import res2str from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-two-sample-results-to-string@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-ztest-two-sample-results-to-string/tags). For example,

```javascript
import res2str from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-two-sample-results-to-string@v0.1.1-esm/index.mjs';
```

#### res2str( results\[, options] )

Serializes a two-sample Z-test results object as a formatted string.

```javascript
import Float64Results from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-two-sample-results-float64@esm/index.mjs';

var results = new Float64Results();

// ...

var s = res2str( results );
// returns <string>
```

The function supports the following parameters:

-   **results**: two-sample Z-test results object.
-   **options**: function options.

The function supports the following options:

-   **digits**: number of digits to display after decimal points. Default: `4`.
-   **decision**: boolean indicating whether to show the test decision. Default: `true`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Example output:

    ```text

    Two-sample Z-test

    Alternative hypothesis: True difference in means is less than 1.0

        pValue: 0.0406
        statistic: 9.9901
        95% confidence interval: [9.7821, 10.4451]

    Test Decision: Reject null in favor of alternative at 5% significance level

    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Float64Results from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-two-sample-results-float64@esm/index.mjs';
import resolveEnum from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-alternative-resolve-enum@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import res2str from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-two-sample-results-to-string@esm/index.mjs';

var results = new Float64Results();
results.rejected = true;
results.alpha = 0.05;
results.pValue = 0.0132;
results.statistic = 2.4773;
results.nullValue = 0.0;
results.xmean = 3.7561;
results.ymean = 3.0129;
results.ci = new Float64Array( [ 0.1552, 1.3311 ] );
results.alternative = resolveEnum( 'two-sided' );

var s = res2str( results );
console.log( s );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-ztest-two-sample-results-to-string.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-ztest-two-sample-results-to-string

[test-image]: https://github.com/stdlib-js/stats-base-ztest-two-sample-results-to-string/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/stats-base-ztest-two-sample-results-to-string/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-ztest-two-sample-results-to-string/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-ztest-two-sample-results-to-string?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-ztest-two-sample-results-to-string.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-ztest-two-sample-results-to-string/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-ztest-two-sample-results-to-string/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-ztest-two-sample-results-to-string/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-ztest-two-sample-results-to-string/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-ztest-two-sample-results-to-string/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-ztest-two-sample-results-to-string/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-ztest-two-sample-results-to-string/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-ztest-two-sample-results-to-string/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-ztest-two-sample-results-to-string/main/LICENSE

</section>

<!-- /.links -->
