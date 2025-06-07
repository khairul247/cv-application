

export default function Experience({experiences, setExperiences}){
    //initialize the "Work Experiences"

    const addExperience = () => {
        //assign new Id to new "work experience"
        setExperiences([...experiences,{
            id: Date.now(),
            organization: '',
            jobLocation: '',
            jobTitle: '',
            startMonth: '',
            startYear: '',
            endMonth: '',
            endYear: '',
            responsibilities: '',
            isCurrentJob: false,
        }])
    }

    const removeExperience = (id) => {
        const filtered = experiences.filter(exp => exp.id !== id);
        setExperiences(filtered);
    }

    function handleExperiencesChange(id, event){
        const {name, value, type, checked} = event.target

        const fieldValue = type === 'checkbox' ? checked : value;

        setExperiences(prevExps =>
            prevExps.map(exp => 
                exp.id === id ? {...exp, [name]: fieldValue } : exp
            )
        )
    }

    return (
            <>
                {experiences.map((experience,index) => (
                    <div key={experience.id}>
                        <div>
                        <label htmlFor="organization">Organization/Institution:</label>
                        <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={experience.organization}
                            onChange={(e) => handleExperiencesChange(experience.id,e)}
                            placeholder="Materials Research Institute (MRI)"
                        />
                    </div>

                    <div>
                        <label htmlFor="location">Location:</label>
                        <input
                            type="text"
                            id="jobLocation"
                            name="jobLocation"
                            value={experience.jobLocation}
                            onChange={(e) => handleExperiencesChange(experience.id,e)}
                            placeholder="University Park, PA"
                        />
                    </div>

                    <div>
                        <label htmlFor="jobTitle">Job Title:</label>
                        <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={experience.jobTitle}
                            onChange={(e) => handleExperiencesChange(experience.id,e)}
                            placeholder="Research Assistant"
                        />
                    </div>

                    <div style={{ flex: 1 }}>
                        <label>Start Date:</label>
                            <div style={{ display: 'flex', gap: '10px' }}>
                            <select
                                name="startMonth"
                                value={experience.startMonth}
                                onChange={(e) => handleExperiencesChange(experience.id,e)}
                            >
                                <option value="">Month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                            <input
                                type="number"
                                name="startYear"
                                value={experience.startYear}
                                onChange={(e) => handleExperiencesChange(experience.id,e)}
                                placeholder="2024"
                                min="1950"
                                max="2030"
                            />
                        </div>
                    </div>

                    <div style={{ flex: 1 }}>
                        <label>End Date:</label>
                            <div style={{ display: 'flex', gap: '10px' }}>
                            <select
                                name="endMonth"
                                value={experience.endMonth}
                                onChange={(e) => handleExperiencesChange(experience.id,e)}
                                disabled={experience.isCurrentJob}
                            >
                                <option value="">Month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                            <input
                                type="number"
                                name="endYear"
                                value={experience.endYear}
                                onChange={(e) => handleExperiencesChange(experience.id,e)}
                                placeholder="2024"
                                min="1950"
                                max="2030"
                                disabled={experience.isCurrentJob}
                            />
                        </div>
                    </div>


                    <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input
                            type="checkbox"
                            id="isCurrentJob"
                            name="isCurrentJob"
                            checked={experience.isCurrentJob}
                            onChange={(e) => {
                                handleExperiencesChange(experience.id,e)
                            }}
                        />
                        <label htmlFor="isCurrentJob" style={{ fontWeight: 'normal', margin: 0 }}>
                            I currently work here
                        </label>
                    </div>

                    <div>
                        <label htmlFor="responsibilities">Responsibilities & Achievements:</label>
                        <textarea
                            id="responsibilities"
                            name="responsibilities"
                            value={experience.responsibilities}
                            onChange={(e) => handleExperiencesChange(experience.id,e)}
                            rows="6"
                            placeholder="• Provided training to undergraduate and graduate students on how to operate Helium pycnometer.&#10;• Contributed to research efforts by conducting sample analyses using X-ray Diffractometer (XRD), Helium pycnometer, microindenter, tensile testing, and various other techniques."
                        />
                        <small style={{ color: '#666', fontSize: '12px' }}>
                            Press enter after you finish your line to list your responsibilities and achievements
                        </small>
                    </div>

                    <div>
                        <button onClick={() => addExperience()}>
                            Add
                        </button>
                    </div>

                    {index> 0 && (<div> 
                        <button onClick={() => removeExperience(experience.id)}>
                            Remove
                        </button>
                    
                    </div>)}
                     
                    </div>

                    
                ))}
            </>
    )
}