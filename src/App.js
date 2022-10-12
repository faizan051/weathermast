import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import span from '../src/app.css'

const Main = styled.div`
width: 100%;
height: 100vh;
background: rgba(122,122,122,0.9);
opacity:0.8;
:before
{
  content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1600') no-repeat center center/cover;
    z-index:-1;
    opacity:0.8;
    
    
}
`;



const Contaienr = styled.div`
width:100%;
display:flex;
flex-direction: column;
diplay:flex;
justify-content:center;
align-items:center;

`

const Top = styled.div`

margin-top:1em;

`
const City = styled.p`
color:white;
font-size:1.5em;

margin-top:2.5em;
`

const Custom = styled.h3`
color:white;
font-size:3.5em;
margin-top:-2.5em;
`

const Temp = styled.h1`
font-size:4em;

margin-top:-0.2em;
color:white;
`

const Middle = styled.div`
color:white;
font-size:2em;
margin-top:-2em;
`
const Bottom = styled.div
`
display:flex;
flex-direction:row;
justify-content:center;
width:40%;
box-shadow: 9px 7px 35px 8px rgba(82,72,72,0.69);
-webkit-box-shadow: 9px 7px 35px 8px rgba(82,72,72,0.69);
-moz-box-shadow: 9px 7px 35px 8px rgba(82,72,72,0.69);
padding:20px 30px
border:1px solid;
border-radius:5px;
`

const Feels = styled.div`
color:white;
background-color:rgba(120,130,122,0.3);
margin:0px 90px;
font-size:1.7em;
font-weight:bold;
`;

const T1 = styled.div`
color:white;
background-color:rgba(120,130,122,0.3);
margin:0px 90px;
font-size:1.7em;
font-weight:bold;
`

const Search = styled.input`
padding 20px 70px;

border-radius:10px;
color:white;
background-color:rgba(255,255,255,0.1);
margin-top:2.5em;
font-size:1.2em;
`


function App() {

  const [data, setdata] = useState('');
  const [location, setLocation] = useState();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f08f66a32488121dd36cb80efdcace17`

  const SearchF=(event)=>{

    if(event.key==='Enter')
    {
      axios.get(url).then((res)=>{
        setdata(res.data);
        console.log(res.data);
      })
      setLocation('')
     
    }

   
  }
  


  return (
   <Main>
<Contaienr>
  <Search value={location}
   onChange={event=>setLocation(event.target.value)} 
   onKeyPress={SearchF}
   type='text'
   placeholder='Enter Location'
    />

  <Top>
    <City>
   {data.name}
    </City>
    <Temp>
   {data.main ?  <p>{data.main.temp}°F</p> : null}
    </Temp>
  </Top>
 <Middle>
{data.weather ? <p>{data.weather[0].main}</p> : null}
 </Middle>
 <Bottom>
<Feels>
{data.main ?   <span>{data.main.feels_like} Feels</span> : null}
</Feels>
<T1>{data.main ? <span>{data.main.humidity} H</span>: null}</T1>
<T1>{data.wind ? <span>{data.wind.speed} MPH</span>: null} </T1>
 </Bottom>
</Contaienr>
   </Main>
  );
}

export default App;
