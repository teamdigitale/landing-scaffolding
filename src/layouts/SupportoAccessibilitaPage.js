import React from "react";
import { createUseStyles } from "react-jss";
// import { graphql, Link } from "gatsby";
import { Card, CardBody, CardFooter, Icon } from "design-react-kit";

import { HeroTitle } from "../components/hero/HeroTitle.js";
import { HeroBody } from "../components/hero/HeroBody.js";
import { HeroCtaContainer } from "../components/hero/HeroCtaContainer.js";
import { Hero } from "../components/hero/Hero.js";
import { Breadcrumb } from "../components/Breadcrumb.js";
import content from "../../contents/supporto-accessibilita/supporto-accessibilita.yml";
import seo from "../../contents/seo.yml";
import { SEO } from "../components/SEO.js";
import { ExternalLink } from "../components/ExternalLink.js";

const {
  title: seoTitle,
  description: seoDescription,
} = seo.SupportoAccessibilitaPage;

const { title, body } = content;
const useStyles = createUseStyles({
  noBorderBottom: {
    "@global": {
      ".it-right-zone": {
        borderBottom: [["none"], "!important"],
      },
    },
  },
});

export const SupportoAccessibilitaPage = () => {
  const SupportoAccessibilita = [
    {
      title: "Supporto SPID",
      subtitle:
        "Se hai bisogno di assistenza con la tua identità digitale SPID consulta le domande frequenti o invia una segnalazione al supporto dedicato a SPID gestito da AgID",
      link: "https://www.spid.gov.it/domande-frequenti/",
      ctaAriaLabel: "SPID Domande frequenti(link esterno)",
      linkText: "DOMANDE FREQUENTI",
      link2: "https://helpdesk.spid.gov.it/index.php?a=add",
      ctaAriaLabel2: "SPID Richiedi assistenza(link esterno)",
      linkText2: "RICHIEDI ASSISTENZA",
    },
    {
      title: "Supporto CIE",
      subtitle:
        "Se hai bisogno di assistenza con la tua Carta di Identità Elettronica scopri i canali di supporto a cui puoi rivolgerti",
      link: "https://www.cartaidentita.interno.gov.it/contatti/",
      ctaAriaLabel: "CIE Richiedi assistenza(link esterno)",
      linkText: "RICHIEDI ASSISTENZA",
    },
  ];

  const dinamicContents = (arr) => {
    return arr.map((news) => (
      <Card
        key={news.title}
        teaser
        noWrapper
        className="card d-flex flex-row rounded m-0 shadow-lg p-1 align-items-top mb-3"
      >
        <CardBody className="card-body pl-4 py-2">
          <ExternalLink
            linkTo={news.link}
            ariaLabel={news.ctaAriaLabel}
            className="btn-icon text-decoration-none, p-2"
          >
            <HeroBody html={`<b>${news.title}</b>`} />
            <Icon
              className="ml-1 align-middle icon-primary"
              icon="it-external-link"
              size="s"
              focusable={true}
              role="img"
              aria-label="Link a file"
            />
          </ExternalLink>
          <p className="card-text p-0 pb-3 text-dark" style={{ minHeight: 80 }}>
            {news.subtitle}
          </p>
          <CardFooter
            className="justify-content-start justify-content-lg-start ml-0 pl-0 mt-0 mt-lg- 2 pt-0 pt-lg-2 pb-0"
            style={{ borderTop: "none" }}
          >
            <HeroCtaContainer>
              <ExternalLink
                linkTo={news.link}
                ariaLabel={news.ctaAriaLabel}
                className="btn btn-outline-primary mx-2 ml-lg-0 my-0 my-lg-2"
              >
                {news.linkText}
              </ExternalLink>
              {news.link2 && (
                <ExternalLink
                  linkTo={news.link2}
                  ariaLabel={news.ctaAriaLabel2}
                  className="btn btn-outline-primary mx-2 ml-lg-0 my-2"
                >
                  {news.linkText2}
                </ExternalLink>
              )}
            </HeroCtaContainer>
          </CardFooter>
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
          <div className="col-lg-8 p-0 mt-3 mt-lg-0 pr-lg-5 d-none d-lg-block">
            <div className="text-center text-lg-left">
              <HeroTitle title={title} />
              <HeroBody html={body} />
            </div>
          </div>
          <div className="col-lg-6"></div>
          <Hero xPadding={false} yPadding={false}>
            <div className="row">
              <div className="mt-4 col-12 d-lg-flex card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-2">
                {dinamicContents(SupportoAccessibilita)}
              </div>
            </div>
          </Hero>
        </div>
        <div className="row mt-5 px-lg-4">
          <div className="col-lg-6"></div>
          <div className="col-lg-6 mb-5">
            <div className="d-flex flex-row rounded m-0 p-1 align-items-top mb-3">
              <div className="card-body pl-4 py-2">
                <hr />
                <span className="p-0 mb-2 pb-3 text-dark">
                  Per segnalazioni o suggerimenti sull’accessibilità di questo
                  sito web identitadigitale.gov.it contattaci alla{" "}
                  <ExternalLink
                    linkTo="mailto:accessibilita@innovazione.gov.it"
                    ariaLabel="scrivi a accessibilita@innovazione.gov.it(link esterno)"
                  >
                    casella di posta dedicata
                  </ExternalLink>
                  <ExternalLink
                    linkTo="https://www.agid.gov.it/it/design-servizi/accessibilita"
                    ariaLabel="Scopri di più sull'accessibilità (link esterno)"
                    className="btn-icon text-decoration-none, pt-2"
                  >
                    <p className="card-text m-0 p-0">
                      Scopri di più sull'accessibilità
                    </p>
                    <Icon
                      className="ml-1 align-middle icon-primary"
                      icon="it-external-link"
                      size="s"
                      focusable={true}
                      role="img"
                      aria-label="Link a file"
                    />
                  </ExternalLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Hero>
    </>
  );
};
