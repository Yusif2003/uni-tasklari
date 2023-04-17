function eded(a, b) {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    a++;
    if (a % 3 == 0 && a % 5 == 0) {
      sum += a;
    }
  }
  console.log(sum);
}
eded(1, 100);
