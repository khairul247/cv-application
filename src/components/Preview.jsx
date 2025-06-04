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
                                        <div key={index} style={{ 
                                            marginBottom: '3px',
                                            paddingLeft: '15px',
                                            textIndent: '-15px'
                                        }}>
                                            {line}
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

                            <div className={styles.rowEdu}> 
                                <span> <b> {formData.organization || 'Gryffindor Quidditch Team'} </b></span>
                                <span>{formData.jobLocation || 'Hogwarts School'}</span>
                            </div>

                            <div className={styles.rowEdu}> 
                                <span> <i>{formData.jobTitle || 'Captain'}</i></span>
                                <span>
                                    {(formData.startMonth && formData.startYear && formData.endMonth && formData.endYear) ? 
                                        `${formData.startMonth} ${formData.startYear} - ${formData.endMonth} ${formData.endYear}` : 
                                        "September 2022 - May 2025"
                                    }
                                </span>
                            </div>
                            
                            <div>
                                {(formData.responsibilities) ? 
                                    formData.responsibilities.split('\n').map((line, index) => (
                                        <div key={index} style={{ 
                                            marginBottom: '3px',
                                            paddingLeft: '15px',
                                            textIndent: '-15px'
                                        }}>
                                            {line}
                                        </div>
                                    )) :
                                    [
                                        "• Managed team of 7 players, coordinating training schedules and strategin game planning",
                                        "• Achieved 85% win rate over two seasons, securing House Cup victory in 2023",
                                        "• Implemented innovative flying formations that were later adopted by other House teams"
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

                            <div className={styles.rowEdu}> 
                                <span> <b> {formData.organization || 'Defense Against the Dark Arts'} </b></span>
                                <span>{formData.jobLocation || 'Hogwarts School'}</span>
                            </div>

                            <div className={styles.rowEdu}> 
                                <span> <i>{formData.jobTitle || 'Teaching Assistant'}</i></span>
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
                                        <div key={index} style={{ 
                                            marginBottom: '3px',
                                            paddingLeft: '15px',
                                            textIndent: '-15px'
                                        }}>
                                            {line}
                                        </div>
                                    )) :
                                    [
                                        "• Assisted Professor McGonagall in instructing 120+ students across years 1-6",
                                        "• Developed supplementary curriculum focusing on practical defensive techniques",
                                        "• Reduced classroom accidents by 60% through implementation of enhanced safety protocols",
                                        "• Provided one-on-one tutoring for struggling students, achieving 95% pass rate improvement",
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
                    </div>

                    <div className={styles.newSection}>
                        <div className={styles.sectionHeader}>AWARDS</div>
                        <div>
                            {[
                                { 
                                award: "Order of Merlin, First Class", 
                                month: formData.award1Month, 
                                year: formData.award1Year 
                                },
                                { 
                                award: "Triwizard Tournament Participant", 
                                month: formData.award2Month, 
                                year: formData.award2Year 
                                },
                                { 
                                award: "Dumbledore Army Founder", 
                                month: formData.award3Month, 
                                year: formData.award3Year 
                                }
                            ].map((item, index) => (
                                <div key={index} style={{ 
                                display: 'flex',
                                justifyContent: 'space-between',
                                }}>
                                <span>{item.award}</span>
                                <span>
                                    {(item.month && item.year) ? 
                                    `${item.month} ${item.year}` : 
                                    "May 2024"
                                    }
                                </span>
                                </div>
                            ))}
                        </div>
                    </div> 

                    <div className={styles.newSection}>
                        <div className={styles.sectionHeader}>SKILLS</div>
                        <div>
                           {(formData.responsibilities) ? 
                                formData.responsibilities.split('\n').map((line, index) => (
                                    <div key={index} style={{ 
                                        paddingLeft: '15px',
                                        textIndent: '-10px'
                                    }}>
                                        {line}
                                    </div>
                                )) :
                                [
                                    "• Advanced Patronus Casting (Corporeal Stag Patronus)",
                                    "• Parseltongue Communication",
                                    "• Broomstick Flight Proficiency (Firebolt Class License)",
                                    "• Time-Turner Navigation (Restricted Use Permit)"
                                ].map((point, index) => (
                                    <div key={index} style={{ 
                                        paddingLeft: '15px',
                                        textIndent: '-10px'
                                    }}>
                                        {point}
                                    </div>
                                ))
                            }
                        </div>
                    </div> 
                    
                </article>
        </section>
    )
}