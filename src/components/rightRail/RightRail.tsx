import styles from '@/styles/LeftRail.module.css'

export default function RightRail({ }) {
  return (
    <div className={styles.rightRail}>
      <h1>Validation</h1>
      <input type="checkbox" id="required" value="isRequired"/>
      <label for="required">Required</label>
    </div>
  )
}