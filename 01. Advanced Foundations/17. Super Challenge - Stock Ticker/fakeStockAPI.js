function getStockData() {
    const dataHarga = (Math.random() * 10).toFixed(2)
    const waktuSekarang = new Date()
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: dataHarga,
        time: waktuSekarang.toLocaleTimeString('id-ID')
    }
}

export {getStockData}
