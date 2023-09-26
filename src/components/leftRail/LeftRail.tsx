import styles from '@/styles/LeftRail.module.css'

export default function LeftRail({onAddItem}) {
  return (
    <div className={styles.leftRail}>
      <button onClick={() => onAddItem("text")}>Text</button>
          <button onClick={() => onAddItem("password")}>Password</button>
          <button onClick={() => onAddItem("number")}>Number</button>
          <button onClick={() => onAddItem("dropdown")}>Dropdown</button>          
    </div>
  )
}