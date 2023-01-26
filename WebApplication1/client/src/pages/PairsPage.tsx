import {Box } from "@mui/material";
import React from "react";
import {DataGrid, GridRenderCellParams} from "@mui/x-data-grid";
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Link} from "react-router-dom";

const columns: GridColDef[] = [
    {
        field: 'pairedUserId',
        headerName: 'Собеседник',
        flex: 0.3,
        renderCell: (params: GridRenderCellParams<string>) => (
            <Link to={"/profile/"+params.value}>{params.value}</Link>
        )
    },
    {
        field: 'type',
        headerName: 'Тип',
        flex: 0.3
    },
    {
        field: 'rating',
        headerName: 'Рейтинг',
        type: 'number',
        flex: 0.3
    },
    {
        field: 'comment',
        headerName: 'Комментарий',
        sortable: false,
        flex: 1,
    },
];

const rows = [{id:0,pairedUserId: "admin",type:"",rating:0.0,comment:""}];

export default function PairsPage() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
            />
        </Box>
    );
}