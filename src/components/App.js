import React, { useCallback, useState } from 'react'

const App = () => {

    const [state, setState]=useState("");
    const [skillarr, setSkillArr]=useState([]);
    const [id, setId]=useState("");

    const addSkill=useCallback(()=> {

        let itemarr=skillarr.filter((tofind)=> tofind===state)
        if(state==="" || itemarr.length)
        {
            alert("please enter a valid skill item");
            return;
        }
        let newskillarr=[];
        skillarr.map((skillitem)=> newskillarr.push(skillitem));
        newskillarr.push(state);
        setSkillArr(newskillarr);
        setState("");
     },[state, skillarr]);


     const deleteSkill=useCallback((skillitem)=>{
        
        const newskillarr=skillarr.filter((item)=> item!==skillitem);
        setSkillArr(newskillarr);
     },[id,skillarr])


  return (
    <div>
        <h1 id="heading">Skill Assignment</h1>
        <br />
        <input type="text" placeholder="Add the skill to be added in the list"  id="skill-input" value={state} onChange={(e)=> setState(e.target.value)}/>
        <button id="skill-add-btn" onClick={addSkill}>Add Skill</button>
        <br />
        <ul>
            {skillarr.map((skillitem,index)=> {return <li key={index} onClick={(e)=> {setId(e.target.id); deleteSkill(skillitem)}} id={`skill-number-${index+1}`}>{skillitem}</li>})}
        </ul>
    </div>
  )
}


export default App;

