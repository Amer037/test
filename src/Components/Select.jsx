import React, { useEffect, useState, useRef } from "react";

export const Select = ({ options1 }) => {
  const [filteredOptions, setFilterOptons] = useState(options1);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [seachable, setSearchable] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [multiselect, setMultiSelect] = useState(false);
  const ref = useRef();

    // function to handle select all options
    const handleSelectAll = () => {
      if (!selectAll) {
        setCheckedState(
          checkedState.map((item) => {
            return true;
          })
        );
      } else {
        setCheckedState(
          checkedState.map((item) => {
            return false;
          })
        );
      }
      setSelectAll(!selectAll);
    };
  //  to manage select all options
  const [checkedState, setCheckedState] = useState(
    new Array(filteredOptions.length).fill(false)
  );

  // function to handle onchange of select all options
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  // function to submit selected options
  const handleSubmit = () => {
    const checked = checkedState.map((item, index) => {
      if (item) return filteredOptions[index];
    });
    const filtered = checked.filter((item) => item);
    setSelected(filtered);
    console.log(selected);
  };

  // function to clearall options
  const handleClear = () => {
    const unChecked = checkedState.map((item) => {
      return false;
    });
    setCheckedState(unChecked);
    setSelectAll(false);
    setSelected([]);
  };

  // function to handle click outside
  useOutsideAlerter(ref);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      // Function for click event
      function handleOutsideClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowOptions(false);
        }
      }

      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref]);
  }
  // function to handle the search options
  const handleSearch = () => {
    const result = options1.filter((item) => {
      return item.includes(search);
    });
    setFilterOptons(result);
  };
  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <>
      <div className="select-container" ref={ref}>
        <div className="selected" onClick={() => setShowOptions(!showOptions)}>
          {selected.length > 0 ? selected.join(",") : "Please Select"}
        </div>
        {showOptions && (
          <div>
              <button
              className="button"
              onClick={() => {
                setMultiSelect(!multiselect);
              }}
            >
              multiselect
            </button>
            <button
              className="button"
              onClick={() => setSearchable(!seachable)}
            >
              {!seachable ? "seachable" : "seachable!"}
            </button>
          
            {seachable && (
              <input
                className="search-input"
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            )}
            <div className="options-container">
              {multiselect && (
                <p>
                  <span>
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={() => handleSelectAll()}
                    />
                  </span>
                  select all
                </p>
              )}

              {filteredOptions.map((item, index) => {
                return (
                  <div className="options" key={index}>
                    {multiselect && (
                      <span>
                        <input
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          name={item}
                          value={item}
                          checked={checkedState[index]}
                          onChange={() => handleOnChange(index)}
                        />
                      </span>
                    )}
                    <option
                      className="option"
                      value={item}
                      onClick={(e) => {
                        setSelected([e.target.value]);
                      }}
                    >
                      {item}
                    </option>
                  </div>
                );
              })}
              {multiselect && (
                <div>
                  <button className="option-button" onClick={handleSubmit}>
                    submit
                  </button>
                  <button className="option-button" onClick={handleClear}>
                    clear all
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
