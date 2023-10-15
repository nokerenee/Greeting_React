// Exercise 2:

function SingleCat({ cat, onDeleteCat }) {
    const handleDeleteClick = (e) => {
      e.preventDefault(); // Prevent the default behavior of the anchor tag
      onDeleteCat(); // Call the delete function
    };

    return (
      <li>
        <img src={cat.image} alt={cat.name} />
        <h3>{cat.name}</h3>
        <p>{cat.latinName}</p>
        <a href="#" onClick={handleDeleteClick}>
          Delete
        </a>
      </li>
    );
  }

  export default SingleCat;