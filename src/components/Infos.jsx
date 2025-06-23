
export default function PersonalInformation({infos, setInfos, styles}) {

    function handleInputChange(event){
        const {name, value} = event.target
        setInfos(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        
        <>
             <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input 
                    type="text"
                    id='name'
                    name='name'
                    value={infos.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder='e.g. Kasim Selamat'
                    />
            </div>
             
            <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                <input 
                    type="tel"
                    id='phone'
                    name='phone'
                    value={infos.phone}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder='e.g. +601122337766'
                    />
            </div>
             
            <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input 
                    type="email"
                    id='email'
                    name='email'
                    value={infos.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder='e.g. john.doe@gmail.com'
                    />
            </div>
        </>
    )
    
}