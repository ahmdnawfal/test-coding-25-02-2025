function terbilang(x) {
  const angka = [
    '',
    'Satu',
    'Dua',
    'Tiga',
    'Empat',
    'Lima',
    'Enam',
    'Tujuh',
    'Delapan',
    'Sembilan',
  ];
  const belasan = [
    'Sepuluh',
    'Sebelas',
    'Dua Belas',
    'Tiga Belas',
    'Empat Belas',
    'Lima Belas',
    'Enam Belas',
    'Tujuh Belas',
    'Delapan Belas',
    'Sembilan Belas',
  ];
  const puluhan = [
    '',
    'Sepuluh',
    'Dua Puluh',
    'Tiga Puluh',
    'Empat Puluh',
    'Lima Puluh',
    'Enam Puluh',
    'Tujuh Puluh',
    'Delapan Puluh',
    'Sembilan Puluh',
  ];

  let ribu = Math.floor(x / 1000);
  let ratus = Math.floor((x % 1000) / 100);
  let puluh = Math.floor((x % 100) / 10);
  let satuan = x % 10;

  let hasil = `${angka[ribu]} Ribu `;
  hasil += ratus ? `${angka[ratus]} Ratus ` : '';
  hasil += puluh === 1 ? `${belasan[satuan]} ` : `${puluhan[puluh]} `;
  hasil += puluh !== 1 && satuan > 0 ? `${angka[satuan]}` : '';

  return hasil.trim();
}

console.log(terbilang(2234));
console.log(terbilang(8500));
console.log(terbilang(7001));
