import { useLocation, useNavigate } from "react-router-dom";
import "./TemplateMedia.css";

const TemplateMedia = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p className="loading">No data available</p>;

  const video = state.media?.find((m) => m.type === "mp4");

  return (
    <div className="template-media-page">
      {video ? (
        <video
          className="bg-video"
          src={video.url}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <p className="no-video">No video available</p>
      )}

      
      <div className="overlay-btn">
       <button onClick={() => navigate("/RegisterOrder", { state })}>
  Order Now
</button>

      </div>
    </div>
  );
};

export default TemplateMedia;
