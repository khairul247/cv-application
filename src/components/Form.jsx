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

                <button type='submit' className={styles.button}>
                    Generate Resume
                </button>

            </form>
        </section>
    )
}