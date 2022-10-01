import React from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useGlobalContext } from "./ContextProvider";
import Loading from "./Loading";
import { useEffect } from "react";
import {
  ResultsImagesContainer,
  ResultsNewsContainer,
  ResultsSearchContainer,
  ResultsVideosContainer,
} from "./global-styles";

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useGlobalContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <ResultsSearchContainer>
          {results?.results?.map(({ link, title }, index) => (
            <div key={index}>
              <a href={link} target="_blank" rel="noreferrer">
                <p style={{ fontSize: "13px" }}>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p>{title}</p>
              </a>
            </div>
          ))}
        </ResultsSearchContainer>
      );
    case "/images":
      return (
        <ResultsImagesContainer>
          {results?.image_results?.map(
            ({ image, link: { href, title } }, index) => (
              <a
                href={href}
                key={index}
                target="_blank"
                rel="noreferrer"
                style={{ padding: "5px" }}
              >
                <img src={image?.src} alt={title} loading="lazy" />
                <p>{title}</p>
              </a>
            )
          )}
        </ResultsImagesContainer>
      );
    case "/news":
      return (
        <ResultsNewsContainer>
          {results?.entries?.map(({ links, id, source, title }) => (
            <div key={id}>
              <a href={links?.[0].href} target="_blank" rel="noreferrer">
                <p>{title}</p>
              </a>
              <div>
                <a href={source?.href} target="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </ResultsNewsContainer>
      );
    case "/videos":
      return (
        <ResultsVideosContainer>
          {results.map((video, index) => (
            <div key={index} style={{ padding: "2px" }}>
              {video?.additional_links?.[0]?.href && (
                <ReactPlayer
                  url={video.additional_links?.[0].href}
                  controls
                  height={"200px"}
                  width={"335px"}
                />
              )}
            </div>
          ))}
        </ResultsVideosContainer>
      );
    default:
      return "ERROR!";
  }
};

export default Results;
