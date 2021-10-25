function Item(props) {
  function handleDelete(itemId) {
    props.deleteItem(itemId);
  }

  return (
    <div>
      <div className="itemName">{props.name}</div>
      <div className="itemPrice">{props.price}</div>
      <div className="itemCategory">{props.category}</div>
      { props.isAddToCartButton ? <button>Lisa ostukorvi</button> : 
            <div>
              <button onClick={()=>handleDelete(props.id)}>X</button>
              <button>Muuda toode</button>
            </div> }
      <div>{ props.isAddToCartButton.toString() }</div>
    </div>
  )
}

export default Item;

// Home/AdminHome "true" => ItemList => Item   (props. kaudu võtsin vastu)
// Itemis toimub kustutamine => ItemList => AdminHome (tehakse API päring) (props. kaudu saadan)