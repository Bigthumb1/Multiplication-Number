// this is the multiplication table of 1-10!

for (i = 1; i <= 10; i++) {
  console.log(`\n Multiplication table of ${i} \n`);
  for (j = 1; j <= 10; j++) {
    result = i * j;
    console.log(`${i} x ${j} = ${result}`);
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
