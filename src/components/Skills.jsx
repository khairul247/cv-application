
export default function Skills({skills, setSkills}) {

    function handleSkillsChange(event){
        setSkills(event.target.value)
    }

    return (
            <>
                <div>
                    <label htmlFor="skills"></label>
                    <textarea
                        id="skills"
                        name="skills"
                        value={skills}
                        onChange={handleSkillsChange}
                        rows="6"
                        placeholder="• Provided training to undergraduate and graduate students on how to operate Helium pycnometer.&#10;• Contributed to research efforts by conducting sample analyses using X-ray Diffractometer (XRD), Helium pycnometer, microindenter, tensile testing, and various other techniques."
                    />
                    <small style={{ color: '#666', fontSize: '12px' }}>
                        Press enter after you finish your line to list your responsibilities and achievements
                    </small>
                 </div>
            </>
    )
    
}