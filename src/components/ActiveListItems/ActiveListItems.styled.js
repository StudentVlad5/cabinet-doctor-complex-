import styled from 'styled-components';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import { theme } from 'components/baseStyles/Variables.styled';

const ActiveListItemsSection = styled.section`
  display: flex;
  width: 100%;
`;
const ActiveListItemsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  /* min-height: 100vh; */
  padding: 10px 23px;
`;
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: end;
  }
`;
const ControlPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: end;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;

  margin-top: 20px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    justify-content: end;
    margin-top: 0px;
  }
`;
const TotalItems = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 10px 43px 10px 11px;
  font-size: 18px;
  font-weight: 400;
  color: ${theme.colors.black};
  background-color: ${theme.colors.darkBlue};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 24px;
  }
`;
const ButtonToArhiveList = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-width: 155px;
  height: 49px;

  font-size: 16x;
  font-weight: 400;
  border-radius: 10px;
  border: 1px solid ${theme.colors.black};
  color: ${theme.colors.black};
  background-color: ${theme.colors.lightBlue};
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 324px;
    font-size: 24px;
  }
`;
const ButtonLogOut = styled(ButtonToArhiveList)`
  background-color: ${theme.colors.white};
`;
const Title = styled.h3`
  font-size: 35px;
  font-weight: 400;
  text-align: center;
  color: ${theme.colors.black};
`;
const ItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 35px;
  gap: 52px;
`;
const ItemContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 19px;
  background-color: ${theme.colors.white};
  border-radius: 12px;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 324px;
  background-color: ${theme.colors.white};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 300px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 370px;
  }
`;
const ItemStatistic = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  min-height: 120px;
  background-color: ${theme.colors.white};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 20px;
    flex-direction: row;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 99px;
  }
`;
const BtnWrap = styled.div`
  width: 100%;
`;
const ItemBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 12px;
  font-weight: 700;
  padding: 10px;
  margin-top: 12px;
  border-radius: 10px;
  border-color: transparent;
  color: ${theme.colors.black};
  background-color: ${theme.colors.lightGreen};
  cursor: pointer;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;

const ItemCircle = styled.div`
  position: relative;
  display: flex;
  width: 41px;
  height: 41px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.black};
  background-color: ${props => props.$props};

  &::after {
    content: '${props => props.$label}';
    position: absolute;
    display: block;
    white-space: normal; /* перенос по пробелам */
    overflow-wrap: normal; /* не резать слова */
    word-break: keep-all; /* сохранять слова целыми */
    hyphens: none; /* не добавлять дефисы */
    width: 70px;
    font-size: 12px;
    text-align: center;
    color: ${theme.colors.black};

    /* сверху/снизу */
    left: 100%;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 14px;
      min-width: 100px;
      top: ${props => (props.$index % 2 === 0 ? '-50px' : '50px')};
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const ItemLine = styled.div`
  display: flex;
  width: 10px;
  height: 20px;
  background-color: ${props => props.$props};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 30px;
    height: 10px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 70px;
  }
`;
export {
  ActiveListItemsSection,
  ActiveListItemsContainer,
  ControlPanelContainer,
  ControlContainer,
  BtnContainer,
  TotalItems,
  ButtonToArhiveList,
  ButtonLogOut,
  ItemsContainer,
  Title,
  ItemContainer,
  ItemInfo,
  ItemStatistic,
  BtnWrap,
  ItemBtn,
  ItemCircle,
  ItemLine,
};
