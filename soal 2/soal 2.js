 function hitung(){
        const rupiah = 14650;
        let dollar = document.getElementById("uang").value;
        console.log ("$ : " + dollar);
        let _rupiah = rupiah * dollar;
        console.log("rupiah : " + _rupiah);
        let area_hasil = document.getElementById("hasil");
        area_hasil.innerHTML = "Rupiah : " + _rupiah
    }
