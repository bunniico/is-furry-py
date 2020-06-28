import isFurry from './index'

// String, options, function to test result
const tests = [
    // Boolean
    [ 'hello', {}, result => result === false ],
    [ 'hello owo', {}, result => result === true ],

    // Boolean with folding
    [ 'hello öwö', {}, result => result === false ],
    [ 'hello öwö', { fold: true }, result => result === true ],

    // Boolean with boundaries
    [ 'hello nowo', {}, result => result === true ],
    [ 'hello nowo', { checkWordBoundaries: true }, result => result === false ],

    // Boolean with strictness 0
    [ 'hello owo', { strictness: 0 }, result => result === true  ],
    [ 'hello 0w0', { strictness: 0 }, result => result === false  ],

    // Boolean with strictness 2
    [ 'hello o0,,\nw**uuUU**', { strictness: 2 }, result => result === true  ],

    // String
    [ 'hello owo', { outputMode: 'string', outputReplacement: 'yum' }, result => result === 'hello yum' ],
    [ 'hello owo', { outputMode: 'string', outputReplacement: '.$&.' }, result => result === 'hello .owo.' ],

    // Array
    [ 'hello', { outputMode: 'array' }, result => result.join(',') === '' ],
    [ 'hello owo uwu', { outputMode: 'array' }, result => result.join(',') === 'owo,uwu' ],

    // Number
    [ 'hello', { outputMode: 'number' }, result => result === 0 ],
    [ 'hello owo uwu', { outputMode: 'number' }, result => result === 2 ]
]

let testId = 1
let fail = false
tests.forEach((test: any[]) => {
    const result = test[2](isFurry(test[0], test[1]))
    console.log(`Test ${testId++} ${result ? 'passed' : 'failed'}`)
    if (!result) fail = true
})

fail ? console.error('Fail') : console.log('Pass')