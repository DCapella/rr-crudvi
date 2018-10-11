const defaultStore = {
  input: '',
  items: [],
}

const mainReducer = (store=defaultStore, action) => {
  switch (action.type) {
    case "CREATE_ITEM":
      return {...store, input: '', items: [...store.items, action.item]};
    case "READ_ITEM":
      return {...store, input: action.input};
    case "UPDATE_ITEM":
      let updateItem = [...store.items];
      updateItem[action.index] = action.newItem;
      return {...store, items: [...updateItem]};
    case "DELETE_ITEM":
      let deleteItem = [...store.items];
      deleteItem.splice(action.index, 1);
      return {...store, items: [...deleteItem]};
    default:
      return {...store};
  }
}

export default mainReducer;
