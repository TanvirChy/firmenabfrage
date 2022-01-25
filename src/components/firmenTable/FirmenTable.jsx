import React, { useState } from "react";

import { ITableProps, kaReducer, Table } from "ka-table";
import {
  deselectAllFilteredRows,
  deselectRow,
  selectAllFilteredRows,
  selectRow,
  selectRowsRange,
} from "ka-table/actionCreators";
import { DataType, FilteringMode, SortingMode } from "ka-table/enums";
import { ICellTextProps, IHeadCellProps } from "ka-table/props";
import { kaPropsUtils } from "ka-table/utils";
import './firmenTable.css'


const data = [
  {
    key: "Firma",
    value: "Swisscom Trust Services AG",
  },
  {
    key: "UID",
    value: "CHE489728447",
  },
  {
    key: "Strasse",
    value: "Hardturmstrasse 3",
  },
  {
    key: "Hausnummer",
    value: "3",
  },
  {
    key: "PLZ",
    value: "8005",
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

const FirmenTable = () => {
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
                return <SelectionCell  {...props} />;
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
