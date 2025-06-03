import styles from '../styles/Preview.module.css'

export default function Preview({formData}) {

    return (
        <section className={styles.previewSection}>
                <article className={styles.resume}>
                    <header className={styles.resumeHeader}>
                        <h1 className={styles.name}>
                            {formData.name || 'Harry James Potter'}
                        </h1>
                        <div className={styles.contactInfor}>
                            <span>{formData.phone || '+44 (0) 207-946-0958'}</span>
                            <span className={styles.separator}> | </span>
                            <span>{formData.email || 'h.potter@hogwarts.edu'}</span>
                        </div>
                    </header>
                    <div className={styles.newSection}>
                        <div className={styles.sectionHeader}>EDUCATION</div>
                        <div className='eduInfo'>
                            <div className={styles.rowEdu}> 
                                <span> <b> {formData.university || 'Hogwarts School of Witchcraft and Wizardry'} </b></span>
                                <span>{formData.uniLocation || 'Highlands, Scotland'}</span>
                            </div>

                            <div className={styles.rowEdu}> 
                                <span> <b>{formData.degree || 'Nastily Exhausting Wizarding Tests (N.E.W.T.s), 5(O)'}</b></span>
                                <span>
                                    {(formData.gradMonth && formData.gradYear) ? 
                                        `${formData.gradMonth} ${formData.gradYear}` : 
                                        "June 2024"
                                    }
                                </span>
                            </div>
                            
                            <div> 
                                <span>Relevant courseworks: </span>
                                <span>{formData.relCourseWorks || 'Advanced Transfiguration, Potions Theory and Practice, Charms and Enchantments, Herbology Applications, Care of Magical Creatures, Ancient Runes, Arithmancy, Defense Against the Dark Arts Mastery, Advanced Dueling Techniques.'}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.newSection}>
                        <div className={styles.sectionHeader}>RELATED WORK EXPERIENCES</div>
                        <div className='workInfo'>
                            <div className={styles.rowEdu}> 
                                <span> <b> {formData.organization || 'Department of Magical Accidents and Catastrophes'} </b></span>
                                <span>{formData.jobLocation || 'Ministry of Magic'}</span>
                            </div>

                            <div className={styles.rowEdu}> 
                                <span> <i>{formData.jobTitle || 'Auror Trainee'}</i></span>
                                <span>
                                    {(formData.startMonth && formData.startYear && formData.endMonth && formData.endYear) ? 
                                        `${formData.startMonth} ${formData.startYear} - ${formData.endMonth} ${formData.endYear}` : 
                                        "June 2024 - May 2025"
                                    }
                                </span>
                            </div>
                            
                            <div>
                            {(formData.responsibilities) ? 
                                formData.responsibilities.split('\n').map((line, index) => (
                                <div key={index} style={{ marginBottom: '3px' }}>
                                    {line}
                                </div>
                                )) :
                                [
                                "• Led specialized task force in neutralizing 15+ dark magic incidents across Greater London area",
                                "• Collaborated with Senior Aurors to develop new protective ward systems, improving department safety protocols by 40%",
                                "• Mentored 8 junior wizards in advanced defensive spell casting and emergency response procedures"
                                ].map((point, index) => (
                                <div key={index} style={{ marginBottom: '3px' }}>
                                    {point}
                                </div>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                    
                </article>
        </section>
    )
}