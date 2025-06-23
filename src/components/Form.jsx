import styles from '../styles/Form.module.css'
import Experience from './Experience'
import Awards from './Awards'
import Skills from './Skills'
import Infos from './Infos'
import Education from './Education'
import Navigation from './Navigation'

export default function Form({ activeTab, setActiveTab, edus, setEdus, infos,setInfos, experiences, setExperiences, awards, setAwards, skills, setSkills}) {

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Form submitted:')
    }

    return (
        <section className={styles.formSection}>

            <Navigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            styles={styles}
            />

            <form onSubmit={handleSubmit} className={styles.form}>

                 {activeTab === 'personal' && (<fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Personal Information</legend>
                    <Infos
                    infos = {infos}
                    setInfos={setInfos}
                    styles={styles}
                    />
                </fieldset>)}

                {activeTab === 'education' && (<fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Education</legend>
                    <Education
                    edus = {edus}
                    setEdus={setEdus}
                    styles={styles}
                    />
                </fieldset>)}

               {activeTab === 'experience' && (<fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Relevant Work Experiences</legend>
                    <Experience
                    experiences = {experiences}
                    setExperiences={setExperiences}
                    styles={styles}
                    />
                </fieldset>)}

                {activeTab === 'awards' && (<fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Awards</legend>
                    <Awards
                    awards = {awards}
                    setAwards={setAwards}
                    styles={styles}
                    />
                </fieldset>)}

                 {activeTab === 'skills' && (<fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Skills</legend>
                    <Skills
                    skills = {skills}
                    setSkills={setSkills}
                    styles={styles}
                    />
                </fieldset>)}
            
                <button type='submit' className={styles.button}>
                    Generate Resume
                </button>

            </form>
        </section>
    )
}