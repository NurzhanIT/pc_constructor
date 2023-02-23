const Item = ({ component }) => {
  return (
    <div className="item">
      <div className="item_top">
        <div className="item_top_left">
          <div className="item_img">
            <img
              src="https://static.shop.kz/upload/iblock/9fc/488co8swhuk6bsl6lvwvhmjgljgzsnab/167232o10.jpg"
              alt=""
            />
          </div>
          <div className="detailed_info">
            <div className="name">{component.name}</div>
          </div>
        </div>

        <div className="item_top_right">
          <div className="price">{component.price}₸</div>
        </div>
      </div>
      <div className="item_bottom">
        <div className="rating">Рейтинг : {component.rating}/10</div>
      </div>
    </div>
  );
};
export default Item;
