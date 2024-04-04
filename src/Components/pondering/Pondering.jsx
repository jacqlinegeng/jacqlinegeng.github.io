import React from "react";

const Pondering = () => {
  return (
    <section className="" id="pondering">
      <p>Currently listening</p>
      <p className="spotify__playlist">
        <iframe
          title="spotify"
          style={{ border: "10px" }}
          src="https://open.spotify.com/embed/playlist/6QF6lbpdaWdZyjdfAuiPrc?utm_source=generator&theme=0"
          width="60%"
          height="100"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </p>
    </section>
  );
};

export default Pondering;
