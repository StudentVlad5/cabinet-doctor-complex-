import React from 'react';
import moment from 'moment';
import {
  Table,
  TableHead,
  TableRow,
  TableData,
  TableFilter,
  BtnFilter,
  Link,
} from './ArchiveTable.styled';
import { FaFilter } from 'react-icons/fa';
import { formatTime } from '../../helpers/ArchiveTable/utils';
import { theme } from 'components/baseStyles/Variables.styled';

export const ArchiveTableView = ({
  checklists,
  filters,
  onChangeFilter,
  onSearchEnter,
  onToggleFilter,
  activeFilters,
}) => {
  return (
    <Table>
      <TableFilter>
        <TableRow>
          <TableHead>
            <span>Чек-лист</span>
            {activeFilters.filterChecklist && (
              <input
                type="text"
                name="filterChecklist"
                value={filters.filterChecklist}
                onChange={onChangeFilter}
                onKeyDown={onSearchEnter}
              />
            )}
            <BtnFilter
              $color={filters.filterChecklist ? '#4a90e2' : '#777'}
              id="filterChecklist"
              onClick={onToggleFilter}
            >
              <FaFilter />
            </BtnFilter>
          </TableHead>

          <TableHead>
            <span>Обращение</span>
            {activeFilters.filterPointOfCase && (
              <input
                type="text"
                name="filterPointOfCase"
                value={filters.filterPointOfCase}
                onChange={onChangeFilter}
                onKeyDown={onSearchEnter}
              />
            )}
            <BtnFilter
              $color={filters.filterPointOfCase ? '#4a90e2' : '#777'}
              id="filterPointOfCase"
              onClick={onToggleFilter}
            >
              <FaFilter />
            </BtnFilter>
          </TableHead>

          <TableHead>
            <span>№ Бригады СМП</span>
            {activeFilters.filterBrigadeSMP && (
              <input
                type="text"
                name="filterBrigadeSMP"
                value={filters.filterBrigadeSMP}
                onChange={onChangeFilter}
                onKeyDown={onSearchEnter}
              />
            )}
            <BtnFilter
              $color={filters.filterBrigadeSMP ? '#4a90e2' : '#777'}
              id="filterBrigadeSMP"
              onClick={onToggleFilter}
            >
              <FaFilter />
            </BtnFilter>
          </TableHead>

          <TableHead>
            <span>
              ИИН <br /> пациента
            </span>
            {activeFilters.filterPatientINN && (
              <input
                type="text"
                name="filterPatientINN"
                value={filters.filterPatientINN}
                onChange={onChangeFilter}
                onKeyDown={onSearchEnter}
              />
            )}
            <BtnFilter
              $color={filters.filterPatientINN ? '#4a90e2' : '#777'}
              id="filterPatientINN"
              onClick={onToggleFilter}
            >
              <FaFilter />
            </BtnFilter>
          </TableHead>

          <TableHead>
            <span>
              ФИО <br /> пациента
            </span>
            {activeFilters.filterPatientFIO && (
              <input
                type="text"
                name="filterPatientFIO"
                value={filters.filterPatientFIO}
                onChange={onChangeFilter}
                onKeyDown={onSearchEnter}
              />
            )}
            <BtnFilter
              $color={filters.filterPatientFIO ? '#4a90e2' : '#777'}
              id="filterPatientFIO"
              onClick={onToggleFilter}
            >
              <FaFilter />
            </BtnFilter>
          </TableHead>

          <TableHead>
            <span>
              Поликлиника <br /> прикрепления
            </span>
            {activeFilters.filterHospital && (
              <input
                type="text"
                name="filterHospital"
                value={filters.filterHospital}
                onChange={onChangeFilter}
                onKeyDown={onSearchEnter}
              />
            )}
            <BtnFilter
              $color={filters.filterHospital ? '#4a90e2' : '#777'}
              id="filterHospital"
              onClick={onToggleFilter}
            >
              <FaFilter />
            </BtnFilter>
          </TableHead>

          <TableHead>
            <span>
              Идентификатор <br /> сотрудника
            </span>
            {activeFilters.filterEmployeeID && (
              <input
                type="text"
                name="filterEmployeeID"
                value={filters.filterEmployeeID}
                onChange={onChangeFilter}
                onKeyDown={onSearchEnter}
              />
            )}
            <BtnFilter
              $color={filters.filterEmployeeID ? '#4a90e2' : '#777'}
              id="filterEmployeeID"
              onClick={onToggleFilter}
            >
              <FaFilter />
            </BtnFilter>
          </TableHead>

          <TableHead>
            <span>
              Статус <br /> чек-листа
            </span>
            {activeFilters.filterStatusChecklist && (
              <input
                type="text"
                name="filterStatusChecklist"
                value={filters.filterStatusChecklist}
                onChange={onChangeFilter}
                onKeyDown={onSearchEnter}
              />
            )}
            <BtnFilter
              $color={filters.filterStatusChecklist ? '#4a90e2' : '#777'}
              id="filterStatusChecklist"
              onClick={onToggleFilter}
            >
              <FaFilter />
            </BtnFilter>
          </TableHead>

          <TableHead>
            <span>
              Дата <br /> чек-лист
            </span>
            {activeFilters.filterDateStartChecklist && (
              <input
                type="text"
                name="filterDateStartChecklist"
                value={filters.filterDateStartChecklist}
                onChange={onChangeFilter}
                onKeyDown={onSearchEnter}
              />
            )}
            <BtnFilter
              $color={filters.filterDateStartChecklist ? '#4a90e2' : '#777'}
              id="filterDateStartChecklist"
              onClick={onToggleFilter}
            >
              <FaFilter />
            </BtnFilter>
          </TableHead>

          <TableHead>
            <span>
              {' '}
              Время начала <br /> чек-листа{' '}
            </span>
            {activeFilters.filterTimeStartChecklist && (
              <input
                type="text"
                name="filterTimeStartChecklist"
                value={filters.filterTimeStartChecklist}
                onChange={onChangeFilter}
                onKeyDown={onSearchEnter}
              />
            )}
            <BtnFilter
              $color={filters.filterTimeStartChecklist ? '#4a90e2' : '#777'}
              id="filterTimeStartChecklist"
              onClick={onToggleFilter}
            >
              <FaFilter />
            </BtnFilter>
          </TableHead>

          <TableHead>
            <span>
              {' '}
              Время от прибытия пациента <br /> до госпитализации <br /> (от
              двери до иглы){' '}
            </span>
            {activeFilters.filterDurationOfHospitalization && (
              <input
                type="text"
                name="filterDurationOfHospitalization"
                value={filters.filterDurationOfHospitalization}
                onChange={onChangeFilter}
                onKeyDown={onSearchEnter}
              />
            )}
            <BtnFilter
              $color={
                filters.filterDurationOfHospitalization ? '#4a90e2' : '#777'
              }
              id="filterDurationOfHospitalization"
              onClick={onToggleFilter}
            >
              <FaFilter />
            </BtnFilter>
          </TableHead>
        </TableRow>
      </TableFilter>

      <tbody>
        {checklists.map((item, ind) => (
          <TableRow
            key={item.identifier}
            $bgcolor={
              ind % 2 === 0 ? theme.colors.lightBlue : theme.colors.white
            }
          >
            <TableData>
              <Link to={`/checklist/${item.identifier}`}>
                {item.identifier}
              </Link>
            </TableData>
            <TableData>{item.pointOfCase}</TableData>
            <TableData>{item.application_number}</TableData>
            <TableData>{item.patientINN}</TableData>
            <TableData>{item.patientFullName}</TableData>
            <TableData>{item.numberHospital}</TableData>
            <TableData>{item.employeeID}</TableData>
            <TableData>{item.checkStatus}</TableData>
            <TableData>
              {moment(new Date(+item.identifier)).format('DD.MM.YYYY')}
            </TableData>
            <TableData>
              {formatTime(item.startTimeAutoHh, item.startTimeAutoMm)}
            </TableData>
            <TableData>{item.timeStartToEndHospitality || '-'}</TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
