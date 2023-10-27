const num = process.argv[2];

if (!num) {
  console.log('Please provide a number as a command-line argument.');
  process.exit(1);
}

const parsedNum = parseInt(num);

if (isNaN(parsedNum)) {
  console.log('Please enter a valid number.');
} else {
  console.log(`Multiplication Table for ${parsedNum}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${parsedNum} x ${i} = ${parsedNum * i}`);
  }
  
  if (parsedNum < 0) {
    console.log('Note: This is the multiplication table for a negative number.');
  }
}
