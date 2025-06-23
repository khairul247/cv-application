import { useState } from "react";
import Form from "./Form";
import Preview from "./Preview";
import styles from '../styles/Content.module.css'

export default function Content() {

    const [activeTab, setActiveTab] = useState('personal')

    const [edus, setEdus] = useState({
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

    const [infos, setInfos] = useState({
        name: '',
        phone: '',
        email: '',
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
                title: '',
                month: '',
                year: '',

            }
        ]
    )

    const [skills, setSkills] = useState('');


    return (
        <div className={styles.content}>
            <div className={styles.formColumn}>
                <Form 
                    activeTab={activeTab}
                    infos = {infos}
                    edus = {edus}
                    experiences = {experiences}
                    awards = {awards}
                    skills = {skills}
                    setActiveTab ={setActiveTab}
                    setEdus ={setEdus}
                    setInfos ={setInfos}
                    setAwards = {setAwards}
                    setExperiences={setExperiences}
                    setSkills={setSkills}
                />
            </div>
            <div className={styles.previewColumn}>
                <Preview 
                    edus={edus}
                    infos={infos}
                    experiences = {experiences}
                    awards={awards}
                    skills = {skills}
                />
            </div>
        </div>
    )
}
