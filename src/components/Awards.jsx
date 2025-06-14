
export default function Awards({awards, setAwards, styles}) {
    
    const addAward =() => {
        setAwards([...awards,{
        id: Date.now(),
        title: '',
        month: '',
        year: '',
    }])

    }

    const removeAward = (id) => {
        const filtered = awards.filter(award => award.id !== id);
        setAwards(filtered);
    }

    function handleAwardsChange(id, event) {
        const {name, value} = event.target
        setAwards(prevAwards =>
            prevAwards.map(award =>
                award.id === id ? {...award, [name]: value} : award
            )
        )
    }

    return (
            <>
                {awards.map((award,index) => (
                    <div key={award.id} className={styles.contentGroup}>
                    <div className = {styles.inputGroup}>
                        <label className={styles.label} htmlFor="awardTitle">Award Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className={styles.input}
                            value={award.title}
                            onChange={(e) => handleAwardsChange(award.id,e)}
                            placeholder="Research Assistant"
                        />
                    </div>

                        <div className={styles.dateInputGroup}>
                            <label className={styles.label}>Start Date:</label>
                                <div className={styles.dateContainer}>
                                    <div className={styles.dateGroup}>
                                        <select
                                            name="awardMonth"
                                            value={award.awardMonth}
                                            className={styles.select}
                                            onChange={(e) => handleAwardsChange(awards.id,e)}
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
                                            name="year"
                                            value={award.year}
                                            className={styles.yearInput}
                                            onChange={(e) => handleAwardsChange(award.id,e)}
                                            placeholder="2024"
                                            min="1950"
                                            max="2030"
                                        />
                                    </div>
                                </div>
                        </div>

                    <div className={styles.buttonContainer}>
                            <div>
                                <button className={styles.button} onClick={() => addAward()}>
                                    Add
                                </button>
                            </div>

                            {index> 0 && (<div> 
                                <button className={styles.buttonRemove} onClick={() => removeAward(award.id)}>
                                    Remove
                                </button>
                            
                            </div>)}
                        </div>
                     
                    </div>

                    
                ))}
            </>
    )
    
}