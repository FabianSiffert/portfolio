import { useEffect, useState } from 'react'
import styles from './ProfileSection.module.scss'
import { profilePicture } from '../../../../ui/_cozyAssets'

const localTimeFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Berlin',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
})

export default function ProfileSection() {
  const [localTime, setLocalTime] = useState(() => localTimeFormat.format(new Date()))

  useEffect(() => {
    const interval = setInterval(() => setLocalTime(localTimeFormat.format(new Date())), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.profileSection}>
      <div className={styles.profilePicture}>
        <img src={profilePicture} alt='Fabian Siffert' width='1134' height='1742' />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.name}>Fabian Siffert</h1>
        <div className={styles.rule} />
        <dl className={styles.fields}>
          <div className={styles.field}>
            <dt>Job</dt>
            <dd>Software Developer</dd>
          </div>
          <div className={styles.field}>
            <dt>Focus</dt>
            <dd>Android</dd>
          </div>
          <div className={styles.field}>
            <dt>Base</dt>
            <dd>Düsseldorf DE</dd>
          </div>
          <div className={styles.field}>
            <dt>Local</dt>
            <dd>{localTime}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
