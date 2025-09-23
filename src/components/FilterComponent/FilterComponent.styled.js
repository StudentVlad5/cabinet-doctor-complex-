import styled from 'styled-components';
import { theme } from 'components/baseStyles/Variables.styled';
import checkboxIcon from '../../images/checkbox.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Controls = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const ToggleButton = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 12px;
  background: ${theme.colors.darkBlue || '#007bff'};
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: ${theme.colors.headerBlue || '#0056b3'};
  }
`;

export const ActionButton = styled(ToggleButton)`
  background: ${theme.colors.gray || '#6c757d'};
  &:hover {
    background: ${theme.colors.headerBlue || '#343a40'};
  }
`;

export const ContainerFiltered = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 15px;
  background: ${theme.colors.lightGray || '#f8f9fa'};
  border-radius: 14px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const TdCheckCorrectItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  label {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const CheckBoxItem = styled.input`
  display: none; /* 👈 приховали стандартний чекбокс */

  &:checked + div {
    background-image: url(${checkboxIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
  }
`;

export const StylesCheckBoxItem = styled.div`
  width: 22px;
  height: 22px;
  border: 2px solid ${theme.colors.black};
  border-radius: 6px;
  background-color: ${theme.colors.white};
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  /* якщо чекбокс активний — міняємо стиль */
  ${props =>
    props.$checked &&
    `
      border-color: ${props.color || theme.colors.primary};
      background-color: ${props.color || theme.colors.primary}20;
    `}

  /* hover ефект */
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  }
`;

export const TdCheckCorrectItemLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  gap: 8px;
`;
