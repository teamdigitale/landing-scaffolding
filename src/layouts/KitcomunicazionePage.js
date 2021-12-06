import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { createUseStyles } from "react-jss";
import { graphql, Link } from "gatsby";
import { Card, CardBody, Icon } from "design-react-kit";

import { HeroTitle } from "../components/hero/HeroTitle.js";
import { HeroBody } from "../components/hero/HeroBody.js";
import { HeroGraphic } from "../components/hero/HeroGraphic.js";
import { Hero } from "../components/hero/Hero.js";
import { Breadcrumb } from "../components/Breadcrumb.js";
import content from "../../contents/kit-comunicazione/kit-comunicazione.yml";
import seo from "../../contents/seo.yml";
import { SEO } from "../components/SEO.js";
import { ExternalLink } from "../components/ExternalLink.js";

const {
  title: seoTitle,
  description: seoDescription,
} = seo.KitcomunicazionePage;

const { title, body } = content;

const query = graphql`
  query {
    textChunk1: markdownRemark(
      fields: { slug: { eq: "kit-comunicazione/enablement-chunk1" } }
    ) {
      html
    }
    textChunk2: markdownRemark(
      fields: { slug: { eq: "kit-comunicazione/enablement-chunk2" } }
    ) {
      html
    }
  }
`;

const useStyles = createUseStyles({
  noBorderBottom: {
    "@global": {
      ".it-right-zone": {
        borderBottom: [["none"], "!important"],
      },
    },
  },
});

export const KitcomunicazionePage = () => {
  const guidaUtilizzo = [
    {
      title: "Guida all'utilizzo",
      subtitle: "Scarica .pdf(11,3Mb)",
      link: "/assets/kit-comunicazione/ID-Kit-di-comunicazione_ver_dic2021.pdf",
    },
  ];

  const eventiIniziative = [
    {
      title: "Flyer",
      subtitle: "Scarica .zip(77,5Mb)",
      link: "/assets/kit-comunicazione/Flyer.zip",
    },
    {
      title: "Locandina",
      subtitle: "Scarica .zip(32,7Mb)",
      link: "/assets/kit-comunicazione/Locandina.zip",
    },
    {
      title: "RollUp",
      subtitle: "Scarica .zip(40Mb)",
      link: "/assets/kit-comunicazione/RollUp.zip",
    },
  ];

  const socialMedia = [
    {
      title: "Cover profile picture",
      subtitle: "Scarica .zip(38,1Mb)",
      link: "/assets/kit-comunicazione/cover-profilepic.zip",
    },
    {
      title: "Post",
      subtitle: "Scarica .zip(55,3Mb)",
      link: "/assets/kit-comunicazione/post.zip",
    },
    {
      title: "Stories",
      subtitle: "Scarica .zip(16,1Mb)",
      link: "/assets/kit-comunicazione/stories.zip",
    },
  ];

  const canaliDigitali = [
    {
      title: "Canali digitali",
      subtitle: "Scarica .zip(72,8Mb)",
      link: "/assets/kit-comunicazione/canali-digitali.zip",
    },
  ];

  const dinamicContents = (arr) => {
    return arr.map((news) => (
      <Card
        key={news.title}
        teaser
        noWrapper
        className="card d-flex flex-row rounded m-0 shadow-lg p-1 align-items-center mb-3"
      >
        <div className="img-responsive-wrapper pl-2">
          <Icon
            className="ml-0 align-middle icon-primary"
            icon="it-download"
            size="m"
            focusable={true}
            role="img"
            aria-label="Link a file"
          />
        </div>
        <CardBody className="card-body pl-4 py-2">
          <ExternalLink
            linkTo={news.link}
            ariaLabel={news.title}
            className="btn-icon text-decoration-none"
          >
            {news.title}
          </ExternalLink>
          <p className="card-text p-0 text-dark">{news.subtitle}</p>
        </CardBody>
      </Card>
    ));
  };

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <Hero
        bgColor="light"
        xPadding={false}
        yPadding={false}
        yPaddingXLScreen={false}
      >
        <Breadcrumb currentPage={content.breadcrumb} />
        <div className="row mt-5 px-lg-4">
          <div className="col-lg-6 p-0 mt-3 mt-lg-0 pr-lg-5">
            <div className="text-center text-lg-left">
              <HeroTitle title={title} />
              <HeroBody html={body} />
            </div>
          </div>
          <HeroGraphic className="col-lg-6">
            <StaticImage
              style={{
                borderRadius: "50%",
              }}
              width={400}
              height={400}
              src="../images/section03-squared-3.png"
              alt="{altImg}"
              aria-label="{altImg}"
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
            />
          </HeroGraphic>
          <div className="row col-12 col-lg-6 pt-3 pb-5">
            <div className="section p-0 text-center text-lg-left">
              <div className="section-content">
                <div className="container">
                  <div className="row mb-2">
                    <div className="col-12">
                      <h4>Materiali</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 pr-0 pr-md-5 mb-3">
                      <Link
                        to="#guidaUtilizzoEl"
                        className="btn-icon text-decoration-none font-weight-semibold"
                      >
                        Guida all'utilizzo
                      </Link>
                    </div>
                    <div className="col-6 pr-0 pr-md-5 mb-3">
                      <Link
                        to="#eventiIniziativeEl"
                        className="btn-icon text-decoration-none font-weight-semibold"
                      >
                        Eventi e iniziative
                      </Link>
                    </div>
                    <div className="col-6 pr-0 pr-md-5 mb-3">
                      <Link
                        to="#canaliDigitaliEl"
                        className="btn-icon text-decoration-none font-weight-semibold"
                      >
                        Canali digitali
                      </Link>
                    </div>
                    <div className="col-6 pr-0 pr-md-5 mb-3">
                      <Link
                        to="#socialMediaEl"
                        className="btn-icon text-decoration-none font-weight-semibold"
                      >
                        Social media
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>
      <Hero xPadding={false} yPadding={false}>
        <div id="guidaUtilizzoEl" className="row">
          <h2 className="col-12 col-lg-6 h4 text-center text-lg-left">
            Guida all'utilizzo
          </h2>
          <p className="col-12 text-center text-lg-left">
            Scarica le linee guida per realizzare il materiale di comunicazione
          </p>
          <div className="mt-4 col-12 d-lg-flex card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-2">
            {dinamicContents(guidaUtilizzo)}
          </div>
        </div>
      </Hero>
      <Hero xPadding={false} yPadding={false}>
        <div id="eventiIniziativeEl" className="row">
          <h2 className="col-12 col-lg-6 h4 text-center text-lg-left">
            Eventi e iniziative
          </h2>
          <p className="col-12 col-lg-7 text-center text-lg-left">
            Scarica i template per realizzare il materiale da stampare in
            occasione di eventi e iniziative. I pacchetti compressi (.zip)
            contengono i files in formato .ai (Adobe Illustrator), .pdf e .jpg
          </p>
          <div className="mt-4 col-12 d-lg-flex card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-2">
            {dinamicContents(eventiIniziative)}
          </div>
        </div>
      </Hero>
      <Hero xPadding={false} yPadding={false}>
        <div id="socialMediaEl" className="row">
          <h2 className="col-12 col-lg-6 h4 text-center text-lg-left">
            Social media
          </h2>
          <p className="col-12 col-lg-7 text-center text-lg-left">
            Scarica i template per realizzare il materiale di promozione sui
            social media. I pacchetti compressi (.zip) contengono i file in
            formato .ai (Adobe Illustrator), .pdf e .jpg
          </p>
          <div className="mt-4 col-12 d-lg-flex card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-2">
            {dinamicContents(socialMedia)}
          </div>
        </div>
      </Hero>
      <Hero xPadding={false} yPadding={false}>
        <div id="canaliDigitaliEl" className="row">
          <h2 className="col-12 col-lg-6 h4 text-center text-lg-left">
            Canali digitali
          </h2>
          <p className="col-12 col-lg-7 text-center text-lg-left">
            Scarica il materiale utile per la promozione sui siti web, blog,
            testate giornalistiche e newsletter. Il pacchetto compresso (.zip)
            contiene files in formato .ai (Adobe Illustrator), .pdf e .jpg
          </p>
          <div className="mt-4 col-12 d-lg-flex card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-2">
            {dinamicContents(canaliDigitali)}
          </div>
        </div>
        <p className="text-right">
          <em>ultimo aggiornamento: 02/12/2021</em>
        </p>
      </Hero>
    </>
  );
};
