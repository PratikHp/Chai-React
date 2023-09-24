import { useState ,useCallback ,useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")
  //userefhook

  const passwordref = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str += "!@#$%*~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass);

  }, [length,numberAllowed,charAllowed,setPassword])
  
  const copyPasswordtoclipboard = useCallback(()=>{
    passwordref.current?.select();
    //passwordref.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
   },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  
  return (
    <>
      
      <div className='w-full max-w-md mx-auto shodow-md rounded-lg px-4 py-2 text-orange-500 bg-gray-700 my-8'>
      <h1 className='text-xl text-center text-white'>Password Generator</h1>
          <div className='flex-shadow rounded-lg overflow-hidden mb-4 flex'>
              <input type='text' value={password} className='outline-none w-full py-1 px-3 ' placeholder='Password' readOnly ref={passwordref}/>
              <button onClick={copyPasswordtoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
               <div className='flex text-center gap-x-1'>
               <input type='range' min={6} max={50} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>  
               <label>Length:{length}</label>
               </div>
               <div className='flex text-center gap-x-1'>
              <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={()=>{
                setNumberAllowed((prev)=>!prev);
              }}/>
              <label htmlFor='numberInput'>Numbers</label>
               </div>
              <div className='flex text-center gap-x-1'>
              <input type='checkbox' defaultChecked={charAllowed} id='charInput' onChange={()=>{
                setCharAllowed((prev)=>!prev);
              }}/>
              <label htmlFor='charInput'>Special Characters</label>
               </div>
          </div>

      </div>
    </>
  )
}

export default App
