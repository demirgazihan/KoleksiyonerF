import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import { type FabricType } from "../../../Types/types"
import { setFabricDetailList } from '../../../Redux/fabricSlice';
import fabricService from "../../../Services/Material/Fabric/FabricService"
import { Link } from 'react-router-dom'
import { MaterialRoutes } from '../../../Route/AuthRoutes'
import { useNavigate } from 'react-router-dom'


const FabricDetailTable = () => {
    const toPage = (routes: any) => {
        navigate(routes);
    }
    const { currentUser } = useSelector((state: any) => state.app)
    const { fabricDetailList, selectedFabric } = useSelector((state: any) => state.fabric);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const findAllByName = async () => {
        try {
            const fabricDetailList: Array<FabricType> = await fabricService.findAllByName(
                {
                    "pageNo": 0,
                    "pageSize": 1000,
                    name: selectedFabric
                }
            );
            console.log(fabricDetailList)
            dispatch(setFabricDetailList(fabricDetailList));

        } catch (error: any) {
            console.log("error");
            console.log(error);
        }
    }
    useEffect(() => {
        findAllByName();
    }, [])
    useEffect(() => {
        setTimeout(() => {
            new DataTable('#fabricDetailTable');
        }, 1000)
    }, []);

    return (
        <>
            <Card>
                <CardHeader className="d-flex justify-content-sm-between align-items-center text-center">
                    <h4 className='text-primary'>{selectedFabric}</h4>
                </CardHeader>
                <CardBody className="p-0">
                    <div className="app-scroll table-responsive app-datatable-default">
                        <table id="fabricDetailTable" className="w-100 display student-list-table">
                            <thead>
                                <tr>
                                    <th>Kumaş Çeşidi</th>
                                    <th>Kumaş Çeşidi</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fabricDetailList.map((fabric: any, index: any) => (
                                    <tr key={index}>
                                        <td>{fabric.code}</td>
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
                                                    <li onClick={() => toPage(MaterialRoutes.FABRIC_DETAIL_PAGE)}><a className="dropdown-item bg-success" href="#"><i
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

export default FabricDetailTable