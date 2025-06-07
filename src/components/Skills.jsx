
export default function Skills({skills, setSkills}) {
    
    const addSkill =() => {
        setSkills([...skills,''])
    }

    const removeSkill = (index) => {
        const filtered = skills.filter((skill,i) => i !== index);
        setSkills(filtered);
    }

    function handleSkillsChange(index, value){
        setSkills(
            skills.map((skill,i) => i === index ? value: skill)
        )
    }

    return (
            <>
                {skills.map((skill,index) => (
                    <div key={`skill-${index}`}>
                        <div>
                            <label htmlFor="skill">Skill:</label>
                            <input
                                type="text"
                                id={index}
                                name="skill"
                                value={skill}
                                onChange={(e) => handleSkillsChange(index,e.target.value)}
                                placeholder="Research Assistant"
                            />
                        </div>

                        <div>
                            <button onClick={() => addSkill()}>
                                Add
                            </button>
                        </div>

                        {index > 0 && (<div> 
                            <button onClick={() => removeSkill(index)}>
                                Remove
                            </button>
                        
                        </div>)}
                    </div>
                ))}
            </>
    )
    
}