import React, { useState, useEffect } from "react";
import "./FormCadres.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from "../../../Shared/clock/clock";
import { Button, Col, Row, Container } from "reactstrap";
import axios, { Axios } from "axios";
function FormCadres(props) {
  const { onChangeLink, handleButtonMore, link, listInfo } = props;
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  const [listCTV, setListCTV] = useState([]);
  const roles = user ? user.roles.toString() : "";
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/user/list")
      .then((res) => {
        setListCTV(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(listCTV);
  // console.log(link);
  return (
    <div id="cadres">
      <div className="customer__care">Chăm sóc khác hàng</div>
      <div className="customer__line"></div>
      <div className="customer__clock">
        <Clock />
      </div>
      <Container id="customer__care__form">
        <Row xs={12} className="info__cadres">
          <Col xs={4} className="Name__CVT">
            <span className="Name">Tên CTV</span>
            {roles === "CTV" ? (
              <input className="input" name="NameCTV" value={user.full_name} />
            ) : (
              <select
                name="NameCTV"
                id="selectNameCTV"
                onChange={(e) => {
                  onChangeLink(e);
                }}
                value={link.NameCTV}
              >
                <option></option>
                {listCTV.map((item, index) => {
                  return <option key={index}>{item.full_name}</option>;
                })}
              </select>
            )}
          </Col>
          <Col xs={4} className="Department">
            <span className="Name">Phòng Ban</span>
            <select
              name="Department"
              onChange={(e) => {
                onChangeLink(e);
              }}
              value={link.Department}
            >
              <option></option>
              <option>Phòng hành chính</option>
              <option>Phòng nhân sự</option>
              <option>Phòng tài chính</option>
            </select>
          </Col>
          <Col xs={4} className="specialized">
            <span className="Name">Chuyên Ngành</span>
            <select
              name="Specialized"
              onChange={(e) => {
                onChangeLink(e);
              }}
              value={link.Specialized}
            >
              <option></option>
              <option>Công nghệ thông tin </option>
              <option>Marketing</option>
              <option>Quản lý nhân sự</option>
              <option>Thiết kế</option>
              <option>Kế toán</option>
            </select>
          </Col>
        </Row>
        <div className="Link__FB">
          <span>Link FaceBook</span>
          <input
            id="More__Link__FB"
            placeholder="Thêm link facebook..."
            name="linkfb"
            value={link.linkfb ? link.linkfb : ""}
            onChange={(e) => {
              onChangeLink(e);
            }}
          />
          <button onClick={handleButtonMore}>Thêm</button>
        </div>
      </Container>
    </div>
  );
}

export default FormCadres;
