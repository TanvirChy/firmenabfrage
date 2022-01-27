import React, { useState } from "react";

import {  kaReducer, Table } from "ka-table";
import {
  deselectAllFilteredRows,
  deselectRow,
  selectAllFilteredRows,
  selectRow,
  selectRowsRange,
} from "ka-table/actionCreators";
import { DataType } from "ka-table/enums";
import { kaPropsUtils } from "ka-table/utils";
import "./firmenTable.css";

const SelectionCell = ({
  rowKeyValue,
  dispatch,
  isSelectedRow,
  selectedRows,
}) => {
  return (
    <input
      type="checkbox"
      checked={isSelectedRow}
      onChange={(event) => {
        if (event.nativeEvent.shiftKey) {
          dispatch(selectRowsRange(rowKeyValue, [...selectedRows].pop()));
        } else if (event.currentTarget.checked) {
          dispatch(selectRow(rowKeyValue));
        } else {
          dispatch(deselectRow(rowKeyValue));
        }
      }}
    />
  );
};

const SelectionHeader = ({ dispatch, areAllRowsSelected }) => {
  return (
    <input
      type="checkbox"
      checked={areAllRowsSelected}
      onChange={(event) => {
        if (event.currentTarget.checked) {
          dispatch(selectAllFilteredRows());
        } else {
          dispatch(deselectAllFilteredRows());
        }
      }}
    />
  );
};

const FirmenTable = ({ individual }) => {
  const data = [
    {
      key: "Firma",
      value: `${individual.name}`,
    },
    {
      key: "UID",
      value: `${individual.uid}`,
    },
    {
      key: "Strasse",
      value: `${individual.address.street}`,
    },
    {
      key: "Hausnummer",
      value: `${individual.address.houseNumber}`,
    },
    {
      key: "PLZ",
      value: `${individual.address.swissZipCode}`,
    },
    {
      key: "Ort",
      value: `${individual.address.city}`,
    },
    {
      key: "Land",
      value: "Schweiz",
    },
  ];

  const dataArray = data.map((item, index) => ({
    column1: `${item.key}`,
    column2: `${item.value}`,

    id: index,
  }));

  const tablePropsInit = {
    columns: [
      {
        key: "selection-cell",
      },
      { key: "column1", dataType: DataType.String },
      { key: "column2", dataType: DataType.String },
    ],

    data: dataArray,
    rowKeyField: "id",
    selectedRows: [],
  };
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch = (action) => {
    changeTableProps((prevState) => kaReducer(prevState, action));
  };
  return (
    <div className="firmen-table">
      <Table
        {...tableProps}
        childComponents={{
          cellText: {
            content: (props) => {
              if (props.column.key === "selection-cell") {
                return <SelectionCell {...props} />;
              }
            },
          },

          headCell: {
            content: (props) => {
              if (props.column.key === "selection-cell") {
                return (
                  <SelectionHeader
                    {...props}
                    areAllRowsSelected={kaPropsUtils.areAllFilteredRowsSelected(
                      tableProps
                    )}
                  />
                );
              }
            },
          },
        }}
        dispatch={dispatch}
      />
    </div>
  );
};

export default FirmenTable;
