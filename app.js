function sleep(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

async function demo() {
  console.log('Taking a break..');
  await sleep(2000);
  console.log('Two seconds later');
}

demo();

