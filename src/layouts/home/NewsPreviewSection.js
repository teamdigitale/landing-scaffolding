import React from "react";
import { Card, CardBody, Icon } from "design-react-kit";
import { createUseStyles } from "react-jss";
import { MobileSwiper } from "../../components/MobileSwiper.js";
import { Hero } from "../../components/hero/Hero.js";
import content from "../../../contents/home-page/home.yml";
import labels from "../../../contents/labels.yml";
import { ExternalLink } from "../../components/ExternalLink.js";
import { HeroCategory } from "../../components/hero/HeroCategory.js";
import { HeroTitle } from "../../components/hero/HeroTitle.js";
import { HeroBody } from "../../components/hero/HeroBody.js";

const {
  heroNews: { category, title },
  newsPreview,
} = content;

const { ariaLabel } = labels;

const useStyle = createUseStyles({
  category: {
    fontSize: "0.875rem",
  },
  "@media (min-width: 992px)": {
    category: {
      fontSize: "0.78rem",
    },
  },
  cardBorder20: {
    borderRadius: 20,
  },
});

export const NewsPreviewSection = () => {
  const classes = useStyle();
  const slides = newsPreview.map((news) => (
    <Card
      key={news.title}
      teaser
      noWrapper
      className={`${classes.cardBorder20} shadow-lg`}
    >
      <CardBody className="h-100 d-flex flex-column">
        <Icon
          className="mt-5 mb-5"
          icon="it-presentation"
          size="xl"
          color="primary"
          focusable={false}
          role="img"
          aria-label={news.ariaLabel}
        />
        <h4 className="h4 text-primary font-weight-bold">
          <ExternalLink
            linkTo={news.link}
            className="text-decoration-none"
            ariaLabel={news.ariaLabel}
          >
            {news.title}
          </ExternalLink>
        </h4>
        <p className="card-text pt-2 pb-4 text-dark">{news.body}</p>
      </CardBody>
    </Card>
  ));

  return (
    <Hero>
      <div
        id="vantaggi"
        className="row align-items-center justify-content-center"
      >
        <div className="text-center text-lg-left">
          <HeroCategory title={category} />
          <HeroTitle title={title} linkTo="#mainTop" />
        </div>
        <div className="mt-4 col-12 d-none d-lg-flex card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
          {slides}
        </div>
      </div>
      <MobileSwiper slides={slides} />
    </Hero>
  );
};
