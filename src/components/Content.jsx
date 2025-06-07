import { useState } from "react";
import Form from "./Form";
import Preview from "./Preview";
import styles from '../styles/Content.module.css'

export default function Content() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        university: '',
        degree: '',
        uniLocation: '',
        gradMonth: '',
        gradYear:'',
        relCourseWorks:'',

    })

    const [experiences, setExperiences] = useState(
        [
            {
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
            }
        ]
    )

    const [awards, setAwards] = useState(
        [
            {
                id: Date.now(),
                awardTitle: '',
                awardMonth: '',
                awardYear: '',

            }
        ]
    )

    const [skills, setSkills] = useState('');


    return (
        <div className={styles.content}>
            <div className={styles.formColumn}>
                <Form 
                    formData={formData}
                    experiences = {experiences}
                    awards = {awards}
                    skills = {skills}
                    setFormData ={setFormData}
                    setAwards = {setAwards}
                    setExperiences={setExperiences}
                    setSkills={setSkills}
                />
            </div>
            <div className={styles.previewColumn}>
                <Preview 
                    formData={formData}
                    experiences = {experiences}
                    awards={awards}
                    skills = {skills}
                />
            </div>
        </div>
    )
}
