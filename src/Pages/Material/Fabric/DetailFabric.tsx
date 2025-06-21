

import { Col, Container, Row } from "reactstrap";
import { MaterialRoutes } from '../../../Route/AuthRoutes'
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import FabricDetailTable from '../../../Components/Material/Fabric/DetailFabric';

const DetailFabric = () => {
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
                                <a href="#" className="f-s-14 f-w-500">Kumaş Detayı</a>
                            </li>
                        </ul>
                    </Col>
                </Row>


                <Row>
                    <Col xs={12}>
                        <FabricDetailTable />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DetailFabric