import styles from '../styles/Form.module.css'
import Experience from './Experience'
import Awards from './Awards'
import Skills from './Skills'

export default function Form({ formData, setFormData, experiences, setExperiences, awards, setAwards, skills, setSkills}) {

    function handleInputChange(event){
        const {name, value} = event.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Form submitted:', formData)
    }

    return (
        <section className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Personal Information</legend>

                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>Full Name</label>
                        <input 
                            type="text"
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder='e.g. Kasim Selamat'
                            />
                    </div>

                     <div className={styles.inputGroup}>
                        <label htmlFor="phone" className={styles.label}>Phone Number</label>
                        <input 
                            type="tel"
                            id='phone'
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder='e.g. +601122337766'
                            />
                    </div>

                     <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input 
                            type="email"
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder='e.g. john.doe@gmail.com'
                            />
                    </div>
                </fieldset>

                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Education</legend>

                    <div className={styles.inputGroup}>
                        <label htmlFor="university" className={styles.label}>Your Alma Mater</label>
                        <input 
                            type="text"
                            id='university'
                            name='university'
                            value={formData.university}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder='e.g. Universiti Malaya'
                            />
                    </div>

                     <div className={styles.inputGroup}>
                        <label htmlFor="degree" className={styles.label}>Degree</label>
                        <input 
                            type="text"
                            id='degree'
                            name='degree'
                            value={formData.degree}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder='e.g. B.S., Materials Science and Engineering (CGPA 3.5)'
                            />
                    </div>

                     <div className={styles.inputGroup}>
                        <label htmlFor="uniLocation" className={styles.label}>Location</label>
                        <input 
                            type="text"
                            id='uniLocation'
                            name='uniLocation'
                            value={formData.uniLocation}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder='e.g. University Park, PA'
                            />
                    </div>

                     <div className={styles.dateInputGroup}>
                        <label className={styles.label}>Graduation Date</label>
                        <div className={styles.dateContainer}>
                            <div className={styles.dateGroup}>
                                <select 
                                name="gradMonth"
                                value={formData.gradMonth}
                                onChange={handleInputChange}
                                className={styles.select}
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
                            </div>
                            <div className={styles.dateGroup}>
                                <input 
                                    type="number" 
                                    name="gradYear"
                                    className={styles.yearInput}
                                    value={formData.gradYear}
                                    onChange={handleInputChange} 
                                    placeholder="2025" 
                                    min="1950" 
                                    max="2030"/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="relCourseWorks" className={styles.label}>Relevant Courseworks</label>
                        <textarea 
                            id="relCourseWorks" 
                            name="relCourseWorks" 
                            placeholder="Relevant courseworks that you took during your university years"
                            value={formData.relCourseWorks}
                            onChange={handleInputChange}
                            className={styles.textarea}
                        >
                        </textarea>
                    </div>

                </fieldset>

                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Relevant Work Experiences</legend>
                    <Experience
                    experiences = {experiences}
                    setExperiences={setExperiences}
                    styles={styles}
                    />
                </fieldset>

                 <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Awards</legend>
                    <Awards
                    awards = {awards}
                    setAwards={setAwards}
                    styles={styles}
                    />
                </fieldset>

                 <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Skills</legend>
                    <Skills
                    skills = {skills}
                    setSkills={setSkills}
                    styles={styles}
                    />
                </fieldset>
            
                <button type='submit' className={styles.button}>
                    Generate Resume
                </button>

            </form>
        </section>
    )
}