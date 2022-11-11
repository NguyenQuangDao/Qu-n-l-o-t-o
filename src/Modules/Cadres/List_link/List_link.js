import React, { useState, useEffect } from "react";
import "./List_link.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCopy } from "@fortawesome/free-regular-svg-icons";
import StarRating from "../../../Shared/StarRating/StarRating";
import axios from "axios";

// import axios from "axios";
// import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import ReactPaginate from "react-paginate";
// import { library } from "@fortawesome/fontawesome-svg-core";
function ListLink(props) {
  const { setLink, link, listInfo, setListInfo, HandleDelete } = props;
  const [valueDate, setValueDate] = useState("")
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 7;
  const [data, setData] = useState([]);
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data[0] ? (data.length / usersPerPage) : (listInfo.length / usersPerPage)
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/api/customer/list")
  //     .then((res) => {
  //       setListInfo(res.data.docs);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  // console.log(data);
  // console.log(listInfo);
  const Copylink = (id) => {
    let clipBoard = listInfo[id].linkfb;
    navigator.clipboard.writeText(clipBoard);
    setLink({ ...link, linkfb: "" });
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const roles = user ? user.roles.toString() : "";
  // console.log(user.full_name);
  const filterResult = listInfo.filter((curData) => {
    return curData.NameCTV.includes(roles === 'CTV' ? user.full_name : link.NameCTV)
  })

  // 2022-09-22 => 22/09/2022
  const convertDate = valueDate.toString().split('-').reverse()
  const valueConvertDate = `${convertDate[0]}/${convertDate[1]}/${convertDate[2]}`
  useEffect(() => {
    const results = filterResult
      .filter((curData) => {
        return curData.Department.includes(link.Department)
      }).filter((curData) => {
        return curData.Specialized.includes(link.Specialized)
      }).filter((curData) => {
        if (valueDate) {
          return curData.ctime.includes(valueConvertDate)
        } else {
          return data
        }
      })
    setData(results);
  }, [link, valueDate])
  const handleAllLink = () => {
    setValueDate("")
    setLink(link.NameCTV="",link.Department="",link.Specialized="")
    
    
  }
  return (
    <div className="Table">
      <div className="Filter__ListLink">
      <input className="inputDate" name="date" type='date' onChange={e => { setValueDate(e.target.value) }} value={valueDate} />
      <button id="handleAllLink" onClick={handleAllLink} >All Link</button>
      </div>
      <div id="FormTable">
        <Table id="FormTableLink" bordered>
          <thead className="Form__title">
            <tr>
              <th className="LinkFB">Link FaceBook</th>
              <th className="evaluate">Đánh giá</th>
              <th className="custom">Tùy chỉnh</th>
            </tr>
          </thead>
          <tbody>
            {
              roles === "QTV" && link.NameCTV === '' && link.Department === '' && link.Specialized === '' && valueDate === ''?
                (listInfo.map((item, index) => {
                  return (
            <tr key={index} className="Row__Table__Link">
              <td className="NameLinkFB">
                <input
                  className="NameLink"
                  value={item.linkfb}
                  onChange={(e) => { }}
                  disabled
                />
                <span
                  className="iconCopy"
                  onClick={(e) => {
                    Copylink(index);
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faCopy} id="Copy" />{" "}
                </span>
              </td>
              <td>
                <StarRating indexStart />
              </td>
              <td
                className="custom__edit"
                onClick={(e) => {
                  HandleDelete(index);
                }}
              >
                <span>
                  {" "}
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    id="TrashCan"
                  />{" "}
                </span>
              </td>
            </tr>
            );
                }))
            .slice(pagesVisited, pagesVisited + usersPerPage)
                : (data.map((item, index) => {
                  return (
            <tr key={index} className="Row__Table__Link">
              <td className="NameLinkFB">
                <input
                  className="NameLink"
                  value={item.linkfb}
                  onChange={(e) => { }}
                  disabled
                />
                <span
                  className="iconCopy"
                  onClick={(e) => {
                    Copylink(index);
                  }}
                >
                  {" "}
                  <FontAwesomeIcon icon={faCopy} id="Copy" />{" "}
                </span>
              </td>
              <td>
                <StarRating indexStart />
              </td>
              <td
                className="custom__edit"
                onClick={(e) => {
                  HandleDelete(index);
                }}
              >
                <span>
                  {" "}
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    id="TrashCan"
                  />{" "}
                </span>
              </td>
            </tr>
            );
                })).slice(pagesVisited, pagesVisited + usersPerPage)
            }

            <tr>
              <td colSpan={3}></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="pagination">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}
export default ListLink;
