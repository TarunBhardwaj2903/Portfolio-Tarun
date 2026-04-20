import { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  images?: string[];
  alt?: string;
  video?: string;
  driveVideoId?: string;
  link?: string;
  cropSide?: "bottom" | "right";
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryHoveredRef = useRef(false);

  const hasGallery = Array.isArray(props.images) && props.images.length >= 1;
  const isMulti = Array.isArray(props.images) && props.images.length > 1;

  useEffect(() => {
    if (!isMulti) return;
    const id = window.setInterval(() => {
      if (galleryHoveredRef.current) return;
      setGalleryIndex((i) => (i + 1) % (props.images as string[]).length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [isMulti, props.images]);

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  if (hasGallery) {
    const images = props.images as string[];
    const activeIndex = isMulti ? galleryIndex : 0;
    return (
      <div className="work-image work-image-gallery">
        <div
          className={`work-gallery-frame${
            isMulti ? "" : " is-banner"
          }${
            !isMulti && props.cropSide === "right" ? " crop-right" : ""
          }`}
          onMouseEnter={() => (galleryHoveredRef.current = true)}
          onMouseLeave={() => (galleryHoveredRef.current = false)}
        >
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${props.alt ?? "Project"} ${i + 1}`}
              className={`work-gallery-slide ${
                i === activeIndex ? "is-active" : ""
              }`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
          {props.link && (
            <a
              className="work-embed-link"
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              aria-label="Open project"
            >
              <MdArrowOutward />
            </a>
          )}
          {isMulti && (
            <div className="work-gallery-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`work-gallery-dot ${
                    i === galleryIndex ? "is-active" : ""
                  }`}
                  onClick={() => setGalleryIndex(i)}
                  aria-label={`Show image ${i + 1}`}
                  data-cursor="disable"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (props.driveVideoId) {
    return (
      <div className="work-image work-image-embed">
        <div className="work-embed-frame">
          <iframe
            src={`https://drive.google.com/file/d/${props.driveVideoId}/preview`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={props.alt ?? "Project video"}
            loading="lazy"
          />
          {props.link && (
            <a
              className="work-embed-link"
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              aria-label="Open project"
            >
              <MdArrowOutward />
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img src={props.image} alt={props.alt} />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
