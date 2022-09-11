import React, { useState } from 'react'
import QrReader from 'react-qr-scanner'

const AddDevice = () => {
  const [data, setData] = useState('Nothing')
  function handleScan(d){
    console.log(d)
    setData(d?.text)
  }
  function errorScan(e){
    console.log(e)
  }
  return (
    <div>
      <h1>Halaman Tambah Device Pake QR Scanner</h1>
      <QrReader
        onScan={handleScan}
        onError={errorScan}
        facingMode={'front'}
        
      />
        <p>{data}</p>
    </div>
  )
}

export default AddDevice