import { useState } from "react";
import AddMovieForm from "./AddMovieForm";

function MoviesList() {
  // collection of objects representing movies
  const movies = [
    {
      id: 1, // items in data collections need unique IDs
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  const [currentMovies, setCurrentMovies] = useState(movies);

  const movieItems = currentMovies.map((movie) => (
    <Movie
      key={movie.id} // key prop is required for lists
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
    // can also destructure movie into individual props
    // <Movie key={movie.id} {...movie}/>
  ));

  // add a new item to an array or object - RIGHT WAY using spread to clone original then adding in new item
  const handleNewMovie = () => {
  let newMovies = [
    ...currentMovies,
    {
      id: 4,
      title: "The Whale",
      year: 2022,
      synopsis:
        "A morbidly obese teacher attempts to reconnect with his daughter.",
    },
  ];
  setCurrentMovies(newMovies);
};

const handleAddMovie = (newMovie) => {
  newMovie.id = currentMovies.length + 1; // unreliable but succinct
  setCurrentMovies([...currentMovies, newMovie]);
};

  // remove an item from an array - RIGHT WAY using filter to create a new array without the removed item
  const handleDeleteMovie = () => {
  let idToDelete = 2;
  let newMovies = currentMovies.filter((movie) => movie.id != idToDelete);
  setCurrentMovies(newMovies);
};

  // replace/update an item in an array - RIGHT WAY using map to create a new array including the updated item
  const handleUpdateSynopsis = () => {
  let updatedSynopsis1 = "Iconic heart-warming prison break movie";
  let newMovies = currentMovies.map((movie) =>
    movie.id === 1 ? { ...movie, synopsis: updatedSynopsis1 } : movie);
  setCurrentMovies(newMovies);
};

  // sort/reverse an array - RIGHT WAY cloning the original first
  const handleSortMovies = () => {
  let newMovies = [...currentMovies];
  newMovies.reverse();
  newMovies.sort();
  setCurrentMovies(newMovies);
};

  const handleReverseMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
  };

  const handleSortByYear = () => {
    let sortedMovies = [...currentMovies];
    sortedMovies.sort((a, b) => a.year - b.year);
    setCurrentMovies(sortedMovies);
  };

  const handleSortByTitle = () => {
    let sortedMovies = [...currentMovies];
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    setCurrentMovies(sortedMovies);
  };

  // separate component for displaying each movie
  function Movie({ title, year, synopsis }) {
    return (
      /* no key prop here - only at top level inside .map */
      <li>
        <h3>{title}</h3>
        <span>({year})</span>
        <div>{synopsis}</div>
      </li>
    );
  }

  // key prop is required for lists
  //   const movieItems = movies.map((movie) => (
  //     <li key={movie.id}>
  //       <h2>{movie.title}</h2>
  //       <p>{movie.year}</p>
  //       <p>{movie.synopsis}</p>
  //     </li>
  //   ));

  return (
    <div className="MoviesList componentBox">
      <ul>{movieItems}</ul>
      <button onClick={handleReverseMovies}>Reverse List</button>
      <button onClick={handleSortByYear}>Sort By Year</button>
      <button onClick={handleSortByTitle}>Sort By Title</button>
      <button onClick={handleNewMovie}>Add New Movie</button>
      <button onClick={handleDeleteMovie}>Delete Movie</button>
      <button onClick={handleUpdateSynopsis}>Update Synopsis</button>
      <button onClick={handleSortMovies}>Sort Movies</button>
      <AddMovieForm onAddMovie={handleAddMovie} />;
    </div>
  );

  //   return (
  //     <div className="MoviesList componentBox">
  //       <ul> {/* iterate over each movie, print the title in a list */}{" "}
  //         {movies.map((movie) => (
  //           <li>{movie.title}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
}

export default MoviesList;
