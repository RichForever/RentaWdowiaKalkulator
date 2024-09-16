import {Helmet, HelmetProvider} from 'react-helmet-async';
import {getStrapiMedia} from '../../utils'
const PageSeoTags = ({data}) => {

    const title = data?.title;
    const metaTitle = data?.seo?.metaTitle;
    const metaDescription = data?.seo?.metaDescription;
    const preventIndexing = data?.seo?.preventIndexing;
    const metaImage = data?.seo?.metaImage?.data?.attributes?.url;
    const metaImageUrl = getStrapiMedia(metaImage);
    const customMetaTags = data?.seo?.meta;

    return (
        <HelmetProvider>
            <Helmet>
                {title && (
                    <title>{title}</title>
                )}

                {metaTitle && (
                    <meta name="title" content={metaTitle}/>
                )}

                {metaDescription && (
                    <meta name="description" content={metaDescription}/>
                )}

                {preventIndexing && (
                    <meta name="robots" content="noindex"></meta>
                )}

                {metaImageUrl && (
                    <meta name="og:image" content={metaImageUrl}/>
                )}

                {customMetaTags && (
                    customMetaTags.map(({id, name, content}) =>
                        <meta name={name} content={content} key={id}/>
                    )
                )}
            </Helmet>
        </HelmetProvider>
    )
}
export default PageSeoTags;