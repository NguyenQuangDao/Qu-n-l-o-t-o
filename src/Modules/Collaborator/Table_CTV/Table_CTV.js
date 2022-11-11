import React, { memo } from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
function Table_CTV(prop) {
    const { listInfoCTV, handleDelete, edit, filterSearch } = prop
    // console.log(listInfoCTV);
    return (
        <>
            <Table bordered>
                <thead style={{ background: 'rgb(10, 145, 10)', color: 'white', textAlign: 'center' }}>
                    <tr>
                        <th>
                            STT
                        </th>
                        <th>
                            Họ Tên
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            SĐT
                        </th>
                        <th>
                            UserName
                        </th>
                        {/* <th>
                            Password
                        </th> */}
                        <th>
                            Chức vụ
                        </th>
                        <th>
                            Giới Tính
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listInfoCTV.filter((item) => {
                        if (filterSearch == "") {
                            return item
                        } else if (item.full_name.toLowerCase().includes(filterSearch.toLowerCase())) {
                            return item
                        } else if (item.phone.toLowerCase().includes(filterSearch.toLowerCase())) {
                            return item
                        } else if (item.gender.toLowerCase().includes(filterSearch.toLowerCase())) {
                            return item
                        }
                        else if (item.email.toLowerCase().includes(filterSearch.toLowerCase())) {
                            return item
                        }
                    }).map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.full_name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.username}</td>
                                {/* <td>{item.password}</td> */}
                                <td>{item.roles}</td>
                                <td>{item.gender}</td>
                                <td>
                                    <button onClick={(e) => edit(item._id)}> <FontAwesomeIcon icon={faPen} /></button>
                                    <button onClick={(e) => handleDelete(index)}> <FontAwesomeIcon icon={faTrash} /></button>
                                </td>


                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
export default memo(Table_CTV);