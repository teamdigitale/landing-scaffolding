import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { HeroCategory } from "../../components/hero/HeroCategory.js";
import { HeroTitle } from "../../components/hero/HeroTitle.js";
import { HeroBody } from "../../components/hero/HeroBody.js";
import { HeroCtaContainer } from "../../components/hero/HeroCtaContainer.js";
import { HeroGraphic } from "../../components/hero/HeroGraphic.js";
import { Hero } from "../../components/hero/Hero.js";
import { Cta } from "../../components/hero/Cta.js";
import content from "../../../contents/home-page/home.yml";
import links from "../../../contents/links.yml";
import labels from "../../../contents/labels.yml";

const {
  heroBenefit: { category, title, body, ctaAriaLabel, altImg },
} = content;

const {
  internalLinks: { enablement: benefitHero },
} = links;
const { showSPID, showCIE } = labels;

export const BenefitSection = () => (
  <Hero bgColor="light">
    <div id="comefunziona" className="row align-items-center px-lg-5">
      <HeroGraphic className="col-lg-6">
        <StaticImage
          src="../../images/imgFake02.png"
          alt={altImg}
          placeholder="blurred"
          formats={["AUTO", "AVIF", "WEBP"]}
        />
      </HeroGraphic>
      <div className="col-lg-6 p-0">
        <div className="text-center text-lg-left pl-lg-3">
          <HeroCategory title={category} />
          <HeroTitle title={title} linkTo={benefitHero.linkTop} />
          <HeroBody html={body} />
          <HeroCtaContainer>
            <Cta
              text={showSPID}
              linkTo={benefitHero.linkTo}
              aria-label={ctaAriaLabel}
            />
            <Cta
              text={showCIE}
              linkTo={benefitHero.linkTo}
              aria-label={ctaAriaLabel}
            />
          </HeroCtaContainer>
        </div>
      </div>
    </div>
  </Hero>
);
