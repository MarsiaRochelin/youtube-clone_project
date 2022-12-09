import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Searchbar({ search, userSearch, setUserSearch }) {
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=AIzaSyD0ZPMTO8s-e9U2GV1OjGOz9OtJOHqi3io`
    )
      .then((res) => res.json())
      .then((res) => {
        setUserSearch(res.items);
        console.log(res.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="searchbar">
      <section className="videos-list">
        {userSearch?.map((video) => {
          return (
            <div key={video.id.videoId} className="video">
              <Link to={`/video/${video.id.videoId}`}>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={userSearch}
                ></img>
                <p className="title">{video.snippet.title}</p>
              </Link>
              <p className="channel">{video.snippet.channelTitle}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Searchbar;
