import { useSwiper } from 'swiper/react';
import next from '../../../assets/next.jpg';
import prev from '../../../assets/prev.jpg';
import { Box } from '@mui/material';

function SlidePrevButton() {
  const swiper = useSwiper();
  return (
    <Box
      component="img"
      src={prev}
      alt="Previous"
      onClick={() => swiper.slidePrev()}
      height={48}
      width={48}
      position="absolute"
      left={0}
      top="50%"
      sx={{
        cursor: 'pointer',
        transform: 'translateY(-50%)',
        borderRadius: '50%',
        boxShadow: 1,
      }}
      zIndex={999}
      bgcolor="#fff"
    />
  );
}

function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <Box
      component="img"
      src={next}
      alt="Next"
      onClick={() => swiper.slideNext()}
      height={48}
      width={48}
      position="absolute"
      right={0}
      top="50%"
      sx={{
        cursor: 'pointer',
        transform: 'translateY(-50%)',
        borderRadius: '50%',
        boxShadow: 1,
      }}
      zIndex={999}
      bgcolor="#fff"
    />
  );
}

export { SlideNextButton, SlidePrevButton };
