import React, { useMemo } from "react";
import useData from "../hooks/useData";
import { DataGrid, GridToolbarExport, GridToolbarContainer } from '@mui/x-data-grid';
import Loader from "../assets/imgs/loader.svg";
import { rowData, columnData, getTableId } from "../modules/misc/index";


function MyExportButton() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport style={{fontSize: "1.2rem", fontFamily: "Gilroy-ExtraBold",}}/>
    </GridToolbarContainer>
  );
}


const TableSection = React.memo(({ query, isOpen }) => {
  const { data, runtime, error } = useData(query);

  const columns = useMemo(() => {
    if (data.length > 0) {
      return Object.keys(data[0]).map((key) => {
        const result = data[0][key]
          .replace(/([A-Z]+)/g, " $1")
          .replace(/([A-Z][a-z])/g, " $1");

        return {
          Header: result,
          accessor: key,
        };
      });
    }
  }, [data]);

  const queryData = useMemo(() => data.slice(1), [data]);


  if (error)
    return (
      <h1 style={{textAlign: "center", marginTop: "4rem", fontFamily: "Gilroy-ExtraBold"}}>
        Something Went Wrong{" "}
        <span role="img" aria-label="sad face">
          😔
        </span>
      </h1>
    );
  return (
    <>

      {data.length > 0 && getTableId(query) != null ? (
        <div style={{ height: 400, width: '100%' }}>
          <p style={{ fontFamily: "Gilroy-ExtraBold", textAlign: "center" }}>
            Results fetched in:{" "}
            <span>{`${runtime.toFixed(2)} ms`}</span>
          </p>
          <div style={{ height: "85vh", marginTop: "1.8rem", textAlign: "center" }}>
            

            <DataGrid
              disableSelectionOnClick
              columns={columnData(columns)}
              pageSize={10}
              rows={rowData(query, queryData)}
              getRowId={(row) => row[getTableId(query)]}
              sx={{
                background: "white",
                mx: 15,
                boxShadow: 10,
                border: 11,
                borderColor: 'rgba(132, 131, 133,.2)',
                '& .MuiDataGrid-cell:hover': {
                  color: 'primary.main',
                },
              }}
              components={{
                Toolbar: MyExportButton
              }}
            />
          </div>
          
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
          <img src={Loader} height={"50px"} width={"100px"} alt="loader" />
        </div>
      )}
    </>
  );
});

export default TableSection;