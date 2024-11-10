import { useSelector } from "react-redux"
import { ItemElem } from "../Item/Item"
import { Item } from "../../features/items-slice"

const listStyle: any = {
  display: "flex",
  flexWrap: "wrap",
  width: "contain",
  margin: "0px auto",
}

const ItemList = () => {
  const users: Item[] = useSelector((store: any) => store.itemSlice.items)

  return (
    <div style={listStyle}>
      {users.map((user) => (
        <ItemElem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default ItemList
