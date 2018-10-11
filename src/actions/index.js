// CREATE
export function createItem(e) {
  return {
    type: "CREATE_ITEM",
    item: e.target.value,
  }
}
// READ
export function readItem(e) {
  return {
    type: "READ_ITEM",
    input: e.target.value,
  }
}
// UPDATE
export function updateItem(e) {
  const newItem = prompt("Enter to update item name:");

  if (newItem === null) return;
  return {
    type: "UPDATE_ITEM",
    index: e.target.value,
    newItem: newItem,
  }
}
// DELETE
export function deleteItem(e) {
  return {
    type: "DELETE_ITEM",
    index: e.target.value,
  }
}
