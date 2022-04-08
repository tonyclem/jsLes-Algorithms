const videos = [
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

const searchVideo = (videosArr = [], searchTerm = "") => {
  const searchTermLower = searchTerm.toLowerCase();
  return videosArr.filter((video) => {
    return (
      video.title.toLowerCase().includes(searchTermLower) ||
      video.tags.join(" ").toLowerCase().includes(searchTermLower)
      //   video.tags.some((tag) => tag.toLowerCase().includes(searchTermLower)) // this is the same as the above line
    );
  });
};
console.log(searchVideo(videos, "panda"));
