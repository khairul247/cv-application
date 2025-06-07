import styles from '../styles/Preview.module.css'

export default function Preview({formData, experiences, awards, skills}) {

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
                                <span> <b>{formData.degree || 'Nastily Exhausting Wizarding Tests (N.E.W.T.s), 5(O), 1(E)'}</b></span>
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
                            {experiences.map((experience) => (
                            <div key={experience.id} className='experience-' style={{marginBottom: '0.5rem'} }>
                                <div className={styles.rowEdu}> 
                                    <span> <b> {experience.organization || 'Department of Magical Accidents and Catastrophes'} </b></span>
                                    <span>{experience.jobLocation || 'Ministry of Magic'}</span>
                                </div>

                                <div className={styles.rowEdu}> 
                                    <span> <i>{experience.jobTitle || 'Auror Trainee'}</i></span>
                                    <span>
                                        {(experience.startMonth || experience.startYear || experience.endMonth || experience.endYear || experience.isCurrentJob) ? 
                                            `${experience.startMonth} ${experience.startYear} - ${experience.isCurrentJob? 'Present': `${experience.endMonth} ${experience.endYear}`}` : 
                                            "June 2024 - May 2025"
                                        }
                                    </span>
                                </div>
                                
                                <div>
                                    {(experience.responsibilities) ? 
                                        experience.responsibilities.split('\n').map((line, index) => (
                                            <div key={index} style={{ 
                                                marginBottom: '3px',
                                                paddingLeft: '15px',
                                                textIndent: '-10px'
                                            }}>
                                                • {line}
                                            </div>
                                        )) :
                                        [
                                            "• Led specialized task force in neutralizing 15+ dark magic incidents across Greater London area",
                                            "• Collaborated with Senior Aurors to develop new protective ward systems, improving department safety protocols by 40%",
                                            "• Mentored 8 junior wizards in advanced defensive spell casting and emergency response procedures"
                                        ].map((point, index) => (
                                            <div key={index} style={{ 
                                                marginBottom: '3px',
                                                paddingLeft: '15px',
                                                textIndent: '-10px'
                                            }}>
                                                {point}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>

                    <div className={styles.newSection}>
                        <div className={styles.sectionHeader}>AWARDS</div>
                        <div>
                            {awards.map((award) =>(
                                <div key={award.id}>
                                    <div className={styles.rowEdu}> 
                                    <span> {award.awardTitle|| 'Order of Merlin, First Class'}</span>
                                    <span>
                                        {(award.awardMonth || award.awardYear) ? 
                                            `${award.awardMonth} ${award.awardYear}` : 
                                            "May 2025"
                                        }
                                    </span>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div> 

                    <div className={styles.newSection}>
                        <div className={styles.sectionHeader}>SKILLS</div>
                        <div>
                           {(skills) ? 
                                skills.split('\n').map((line, index) => (
                                    <div key={index} style={{ 
                                        paddingLeft: '15px',
                                        textIndent: '-10px'
                                    }}>
                                       • {line}
                                    </div>
                                )) :
                                [
                                    "Advanced Patronus Casting (Corporeal Stag Patronus)",
                                    "Parseltongue Communication",
                                    "Broomstick Flight Proficiency (Firebolt Class License)",
                                    "Time-Turner Navigation (Restricted Use Permit)"
                                ].map((point, index) => (
                                    <div key={index} style={{ 
                                        paddingLeft: '15px',
                                        textIndent: '-10px'
                                    }}>
                                       • {point}
                                    </div>
                                ))
                            }
                        </div>
                    </div> 
                    
                    <div className={styles.newSection}>
                        <div className={styles.sectionHeader}>TEST</div>
                    </div>
                </article>
        </section>
    )
}