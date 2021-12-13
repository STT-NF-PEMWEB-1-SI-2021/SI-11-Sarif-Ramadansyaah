
    function hitung(){
        const phi = 3.14;
        let jari = document.getElementById("bil1").value;
        console.log("jari-jari : " + jari);
        let luas = phi * jari * jari;
        let keliling = 2.0 * phi * jari;
        console.log("luas : " + luas);
        console.log("keliling : " + keliling);
        let area_hasil1 = document.getElementById("hasil1");
        area_hasil1.innerHTML = "Hasil luas : " + luas;
        let area_hasil2 = document.getElementById("hasil2");
        area_hasil2.innerHTML = "Hasil keliling : " + keliling;
    }
