
//arayüz değişiklikleri için bazı javascript kodları
//soru1 ve soru2 divlerini duruma göre göster ya da gösterme olarak değiştirme
function actives(id) {

	if (id == 1) {
		document.getElementById("soru1").style.display = "block";
		document.getElementById("soru2").style.display = "none";


	} else {
		document.getElementById("soru1").style.display = "none";
		document.getElementById("soru2").style.display = "block";

	}
}
var modal = document.getElementById("sonucmodal"); //sonucumuzu göstereceğimiz divi bir değişkene aktarıyoruz
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
	modal.style.display = "none";
}

//şifreleme için offseti bulma fonksiyonu
function offsetbul() {
	var sifrelimetin = document.getElementById("sifrelimetin").value; //şifreli metinin value değerini alıyoruz
	var sifrelimetinArray = sifrelimetin.split(''); //şifreli metinin array değerini alıyoruz
	//harf ve sayılardan oluşan dizimizi tanımlıyoruz
	var harfler = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z",
		"a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z"
		, " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



	var sonuc2 = ""; //sonuc2 değişkeni oluşturuyoruz
	for (let s = 0; s < harfler.length; s++) { //harfler dizimizin boyutunu kadar döngüye sokuyoruz
		var sonuc = ""; //sonuc değişkeni oluşturuyoruz

		for (let i = 0; i < sifrelimetin.length; i++) { //şifreli metinin boyutunu kadar döngüye sokuyoruz

			var harf = sifrelimetin[i]; //şifreli metinin i. index değerini alıyoruz
			var index = harfler.indexOf(harf); //şifreli metinin i. index değerinin harfler dizimizin index değerini alıyoruz

			if (index > s - 1) { //şifreli metinin i. index değerinin harfler dizimizin i. index değerinden büyükse

				sonuc += harfler[index - s]; //şifreli metinin i. index değerinin harfler dizimizin i. index değerinden büyük olduğu için harfler dizimizin i. index değerini sonuc değişkenine ekliyoruz

			} else {

				sonuc += harfler[(index - s) + harfler.length]; //değilse sonuc değişkenimize harfler dizisinin uzunluğu ile index-s değerinin toplanını ekliyoruz
			}

		}

		sonuc2 += '<h6><span> ' + s + '. offset degeri : </span> ' + sonuc + '</h6> '; //sonuc2 değişkenimize sonuc değerini ekliyoruz


	}
	modal.style.display = "block"; //sonucumuzu gösterme modalını açıyoruz
	var sonucoffset = document.getElementById("sonucoffset"); //sonucumuzu göstereceğimiz divi bir değişkene aktarıyoruz
	sonucoffset.innerHTML = sonuc2; //sonuc2 değişkenimize sonucumuzu ekliyoruz
}

//şifreleme için fonksiyon
function sifrele() {
	var sifrelimetin = document.getElementById("sifrelimetin").value; //şifreli metinin value değerini alıyoruz
	var sifrelimetinArray = sifrelimetin.split(''); //şifreli metinin array değerini alıyoruz
	var keymetin = document.getElementById("key").value; //anahtar metinin value değerini alıyoruz
	//harf ve sayılardan oluşan dizimizi tanımlıyoruz
	var harfler = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z",
		"a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z"
		, " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



	var sonuc = ""; //sonuc değişkeni oluşturuyoruz

	for (let i = 0; i < sifrelimetin.length; i++) { //şifreli metinin boyutunu kadar döngüye sokuyoruz

		var harf = sifrelimetin[i]; //şifreli metinin i. index değerini alıyoruz
		var index = harfler.indexOf(harf); //şifreli metinin i. index değerinin harfler dizimizin index değerini alıyoruz
		var deger = index + parseInt(keymetin); //keymetin değerini parse edip i. index değerinin toplamını alıyoruz
		if (deger >= harfler.length) { //deger harfler dizimizin uzunluğundan büyük veya eşit ise

			sonuc += harfler[deger - harfler.length]; //sonuc değişkenine değerden harfler diziminizin uzunluğunun çıkarıp harfler dizisinde karşılık gelen veriyi ekliyoruz

		}
		else {
			sonuc += harfler[deger]; //değilse direkt değerin kendisini harfler dizimizde bulup sonuc değişkenine ekliyoruz

		}

	}
	document.getElementById("sonuc").style.display = "block"; //sonucumuzu gösterme modalını açıyoruz
	document.getElementById("sonuc").innerHTML = "sonuc : " + sonuc; //sonuc değişkenimize sonucumuzu ekliyoruz

}

//bu fonksyion'da aynı mantık ile çalışıyor farklar yorum satırı olarak yazıldı
function sifrele1() {
	var metin = document.getElementById("metin").value;
	var metinArray = metin.split('');

	var keymetin = document.getElementById("key").value;
	var keymetinArray = keymetin.split('');

	var harfler = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z",
		"a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z"
		, " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


	var sonuc = "";
	for (let s = 0; s < metinArray.length; s++) { //metin arrayinin boyutunu kadar döngüye sokuyoruz


		var keymetinmod = s % keymetinArray.length; //keymetin arrayinin boyutunun S'ye bölümünden kalanı alıyoruz
		//harfler dizimizin index değerini alıyoruz ve keymetin arrayinin index değerini alıyoruz ve harfler dizimizin uzunluğunun çıkarıp toplam değerini alıyoruz
		var toplamdeger = (harfler.indexOf(metinArray[s]) + harfler.indexOf(keymetinArray[keymetinmod])) % harfler.length;//ve harflerin uzunluğuna göre modunu alıyoruz.
		sonuc += harfler[toplamdeger]; //sonuc değişkenine harfler dizimizin toplamdeger değerini alıyoruz

	}
	document.getElementById("sonuc2").style.display = "block";
	document.getElementById("sonuc2").innerHTML = "sonuc : " + sonuc;
}

function sifrele2() {
	var metin = document.getElementById("metin").value;
	var metinArray = metin.split('');

	var keymetin = document.getElementById("key").value;
	var keymetinArray = keymetin.split('');

	var harfler = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z",
		"a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z"
		, " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


	var sonuc = "";


	for (let s = 0; s < metinArray.length; s++) {


		var keymetinmod = s % keymetinArray.length;
		let index = harfler.indexOf(metinArray[s]);
		let keyindex = harfler.indexOf(keymetinArray[keymetinmod]);


		if (index > keyindex) {

			sonuc += harfler[index - keyindex];

		} else {

			sonuc += harfler[index - keyindex + harfler.length];
		}



	}
	document.getElementById("sonuc2").style.display = "block";
	document.getElementById("sonuc2").innerHTML = "sonuc : " + sonuc;
}
