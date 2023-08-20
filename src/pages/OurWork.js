import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import { useEffect } from "react";
import ImageArray from "../gallery/galleryArray";

const OurWork = () => {
  useEffect(() => {
    initLightboxJS(process.env.LIGHTHOUSE_API_KEY, "individual");
  });
  return (
    <div>
      <SlideshowLightbox
        theme="lightbox"
        className="container grid grid-cols-3 gap-2 mx-auto"
        showThumbnails={true}
      >
        {ImageArray.map((img, index) => {
          return (
            <img
              key={index}
              className="w-full rounded h-[500px] object-cover"
              src={img.image}
              loading="lazy"
            />
          );
        })}
      </SlideshowLightbox>
    </div>
  );
};
export default OurWork;
