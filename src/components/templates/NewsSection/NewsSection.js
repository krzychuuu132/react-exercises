/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styles';
import Button from 'components/atoms/Button/Button';
import axios from 'axios';

const NewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { data },
        } = await axios.post(
          'https://graphql.datocms.com/',
          {
            query: `
            {
              allArticles {
                title
                category
                description 
                image {
                  url
                }
              }
            }
          `,
          },
          {
            headers: {
              authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
            },
          }
        );
        setArticles(data.allArticles);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <Wrapper>
      {articles.length > 0 ? (
        articles.map(({ title, category, description, id, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <h2>{category}</h2>
            </TitleWrapper>
            <ContentWrapper>
              <p>{description}</p>
            </ContentWrapper>
            {image ? <img src={image.url} alt="article image" /> : null}
            <Button isBig>Read more</Button>
          </ArticleWrapper>
        ))
      ) : (
        <ArticleWrapper>
          <p>Loading...</p>
        </ArticleWrapper>
      )}
    </Wrapper>
  );
};

export default NewsSection;
