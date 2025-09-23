import React, { useState, useMemo } from 'react';
import { useArchiveData } from '../../helpers/ArchiveTable/useArchiveData';
import { filterChecklists } from '../../helpers/ArchiveTable/filterChecklists';
import { exportToExcel } from '../../helpers/ArchiveTable/exportToExcel';
import { ArchiveTableView } from './ArchiveTableView';
import { PaginationBlock } from '../../helpers/Pagination/Pagination';
import { onLoading, onLoaded } from '../../helpers/Loader/Loader';
import { onFetchError } from '../../helpers/Messages/NotifyMessages';
import {
  BtnWrapper,
  ClearFiltersBtn,
  DownloadExcel,
} from './ArchiveTable.styled';
import { ReactComponent as Close } from 'images/svg/close.svg';
import { ReactComponent as Excel } from 'images/svg/excel.svg';

const initialState = {
  filterChecklist: '',
  filterPointOfCase: '',
  filterBrigadeSMP: '',
  filterPatientINN: '',
  filterPatientFIO: '',
  filterHospital: '',
  filterEmployeeID: '',
  filterStatusChecklist: '',
  filterDateStartChecklist: '',
  filterTimeStartChecklist: '',
  filterDurationOfHospitalization: '',
};

export const ArchiveTable = () => {
  const [filters, setFilters] = useState(initialState);
  const [reload, setReload] = useState(false);
  const [size, setSize] = useState(20);
  const [current, setCurrent] = useState(1);

  const { checklists, isLoading, error } = useArchiveData(reload);
  const [activeFilters, setActiveFilters] = useState({
    filterChecklist: false,
    filterPointOfCase: false,
    filterBrigadeSMP: false,
    filterPatientINN: false,
    filterPatientFIO: false,
    filterHospital: false,
    filterEmployeeID: false,
    filterStatusChecklist: false,
    filterDateStartChecklist: false,
    filterTimeStartChecklist: false,
    filterDurationOfHospitalization: false,
  });

  const filteredChecklists = useMemo(
    () => filterChecklists(checklists, filters),
    [checklists, filters]
  );

  const handleClearAllFilters = () => {
    setFilters(initialState);
    setReload(r => !r);
  };

  const handleChangeFilter = e => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearchOnEnter = e => {
    if (e.key === 'Enter') {
      const { name, value } = e.target;
      setFilters(prev => ({ ...prev, [name]: value }));
    }
  };

  const toggleFilterItem = e => {
    const id = e.currentTarget.id;
    setActiveFilters(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <BtnWrapper>
        <ClearFiltersBtn onClick={handleClearAllFilters}>
          <Close /> <span>Сбросить фильтры</span>
        </ClearFiltersBtn>
        <DownloadExcel onClick={() => exportToExcel(filteredChecklists)}>
          <Excel /> <span>Скачать в excel</span>
        </DownloadExcel>
      </BtnWrapper>

      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
      <ArchiveTableView
        checklists={filteredChecklists.slice(
          (current - 1) * size,
          current * size
        )}
        filters={filters}
        onChangeFilter={handleChangeFilter}
        onSearchEnter={handleSearchOnEnter}
        onToggleFilter={toggleFilterItem}
        activeFilters={activeFilters}
      />

      {filteredChecklists.length > 0 && !error && (
        <PaginationBlock
          items={filteredChecklists}
          size={size}
          setSize={setSize}
          current={current}
          setCurrent={setCurrent}
        />
      )}
    </>
  );
};
