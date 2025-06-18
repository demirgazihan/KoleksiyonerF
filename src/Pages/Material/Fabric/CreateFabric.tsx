import { Col, Container, CardHeader, Row, Card, CardBody, Form, FormGroup, Button, Label, Input } from "reactstrap";
import { Link } from 'react-router-dom'
import { MaterialRoutes } from '../../../Route/AuthRoutes'

const CreateFabric = () => {
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
                                <button type="button" className="btn btn-primary">Kaydet</button>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <Row className="d-flex justify-content-sm-between align-items-center">
                                        <Col xs={6}>
                                            <FormGroup>
                                                <Label for="username" className="form-label">Kumaş Markası</Label>
                                                <Input type="text" name="username" id="username" placeholder="Kumaş Markasını Giriniz" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={4} >
                                            <FormGroup>
                                                <Label for="username" className="form-label">Kumaş</Label>
                                                <Input type="text" name="username" id="username" placeholder="Kumaş İsmini Giriniz" />
                                            </FormGroup>
                                        </Col>
                                        <Col xs={2} className="text-end">
                                            <Button color="primary" type="button">Ekle</Button>

                                        </Col>
                                    </Row>
                                </Form>
                                <Row>
                                    <Col lg={6}>
                                        <Card>
                                            <CardBody className="p-0">
                                                <div id="myTable">
                                                    <div className="list-table-header d-flex justify-content-sm-between mb-3">
                                                        <div className="modal fade" id="exampleModal" tabIndex="-1"
                                                            aria-labelledby="exampleModalLabel"
                                                            aria-hidden="true">
                                                            <form id="add_employee_form">
                                                                <div className="modal-dialog">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Kumaş Düzenle
                                                                            </h1>
                                                                            <button type="button" className="btn-close m-0"
                                                                                data-bs-dismiss="modal"
                                                                                aria-label="Close"></button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <div className="employee mb-3">
                                                                                <input type="hidden" id="id-field" />
                                                                                <label className="form-label">Kumaş İsmi</label>
                                                                                <input className="form-control" type="text" id="employee-field"
                                                                                    placeholder="employee"
                                                                                    required />
                                                                            </div>
                                                                        </div>
                                                                        <div className="modal-footer add">
                                                                            <input type="button" className="btn btn-secondary"
                                                                                data-bs-dismiss="modal" value="Close" />
                                                                            <input type="submit" className="btn btn-primary" id="add-btn"
                                                                                value="Add" />
                                                                            <button className="btn btn-success" id="edit-btn">Edit</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>

                                                    <div className="overflow-auto app-scroll">
                                                        <table className="table table-bottom-border  list-table-data align-middle mb-0">
                                                            <thead>
                                                                <tr className="app-sort">
                                                                    <th className="sort" data-sort="employee" scope="col">Kumaş İsmi</th>
                                                                    <th className="sort" data-sort="action" scope="col"></th>
                                                                    <th className="sort" data-sort="action" scope="col"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="list" id="t-data">
                                                                <tr>
                                                                    <td className="employee">Allie Grater</td>
                                                                    <td className="edit">
                                                                        <button className="btn edit-item-btn btn-sm btn-success"
                                                                            data-bs-toggle="modal" data-bs-target="#exampleModal">Düzenle
                                                                        </button>
                                                                    </td>
                                                                    <td className="remove">
                                                                        <button className="btn remove-item-btn btn-sm btn-danger">Sil</button>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CreateFabric