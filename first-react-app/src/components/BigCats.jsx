// Exercise 2 & 4:

import { useState } from "react";
import AddCatForm from "./AddCatForm";
import SingleCat from "./SingleCat";

function BigCats() {
  const cats = [
    {
      id: 1,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image: "/Images/cheetah.jpg",
    },
    {
      id: 2,
      name: "Cougar",
      latinName: "Puma concolor",
      image: "/Images/cougar.jpg",
    },
    {
      id: 3,
      name: "Jaguar",
      latinName: "Panthera onca",
      image: "/Images/jaguar.jpg",
    },
    {
      id: 4,
      name: "Leopard",
      latinName: "Panthera pardus",
      image: "/Images/leopard.jpg",
    },
    {
      id: 5,
      name: "Lion",
      latinName: "Panthera leo",
      image: "/Images/lion.jpg",
    },
    {
      id: 6,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image: "/Images/snow-leopard.jpg",
    },
    {
      id: 7,
      name: "Tiger",
      latinName: "Panthera tigris",
      image: "/Images/tiger.jpg",
    },
  ];

  const [currentCats, setCurrentCats] = useState(cats);

  const catItems = currentCats.map((cat) => (
    <SingleCat
      key={cat.id}
      cat={cat}
      onDeleteCat={() => handleDeleteClick(cat.id)}
    />
  ));

  const handleAddCat = (newCat) => {
    newCat.id = currentCats.length + 1; // unreliable but succinct
    setCurrentCats([...currentCats, newCat]);
  };

  const handleDeleteClick = (catId) => {
    // Filter out the cat with the specified id
    const updatedCats = currentCats.filter((cat) => cat.id !== catId);
    setCurrentCats(updatedCats);
  };

  const handleSortCats = () => {
    // first clone the original, so we don’t mutate it
    let newCats = [...currentCats];
    newCats.sort((a, b) => a.name.localeCompare(b.name)); // 2. modify the clone
    setCurrentCats(newCats); // 3. set updated clone in state
  };

  const handleReverseCats = () => {
    // first clone the original, so we don’t mutate it
    let newCats = [...currentCats];
    newCats.reverse(); // 2. modify the clone
    setCurrentCats(newCats); // 3. set updated clone in state
  };

  const handleFilterPanthera = () => {
    let pantheraCats = currentCats.filter((cat) =>
      cat.latinName.toLowerCase().includes("panthera")
    );
    setCurrentCats(pantheraCats);
  };

  const handleResetList = () => {
    setCurrentCats(cats);
  };

  return (
    <div className="BigCats componentBox">
      <ul>{catItems}</ul>
      <button onClick={handleSortCats}>Sort List Alphabetically</button>
      <button onClick={handleReverseCats}>Reverse List</button>
      <button onClick={handleFilterPanthera}>Display 'Panthera' Family</button>
      <button onClick={handleResetList}>Reset List</button>
      <AddCatForm onAddCat={handleAddCat} />
    </div>
  );
}

export default BigCats;
