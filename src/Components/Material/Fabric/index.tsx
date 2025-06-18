import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import { studentsData } from "../../../Data/Datatable/studentsData";
import { type FabricType } from "../../../Types/types"
import { setFabrics } from '../../../Redux/fabricSlice';
import fabricListService from "../../../Services/Material/Fabric/FabricListService"



const FabricTable = () => {

    const { currentUser } = useSelector((state: any) => state.app)
    const { fabrics } = useSelector((state: any) => state.fabric);

    const dispatch = useDispatch();

    const findFabricsGroupByName = async () => {
        console.log("currentUser")
        console.log(currentUser)
        console.log(fabrics)
        try {
            const fabrics: Array<FabricType> = await fabricListService.findFabricsGroupByName();
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
                <CardHeader>
                    <h5>Kumaş Listesi</h5>
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
                                {studentsData.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.date}</td>
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