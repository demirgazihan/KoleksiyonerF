import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import { type FabricType } from "../../../Types/types"
import { setFabrics } from '../../../Redux/fabricSlice';
import fabricListService from "../../../Services/Material/Fabric/FabricListService"
import { Link } from 'react-router-dom'
import { MaterialRoutes } from '../../../Route/AuthRoutes'


const FabricTable = () => {

    const { currentUser } = useSelector((state: any) => state.app)
    const { fabrics } = useSelector((state: any) => state.fabric);

    const dispatch = useDispatch();

    const findFabricsGroupByName = async () => {
        try {
            const fabrics: Array<FabricType> = await fabricListService.findFabricsGroupByName();
            console.log(fabrics)
            dispatch(setFabrics(fabrics));

        } catch (error: any) {
            console.log("error");
            console.log(error);
        }
    }
    useEffect(() => {
        findFabricsGroupByName();
    }, [])
    useEffect(() => {
        setTimeout(() => {
            new DataTable('#fabricsTable');
        }, 1000)
    }, []);

    return (
        <>
            <Card>
                <CardHeader className="d-flex justify-content-sm-between align-items-center">
                    <h5>Kumaş Listesi</h5>
                    <Link to={MaterialRoutes.FABRIC_CREATE_PAGE} type="button" className="btn btn-primary">Ekle</Link>
                </CardHeader>
                <CardBody className="p-0">
                    <div className="app-scroll table-responsive app-datatable-default">
                        <table id="fabricsTable" className="w-100 display student-list-table">
                            <thead>
                                <tr>
                                    <th>Kumaş İsmi</th>
                                    <th>Kumaş Çeşidi</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fabrics.map((fabric: any, index: any) => (
                                    <tr key={index}>
                                        <td>{fabric.name}</td>
                                        <td>{fabric.count}</td>
                                        <td>
                                            <div className="btn-group dropdown-icon-none">
                                                <button
                                                    className="btn border-0 icon-btn b-r-4 dropdown-toggle active"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true"
                                                    aria-expanded="false"
                                                >
                                                    <i className="ti ti-dots-vertical"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item bg-success" href="#"><i
                                                        className="ti ti-search"></i> Görüntüle </a></li>
                                                    <li><a className="dropdown-item bg-primary mt-1" href="#"><i
                                                        className="ti ti-edit"></i> Düzenle </a></li>
                                                    <li><a className="dropdown-item bg-danger mt-1" href="#"><i
                                                        className="ti ti-trash"></i> Sil </a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default FabricTable