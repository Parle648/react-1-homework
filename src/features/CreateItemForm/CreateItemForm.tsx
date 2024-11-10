import { useForm } from "react-hook-form"
import { appStateStore } from "../../app/store"
import { pushItem } from "../items-slice"

interface IItemForm {
  name: string
  age: number
  licenseNumber: string
}

const CreateItemForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IItemForm>()

  const updateListHandler = (itemData: IItemForm) => {
    console.log(itemData)
    appStateStore.dispatch(pushItem({ ...itemData, id: Math.random() * 10000 }))
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(updateListHandler)}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "0px auto",
      }}
    >
      <h2>Enter your name</h2>
      <input
        {...register("name", {
          required: "this field shouldn't be empty",
        })}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      <h2>Enter your age</h2>
      <input
        type="number"
        {...register("age", {
          required: "this field shouldn't be empty",
          min: {
            value: 18,
            message: "have to be more than 18",
          },
        })}
      />
      {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      <h2>Enter your licenseNumber</h2>
      <input
        {...register("licenseNumber", {
          required: "this field shouldn't be empty",
        })}
      />
      {errors.licenseNumber && (
        <p style={{ color: "red" }}>{errors.licenseNumber.message}</p>
      )}
      <input type="submit" value="+ Add new Item" />
    </form>
  )
}

export default CreateItemForm
