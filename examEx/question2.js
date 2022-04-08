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
  const filteredVideos = videosArr.filter((video) => {
    const videoTitle = video.title.toLowerCase();
    const videoTags = video.tags.join(" ").toLowerCase();
    return (
      videoTitle.includes(searchTermLower) ||
      videoTags.includes(searchTermLower)
    );
  });
  return filteredVideos;
};
console.log(searchVideo(videos, "panda"));
