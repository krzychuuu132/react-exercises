import { Input } from 'components/atoms/Input/Input';
import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { SearchBarWrapper, SearchResults, SearchWrapper, StatusInfo } from 'components/organisms/SearchBar/SearchBar.styles';
import { useStudents } from 'hooks/useStudents';
import { useCombobox } from 'downshift';

export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const { isOpen, getLabelProps, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps, selectedItem } = useCombobox({
    onInputValueChange: getMatchingStudents,
    items: matchingStudents,
  });

  return (
    <SearchBarWrapper {...getComboboxProps()}>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getMenuProps()}>
        <Input name="Search" id="Search" {...getInputProps()} />
        {isOpen && matchingStudents.length ? (
          <SearchResults>
            {isOpen &&
              matchingStudents.map((item, index) => (
                <li key={item.id} {...getItemProps({ item, index })} style={highlightedIndex === index ? { backgroundColor: 'red' } : null}>
                  {item.name}
                </li>
              ))}
          </SearchResults>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
