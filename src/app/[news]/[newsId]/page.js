import { getSingelPage } from "@/utils/getSingelPage";

const NewsDetailsPage = async ({ params }) => {
    const {data} = await getSingelPage(params.newsId);
    console.log(data);
    return (
        <div>
           {params.newsId}
        </div>
    );
};

export default NewsDetailsPage;