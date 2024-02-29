"use client";

import React, { useEffect, useState } from "react";
import footerLinksData from "@/dummy/footerLinksData";

const Article = ({ id }) => {
  const [articleData, setArticleData] = useState({});

  useEffect(() => {
    const article = footerLinksData?.find((data) => data.id === id);
    setArticleData(article);
  }, [id]);

  return <div className="min-h-96 text-black">{articleData?.content}</div>;
};

export default Article;
