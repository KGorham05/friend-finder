// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

const friendsArray = [
  {
    name: "Pat",
    photo: "data:image/jpeg;base64,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",
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
    photo: "https://i3.cpcache.com/product/1698160151/Smiling_Monkey_Face_Patch_300x300.jpg?height=300&width=300&qv=90&side=front&Filters=[{%22name%22:%22background%22,%22value%22:%22ddddde%22,%22sequence%22:2}]",
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
    photo: "https://pbs.twimg.com/profile_images/893175387617767424/kFOHg0Hd_400x400.jpg",
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

