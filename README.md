# is-furry
Checks if a string has "owo" or "uwu" in it (or replaces the matches). Various options and multiple strictness settings from "owo" to "0,w u"

## Setup
- Install the module
    > npm install is-furry
    or using `yarn`
    > yarn add is-furry
- Use it in your code
```js
import isFurry from 'is-furry'
// Or using CommonJS
const { default: isFurry } = require('is-furry')
```

## Options
The values shown in this example are the defaults. Custom options will overwrite the defaults.
```js
isFurry('Is this message furry owo', {
    fold: false,
    // Whether to use `fold-to-ascii` to detect more characters,
    foldMode: 'keep',
    /* If set to 'replace', non-ascii characters that could not be turned into ascii will 
       be replaced with the string specified in 'foldReplacement' */
    foldReplacement: '',
    // String to replace unknown characters with (if using 'replace' in 'foldMode')
    outputMode: 'boolean',
    /* Which output mode to use:
       'boolean' - returns either true or false
       'number' - returns the amount of detected words (no overlap)
       'string' - replaces owo or uwu with value specified in 'outputReplacement'. 
       'array' - returns an array of detected words. Empty array if no words are found */
    outputReplacement: '',
    /* String to replace detected words with (if using 'string' in 'outputMode').
       Use '$&' for the matched word (for example, if you want to replace 'owo' 
       with '~~owo~~' you should use '~~$&~~') */
    strictness: 1, 
    /* Strictness ranging from 0 to 2 (more may be coming in the future):
       0 - basic. Detects exactly 'owo' or 'uwu'
       1 - regular. Detects 'owu', 'uwo', '0w0' and such
       2 - strict. Ignores some characters between letters. Will detect '0,,**w**uuuu'
    */
    checkWordBoundaries: true,
    /* Whether to ignore matches that aren't their own word:
       false - would detect 'owo' in 'coworker'
       true - would not detect 'owo' in 'coworker' */
})
```

## Keeping options
If you need to do this a lot, having to include out the options every time is not ideal. It's a better idea to create an object to store your options.
```js
const isFurryOptions = {
    fold: true,
    outputMode: 'replace',
    outputReplacement: '**$&**',
    strictness: 1,
    checkWordBoundaries: true
}

isFurry('message owo', isFurryOptions) // => 'message **owo**'
```

## License
The project is licensed under [MIT](https://gitlab.com/Wait_What_/is-furry/-/blob/master/LICENSE.md)

## Contributing
If you would like to contribute to this package, please read the [contributing guide](https://gitlab.com/Wait_What_/is-furry/-/blob/master/CONTRIBUTING.md).

Thanks to [jakobkg](https://gitlab.com/jakobkg) for [improving the typings](https://gitlab.com/Wait_What_/is-furry/-/merge_requests/1)!

## Support
Add me on Discord `Wait What#4975` or [join my Discord server](https://discord.gg/N8Fqcuk)
