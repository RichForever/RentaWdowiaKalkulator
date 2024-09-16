import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import delve from "dlv";

import { GET_PAGE_BY_SLUG } from "../queries/getPageBySlug";
import {GET_PAGE_SEO} from "../queries/getPageSeo";

import BlockManager from "../components/shared/BlockManager";
import Section from "../components/Section";
import PageSeoTags from "../components/shared/PageSeoTags";
import Layout from "../components/layout";
import { Spin } from "antd";

const SlugPage = () => {
    const { slug } = useParams();
    const pageSlug = slug || "home"; // If no slug, default to "home"

    const page = useQuery(GET_PAGE_BY_SLUG, {
        variables: { slug: pageSlug },
    });

    const seo = useQuery(GET_PAGE_SEO, {
        variables: { slug: pageSlug },
    });

    const errors = page.error || seo.error;
    const loading  = page.loading  || seo.loading ;

    if (errors) {
        return <p>Errors...</p>;
    }
    if (loading) {
        return (
          <Section fullHeight={true} isFirst={true}>
              <Layout>
                  <Spin size="large" />
              </Layout>
          </Section>
        );
    }

    // Check if data exists and has content
    const pageData = delve(page, 'data.pages.data.0.attributes');
    if (!pageData) {
        return (
            <Section fullHeight={true} isFirst={true}>
                <h2>Page not found!</h2>
            </Section>
        );
    }
    const blocks = delve(pageData, 'blocks', []);
    const seoData = delve(seo, 'data.pages.data.0.attributes');

    return (
        <Layout>
            <PageSeoTags data={seoData} />
            {blocks && <BlockManager blocks={blocks} />}
        </Layout>
    );
};

export default SlugPage;
