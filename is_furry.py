import re

expressions = \
    {
        'True':
            {
                r"\b(owo|uwu)\b",
                r"\b[oо0u🇴🇺]+[w🇼]+[oо0u🇴🇺]+\b",
                r"\b[oо0>u🇴🇺^]+[\s.,*_-`\\]*[w3🇼]+[\s,.*_-`\\]*[oо0^<u🇴🇺]\b"
            },
        'False':
            {
                r"(owo|uwu)",
                r"[oо0u🇴🇺]+[w🇼]+[oо0u🇴🇺]",
                r"[oо0>u🇴🇺^]+[\s.,*_-`\\]*[w3🇼]+[\s,.*_-`\\]*[oо0^<u🇴🇺]"
            }
    }


def evaluate(message: str, word_boundaries: bool = False) -> bool:
    """Returns True if the message contains an OwO-like expression.

    :param word_boundaries: enable/disable boundary checks
    :param message: message to be evaluated
    :return: True if the message contains an 'owo'-like expression
    """

    for expression in expressions[str(word_boundaries)]:
        if re.search(expression, message, re.IGNORECASE):
            return True

    return False
