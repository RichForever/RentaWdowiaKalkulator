import delve from 'dlv';
import {getStrapiMedia} from '../../utils';

const BlockHero = ({ images, header }) => {

    const { title, label } = header;
    const url = delve(images, 'data.attributes.url');
    const imageUrl = getStrapiMedia(url);


    return (
        <section className="text-gray-600 body-font py-40 flex justify-center items-center 2xl:h-screen">
            <div className="container flex md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 my-12 lg:pl-24 md:pl-16 md:mx-auto flex flex-col md:items-start md:text-left items-center text-center">
                    {title && (
                        <h1 className="title-font lg:text-6xl text-5xl mb-4 font-black text-gray-900">
                            {title}
                        </h1>
                    )}
                    {label && <p className="mb-8 px-2 leading-relaxed">{label}</p>}
                </div>
                <img src={imageUrl} alt=""/>
            </div>
        </section>
    );
};

export default BlockHero;
