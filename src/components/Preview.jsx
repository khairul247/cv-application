import styles from '../styles/Preview.module.css'

export default function Preview({formData}) {

    return (
        <section className={styles.previewSection}>
                <article className={styles.resume}>
                    <header className={styles.resumeHeader}>
                        <h1 className={styles.name}>
                            {formData.name}
                        </h1>
                        <div className={styles.contactInfor}>
                            <span>{formData.phone}</span>
                            <span className={styles.separator}> | </span>
                            <span>{formData.email}</span>
                        </div>
                    </header>
                    <div className='educationSection'>
                        <div className={styles.sectionHeader}>EDUCATION</div>
                        <div className='eduInfo'>
                            <div className={styles.rowEdu}> 
                                <span> <b> {formData.university} </b></span>
                                <span>{formData.uniLocation}</span>
                            </div>

                            <div className={styles.rowEdu}> 
                                <span> <b>{formData.degree}</b></span>
                                <span>{formData.gradMonth+' '+formData.gradYear}</span> 
                            </div>
                            
                            <div> 
                                <span>Relevant courseworks: </span>
                                <span>{formData.relCourseWorks}</span>
                            </div>
                        </div>
                    </div>
                </article>
        </section>
    )
}