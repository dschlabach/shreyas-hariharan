import React from "react";
import Link from "next/link";

type ArticleTitleProps = {
  title: string;
  date: string;
  slug: string;
};

const ArticleTitle = ({ title, date, slug }: ArticleTitleProps) => {
  return (
    <div className="flex flex-col gap-y-3 border-t border-ui-dark-purple relative pt-6">
      <div className="absolute top-0 left-0 w-32 h-3 bg-ui-dark-purple" />
      <p className="font-light text-sm">{date}</p>
      <h3 className="font-bold text-5xl">
        <Link href={slug}>{title}</Link>
      </h3>
    </div>
  );
};

export default ArticleTitle;
