const sortNum = [5, 9, 1, 4, 2, 3];
console.log(sortNum.sort());

// Example
const testVideos = [
  {
    id: "v---1",
    title: "JavaScript for Beginners",
    tags: ["Programming", "JavaScript"],
  },
  {
    id: "v---2",
    title: "C# for Beginners",
    tags: ["Programming", "C#"],
  },
  {
    id: "v---3",
    title: "Cute panda begins to fall over",
    tags: ["Panda", "Animal"],
  },
];

const videos = (list = [], s = "") => {
  let change = s.toLowerCase();
  return list.filter((ls) => {
    return ls.title.includes(s) || ls.tags.some((tag) => tag.includes(s));
  });
};

console.log(videos(testVideos, "Program"));
