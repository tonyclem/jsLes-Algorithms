/**
 * The developer team at your YouTube competitor company wants to add a colouring property to the tags.
 * This will require some data changes as right now every tag is a single string. The tags will have to become objects so that we can have a `name` and `color` property.
 *
 * Below you will find the beginning of the dbTags data (an array). Do not edit this, you will need to add things to this array in your function!
 */

/** DO NOT EDIT THE TAGS ARRAY MANUALLY! THIS IS MIMICING YOUR DATABASE **/
const dbTags = [
  {
    id: "t---1",
    name: "Programming",
    color: "#c4ef00",
  },
];

/** DO NOT EDIT THE TAGS ARRAY MANUALLY! THIS IS MIMICING YOUR DATABASE **/

/**
 * Let's write a function that will look at all the tags in the given videos array and adds the ones missing to our `dbTags` array.
 * Then we will have our tag data that we can later use to assign the tags with colors to our videos!
 *
 * You will need to go through the given videos array that will have the same structure as in question 2:
 * {
 *   id: string,
 *   title: string,
 *   tags: Array of strings
 * }
 *
 * Then per tag in the array, check if there is already a tag in `dbTags`, if not then add it and generate a new id and give it the default colour!
 */
const DEFAULT_COLOR = "#ffffff";
const extractTags = (videos = []) => {
  // for each video:
  videos.map((video) => {
    // for each tag in the video:
    video.tags.map((tag) => {
      // check if the tag is already in the dbTags array
      const dbTag = dbTags.find((dbTag) => dbTag.name === tag);
      // if not then add it to the dbTags array
      if (!dbTag) {
        const newTag = {
          id: `t---${dbTags.length + 1}`,
          name: tag,
          color: DEFAULT_COLOR,
        };
        dbTags.push(newTag);
        return newTag;
      }
      return dbTag;
    });
  });
  // if the dbTags array does not contain an element with the tag
  // add a new tag that has a unique id, a name property that contains the tag and a color property that contains the DEFAULT_COLOR
};

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

extractTags(testVideos);
console.log(dbTags);
