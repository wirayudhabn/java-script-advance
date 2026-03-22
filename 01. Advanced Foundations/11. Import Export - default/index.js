// Melakukan import dari file data.js (komentarnya kita sesuaikan)
import { spacecraftFleetArr as space } from './data.js'
import getSpaceCraftArr from './searchFunction.js'

// 1. Kita simpan dulu hasil pencariannya ke dalam variabel
// (Kita ganti keyword menjadi 'logistik' karena kata ini ada di dalam deskripsi)
console.log(getSpaceCraftArr(space, 'super'))

// 2. Menampilkan nama pesawat pertama dari hasil pencarian tersebut
// console.log(hasilPencarian[0].name);