import { Item } from "../../features/items-slice"

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "16px",
  margin: "8px",
  width: "200px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
}

export const ItemElem = ({ user }: { user: Item }) => (
  <div style={cardStyle}>
    <h2>{user.name}</h2>
    <p>Age: {user.age}</p>
    <p>License Number: {user.licenseNumber}</p>
  </div>
)
