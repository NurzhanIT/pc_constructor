const Item = ({ component }) => {
  return (
    <div className="item">
      <div className="item_top">
        <div className="item_top_left">
          <div className="item_img">
            <img style={{ width: "200px" }} src={component.image} alt="" />
          </div>
          <div className="detailed_info">
            <div className="name">{component.name}</div>
          </div>
        </div>

        <div className="item_top_right">
          <div className="price">{component.price}₸</div>
          <div className="add_btn">Добваить в сборку</div>
        </div>
      </div>
      <div className="item_bottom">
        <div className="rating">Рейтинг : {component.rating}/10</div>
      </div>
    </div>
  );
};
export default Item;
