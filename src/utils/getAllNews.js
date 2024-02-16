export const getAllNews = async (category) => {
    const res = await fetch(`/news?category=${category}`);
    return res.json();
}