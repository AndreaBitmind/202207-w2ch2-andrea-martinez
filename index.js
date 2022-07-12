const strictEquals = function strictEquals(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }

  if (Object.is(a, b)) {
    return true;
  }
};

strictEquals();

console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, "1"));
console.log(strictEquals(true, false));
console.log(strictEquals(false, true));
console.log(strictEquals("Water", "oil"));
