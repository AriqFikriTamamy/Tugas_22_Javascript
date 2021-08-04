function arrayForEach(){
  var kalimat = "Saya ingin belajar bersama";
  var hasil = kalimat.split(" ");
  console.log(hasil)
  hasil.forEach(function(item,index,array){
    console.log("Item :",item,"Index ke",index)
  })
}

arrayForEach()
