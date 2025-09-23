import { useCallback, useState } from 'react';
import {
  Container,
  Controls,
  ToggleButton,
  ActionButton,
  ContainerFiltered,
  CheckBoxItem,
  TdCheckCorrectItem,
  StylesCheckBoxItem,
} from './FilterComponent.styled';
import { filterKeys } from 'helpers/constants';
import { AnimatePresence, motion } from 'framer-motion';

export const FilterComponent = ({ filtered, setFiltered }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSelectAll = useCallback(() => {
    setFiltered(filterKeys.map(it => it.id));
  }, [setFiltered]);

  const handleReset = useCallback(() => {
    setFiltered([]);
  }, [setFiltered]);

  return (
    <Container>
      {/* --- Buttons --- */}
      <Controls>
        <ToggleButton onClick={() => setIsOpen(prev => !prev)}>
          {isOpen ? 'Спрятать фильтры' : 'Отобразить фильтры'}
        </ToggleButton>
        <ActionButton onClick={handleSelectAll}>Выбрать все</ActionButton>
        <ActionButton onClick={handleReset}>Скинуть</ActionButton>
      </Controls>

      {/* --- Filters --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ContainerFiltered>
              {filterKeys.map(it => {
                const isChecked = filtered.includes(it.id);

                return (
                  <TdCheckCorrectItem key={it.id}>
                    <label>
                      <CheckBoxItem
                        type="checkbox"
                        id={it.id}
                        name={it.id}
                        value={it.id}
                        onChange={() =>
                          setFiltered(prev =>
                            prev.includes(it.id)
                              ? prev.filter(item => item !== it.id)
                              : [...prev, it.id]
                          )
                        }
                        checked={isChecked}
                      />
                      <StylesCheckBoxItem
                        $checked={isChecked}
                        color={it.color}
                      />
                      <span>{it.case}</span>
                    </label>
                  </TdCheckCorrectItem>
                );
              })}
            </ContainerFiltered>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};
