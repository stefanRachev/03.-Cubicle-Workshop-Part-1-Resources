const Cube = require("../models/Cube");
const cubes = [];

exports.create = async (cubeData) => {
  const cube = await Cube.create(cubeData);
  return cube;
};

exports.getAll = async (search, from, to) => {
  let filterCubes = await Cube.find().lean();

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

exports.getSingleCube = (id) => Cube.findById(id).populate("accessories");

exports.attachAccessory = async (cubeId, accessoryId) => {
  const cube = await this.getSingleCube(cubeId);
  cube.accessories.push(accessoryId);
  return cube.save();
};

//exports.update = (id, cubeData) => Cube.findByIdAndUpdate(id, cubeData);

exports.update = async (id, cubeData) => {
  return Cube.findByIdAndUpdate(id, cubeData, { new: true });
};

exports.delete = (id) => Cube.findByIdAndDelete(id);