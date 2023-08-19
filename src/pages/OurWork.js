import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import { useEffect } from "react";
import ImageArray from "../gallery/galleryArray";

const OurWork = () => {
  useEffect(() => {
    initLightboxJS(process.env.LIGHTHOUSE_API_KEY, "Idividual");
  });
  return (
    <div>
      <SlideshowLightbox
        theme="lightbox"
        className="container grid grid-cols-3 gap-2 mx-auto"
        showThumbnails={true}
      >
        {ImageArray.map((img) => {
          return <img src={img.image} />;
        })}
      </SlideshowLightbox>{" "}
    </div>
  );
};
export default OurWork;
