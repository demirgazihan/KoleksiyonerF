import React from 'react';
import { Col, Container, Row } from "reactstrap";
import { Link } from 'react-router-dom'

const Maintenance = () => {
    return (
        <div>
            <div className="bg-dark maintenance py-5">
                <Container>
                    <Row>
                        <div className="overlay-maintenance-card">
                            <Col md={5}>
                                <h1 className="text-warning">Bakım<br />Aşamasındayız</h1>

                                <p className="text-white">En Yakın Zamanda Sizlerle Görüşmek Üzere</p>
                                <div className="text-left">
                                    <Link to="https://www.facebook.com/koleksiyonermobilya/?locale=tr_TR" type="button" className="btn btn-primary icon-btn b-r-5 "><i
                                        className="ti ti-brand-facebook text-white"></i></Link>
                                    <Link to="https://www.instagram.com/koleksiyonermobilya" type="button"
                                        className="btn btn-primary icon-btn b-r-5 m-1"><i
                                            className="ti ti-brand-instagram text-white"></i></Link>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Maintenance;