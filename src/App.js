/*Imports*/
import { useState } from 'react';
import './App.css';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode'

/*App*/
function App() {
  /*This code uses the useState hook to create two state variables, link and qrcodeLink*/
  const [link, setLink] = useState('')
  const [qrcodeLink,setQrcodeLink] = useState('')

  /*This code is a function that generates a QR code from a given link URL.*/
  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3,
    },function (err, url){
      setQrcodeLink(url)
    })
  }

  /*This function takes the link value from the input to generate the visual QRCode and calls the handleGenerate function*/
  function handleQrcode(e){
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  /*Content App*/
  return (
    <div className="container">
      <h1>QRCode Generator</h1>
      <QRCode value={link}/>

      <input className="input"
      placeholder='Enter your Link or Message'
      value={link}
      onChange={ (e) => handleQrcode(e)}/>

      <a href={qrcodeLink} download={'qrcode.png'}>Download CodeQR</a>
    </div>
  );
}

/*Exports the App element to index.js*/
export default App;
