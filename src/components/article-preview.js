import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import styles from "./article-preview.module.css";

export default ({ article }) => (
  <div className={styles.preview}>
    <h4 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h4>
    <div className={styles.imageContainer}>
      <Img alt="" fluid={article.heroImage.fluid} />
    </div>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
);
