import React from "react";


export const InputItems = (props) => {
  const store = props.store;
  return (
    <div>
      <h3>Input your item to your list here:</h3>
      <input onChange={store.readItem} value={store.input} />
      <button onClick={store.createItem} value={store.input}>Submit</button>
    </div>
  )
}

export const ListItems = (props) => {
  const store = props.store;
  return (
    <div>
      <h3>Items:</h3>
      <ul>
        {
          store.items.map((item, index) => {
            return (
              <div>
                <li>
                  <button onClick={store.updateItem} value={index}>{item}</button>
                  <button onClick={store.deleteItem} value={index}>X</button>
                </li>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}
