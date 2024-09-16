import delve from "dlv";
import { getStrapiMedia } from "../../utils";

import ReactMarkdown from 'react-markdown';

const BlockTextWithImage = ({ text, image, isInverted }) => {

  const url = delve(image, "data.attributes.url");
  const imageUrl = getStrapiMedia(url);

  return (
    <>
      <div className={`flex items-center gap-16 ${isInverted && "flex-row-reverse"}`}>
        <div className="prose">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        <div>
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </>
  );
};

export default BlockTextWithImage;
