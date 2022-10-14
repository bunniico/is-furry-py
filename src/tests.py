import is_furry

tests: list = \
    [
        ["hello", False],
        ["hello owo", True],
        ["hello uwu", True],
        ["hello owo uwu", True],
        ["hello nowo", True],
        ["hello nowo", False, True],
        ["hello owo", True]
    ]

for test in tests:
    if len(test) > 2:
        result = is_furry.evaluate(test[0], test[2])
    else:
        result = is_furry.evaluate(test[0])

    if result != test[1]:
        print(f"Test failed: {test[0]}")
        print(f"Expected: {test[1]}")
        print(f"Actual: {result}")
        exit(1)
    else:
        print(f"Test passed: {test[0]}")
