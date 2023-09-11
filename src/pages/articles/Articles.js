import Barcode from 'assets/barcode.svg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from 'hooks';
import RouterLink from 'next/link';
import { useState, useEffect } from 'react';
import { formatDate } from 'utils/date';
import { classes, cssProps } from 'utils/style';
import styles from './Articles.module.css';
import B1 from 'assets/spr-schema-1-dark.png';

const ArticlesPost = ({
  slug,
  title,
  abstract,
  date,
  featured,
  banner,
  timecode,
  index,
}) => {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setDateTime(formatDate(date));
  }, [date, dateTime]);
  
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <article
      // className={styles.post}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
     
      {featured && !!banner && (
        <div >
          <Barcode/>
        </div>
      )}
      <RouterLink href={`https://drive.google.com/file/d/16O-SHjPrZxKWo3FjH7uFwwj7IlDMdX29/view?usp=drivesdk`} scroll={false}>
        <a
          className={styles.postLink}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.postDetails}>
            <div aria-hidden className={styles.postDate}>
              <Divider notchWidth="70px" notchHeight="8px" />
              
            </div>
            <Heading as="h2" level={featured ? 2 : 4}>
              {title}
            </Heading>
            Click here
            <Text size={featured ? 'l' : 's'} as="p">
              {abstract}
      
            </Text>
            <div className={styles.postFooter}>
             
            </div>
          </div>
        </a>
      </RouterLink>
      
    </article>
  );
};

const SkeletonPost = ({ index }) => {
  return (
    <article
      aria-hidden="true"
      className={classes(styles.post, styles.skeleton)}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      {/* <div className={styles.postLink}>
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            Coming soon...
          </div>
          <Heading
            className={styles.skeletonBone}
            as="h2"
            level={4}
            style={{ height: 24, width: '70%' }}
          />
          <Text
            className={styles.skeletonBone}
            size="s"
            as="p"
            style={{ height: 90, width: '100%' }}
          />
          <div className={styles.postFooter}>
            
          </div>
        </div>
      </div> */}
    </article>
  );
};

export const Articles = ({ posts, featured }) => {
  const { width } = useWindowSize();
  const singleColumnWidth = 2190;
  const isSingleColumn = width <= singleColumnWidth;

  const postsHeader = (
    <header className={styles.header}>
      {/* <Heading className={styles.heading} level={1} as="h1">
        <DecoderText text="Resume" />
      </Heading> */}
      <Barcode />
    </header>
  );

  // const postList = (
  //   <div className={styles.list}>
  //     {!isSingleColumn && postsHeader}
  //     {posts.map(({ slug, ...post }, index) => (
  //       <ArticlesPost key={slug} slug={slug} index={index} {...post} />
  //     ))}
  //     {/* {Array(2)
  //       .fill()
  //       .map((skeleton, index) => (
  //         <SkeletonPost key={index} />
  //       ))} */}
  //   </div>
  // );

  const featuredPost = <ArticlesPost {...featured} />;

  return (
    <article className={styles.articles}>
      <Meta
        title="Articles"
        description="A collection of technical design and development articles. May contain incoherent ramblings."
      />
      <Section className={styles.content}>
        {!isSingleColumn && (
          <div className={styles.grid}>
            {/* {postList} */}
            {/* {featuredPost} */}
          </div>
        )}
        {isSingleColumn && (
          <div className={styles.grid}>
            {/* {postsHeader} */}
            {featuredPost}
            {/* {postList} */}
          </div>
        )}
      </Section>
      <Footer />
    </article>
  );
};
