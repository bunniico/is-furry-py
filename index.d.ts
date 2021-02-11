declare module 'is-furry' {
  type isFurryMinOptions = {
    fold?: boolean,
    foldMode?: 'keep' | 'replace',
    foldReplacement?: string,
    outputReplacement?: string,
    strictness?: 0 | 1 | 2,
    checkWordBoundaries?: boolean
  }

  type isFurryOptionsBoolReturn = isFurryMinOptions & { outputMode: 'boolean' }

  type isFurryOptionsNumReturn = isFurryMinOptions & { outputMode: 'number' }

  type isFurryOptionsStringReturn = isFurryMinOptions & { outputMode: 'string' }

  type isFurryOptionsArrayReturn = isFurryMinOptions & { outputMode: 'array' }

  export type isFurryOptions = isFurryOptionsBoolReturn | isFurryOptionsNumReturn | isFurryOptionsStringReturn | isFurryOptionsArrayReturn;

  type isFurryReturnType<T> = T extends isFurryOptionsArrayReturn
    ? string[]
    : T extends isFurryOptionsNumReturn
    ? number
    : T extends isFurryOptionsStringReturn
    ? string
    : boolean;

  export default function<T extends isFurryMinOptions>(string: string, options?: T): isFurryReturnType<T>;
}