// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

const friendsArray = [
  {
    name: "Pat",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    name: "Sam",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
      3,
      2,
      3,
      3,
      3,
      2,
      5,
      2,
      3,
      3
    ]
  },
  {
    name: "Jess",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
      1,
      5,
      4,
      1,
      4,
      5,
      4,
      1,
      2,
      5
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;

