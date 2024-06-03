/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import HeroPages from "@/components/shared/HeroPages";
import React, { useCallback, useEffect, useState } from "react";
import img from "../../public/assets/images/banner.jpg";
import aboutImg from "../../public/assets/images/about-left.png";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageViewer from "react-simple-image-viewer";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const itemData = [
  {
    img: "/assets/images/gallery/1.jpeg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "/assets/images/gallery/2.jpeg",
    title: "Burger",
  },
  {
    img: "/assets/images/gallery/3.jpeg",
    title: "Camera",
  },
  {
    img: "/assets/images/gallery/4.jpeg",
    title: "Coffee",
    cols: 2,
  },
  {
    img:  "/assets/images/gallery/5.jpeg",
    title: "Hats",
    cols: 2,
  },
  {
    img:  "/assets/images/gallery/6.jpeg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img:  "/assets/images/gallery/7.jpeg",
    title: "Basketball",
  },
  {
    img:  "/assets/images/gallery/8.jpeg",
    title: "Fern",
  },
  {
    img:  "/assets/images/gallery/9.jpeg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img:  "/assets/images/gallery/10.jpeg",
    title: "Tomato basil",
  },
  {
    img:  "/assets/images/gallery/11.jpeg",
    title: "Sea star",
  },
  {
    img:  "/assets/images/gallery/12.jpeg",
    title: "Bike",
    cols: 2,
  },
  {
    img: "/assets/images/gallery/13.jpeg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "/assets/images/gallery/14.jpeg",
    title: "Burger",
  },
  {
    img: "/assets/images/gallery/15.jpeg",
    title: "Camera",
  },
  {
    img: "/assets/images/gallery/16.jpeg",
    title: "Coffee",
    cols: 2,
  },
  {
    img:  "/assets/images/gallery/17.jpeg",
    title: "Hats",
    cols: 2,
  },
  {
    img:  "/assets/images/gallery/18.jpeg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img:  "/assets/images/gallery/19.jpeg",
    title: "Basketball",
  },
  {
    img:  "/assets/images/gallery/20.jpeg",
    title: "Fern",
  },
  {
    img:  "/assets/images/gallery/24.jpeg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img:  "/assets/images/gallery/22.jpeg",
    title: "Tomato basil",
  },
  {
    img:  "/assets/images/gallery/23.jpeg",
    title: "Sea star",
  },
  {
    img:  "/assets/images/gallery/21.jpeg",
    title: "Bike",
    cols: 2,
  },
];
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Gallery = () => {
    const [imagesList, setImgList] = useState([]);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
        const imgArr = [];
        if (itemData) {
            itemData.forEach((el) => {
            imgArr.push(el.img);
          });
        }
        setImgList(imgArr);
      }, [itemData]);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <>
      <HeroPages
        links={[
          { id: 1, url: "/", name: "الرئيسية" },
          { id: 2, url: "#", name: "المعرض" },
        ]}
        title="المعرض"
        img={img}
      />
      <Container maxWidth="lg">
        <ImageList
          sx={{ width: "100%", my: "3rem" }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {isViewerOpen && (
            <ImageViewer
              src={imagesList}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside
              onClose={closeImageViewer}
              leftArrowComponent={<ArrowBackIosIcon style={{fontSize:"50px",fontWeight:"800"}}/>}
              rightArrowComponent={<ArrowBackIosIcon style={{fontSize:"50px",fontWeight:"800",transform: "scaleX(-1)",}}/>}
            />
          )}
          {itemData.map((item, index) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                onClick={() => openImageViewer(index)}
                />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default Gallery;
