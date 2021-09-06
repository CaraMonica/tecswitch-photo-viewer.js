const brokenPhotos = [1, 24, 32, 36, 44, 47];
const numPhotos = 50;

const photoUrlList = [...Array(numPhotos).keys()]
  .filter(i => !brokenPhotos.includes(i))
  .map(i => `https://picsum.photos/id/6${i.toString().padStart(2, "0")}/1600/900.jpg`);

export default photoUrlList;
