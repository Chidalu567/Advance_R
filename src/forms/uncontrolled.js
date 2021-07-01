import React  from 'react'
import {useRef,useEffect} from 'react'

const SignUP=()=>{
    const refContainer=useRef(null);//useRef definition
    const refInput=useRef(null);//UseRef definition

//puts focus on the input when the page reloads
useEffect(()=>{
    refInput.current.focus();//focus on the input when page reloads
},[]);//useEffect definition

const handleSubmit=(e)=>{
    e.preventDefault();//avsoid refreshing on submit
alert(`Welcome ${refInput.current.value}`);
alert(refContainer.current)
}
    return (
        <div>
            <form>
                <input type='text' ref={refInput} name='firstname'/>
                <button type='button' onClick={handleSubmit}>Submit</button>
                </form>
                <section ref={refContainer}>
                    <h1>Welcome</h1>
                    </section>
            </div>
    )
};//React component definition

export default SignUP;//export for external file to use