import React, { useState } from 'react'

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
      <h1>Halaman Tambah Device Pake QR ScannerRRR</h1>
        <p>{data}</p>
    </div>
  )
}

export default AddDevice