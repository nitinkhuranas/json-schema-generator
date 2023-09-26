export default function FormBuilder({ formElems }) {
  const getElement = (type: string) => {
    if (type === "text") {
      return <input type="text" />
    }
    if (type === "number") {
      return <input type="number" />
    }
    if (type === "password") {
      return <input type="password" />
    }
    if (type === "dropdown") {
      return <input type="text" />
    }
    return null;
  }

  return (
    <div>
      {formElems.map(element => {
        return (
          <div>
            {getElement(element.type)}
          </div>
        )
      })}
    </div>
  )
}