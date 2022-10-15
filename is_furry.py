import re

expressions = {
    'with_boundaries':
        {
            r"\b(owo|uwu)\b",
            r"\b[oо0u🇴🇺]+[w🇼]+[oо0u🇴🇺]+\b",
            r"\b[oо0>u🇴🇺^]+[\s.,*_-`\\]*[w3🇼]+[\s,.*_-`\\]*[oо0^<u🇴🇺]"
        },
    'without_boundaries':
        {
            r"(owo|uwu)",
            r"[oо0>u🇴🇺^]+[\s.,*_-`\\]*[w3🇼]+[\s,.*_-`\\]*[oо0^<u🇴🇺]"
        }
}


def evaluate(message: str, check_word_boundaries: bool = False) -> bool:
    """Evaluate if a message is furry-like

    :param check_word_boundaries: Should word boundaries be checked?
    :param message: The message to evaluate
    :type message: str
    :return: True if the message is furry-like, False otherwise
    :rtype: bool
    """

    # Type Checking
    if not isinstance(message, str):
        raise TypeError("message must be a string")

    if not isinstance(check_word_boundaries, bool):
        raise TypeError("check_word_boundaries must be a boolean")

    # Evaluate expressions
    if check_word_boundaries:
        for expression in expressions["with_boundaries"]:
            if re.search(expression, message) is not None:
                return True
    else:
        for expression in expressions["without_boundaries"]:
            result = re.search(expression, message, re.IGNORECASE)
            if result is not None:
                return True
    return False


if __name__ == '__main__':
    print("OwO")
