import styled from 'styled-components';

export const Frame1 = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  padding: 10px;
  position: relative;
`;
export const Image = styled.img`
  display: flex;
  margin: auto;
  max-width: 90%;
`;
export const SearchBarre = styled.div`
  width: calc(52.95% - 559px);
  background-color: ${props => props.theme.colors.transparentSilver};
  border-radius: 50px;
  padding: 32px 525px 30px 34px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 20rem;
  bottom: 210px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  width: 131px;
`;
export const Search = styled.img`
  width: 25px;
  height: 28px;
  margin-right: 15px;
`;
export const Rechercher = styled.p`
  color: ${props => props.theme.colors.white};
  text-align: center;
  letter-spacing: 2.4px;
  font-family: ${props => props.theme.fonts.ingridDarling24Regular.family};
  font-size: ${props => props.theme.fonts.ingridDarling24Regular.size};
  font-weight: ${props => props.theme.fonts.ingridDarling24Regular.weight};
  line-height: ${props => props.theme.fonts.ingridDarling24Regular.lineHeight};
`;
