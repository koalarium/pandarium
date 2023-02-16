import ArticleThumb from "./ArticleThumb";

const Articles = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">
            <ArticleThumb/>
            <ArticleThumb/>
            <ArticleThumb/>
        </div>
    );
}

export default Articles;