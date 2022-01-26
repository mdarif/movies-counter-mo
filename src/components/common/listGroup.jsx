const ListGroup = (props) => {
  const { items, onItemSelect, textProperty, valueProperty, selectedItem } =
    props;

  return (
    <>
      <ul className="list-group">
        {/* <li className="list-group-item active">All Genres</li> */}
        {items.map((genre) => (
          <li
            key={genre[valueProperty]}
            onClick={() => onItemSelect(genre)}
            className={
              genre === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {genre[textProperty]}
          </li>
        ))}
      </ul>
    </>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
