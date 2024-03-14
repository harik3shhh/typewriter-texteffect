import React from 'react'
import { useTypewriter } 
from 'react-simple-typewriter'

const App = () => {
  const [text] = useTypewriter({
    words:[' Developer',
     ' Programmer',
      ' Hacker'],
    loop:{},
  });

  return (
    <div>
      <h6 style={{marginLeft: "15px", marginTop: "15px"}}>userr.linux</h6>
      <h1 style={{marginLeft: "15px"}}>I am a 
      <span style={
        { color: 'red', 
        fontWeight: 'bold' 
        }}>

      {text}
      
      </span>  
       </h1>
    </div>
  )
}

export default App