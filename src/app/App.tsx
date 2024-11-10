import { Provider } from "react-redux"
import { appStateStore } from "./store"
import ItemList from "../entities/ItemList/ItemList"
import CreateItemForm from "../features/CreateItemForm/CreateItemForm"

function App() {
  return (
    <Provider store={appStateStore}>
      <div>
        <h1>User List</h1>
        <ItemList />
      </div>
      <CreateItemForm />
    </Provider>
  )
}

export default App
