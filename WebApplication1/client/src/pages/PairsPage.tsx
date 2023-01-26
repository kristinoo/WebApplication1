import {Box} from "@mui/material";
import React, {useEffect, useState} from "react";
import {DataGrid, GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import {Link} from "react-router-dom";
import {parisRepository} from "../repositories/PairsRepository";
import {Pair} from "../objects/Pair";

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
type pairsTable = {
    id: number,
    pairedUserId: string,
    type: string,
    rating: number,
    comment: string
}

export default function PairsPage() {
    
    const [rows, setRows] = useState(new  Array<pairsTable>());
    useEffect(() => {
        parisRepository.getPairsRecords().then((data) => {
            setRows( data.list.map((pair: Pair, index: number) => (
                {
                    id: index,
                    pairedUserId: pair.pairedUserId,
                    type: pair.type,
                    rating: pair.rating,
                    comment: pair.comment
                }
            )));
        });
    }, []);
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