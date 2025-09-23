import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import { Link as RouterLink } from 'react-router-dom';

export const BtnWrapper = styled.div`
  display: inline-flex;
  align-items: stretch;
  gap: 23px;

  float: inline-end;
  margin-top: 20px;
  margin-bottom: 13px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 33px;
  }
`;

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;

  width: 160px;
  height: 40px;
  padding: 0 4px;

  border: none;
  transition: all 0.25s ease-in;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 180px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 224px;
    height: 46px;
  }

  &:hover,
  &:focus {
    box-shadow: ${theme.colors.grey} 1px 1px 2px inset;
  }

  & span {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${theme.colors.black};

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 16px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 20px;
    }
  }

  & svg {
    width: 14px;
    height: 14px;

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      width: 23px;
      height: 23px;
    }
  }

  & img {
    width: 16px;
    height: 16px;

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      width: 28px;
      height: 28px;
    }
  }
`;

export const ClearFiltersBtn = styled(Btn)`
  background-color: ${theme.colors.btnBlue};
`;

export const DownloadExcel = styled(Btn)`
  background-color: ${theme.colors.lightGreen};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

export const TableFilter = styled.thead`
  background-color: #f7f9fc;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;
  background-color: ${props => props.$bgcolor};
`;

export const TableHead = styled.th`
  position: relative;
  padding: 10px 20px 30px;
  text-align: left;
  font-weight: 600;
  color: #333;
  vertical-align: top;

  span {
    display: inline-block;
    margin-bottom: 4px;
  }

  input {
    width: 100%;
    padding: 6px 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-top: 6px;
    font-size: 13px;
    transition: all 0.3s ease;
    position: absolute;
    bottom: 5px;
    left: 5px;

    &:focus {
      border-color: #4a90e2;
      outline: none;
      box-shadow: 0 0 4px rgba(74, 144, 226, 0.4);
    }
  }
`;

export const BtnFilter = styled.button`
  color: ${props => props.$color};
  border: none;
  cursor: pointer;
  margin-left: 6px;
  padding: 4px;
  font-size: 14px;
  transition: color 0.2s ease;
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    color: #4a90e2;
  }
`;

export const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #444;
`;

export const Link = styled(RouterLink)`
  color: #4a90e2;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
