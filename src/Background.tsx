import { Box, keyframes, styled } from '@mui/material';
import { PropsWithChildren } from 'react';

const gradientAnimation = keyframes`
  70% {
    transform: scale(1, 2) translate(50px);
  }
`;

const MainBox = styled(Box)(() => ({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  '& > div:nth-of-type(1)': {
    height: '90%',
    width: '80%',
    background: 'linear-gradient(65deg, #FB95A7, #B4A9EA, #FB95A7)',
    left: '-20%',
    top: '-10%',
    position: 'absolute',
    borderRadius: '50%',
    animation: `${gradientAnimation} 4s infinite`,
    animationDelay: '1.5s',
  },
  '& > div:nth-of-type(2)': {
    height: '80%',
    width: '70%',
    background: 'linear-gradient(45deg, #76F0C4, #8080FC, #79B9EE)',
    right: '-12%',
    top: '-12%',
    position: 'absolute',
    borderRadius: '50%',
    animation: `${gradientAnimation} 4s infinite`,
    animationDelay: '1.5s',
  },
  '& > div:nth-of-type(3)': {
    height: '65%',
    width: '80%',
    background: 'linear-gradient(65deg, #FB95A7, #B4A9EA, #FB95A7)',
    right: '-20%',
    bottom: '-15%',
    position: 'absolute',
    borderRadius: '50%',
    animation: `${gradientAnimation} 4s infinite`,
    animationDelay: '0.5s',
  },
  '& > div:nth-of-type(4)': {
    height: '50%',
    width: '75%',
    background: 'linear-gradient(70deg, #0F8CEA, #79B9EE)',
    left: '-18%',
    bottom: '-10%',
    position: 'absolute',
    borderRadius: '50%',
    animation: `${gradientAnimation} 4s infinite`,
    animationDelay: '0.2s',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    height: '100%',
    width: '100%',
    backdropFilter: 'blur(60px)',
  },
}));

const ContentContainer = styled(Box)`
  z-index: 1;
  position: relative;
`

function Background({ children }: PropsWithChildren) {
  return (
    <MainBox>
      <div />
      <div />
      <div />
      <div />
      <ContentContainer>
        {children}
      </ContentContainer>
    </MainBox>
  );
}

export default Background;
