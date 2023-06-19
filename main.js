// this is the multiplication table of 1-10!

for (i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    var x = `${i} x ${j} = ${i * j}`;
    console.log(x);
    console.log("--");
  }
}

//This is the multiplication table of expected number (inputed)

function mpTable(num) {
  for (i = 1; i <= 10; i++) {
    var product = num * i;
    console.log(num + "x" + i + "=" + product);
  }
}
mpTable(5);
// mpTable(4);
// mpTable(11);
