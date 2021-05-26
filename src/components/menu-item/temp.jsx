export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  border: 0.1rem solid rgb(74, 74, 74);
  border-radius: 0.4rem;
`;

export const ContentContainer = styled.div`
  -webkit-box-align: center;
  -webkit-box-pack: center;
  align-items: center;
  background-color: #ffffff;
  border: 0.1rem solid black;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.8;
  padding: 1.2rem 1.4rem;
  position: absolute;
  transition: opacity 0.1s ease-out 0s;

  &:hover {
    opacity: 0.9;
  }
  @media (min-width: 600px) {
    opacity: 0.75;
    padding: 1.4rem 1.8rem;
  }
  @media (min-width: 1025px) .eotjiQ opacity: 0.75;
  padding: 1.8rem 2.2rem;
`;

export const ContentTitle = styled.h2`
  color: #4a4a4a;
  font-size: 1.8rem;
  margin-bottom: 0.4rem;
  padding: 0rem 1rem;
  @media (min-width: 600px) {
    font-size: 2rem;
    margin-bottom: 0.6rem;
  }
  @media (min-width: 1025px) {
    font-size: 2.2rem;
  }
`;

export const ContentSubtitle = styled.p`
  color: #3191ca;
  font-size: 1.4rem;
  font-weight: bold;
  transition: all 0.1s ease-out 0s;
  @media (min-width: 600px) {
    font-size: 1.6rem;
  }
  @media (min-width: 1025px) {
    font-size: 1.7rem;
  }
`;
