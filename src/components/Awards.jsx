
export default function Awards({awards, setAwards}) {
    
    const addAward =() => {
        setAwards([...awards,{
        id: Date.now(),
        awardTitle: '',
        awardMonth: '',
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
                    <div key={award.id}>
                    <div>
                        <label htmlFor="awardTitle">Award Title:</label>
                        <input
                            type="text"
                            id="awardTitle"
                            name="awardTitle"
                            value={award.awardTitle}
                            onChange={(e) => handleAwardsChange(award.id,e)}
                            placeholder="Research Assistant"
                        />
                    </div>

                    <div style={{ flex: 1 }}>
                        <label>Start Date:</label>
                            <div style={{ display: 'flex', gap: '10px' }}>
                            <select
                                name="awardMonth"
                                value={award.awardMonth}
                                onChange={(e) => handleAwardsChange(award.id,e)}
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
                            <input
                                type="number"
                                name="awardYear"
                                value={award.awardYear}
                                onChange={(e) => handleAwardsChange(award.id,e)}
                                placeholder="2024"
                                min="1950"
                                max="2030"
                            />
                        </div>
                    </div>

                    <div>
                        <button onClick={() => addAward()}>
                            Add
                        </button>
                    </div>

                    {index> 0 && (<div> 
                        <button onClick={() => removeAward(award.id)}>
                            Remove
                        </button>
                    
                    </div>)}
                     
                    </div>

                    
                ))}
            </>
    )
    
}