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
        organization:'',
        jobLocation:'',
        jobTitle:'',
        startMonth: '',
        startYear:'',
        endMonth: '',
        endYear: '',
        isCurrentJob: '',
        responsibilities: '',

    })

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
        <div className={styles.content}>
            <div className={styles.formColumn}>
                <Form 
                    formData={formData}
                    onInputChange={handleInputChange}
                    onSubmit={handleSubmit}
                />
            </div>
            <div className={styles.previewColumn}>
                <Preview formData={formData}/>
            </div>
        </div>
    )
}
