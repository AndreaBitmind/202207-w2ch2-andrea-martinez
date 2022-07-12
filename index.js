const a = 1;
const b = 1;
let result;

const strictEquals = function strictEquals(a, b) {
  if (Object.is(a, b)) {
    return true;
  }
};

strictEquals();
