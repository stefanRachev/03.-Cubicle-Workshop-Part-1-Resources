const uniqId = require("uniqid");

const cubes = [
    {
        id: "w8ope9z8loe1sxi5",
        name: "cube1",
        description: "fsdfsd",
        imageUrl:
          "https://m.media-amazon.com/images/I/41A008RMybL._SX300_SY300_QL70_FMwebp_.jpg",
        difficultyLevel: 1,
      },
      {
        id: "w8ope9z8loe1t78h",
        name: "cube 2",
        description: "dfsdfsd",
        imageUrl:
          "https://m.media-amazon.com/images/I/31iLnc3txPL._SX300_SY300_QL70_FMwebp_.jpg",
        difficultyLevel: 2,
      },
      {
        id: "w8ope9z8loe1th3s",
        name: "cube3",
        description: "dsfsf",
        imageUrl:
          "https://m.media-amazon.com/images/I/318n2rgVLRL._SX300_SY300_QL70_FMwebp_.jpg",
        difficultyLevel: 3,
      },
];

exports.create = (cubeData) => {
  const newCube = {
    id: uniqId(),
    ...cubeData,
  };
  cubes.push(newCube);
  return newCube;
};

exports.getAll = () => {
  return [...cubes];
};
