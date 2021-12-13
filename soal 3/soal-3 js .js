function BiayaParkir(){
    let jam_masuk = document.getElementById("masuk").value;
    let jam_keluar = document.getElementById("keluar").value;
    let selisih = jam_masuk - jam_keluar;
    let biaya = 0;
    const TARIF_Parkir = 3000;
    const TARIF_PERJAM = 1000;
    if(selisih <= 2){
        biaya = TARIF_Parkir;
    }else{
        let tambahan_jam = selisih - 2;
        biaya = TARIF_Parkir+ (TARIF_PERJAM * tambahan_jam);
    }
    let area_biaya = document.getElementById("biaya")
    area_biaya.innerHTML = "Biaya Parkir : " + biaya
}