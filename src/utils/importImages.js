const importImages = (basePath, imageCount) => {
  const images = [];
  for (let i = 1; i <= imageCount; i++) {
    try {
      images.push(require(`../assets/images/${basePath}/${i}.png`));
    } catch (error) {
      console.warn(`Image ${i}.png not found in ${basePath}`);
    }
  }
  return images;
};

export default importImages;