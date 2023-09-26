import FormBuilder from '@/components/form-builder'
import LeftRail from '@/components/leftRail';
import RightRail from '@/components/rightRail';
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [elements, setElements] = useState([]);

  const addInput = (type: string) => {
    setElements([...elements, { type }]);
  }

  return (
    <>
      <div>
        <h1>Home Page</h1>
        <div className={styles.home}>
          <LeftRail onAddItem={addInput} />
          <div className={styles.formBuilder}>
            <FormBuilder formElems={elements}></FormBuilder>
          </div>
          <RightRail />
        </div>
      </div>
    </>
  )
}
