import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
function Example(prop) {
    const { toggle, modal, handleValue, infoCTV, handleAdd, check, handleUpdate, handleClose } = prop

    return (
        <div style={{ marginRight: '50px' }}>
            <Button color="primary" onClick={toggle} style={{ color: 'white', fontWeight: '600' }}>
                <FontAwesomeIcon icon={faCirclePlus} /> Thêm mới
            </Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader color="primary" onClick={handleClose}>Thêm mới CTV</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col>
                            <Label>
                                Họ tên  :
                            </Label>
                            <input value={infoCTV.full_name} name="full_name" onChange={(e) => handleValue(e)} />
                        </Col>

                        <Col>
                            <Label>
                                Email :
                            </Label>
                            <input value={infoCTV.email} name="email" onChange={(e) => handleValue(e)} />
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Label>
                                SĐT :
                            </Label>
                            <input value={infoCTV.phone} name="phone" onChange={(e) => handleValue(e)} />
                        </Col>

                        <Col>
                            <Label>
                                UserName:
                            </Label>
                            <input value={infoCTV.username} name="username" onChange={(e) => handleValue(e)} />
                        </Col>
                    </Row>

                    <Row style={{ marginTop: '20px' }}>
                        <Col>
                            <Label>
                                Password
                            </Label>
                            <input value={infoCTV.password} name="password" onChange={(e) => handleValue(e)} />
                        </Col>
                        <Col style={{ marginLeft: '35px' }}>
                            <Label>
                                Chức vụ :
                            </Label>


                            <select value={infoCTV.roles} name="roles" style={{ fontSize: '19px' }} onChange={(e) => handleValue(e)}>
                                <option>CTV</option>
                                <option>QTV</option>

                            </select>
                        </Col>

                        <Col>
                            <Label>
                                Giới Tính :
                            </Label>



                            <select value={infoCTV.gender} name="gender" style={{ fontSize: '19px' }} onChange={(e) => handleValue(e)}>
                                <option>Nam</option>
                                <option>Nữ</option>

                            </select>
                        </Col>
                    </Row>


                </ModalBody>
                <ModalFooter>
                    {check ?
                        (<Button color="primary" onClick={handleUpdate}>UPDATE</Button>)
                        :

                        (<Button color="primary" onClick={handleAdd}>ADD</Button>)
                    }
                    <Button color="secondary" onClick={handleClose} >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Example;