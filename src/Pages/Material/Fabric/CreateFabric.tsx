import { Col, Container, CardHeader, Row, Card, CardBody, Form, FormGroup, Button, Label, Input } from "reactstrap";
import { MaterialRoutes } from '../../../Route/AuthRoutes'
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { type FabricType } from '../../../Types/types'
import { addFabric, deleteFabricByCode, updateFabricByCode } from "../../../Redux/fabricSlice";
import { useSelector } from "react-redux";
import SwalMessage from "../../../Services/swal";
import fabricListService from "../../../Services/Material/Fabric/FabricService"
import { useNavigate } from 'react-router-dom'

const CreateFabric = () => {

    const [code, setCode] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [codeToEdit, setCodeToEdit] = useState<string>("");
    const [editedCode, setEditedCode] = useState<string>("");
    const [nameDisable, setNameDisable] = useState<boolean>(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { createdFabrics } = useSelector((state: any) => state.fabric);

    useEffect(() => {
        setNameDisable(createdFabrics.length == 0 ? false : true);
    }, [createdFabrics]);
    useEffect(() => {
        if (createdFabrics.length > 0) {
            setName(createdFabrics[0].name);
        }
    })
    const handleAddFabric = () => {
        if (code.trim().length > 0 && name.trim().length > 0
            && !createdFabrics.some(((fabric: FabricType) => fabric.code == code))) {
            const payload: FabricType = {
                id: createdFabrics.length,
                name,
                code,
            };
            dispatch(addFabric(payload));
            setCode("");
            SwalMessage.toastMessage(`${name} - ${code} Başarı İle Eklendi.`, "success");
        } if (createdFabrics.some(((fabric: FabricType) => fabric.code == code))) {
            SwalMessage.swalErrorMessageWithHtml("Hatalı İşlem",
                `<b class='text-danger'>${code}</b> kumaş ismini daha önce girdiniz.`
            );
        }
    };

    const handleDeleteFabric = (code: string) => {
        if (code) {
            dispatch(deleteFabricByCode(code));
            SwalMessage.toastMessage(`${name} - ${code} Başarı İle Silindi.`, "success");
        }
    };

    const handleOpenEditModal = (code: string) => {
        setCodeToEdit(code);
        setEditedCode("");
    };

    const handleUpdateFabric = (code: string) => {
        const payload: any = {
            oldCode: codeToEdit,
            name: name,
            code: code
        };
        if (createdFabrics.some(((fabric: FabricType) => fabric.code == code))) {
            SwalMessage.swalErrorMessageWithHtml("Hatalı İşlem",
                `<b class='text-danger'>${code}</b> kumaş ismini daha önce girdiniz.`
            );
        } else {

            dispatch(updateFabricByCode(payload));
            SwalMessage.toastMessage(`${name} - ${code} Başarı İle Güncellendi.`, "success");
        }
    };
    const saveFabrics = async () => {
        const payload: Array<FabricType> = createdFabrics;
        const response: any = await fabricListService.createFabrics(payload);
        debugger
        if (response.status) {
            setTimeout(() => {
                navigate(MaterialRoutes.FABRIC_PAGE);
            }, 3000);
        }
    }
    return (
        <>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Kumaşlar</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                                    <span>
                                        <i className="ph-duotone  ph-hand-heart f-s-16"></i> Malzemeler
                                    </span>
                                </a>
                            </li>
                            <li className="">
                                <a href={MaterialRoutes.FABRIC_PAGE} className="f-s-14 f-w-500">Kumaşlar</a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Kumaş Ekle</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className="d-flex justify-content-sm-between align-items-center">
                                <h5>Kumaş Ekle</h5>
                                <button type="button" className="btn btn-primary" onClick={() => saveFabrics()}>Kaydet</button>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form" autoComplete="off">
                                    <Row className="d-flex justify-content-sm-between align-items-center">
                                        <Col xs={6}>
                                            <FormGroup>
                                                <Label for="name" className="form-label">Kumaş Markası</Label>
                                                <Input type="text" name="name" id="name" disabled={nameDisable}
                                                    value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                        setName(e.target.value)
                                                    } placeholder="Kumaş Markasını Giriniz" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} >
                                            <FormGroup>
                                                <Label for="code" className="form-label">Kumaş</Label>
                                                <Input type="text" name="code" id="code"
                                                    value={code} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                        setCode(e.target.value)
                                                    } placeholder="Kumaş İsmini Giriniz" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={2} className="text-end">
                                            <Button onClick={handleAddFabric} color="primary" type="button">Ekle</Button>

                                        </Col>
                                    </Row>
                                </Form>
                                {createdFabrics.length > 0 &&
                                    <Row>
                                        <Col lg={6}>
                                            <Card>
                                                <CardBody className="p-0">
                                                    <div id="myTable">
                                                        <div className="list-table-header d-flex justify-content-sm-between mb-3">
                                                            <div className="modal fade" id="exampleModal" tabIndex={-1}
                                                                aria-labelledby="exampleModalLabel"
                                                                aria-hidden="true">
                                                                <div className="modal-dialog">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">{codeToEdit}
                                                                            </h1>
                                                                            <button type="button" className="btn-close m-0"
                                                                                data-bs-dismiss="modal"
                                                                                aria-label="Close"></button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <div className="employee mb-3">
                                                                                <input type="hidden" id="id-field" />
                                                                                <label className="form-label">Kumaş İsmi</label>
                                                                                <Input className="form-control" type="text" id="editedCode"
                                                                                    placeholder="Yeni Kumaş İsmini Giriniz"
                                                                                    required autoComplete="off"
                                                                                    value={editedCode} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                                                        setEditedCode(e.target.value)
                                                                                    }
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="modal-footer add">
                                                                            <input type="button" className="btn btn-secondary"
                                                                                data-bs-dismiss="modal" value="Geri" />
                                                                            <button className="btn btn-success" id="edit-btn" type="button" data-bs-dismiss="modal" onClick={() => handleUpdateFabric(editedCode)}>Düzenle</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="overflow-auto app-scroll">
                                                            <table className="table table-bottom-border  list-table-data align-middle mb-0">
                                                                <thead>
                                                                    <tr className="app-sort">
                                                                        <th scope="col-10">Kumaş İsmi</th>
                                                                        <th scope="col-1"></th>
                                                                        <th scope="col-1"></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="list" id="t-data">
                                                                    {createdFabrics && createdFabrics.map((fabric: any, index: any) => (
                                                                        <tr key={index}>
                                                                            <td >{fabric.code}</td>
                                                                            <td className="edit">
                                                                                <button className="btn edit-item-btn btn-sm btn-success"
                                                                                    data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleOpenEditModal(fabric.code)}>Düzenle
                                                                                </button>
                                                                            </td>
                                                                            <td className="remove">
                                                                                <button className="btn remove-item-btn btn-sm btn-danger" onClick={() => handleDeleteFabric(fabric.code)}>Sil</button>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                    {createdFabrics.length > 0 &&
                                                                        <Card>
                                                                            <Row>
                                                                                <Col xs={12}>
                                                                                    <p className="pr-3">{createdFabrics.length} Adet Kumaş Eklendi.</p>
                                                                                </Col>
                                                                            </Row>
                                                                        </Card>
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                }

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CreateFabric