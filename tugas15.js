function Segitiga() {
    var ab = 8;
    var bc = 6;
    console.log('Nilai AB : ',ab);
    console.log('Nilai BC : ',bc);

     var step1 = Math.pow(ab,2) + Math.pow(bc,2);
     let ac = Math.sqrt(step1);
     console.log('panjang sisi AC pada segitiga siku-siku tersebut adalah : ', ac,'cm');
}
Segitiga()