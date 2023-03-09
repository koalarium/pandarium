import { XlContainer } from "../../components/Global/Containers";
import { GetStaticPaths, GetStaticProps } from "next";
import articles from "../../jsons/articles.json";
import { HeroLogin, HeroSmall } from "../../components/Hero/Heroes";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import Head from "next/head";

type Params = {
    article: {
        id: string,
        title: string,
        hashtags: string[],
        date: string,
        image?: string,
        content: string,
    }
}

const ArticlePost = ({ article }: Params) => {
    return (
        <>
            <Head>
                <title>Pandarium - aktualności</title>
            </Head>
            <HeroSmall />
            <XlContainer>
                <div className="w-full mx-auto mt-12">

                    <h2 className="uppercase text-center text-purple-300/[0.6] text-lg sm:text-2xl md:text-3xl xl:text-4xl font-rubikbold ">Co w bambusie piszczy</h2>
                    <h1 className="uppercase text-center text-xl sm:text-3xl md:text-4xl xl:text-5xl text-purple-900 mb-10 font-rubikbold">{ article.title }</h1>

                    <div className="bg-purple-50 w-full aspect-[16/9] rounded-2xl md:rounded-[35px] mb-3 relative overflow-hidden">
                        <Image fill className="object-cover" src={ article.image ? article.image : "/images/photos/friends.jpg"} alt="article_photo"/>
                    </div>

                    <div className="flex mb-8 flex-col h-fit sm:flex-row my-8">
                        <div className="my-auto flex-none align-middle rounded-xl bg-purple-900 text-white px-6 mr-0 sm:mr-2 mb-4 sm:mb-0 text-xl text-center py-3 sm:py-6 font-rubikbold">{ article.date }</div>
                        <div className="flex flex-row flex-wrap justify-evenly sm:justify-start text-purple-900 gap-2 font-rubikbold">
                            { article.hashtags.map((h, index) => (
                                <div key={ index } className="bg-purple-50 rounded-lg h-fit">
                                    <p className="px-2 py-1">#{ h }</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: article.content }} className="text-base text-purple-950 md:text-lg flex flex-col gap-y-10 text-justify my-12 indent-2 md:indent-6 break-keep mr-1">
                    </div>
                </div>
            </XlContainer>
            <Footer />
        </>
    );
}

export default ArticlePost;


export const getStaticPaths: GetStaticPaths = () => {

    let paths = [];
    paths = articles.map(article => {
        return {
            params: { id: article.id }
        }
    })

    return {
        paths,
        fallback: false,
    }
}


export const getStaticProps: GetStaticProps = async (context) => {

    const params = context.params!;
    const id = params.id;

    const article = articles.find(a => a.id == id);
    
    return {
        props: { 
            article,
        },
    }
}




