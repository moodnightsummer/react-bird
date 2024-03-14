import { PlusOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import React, { useCallback, useState } from "react";
import ImagesZoom from "./ImagesZoom/index.js";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.lenght === 1) {
    return (
      <>
        <img
          // 클릭할 수 있지만 굳이 클릭할 필요는 없다는 뜻(스크린 리더에서 사용)
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          // 클릭할 수 있지만 굳이 클릭할 필요는 없다는 뜻(스크린 리더에서 사용)
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          // 클릭할 수 있지만 굳이 클릭할 필요는 없다는 뜻(스크린 리더에서 사용)
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }

  return (
    <>
      <div>
        <img
          role="presentation"
          width="50%"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <div
          role="presentation"
          style={{
            display: "inline-block",
            width: "50%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}개의 사진 더보기
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </div>
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
