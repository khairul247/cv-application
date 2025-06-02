import { useState } from "react";
import Form from "./Form";
import Preview from "./Preview";
import styles from '../styles/Content.module.css'

export default function Content() {
    const [formData, setFormData] = useState({
        name: 'Harry James Potter',
        phone: '+44 (0) 207-946-0958',
        email: 'h.potter@hogwarts.edu',
        university: 'Hogwarts School of Witchcraft and Wizardry',
        degree: 'Certificate in Defense Against the Dark Arts (CGPA 3.97)',
        uniLocation: 'Highlands, Scotland',
        gradMonth: 'June',
        gradYear:'2024',
        relCourseWorks:'Advanced Transfiguration, Potions Theory and Practice, Charms and Enchantments, Herbology Applications, Care of Magical Creatures, Ancient Runes, Arithmancy, Defense Against the Dark Arts Mastery, Advanced Dueling Techniques.',

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
