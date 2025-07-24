const calculateReadingTime = (content) => {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 175);
  return minutes;
};

export default calculateReadingTime;
