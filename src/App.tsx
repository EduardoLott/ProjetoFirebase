import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { setCamsAction, updateCamsAction } from './services/actions/camsAction';
import { getCamsObserver } from './services/observers/camsObservers';


function App() {
  const [cams, setCams] = useState<any[]>([]);
  const nomeCamera: string = "SG01"
  useEffect(()=>{
    //setCamsAction({NomeCamera: "SG01", endereço: "AV BEZERRA DE MENEZES x AV JOSE JATAHY"}, "123");
    getCamsObserver(setCams, [nomeCamera, "SG02"]);
  },[])
  
  const [nameCam , setNameCam] = useState('');
    const [id , setId] = useState('');
    const [adress , setAdress] = useState('');
    const [camType , setCamType] = useState('');
    const [analyticalType , setAnalyticalType] = useState('');
    const [status , setStatus] = useState('');
    const [long , setLong] = useState('');
    const [lat , setLat] = useState('');

  
  
    // function to update state of name with 
    // value enter by user in form
    const handleChange =(e: any)=>{
      setNameCam(e.target.value);
    }
    // function to update state of age with value 
    // enter by user in form
    const handleIdChange =(e: any)=>{
      setId(e.target.value);
    }
    // function to update state of email with value
    // enter by user in form
    const handleAdressChange =(e: any)=>{
      setAdress(e.target.value);
    }
      // function to update state of password with 
      // value enter by user in form
    const handleCamTypeChange =(e: any)=>{
      setCamType(e.target.value);
      console.log(e.target.value)
    }
      // function to update state of confirm password 
      // with value enter by user in form
    const handleAnalyticalTypeChange =(e: any)=>{
      setAnalyticalType(e.target.value);
    }

    const handleStatusChange = (e: any)=>{
      setStatus(e.target.value)
    }

    const handleLongChange = (e: any)=>{
      setLong(e.target.value)
    }

    const handleLatChange = (e: any)=>{
      setLat(e.target.value)
    }
    // below function will be called when user 
    // click on submit button .
    const handleSubmit=(e: any)=>{
      setCamsAction({nameCam: nameCam, adress: adress, camType: camType, analyticalType: analyticalType, status: status, latitude: lat, longitude: long}, id);
      e.preventDefault();
  
    }
  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
     {/*when user submit the form , handleSubmit() 
        function will be called .*/}
    <h3> Adicionar Camera no Banco de dados </h3>
        <label >
          Nome da Camera:
        </label><br/>
        <input type="text" value={nameCam} required onChange={(e) => {handleChange(e)}} /><br/>
          { /*when user write in name input box , handleChange()
              function will be called. */}
        <label >
          Id:
        </label><br/>
        <input type="text" value={id} required onChange={(e) => {handleIdChange(e)}} /><br/>
            { /*when user write in age input box , handleAgeChange()
               function will be called. */}
        <label>
          Endereço:
        </label><br/>
        <input type="text" value={adress} required onChange={(e) => {handleAdressChange(e)}} /><br/>
          {/* when user write in email input box , handleEmailChange() 
              function will be called.*/}
        <label>
          Tipo da Camera:
          <br/>
          <select value={camType} required onChange={(e)  => {handleCamTypeChange(e)}}>
            <option value="PTZ">PTZ</option>
            <option value="Fixa">Fixa</option>
          </select>

        </label><br/>
        
        <label> 
          Tipo do Analitico:
          <br/>
          <select value={analyticalType} required onChange={(e)  => {handleAnalyticalTypeChange(e)}}>
            <option value="semAnalitico">Sem analitico</option>
            <option value="lixo">Lixo</option>
            <option value="ciclofaixa">Ciclofaixa</option>
            <option value="buraco">Buraco</option>
            <option value="LPR">LPR</option>
            <option value="treckingkit">TreckingKit</option>
          </select>

        </label><br/>
        
        <label >
          Status:
          <br/>
          <select value={status} required onChange={(e)  => {handleStatusChange(e)}}>
            <option value="configurado">Configurado</option>
            <option value="manutencao">Em manutenção</option>
            <option value="problemaTecnico">Problema Tecnico</option>
            <option value="semConexao">Sem conexão</option>
            <option value="comAcesso">Com acesso</option>
          </select>
        </label><br/>
        
        <label >
          Latitude:
        </label><br/>
        <input type="text" value={lat} required onChange={(e) => {handleLatChange(e)}} /><br/>
        <label >
          Longitude:
        </label><br/>
        <input type="text" value={long} required onChange={(e) => {handleLongChange(e)}} /><br/>
        
        <input type="submit" value="Submit"/>
      </form>
    </header>
    </div>
  );
}
export default App;
