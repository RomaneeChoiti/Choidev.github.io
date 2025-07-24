export const isRecentPost = (date) => {
    const postDate = new Date(date);
    const currentDate = new Date();
    const oneWeekAgo = new Date(currentDate.setDate(currentDate.getDate() - 7));
    return postDate >= oneWeekAgo;
};