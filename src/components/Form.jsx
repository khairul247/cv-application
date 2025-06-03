import styles from '../styles/Form.module.css'

export default function Form({ formData, onInputChange, onSubmit }) {
    return (
        <section className={styles.formSection}>
            <h2 className={styles.title}>Build Your Resume</h2>

            <form onSubmit={onSubmit} className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Personal Information</legend>

                    <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>Full Name</label>
                        <input 
                            type="text"
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={onInputChange}
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
                            onChange={onInputChange}
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
                            onChange={onInputChange}
                            className={styles.input}
                            placeholder='e.g. john.doe@gmail.com'
                            />
                    </div>
                </fieldset>

                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Education</legend>

                    <div className={styles.inputGroup}>
                        <label htmlFor="university" className={styles.label}>Your alma mater</label>
                        <input 
                            type="text"
                            id='university'
                            name='university'
                            value={formData.university}
                            onChange={onInputChange}
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
                            onChange={onInputChange}
                            className={styles.input}
                            placeholder='e.g. B.S., Materials Science and Engineering (CGPA 3.5)'
                            />
                    </div>

                     <div className={styles.inputGroup}>
                        <label htmlFor="uniLocation" className={styles.label}>Location:</label>
                        <input 
                            type="text"
                            id='uniLocation'
                            name='uniLocation'
                            value={formData.uniLocation}
                            onChange={onInputChange}
                            className={styles.input}
                            placeholder='e.g. University Park, PA'
                            />
                    </div>

                     <div>
                        <label>Graduation Date:</label>
                        <div>
                            <div>
                                <select 
                                name="gradMonth"
                                value={formData.gradMonth}
                                onChange={onInputChange}
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
                            <div>
                                <input 
                                    type="number" 
                                    name="gradYear"
                                    value={formData.gradYear}
                                    onChange={onInputChange} 
                                    placeholder="2025" 
                                    min="1950" 
                                    max="2030"/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="relCourseWorks">Relevant Courseworks:</label>
                        <textarea 
                            id="relCourseWorks" 
                            name="relCourseWorks" 
                            placeholder="Tell us about yourself, your background, interests, and what makes you unique..."
                            value={formData.relCourseWors}
                            onChange={onInputChange}
                        >
                        </textarea>
                    </div>

                </fieldset>

                <fieldset className={styles.fieldse}>
                    <legend>Relevent Work Experiences</legend>
                    <div>
                        <label htmlFor="organization">Organization/Institution:</label>
                        <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={onInputChange}
                            placeholder="Materials Research Institute (MRI)"
                        />
                    </div>

                    <div>
                        <label htmlFor="location">Location:</label>
                        <input
                            type="text"
                            id="jobLocation"
                            name="jobLocation"
                            value={formData.jobLocation}
                            onChange={onInputChange}
                            placeholder="University Park, PA"
                        />
                    </div>

                    <div>
                        <label htmlFor="jobTitle">Job Title:</label>
                        <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={onInputChange}
                            placeholder="Research Assistant"
                        />
                    </div>

                    <div style={{ flex: 1 }}>
                        <label>Start Date:</label>
                            <div style={{ display: 'flex', gap: '10px' }}>
                            <select
                                name="startMonth"
                                value={formData.startMonth}
                                onChange={onInputChange}
                                disabled={formData.isCurrentJob}
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
                                value={formData.startYear}
                                onChange={onInputChange}
                                placeholder="2024"
                                min="1950"
                                max="2030"
                                disabled={formData.isCurrentJob}
                            />
                        </div>
                    </div>

                    <div style={{ flex: 1 }}>
                        <label>End Date:</label>
                            <div style={{ display: 'flex', gap: '10px' }}>
                            <select
                                name="endMonth"
                                value={formData.endMonth}
                                onChange={onInputChange}
                                disabled={formData.isCurrentJob}
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
                                value={formData.endYear}
                                onChange={onInputChange}
                                placeholder="2024"
                                min="1950"
                                max="2030"
                                disabled={formData.isCurrentJob}
                            />
                        </div>
                    </div>


                    <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input
                            type="checkbox"
                            id="isCurrentJob"
                            name="isCurrentJob"
                            checked={formData.isCurrentJob}
                            onChange={onInputChange}
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
                            value={formData.responsibilities}
                            onChange={onInputChange}
                            rows="6"
                            placeholder="• Provided training to undergraduate and graduate students on how to operate Helium pycnometer.&#10;• Contributed to research efforts by conducting sample analyses using X-ray Diffractometer (XRD), Helium pycnometer, microindenter, tensile testing, and various other techniques."
                        />
                        <small style={{ color: '#666', fontSize: '12px' }}>
                            Use bullet points (•) to list your responsibilities and achievements
                        </small>
                    </div>
                </fieldset>
            
                <button type='submit' className={styles.button}>
                    Generate Resume
                </button>

            </form>
        </section>
    )
}