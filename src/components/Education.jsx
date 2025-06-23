
export default function Education({edus, setEdus, styles}) {

    function handleInputChange(event){
        const {name, value} = event.target
        setEdus(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        
        <>
 <div className={styles.inputGroup}>
                         <label htmlFor="university" className={styles.label}>Your Alma Mater</label>
                         <input 
                             type="text"
                             id='university'
                             name='university'
                             value={edus.university}
                             onChange={handleInputChange}
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
                             value={edus.degree}
                             onChange={handleInputChange}
                             className={styles.input}
                             placeholder='e.g. B.S., Materials Science and Engineering (CGPA 3.5)'
                             />
                     </div>
 
                      <div className={styles.inputGroup}>
                         <label htmlFor="uniLocation" className={styles.label}>Location</label>
                         <input 
                             type="text"
                             id='uniLocation'
                             name='uniLocation'
                             value={edus.uniLocation}
                             onChange={handleInputChange}
                             className={styles.input}
                             placeholder='e.g. University Park, PA'
                             />
                     </div>
 
                      <div className={styles.dateInputGroup}>
                         <label className={styles.label}>Graduation Date</label>
                         <div className={styles.dateContainer}>
                             <div className={styles.dateGroup}>
                                 <select 
                                 name="gradMonth"
                                 value={edus.gradMonth}
                                 onChange={handleInputChange}
                                 className={styles.select}
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
                             <div className={styles.dateGroup}>
                                 <input 
                                     type="number" 
                                     name="gradYear"
                                     className={styles.yearInput}
                                     value={edus.gradYear}
                                     onChange={handleInputChange} 
                                     placeholder="2025" 
                                     min="1950" 
                                     max="2030"/>
                             </div>
                         </div>
                     </div>
 
                     <div className={styles.inputGroup}>
                         <label htmlFor="relCourseWorks" className={styles.label}>Relevant Courseworks</label>
                         <textarea 
                             id="relCourseWorks" 
                             name="relCourseWorks" 
                             placeholder="Relevant courseworks that you took during your university years"
                             value={edus.relCourseWorks}
                             onChange={handleInputChange}
                             className={styles.textarea}
                         >
                         </textarea>
                     </div>
        </>
    )
    
}