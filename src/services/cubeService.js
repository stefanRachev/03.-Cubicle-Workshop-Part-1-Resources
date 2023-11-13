const uniqId = require("uniqid");

const cubes = [
 
];

exports.create = (cubeData) => {
  const newCube = {
    id: uniqId(),
    ...cubeData,
  };
  cubes.push(newCube);
  return newCube;
};

exports.getAll = (search, from, to) => {
  let filterCubes = [...cubes];

  if (search) {
    filterCubes = filterCubes.filter((cube) =>
      cube.name.toLocaleLowerCase().includes(search)
    );
  }
  if (from) {
    filterCubes = filterCubes.filter(
      (cube) => cube.difficultyLevel >= Number(from)
    );
  }
  if (to) {
    filterCubes = filterCubes.filter(
      (cube) => cube.difficultyLevel <= Number(to)
    );
  }

  return filterCubes;
};

exports.getSingleCube = (id) => {
  return cubes.find((cube) => cube.id === id);
};
