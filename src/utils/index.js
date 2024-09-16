// ./client/utils/index.js
export function getStrapiURL(path) {
    return `${process.env.REACT_APP_API_URL || "http://localhost:1337"}${path}`;
}

export function getStrapiMedia(url) {
    if (url == null) {
        return null;
    }
    if (url.startsWith("http") || url.startsWith("//")) {
        return url;
    }
    return `${process.env.REACT_APP_API_URL || "http://localhost:1337"}${url}`;
}

export function redirectToHomepage() {
    window.location.href = "/";
}

export function getData(slug) {
    const slugToReturn = `/${slug}`;
    const apiUrl = `/pages?slug=${slug}`;

    return {
        data: getStrapiURL(apiUrl),
        slug: slugToReturn,
    };
}
