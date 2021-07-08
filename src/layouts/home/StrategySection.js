import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { HeroCategory } from "../../components/hero/HeroCategory.js";
import { HeroTitle } from "../../components/hero/HeroTitle.js";
import { HeroBody } from "../../components/hero/HeroBody.js";
import { HeroCtaContainer } from "../../components/hero/HeroCtaContainer.js";
import { Cta } from "../../components/hero/Cta.js";
import { HeroGraphic } from "../../components/hero/HeroGraphic.js";
import { Hero } from "../../components/hero/Hero.js";
import content from "../../../contents/home-page/home.yml";
import links from "../../../contents/links.yml";
import labels from "../../../contents/labels.yml";

const {
  heroStrategy: {
    category,
    title,
    body,
    ctaAriaLabelSpid,
    ctaAriaLabelCie,
    altImg,
  },
} = content;
const {
  internalLinks: { strategy: strategyHero },
} = links;
const {
  externalLinks: { strategy: strategyHeroExt },
} = links;

const { showMore, showSPID, showCIE } = labels;

export const StrategySection = () => (
  <Hero>
    <div id="identitadigitale" className="row align-items-center px-lg-5">
      <div className="col-lg-6 p-0 pr-lg-3">
        <div className="text-center text-lg-left">
          <HeroCategory title={category} />
          <HeroTitle title={title} linkTo={strategyHero.linkTop} />
          <HeroBody html={body} />
        </div>
        <HeroCtaContainer>
          <Cta
            text={showSPID}
            linkTo={strategyHeroExt.linkSpidExt}
            aria-label={ctaAriaLabelCie}
          />
          <Cta
            text={showCIE}
            linkTo={strategyHeroExt.linkCieExt}
            aria-label={ctaAriaLabelCie}
          />
        </HeroCtaContainer>
      </div>
      <HeroGraphic className="col-lg-6">
        <StaticImage
          src="../../images/imgFake02.png"
          alt={altImg}
          placeholder="blurred"
          formats={["AUTO", "AVIF", "WEBP"]}
        />
      </HeroGraphic>
    </div>
  </Hero>
);
