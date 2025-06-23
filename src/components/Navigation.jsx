export default function Navigation({styles, activeTab, setActiveTab}){

    const tabs = [
    { id: 'personal', label: 'Personal', icon: '👤' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'awards', label: 'Awards', icon: '🏆' }
    ]

    return (
        
        <div className={styles.tabContainer}>
            {tabs.map((tab) => (
            <button
                key={tab.id}
                className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                onClick={() => setActiveTab(tab.id)}
            >
                <span className={styles.tabIcon}>{tab.icon}</span>
                <span className={styles.tabLabel}>{tab.label}</span>
            </button>
            ))}
        </div>
    )
}