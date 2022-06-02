// JS --> tek satırlık yorumlama
/*çok satırlı yorumlama (multi-line comment) */

//console.log("Merhaba")
// pop-up alert
/* alert("deneme")
window.alert("deneme window") */

/////////////////////////////////////
// window >> Hepsi
// document >> HTML

// alert("pop-up")
//alert("windows pop-up")
// console.log("asd")

// document.write("deneme")
/////////////////////////////////////

/* Kullanıcan Veri Almak
var name = prompt("Adınız");
console.log(name) 
*/

/////////////////////////////////////
// Variable
// var isim = "Yiğit";
// isim = "Yiğit Ö"; // String
// isim = true; // boolen
// isim = 44; // number - int
// console.log(isim);

// var soyisim = "Özen";
// $soyisim = "Özen"
// console.log(soyisim);

// camselCase ile değişken adlarını oluşturalım
// unique
// İngilizce kelimler

/////////////////////////////////////
// JS " ", '' , ` `, " ' ' " 

// variable initialization
// var deneme;  undefined - tanımsız
// console.log(deneme)

/////////////////////////////////////
// Operator
// logic operator         :  && = VE || = VEYA
// mathematics operator   :  + - * / %
// comparations(karşılaştırma) operators : > >= < <= ! == 
// = atama , == eşittir, === eşitmi (türüne bak)
// postfix --> x++, ++x, y--, --y

// bit < byte < GB < TB
// 1 byte = 8 bit
// 1 bit = 0
// Binary Codes
// Octal (8) --> (01234567)
// decimal (10) --> (0123456789)
// hexadecmal (16) --> (0123456789abcdef)

/////////////////////////////////////
// var result = "Malatya";
// console.log(typeof(result)) // typeof --> tür bulmak içn

// var result2 = 44;
// console.log(typeof(result2))

// var result = "Malatya";
// console.log(typeof(result))

// var result3 = 4>1;
// console.log(typeof result3 )

////////////////////////////////////
// Örnek-1
// var x1, x2, x3;
// x1 = 9;
// x2 = 2;
// x3 = x1 + x2;
// console.log("Toplam : " + x3)

// x3 = x1 * x2;
// console.log(x3)

// x3 = x1 / x2;
// console.log(x3)

// x3 = x1 % x2;
// console.log(x3)

////////////////////////////////////

// CAST : dönüştürmek
// string number boolen 
// database - api - socket : Database'den veya apiden gelen değerler string'dir fakat biz bunları int dönüştürmek isteyebiliriz.

// Number()
// String()
// var x1 = Number(prompt("Lütfen bir sayı giriniz :"));
// console.log(x1 * x1);

////////////////////////////////////

// undefined : tanımlı değer vermezsek bu sorunu yaşarız
// var x1;
// console.log(x1)

// NaN : sayı değil
// var x2 = 9/"asd";
// console.log(x2);

// İsNaN


// Infinity : sonsuz
// var3 = 8 / 0;
// console.log(var3);

// new : ram hafızasında yer açmak (Doğar)

// null : hafızayı boşaltmak - boş değer döndüğünde
// x4 = null;

// sıfır : bir değeri vardır, çarpmada yutan , toplamada etkisiz elemandır

////////////////////////////////////
// escape karakter
console.log("\"");
console.log("'");


////////////////////////////////////
// Math : static 

// sabitler
// document.write(Math.PI + "<br>")
// document.write(Math.E + "<br>")

//  Math
// document.write(Math.random() + "<br>");
// document.write(Math.min(5,2,5,21,-525) + "<br>");
// document.write(Math.max(5,2,5,2151,-525)+ "<br>");
// document.write(Math.sqrt(16) + "<br>")
// document.write(Math.pow(2,5) + "<br>")
// document.write(Math.abs(-4)+ "<br>") // mutlak değer

// // yuvarlama
// document.write(Math.floor(3.9)+ "<br>") // aşağı yuvarlar
// document.write(Math.ceil(5.1)+ "<br>") // yukarı yuvarlar
// document.write(Math.round(2.5) + "<br>")

// Kullanıcıda tarafından aldığımız 2 tane sayının
// s1-) Bu sayılardan en küçüğü nedir ?
// s2-) Bu sayılardan en büyüğü nedir ?
// s3-) Bu sayılardan en büyüğü karekökü nedir ?
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// s5-) Bu sayılardan en küçüğü mutlak nedir ?
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım

// ödev - ters değiştir
// Kullanıcıda tarafından aldığımız 2 tane sayının
// s1-) Bu sayılardan en küçüğü nedir ?
// s2-) Bu sayılardan en büyüğü nedir ?
// s3-) Bu sayılardan en büyüğü karekökü nedir ?
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// s5-) Bu sayılardan en küçüğü mutlak nedir ?
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım

// document.write("-------------------------" + "<br>")

// var number1 = Number(prompt("1.sayıyı giriniz"));
// var number2 = Number(prompt("2. sayıyı giriniz"));

// // s1-) Bu sayılardan en küçüğü nedir ?
// document.write("En küçüğü : " + Math.min(number1,number2) + "<br>")
// // s2-) Bu sayılardan en büyüğü nedir ?
// document.write("En büyüğü : " + Math.max(number1,number2) + "<br>")

// // s3-) Bu sayılardan en büyüğü karekökü nedir ?
// document.write("En büyüğü karekök : " + Math.sqrt(Math.abs(Math.max(number1,number2))) + "<br>")

// // s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// document.write("En küçü karekök : " + Math.ceil(Math.sqrt(Math.max(number1,number2))) + "<br>")

// // s5-) Bu sayılardan en küçüğü mutlak nedir ?
// document.write("En küçüğü mutlak değer : " + Math.abs(Math.min(number1,number2)) + "<br>")

// // s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım
// document.write(
//     Math.pow(Math.abs(Math.min(number1,number2)), Math.abs(Math.max(number1,number2))) + "<br>"
// )


////////////////////////////////////
// Number
// var number = 44;
// document.write(number + "<br>");

// var bilimsel = 14E+5; // 14 üzeri 10 üzeri 5
// bilimsel = 14E-5; // sondan 5 sıfır kaydırır
// document.write(bilimsel + "<br>") ;

// // Sayı Sistemleri: 2,8,16 ==> onluk tabanda gösterimi
// // 16 tabanda 10 tabanına çevirme

// // 2'lik tabanda 10 tabanına çevirme
// var binary = 0b00111;
// document.write("2'lik tabanda : " + binary + "<br>");

// var octal = 070111;
// document.write("8'lik tabanda : " + octal + "<br>");

// // 16 tabanda 10 tabanına çevirme
// var hexadecimal = 0xFF;
// document.write("16'lık tababanda : " + hexadecimal + "<br>");


// // 10'luk tabandan diğer tabanlara
// var decimal = 10;
// document.write(decimal.toString(2) + "<br>")
// document.write(decimal.toString(8) + "<br>")
// document.write(decimal.toString(16) + "<br>")

// // CAST
// var castNumber = "14";
// document.write(castNumber + castNumber  + "<br>")
// document.write(Number(castNumber) + Number(castNumber)  + "<br>");

// // Nan : Not a Number
// document.write("result : " + (16/"asd")  + "<br>");

// // İsNan : Bu bir sayımıdır, bu bir sayı değilmidir
// // isNaN = false ise burdaki yapı sayıdır
// // isNaN = true ise burdaki yapı sayı değildir
// var numberx = 200/"asd";
// document.write("result2 : " + isNaN(numberx)  + "<br>");

////////////////////////////////////
// String
// Dikkat : length aç akapa parantez yok
// var kelime = "html5 css3 responsive Bootstrap JAVASCRIPT ";
// document.write(kelime + "<br>");
// document.write("Harf sayısı  :" + kelime.length + "<br>");  // baştaki ve sondaki boşlukları almaz
// document.write("trimlenmiş harf sayısı  :" + kelime.trim().length + "<br>"); 

// document.write("Hepsi küçük harf  :" + kelime.toLocaleLowerCase() + "<br>"); 
// document.write("Hepsi büyük harf  :" + kelime.toUpperCase() + "<br>");  

// document.write("startsWith  : " + kelime.startsWith('h') + "<br>"); //bu harf ilemi başlıyor
// document.write("endWith  : " + kelime.endsWith(' ') + "<br>"); //bu harf ilemi bitiyor

// document.write("concat  : " + kelime.concat("sona eklendi") + "<br>"); // sona ekleme

// var degistirilmis = "Merhabalar";
// document.write("Replace  : " + kelime.replace(kelime, degistirilmis) + "<br>"); // kelime veya harf değiştirme

// document.write("subString-1  : " + kelime.substring(6) + "<br>"); // 6.index'ten itibaren al öncesini alma
// document.write("subStirng-2  : " + kelime.substring(0,4) + "<br>"); //  0-4. indeksleri alır

// document.write("charAt  : " + kelime.charAt(0) + "<br>"); //0.indeks'te ne var
// document.write("indexOf  : " + kelime.indexOf("css3") + "<br>"); // kaçıncı index'te 
// document.write("lastIndexOf: " + kelime.lastIndexOf("css3") + "<br>");

// Ödev
// Kullanıcı tarafından verilen bir kelime
// s1- Kaç karakterli 
// s2- Boşluklar alınarak kaç karakterli
// s3- Bütün kelimeyi küçük harfle göstermek
// s4- Bütün kelimeyi büyük harfle göstermek
// s5- ilk harf nedir
// s6- girdiğini kelime java ile başlıyormu
// s6- girdiğini kelime java ile bitiyormu
// s7- girdiğiniz kelimenin sonuda "-ben js öğreniyorum"
// girdiğiniz 0-4 arasındaki indexi ekranda göster
// kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyi yer değiştirmek

// JSON nedir ? javascrip object notation

// stringify: json verisini string'e çevirme
// var obje = {
//     "adi": "yiğit",
//     "soyadi" : "özen",
//     "diller": 5,
//     "turkish": true
// };
// console.log(obje);
// document.write(obje + "<br>")

// // json tipini string'e çevir
// var objectToString = JSON.stringify(obje);
// document.write(objectToString + "<br>")


// // 1.adım : adınızı ve soyadınızı jspn objesine ekleyinp
// // 2.adım : bu json objesini string'e çeviriyoruz
// // 3.adım : bu json objesinin String'e çevirilmiş kısmından substring fonksiyonu metodu ile isim ve soyismini ayrıştır
// // 4.adım : adınızı ve soyadınızı document.write ile ekranda gösterelim
// // ip ucu : JSON:stringify ve substring()

// // ödev - adınızı ve soyaınızı json objesine ekleyip daha sonra bu json objesini String'e çevirip daha sonra adınızı ve soyadınızı
// // document.write ile ekrana yazdır. ip ucu : JSON.stringf ve sub string

// var nameSurname = {
//     "name":"Yiğit",
//     "surname":"Özen"
// };

// // 1.Çözüm static
// var nameAndSurnameJsontoString = JSON.stringify(nameSurname);
// var name = nameAndSurnameJsontoString.substring(9,14);
// var surname = nameAndSurnameJsontoString.substring(27,31);
// document.write("Adım : " + name + " <br> Soyadım : " + surname + "<br>");

// var searchResult = nameAndSurnameJsontoString.search("Yiğit");
// document.write(searchResult + "<br>");
// // çıktısı :  9 başlıyor o üzden bizde 9. indeks ile başladık

// // Dinamik hali
// var js={
//     "name":"yiğit",
//     "surname":"özen"
// };

// var js_string=JSON.stringify(js);
// var obj=JSON.parse(js_string)

// document.write(obj.name);

// //2-Çözüm (static)
// //json'ı string'e çevirdim
// var nameAndSurnameJsontoString2 = JSON.stringify(nameSurname) 
// //ipucu almak (indexOf veya search)
// var searchResult = nameAndSurnameJsontoString2.search('Hamit');
// var searchResult2 = nameAndSurnameJsontoString2.search('Mızrak')

// //çıktısı: 9 başlıyor
// var name = nameAndSurnameJsontoString2.substring(searchResult, (searchResult+5))
// var surname = nameAndSurnameJsontoString2.substring(searchResult2, (searchResult2+6))
// document.write('<br>' + 'Adım: ' + name + '<br> Soyadım: ' + surname)
// var adi=JSON.parse

// document.writeln('<br>'+"****************************")

// // 3.çözüm
// // JSON.stringify()
// // JSON.parse()
// var dinamic = JSON.stringify(obje) 
// var parse = JSON.parse(dinamic);

// var name = parse.adi;
// document.writeln("<br>" + name);
// var surname = parse.soyadi;
// document.writeln("<br>" + surname);

// // Dinamik - 2 clean code
// document.writeln("<br>" + JSON.parse(JSON.stringify(obje)).adi.toUpperCase()+" "+JSON.parse(JSON.stringify(obje)).soyadi);


///////////////////////////////////////////////

// Fonksiyonlar
// Yazdığımız kodları tekrar etmemek için kullanırız. Javdaki karşılığı metod'dur

//1-) returnsuz parametresiz function
// function functionName1(){
//     document.writeln("<br>" + "returnsuz parametresiz function");
// }
// functionName1(); // fonksiyonu çağırdık

// //2-) returnsuz parametreli function
// function functionName2(ekmekTuru){
//     document.writeln("<br>" + "returnsuz, parametresiz function : " + ekmekTuru + "<br>");
// }
// functionName2("Trabzon ekmeği");

// //3-) return'lu parametresiz function
// function functionName3(){
//     return 'returnlu, parametresiz function 200 - 6 = 194';
// }
// var temp3 = functionName3();
// document.writeln(temp3 + "<br>");

// //4-) return'lu parametreli function
// function functionName4(money){
//     var count = money -6;
//     return 'returnlu parametreli function Kalan Para : ' + count;
// }
// var temp4 = functionName4(200);
// document.writeln(temp4);


// Normal Function
// Anonymous Function
// Arrow Function
// Immedia Function


//////////////////////////////////////////////////////////
// setTimeOut()
// senkron : bir işlem biter diğerine geçer
// setTimeOut() ==> function'un istediğimiz zaman aralığında çalışmasını sağlarız

// function merhaba1(){
//     document.write("<br>" + "1.function");
//     console.log("1.fonksiyon")
// }

// //setTimeout(merhaba1,3000) // 3 saniye sonra geliyor

// setTimeout(merhaba1, 3000);

// function merhaba2(){
//     document.write("<br>" + "2.function");
//     console.log("2.fonksiyon");
// }
// merhaba2()

//////////////////////////////////////////////////////////
// try-catch : exception handling

// try {
//     var zeroException = 8/0;
//     //alert(zeroException);
// } catch (err) {
//     console.log(err.message);
//     console.log(err.name);
// } finally {
//     document.writeln("<br>" + "db.close()");
// }

// try {
//     alert44("Merhaba")
// } catch (err) {
//     document.writeln("<br>" + err.message);
//     document.writeln("<br>" + err.name)
// } finally {
//     document.writeln("<br>" + "db.close()");
// }

// document.writeln("<br>" + "diğer satır");

//////////////////////////////////////////////////////////
// conditional : if-else 
// ternary
// if else if
// switch-case

// var number = 4;

// // if-else
// if (number == 4){
//     document.write("<br>" + "eşittir");
// } else {
//     document.write("<br>" + "eşit değil");
// }

// // tenary
// var ternary = (number == 4) ? "eşittir":"eşit değildir";
// document.write("<br>" + ternary); 

// // if - else if - else
// var day="persembe";
// if(day==="pazartesi"){
//   document.write('<br>' + "1-pazartesi");
// } else if(day==="sali"){
//   document.write('<br>' + "2-sali");
// } else if(day==="carsamba"){
//   document.write('<br>' + "3-carsamba");
// } else if(day==="persembe"){
//   document.write('<br>' + "4-persembe");
// } else if(day==="cuma"){
//   document.write('<br>' + "5-cuma");
// } else if(day==="cumartesi"){
//   document.write('<br>' + "6-cumartesi");
// } else if(day==="pazar"){
//   document.write('<br>' + "7-pazar");
// } else {
//   document.write('<br>' + "gün yanlış çalışıldı");
// }

// // switch - case

// switch(day){
//     case "pazartesi":
//         document.write('<br>' + "1-pazartsi");
//         break;
//     case "sali":
//         document.write('<br>' + "2-sali");
//         break;
//     case "carsamaba":
//         document.write('<br>' + "3-carsamba");
//         break;
//     case "persembe":
//         document.write('<br>' + "4-persembe");
//         break;
//     case "cuma":
//         document.write('<br>' + "5-cuma");
//         break;
//     case "cumartesi":
//         document.write('<br>' + "2-cumartesi");
//         break;
//     case "pazar":
//         document.write('<br>' + "7-pazar");
//         break;
// }

// return break continue
// return : bir şey döndürüyor (function durdurmak)
// break : döngüyü kırmak
// continue : sadece o şart için çalışma ama sonrasında devam et

//////////////////////////////////////////////////////////
// LOOP : DÖNGÜLER
// iterative fro
// 1 arttrımak
// i++
// i = i + 1
// i += 1

document.writeln("<br>" + (1+2+3+4+5+6+7+8+9+10) + "<br>");

var sum = 0;
for (var i = 1; i <= 10; i++) {
    // document.writeln(i)
    sum += i;
}
document.writeln("<br>" + sum + "<br>");

// while 
var  x = 1;
sum2 = 0;
while (x <= 10){
    sum2 = sum2 + x;
    x++;
}
document.writeln("<br>" + sum2 + "<br>");

// do-while : şart sağlansın yada sağlanmasın en az bir kere çalışır
var sum3 = 0;
var y = 1;
do{
    sum3 = sum3 + y;
    y++;
} while(y <= 10);
document.writeln("<br>" + sum3 + "<br>");

// ÖDEV (if else for break continu)
// Fonksiyonlarla yapın
// Örnek: 1 ile kullanıcın vereceği (prompt) bitiş sayısına göre 
// kullanıcı : 5 verdi diyelim 1<=X<=5
// 1.adım kaç tane sayı alır
// 2.adım sayı toplamarı var
// 3.adım kaç tane tek sayı var
// 4.adım : kaç tane çift sayı var

// Eğer verilen sayılardan 7 sayısı varsa bunu eklemesin (continue) 1-8 verdi mesela
// Eğer bitiş sayısı 100 fazla ise çalışmasın (break)
// Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük sayı istesin
// Eğer kullanıcı secret key girerse yani 44 sayısını girerse program çalışmasın dursun