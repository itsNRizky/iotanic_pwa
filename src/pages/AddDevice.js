import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'

const AddDevice = () => {
  const [data, setData] = useState('Nothing')
  return (
    <div>
      <h1>Halaman Tambah Device Pake QR Scanner</h1>
      <QrReader 
        onResult={(res, err) => {
          if (!!res){
            setData(res?.text)
          }
        }}
        
      />

      <p>{data}</p>
    </div>
  )
}

export default AddDevice