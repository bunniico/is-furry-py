import folder from 'fold-to-ascii'

const expressions = {
    boundaries: [
        /\b(owo|uwu)\b/gi,
        /\b[oо0u🇴🇺]+[w🇼]+[oо0u🇴🇺]+\b/gi,
        /\b[oо0u🇴🇺]+[\s.,*_-`\\]*[w🇼]+[\s,.*_-`\\]*[oо0u🇴🇺]+/gi
    ],
    noBoundaries: [
        /(owo|uwu)/gi,
        /[oо0u🇴🇺]+[w🇼]+[oо0u🇴🇺]+/gi,
        /[oо0u🇴🇺]+[\s.,*_-`\\]*[w🇼]+[\s,.*_-`\\]*[oо0u🇴🇺]+/gi
    ]
}

const defaultOptions = {
    fold: false,
    foldMode: 'keep',
    foldReplacement: '',
    outputMode: 'boolean',
    outputReplacement: '',
    strictness: 1,
    checkWordBoundaries: false
}

export default (string: string, options: typeof defaultOptions) => {
    if (!string || string.length < 1) return ''

    options = { ...defaultOptions, ...(options || {}) }

    if (typeof options.foldReplacement != 'string')
        throw new Error('isFurryError: Invalid foldReplacement: must be a string or undefined')
        
    if (typeof options.outputReplacement != 'string')
        throw new Error('isFurryError: Invalid outputReplacement: must be a string or undefined')

    if (isNaN(options.strictness) || options.strictness < 0 || options.strictness > 2)
        throw new Error('isFurryError: Invalid strictness: must be a number from 0 to 2')

    if (!['string', 'boolean', 'array', 'number'].includes(options.outputMode))
        throw new Error('isFurryError: Invalid outputMode: must be "string", "boolean", "array" or "number"')

    if (options.fold) {
        if (options.foldMode == 'keep') string = folder.foldMaintaining(string)
        else if (options.foldMode == 'replace') string = folder.foldReplacing(string, options.foldReplacement)
        else throw new Error('isFurryError: Invalid foldMode: must be "keep" or "replace"')
    }

    const regex = expressions[`${!options.checkWordBoundaries ? 'noB' : 'b'}oundaries`][options.strictness]

    return (
        options.outputMode == 'boolean' ? (string.match(regex) || []).length > 0 :
        options.outputMode == 'number' ? (string.match(regex) || []).length :
        options.outputMode == 'array' ? (string.match(regex) || []) :
        options.outputMode == 'string' ? string.replace(regex, options.outputReplacement) : 0
    )
}
