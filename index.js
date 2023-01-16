const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get("/test", (req, res) => {
    let response = {
        message: "ini end-point pertamaku",
        method: req.method,
        code: res.statusCode
    }
    res.json(response)
})
app.listen(8000, () => {
    console.log("server run on port 8000");
})
app.get("/profil/:name/:age", (req, res) => {
    let name = req.params.name
    let age = req.params.age
    let response = {
        nama: name,
        umur: age
    }
    res.json(response)
})
app.post("/bujur_sangkar", (req, res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    res.json(response)

})

//soal 2 
//celcius
// app.post("/:namasuhu/:derajat", (req, res) => {
//     let namasuhu = req.paramas.namasuhu
//     let derajat = Number(req.body.derajat)
//     let reamur = 4/5*derajat
//     let fahrenhaid = 9/5*derajat+32
//     let kelvin = +273
//     let response = {
//         namasuhu: namasuhu,
//         derajat: derajat,
//         reamur: reamur,
//         fahrenhaid: fahrenhaid,
//         kelvin: kelvin
//     }
//     res.json(response)

// })
//-------soal no 1
app.post("/kubus", (req, res) => {
    let sisi = Number(req.body.panjang)
    let luaspermukaan = 6 * (sisi * sisi)
    let keliling = 12 * (sisi * sisi)
    let volume = sisi * sisi * sisi
    let response = {
        sisi: sisi,
        luaspermukaan: luaspermukaan,
        keliling: keliling,
        volume: volume
    }
    res.json(response)

})

app.post("/balok", (req, res) => {
    let panjang = Number(req.body.panjang)
    let tinggi = Number(req.body.panjang)
    let lebar = Number(req.body.panjang)
    let luaspermukaan = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))
    let keliling = 4 * (panjang + lebar + tinggi)
    let volume = panjang * lebar * tinggi
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luaspermukaan: luaspermukaan,
        keliling: keliling,
        volume: volume
    }
    res.json(response)

})

app.post("/tabung", (req, res) => {
    let panjang = Number(req.body.panjang)
    let jarijari = Number(req.body.panjang)
    let luaspermukaan = 2 * 22 / 7 * jarijari * (jarijari + tinggi)
    let volume = 22 / 7 * (jarijari * jarijari) * tinggi
    let response = {
        panjang: panjang,
        jarijari: jarijari,
        luaspermukaan: luaspermukaan,
        volume: volume
    }
    res.json(response)

})

app.post("/bola", (req, res) => {
    let jarijari = Number(req.body.panjang)
    let luaspermukaan = 4 * 22 / 7 * jarijari * jarijari
    let volume = 4 / 3 * 22 / 7 * jarijari * jarijari * jarijari
    let response = {
        panjang: panjang,
        jarijari: jarijari,
        luaspermukaan: luaspermukaan,
        volume: volume
    }
    res.json(response)

})
//-----no 2
app.get("/convert/celcius/:derajat", (req, res) => {
    let derajat = Number(req.params.derajat)
    let reamur = 4 / 5 * derajat
    let fahrenhait = 9 / 5 * derajat + 32
    let kelvin = derajat + 273
    let response = {
        celcius: derajat,
        result: {
            reamur: reamur,
            fahrenhait: fahrenhait,
            kelvin: kelvin
        }
    }
    res.json(response)
})

app.get("/convert/reamur/:derajat", (req, res) => {
    let derajat = Number(req.params.derajat)
    let celcius = 5 / 4 * derajat
    let fahrenhait = 9 / 4 * derajat + 32
    let kelvin = 5 / 4 * derajat + 273
    let response = {
        reamur: derajat,
        result: {
            celcius: celcius,
            fahrenhait: fahrenhait,
            kelvin: kelvin
        }
    }
    res.json(response)
})

app.get("/convert/fahrenhait/:derajat", (req, res) => {
    let derajat = Number(req.params.derajat)
    let celcius = 5 / 9 * (derajat - 32)
    let reamur = 4 / 9 * (derajat - 32)
    let kelvin = 5/9 * (derajat-32)+273
    let response = {
        fahrenhait: derajat,
        result: {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }
    res.json(response)
})

app.get("/convert/kelvin/:derajat", (req, res) => {
    let derajat = Number(req.params.derajat)
    let celcius = suhu - 273
    let reamur = 4 / 5 * (suhu - 273)
    let response = {
        kelvin: derajat,
        result: {
            celcius: celcius,
            reamur: reamur,
        }
    }
    res.json(response)
})


//-----no3
app.get("/convert/decimal/:angka", (req, res) => {
    let angka = Number(req.params.angka)
    let biner = angka.toString(2)// 1011111
    let octal = angka.toString(8) // 
    let hexadecimal = angka.toString(16)
    let response = {
        decimal: angka,
        result: {
            biner: biner,
            octal: octal,
            hexadecimal:hexadecimal
        }
    }
    res.json(response)
})

app.get("/convert/biner/:angka", (req, res) => {
    let angka = req.params.angka // string
    let decimal = parseInt(angka, 2) // number
    let octal = decimal.toString(8)
    let hexadecimal = decimal.toString(16)
    let response = {
        biner: angka,
        result: {
            decimal: decimal,
            octal: octal,
            hexadecimal:hexadecimal
        }
    }
    res.json(response)
})

app.get("/convert/octal/:angka", (req, res) => {
    let angka = req.params.angka // string
    let decimal = parseInt(angka, 8) // number
    let biner = decimal.toString(2)
    let hexadecimal = decimal.toString(16)
    let response = {
        octal: angka,
        result: {
            decimal: decimal,
            biner: biner,
            hexadecimal:hexadecimal
        }
    }
    res.json(response)
})
app.get("/convert/hexadecimal/:angka", (req, res) => {
    let angka = req.params.angka // string
    let decimal = parseInt(angka, 16) // number
    let biner = decimal.toString(2)
    let octal = decimal.toString(8)
    let response = {
        hexadecimal: angka,
        result: {
            decimal: decimal,
            biner: biner,
            octal:octal
        }
    }
    res.json(response)
})

//-----no4

app.post("/bmi", (req, res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    let bmi = berat / (tinggi * tinggi)
    let status
    if (bmi < 18.5) {
        status = "Kekurangan berat badan"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Ideal"
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Kelebihan berat badan"
    } else {
        status = "Obesitas"
    }

    let response = {
        berat: berat,
        tinggi: tinggi,
        bmi: bmi,
        status: status
    }
    res.json(response)
})