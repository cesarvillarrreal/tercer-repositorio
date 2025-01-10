import React from 'React'

function Home() {
    const listItems = [1,2,3,4]

    const addItem = () =>{
        const VariableA = 1;
        const VariableB = 3;
        const VariableC= 2;

        return VariableA*3 + VariableB*VariableC
    }
    return(
        <><div>Home</div>
        <p>hola mundo</>
        <button onclick ={addItem}/></>
    )
}