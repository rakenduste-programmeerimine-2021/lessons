import { Link } from "react-router-dom";

function Item(props) {
  function handleDelete(itemId) {
    props.deleteItem(itemId);
  }

  return (
    <div>
      { props.isSingleItemView ? 
      <div>
        <div className="itemName">{props.name}</div>
        <div className="itemPrice">{props.price}</div>
        <div className="itemCategory">{props.category}</div>
      </div> : 
      <Link to={`item/${props.id}`}>
        <div className="itemName">{props.name}</div>
        <div className="itemPrice">{props.price}</div>
        <div className="itemCategory">{props.category}</div>
      </Link> }
      { props.isAddToCartButton ? <button>Lisa ostukorvi</button> : 
            <div>
              <button onClick={()=>handleDelete(props.id)}>X</button>
              <button>Muuda toode</button>
            </div> }
    </div>
  )
}

export default Item;

// Home/AdminHome "true" => ItemList => Item   (props. kaudu võtsin vastu)
// Itemis toimub kustutamine => ItemList => AdminHome (tehakse API päring) (props. kaudu saadan)