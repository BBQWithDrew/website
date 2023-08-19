import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import { useEffect } from "react";
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
        <img
          className="w-full rounded"
          src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <img
          className="w-full rounded"
          src="https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <img
          className="w-full rounded"
          src="https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </SlideshowLightbox>{" "}
    </div>
  );
};
export default OurWork;
