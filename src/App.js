import { useState } from 'react';
import './App.css';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode'

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink,setQrcodeLink] = useState('')

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3,
    },function (err, url){
      setQrcodeLink(url)
    })
  }

  function handleQrcode(e){
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }


  return (
    <div className="container">

      <h1>QRCode Generator</h1>

      <QRCode
      value={link}
      />

      <input className="input"
      placeholder='Enter your Link or Message'
      value={link}
      onChange={ (e) => handleQrcode(e)}
      />

      <a href={qrcodeLink} download={'qrcode.png'}>Download CodeQR</a>
    </div>
  );
}

export default App;
