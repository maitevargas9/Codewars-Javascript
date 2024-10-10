function stringsRearrangement(arr) {
  const foo = (a, b) =>
    [...a].reduce((pre, val, idx) => pre + (val !== b[idx]), 0) === 1;
  const bar = (a, b) =>
    !b.length ||
    b.some(
      (val, idx) =>
        foo(a[0], val) &&
        bar(
          [val, ...a],
          b.filter((_, i) => i !== idx)
        )
    );
  return arr.some((val, idx) =>
    bar(
      [val],
      arr.filter((_, i) => i !== idx)
    )
  );
}
