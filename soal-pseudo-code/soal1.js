for (let i = 50; i <= 100; i += 5) {
  let status = '';

  if (i <= 60) {
    status = 'KURANG';
  } else if (i > 60 && i <= 70) {
    status = 'CUKUP';
  } else if (i > 70 && i <= 80) {
    status = 'BAIK';
  } else {
    status = 'LUAR BIASA';
  }

  console.log(`${i} ${status}`);
}
