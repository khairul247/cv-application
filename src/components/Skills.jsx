
export default function Skills({skills, setSkills, styles}) {

    function handleSkillsChange(event){
        setSkills(event.target.value)
    }

    return (
             <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="skills">Skills</label>
                            <textarea
                                id="skills"
                                name="skills"
                                value={skills}
                                className={styles.textarea}
                                onChange={handleSkillsChange}
                                rows="6"
                                placeholder="• Advanced Patronus Casting (Corporeal Stag Patronus)&#10;• Parseltongue Communication"
                            />
                            <small style={{ color: '#666'}}>
                                *Press "enter" after you finish your line to list your skills*
                            </small>
                        </div>
    )
    
}