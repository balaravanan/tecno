import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import {
  CRow,
  CCard,
  CCol,
  CLabel,
  CButton,
  CInput,
  CSelect,
  CWidgetDropdown
} from "@coreui/react";
import {} from "../../../services/ApiService";
// import CSelect from "react-CSelect";

function PartyWingsOfficeLocation() {
  const [addPartyOffice, setAddPartyOffice] = useState(true);
  const [createPartyOffice, setCreatepartyOffice] = useState(false);

  const changePartyOffice = async () => {
    await setAddPartyOffice(false);
    await setCreatepartyOffice(true);
  };
  const cancelPartyOffice = () => {
    setAddPartyOffice(true);
    setCreatepartyOffice(false);
  };
  const userData = [
    {
      SNo: "1",
      NAMEOFWINGOFFICE: "Branch Office",
      WingOffice: "Branch Office",
      ReportingTo: "Head Office",
      address: "Valasaravakkam, Chennai", 
    }
  ];

  const fields = [
    {
      key: "SNo",
      label: "S.NO",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },
   
    {
      key: "NAMEOFWINGOFFICE",
      label: "Name of Party Wings Office",
      _style: { width: "10%" },
    },
    {
        key: "WingOffice",
        label: " Type of Party Wings Office ",
        _style: { width: "10%" },
      },
    {
      key: "ReportingTo",
      label: "Hierarchy Reporting Office",
      _style: { width: "15%" },
    },
    { key: "address", label: "Address", _style: { width: "10%" } },
    {
      label: "Action",
      key: "show_details1",

      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];
  return (
    <div>
      {addPartyOffice && (
        <div>
          <CCard className={"cardSave"}>
            <div className={"main-headerlabel"}>
              <span className={"header-label"}>party Wings Office Location</span>
            </div>

            <CRow style={{ marginTop: "130px" }}>
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    marginLeft: "5px",
                    float: "right",
                    marginTop: "-10px",
                    top: "33px",
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                      marginRight: "764px",
                    }}
                    id={"saveAbbreviationConfigureCode"}
                    className={"saveBtn"}
                    onClick={changePartyOffice}
                  >
                    Add Party Wings Office Location
                  </CButton>{" "}
                </CCol>
              </CCol>
            </CRow>
            <CRow style={{marginTop:"75px", marginLeft:"240px",position:"absolute" }}>
                    <CCol sm="3" lg="3" style={{ marginLeft: "-160px" }}>
                      <CWidgetDropdown
                        style={{
                          width: "280px",
                          textAlign: "center",
                          fontSize: "30px",
                          float: "right",
                          height:"100px"
                        }}
                        color="gradient-danger"
                        header=""
                        text=""
                      >
                        <span style={{ marginLeft: "-30px", fontSize: "24px",fontWeight:"700" }}>
                          Total
                        </span>
                        <span
                          style={{ marginLeft: "-152px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          2
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                    <CCol sm="3" lg="3" style={{ marginLeft: "100px" }}>
                      <CWidgetDropdown
                        style={{
                          width: "280px",
                          textAlign: "center",
                          fontSize: "30px",
                          float: "right",
                          height:"100px"
                        }}
                        color="gradient-primary"
                        header=""
                        text=""
                      >
                        <span style={{ marginLeft: "-110px", fontSize: "24px",fontWeight:"700" }}>
                          District Party Office
                        </span>
                        <span
                          style={{ marginLeft: "-252px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          2
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                    <CCol sm="3" lg="3" style={{ marginLeft: "110px" }}>
                      <CWidgetDropdown
                        style={{
                          width: "280px",
                          textAlign: "center",
                          fontSize: "30px",
                          float: "right",
                          height:"100px"
                        }}
                        color="gradient-warning"
                        header=""
                        text=""
                      >
                        <span style={{ marginLeft: "-110px", fontSize: "24px",fontWeight:"700" }}>
                          Circle Party Office
                        </span>
                        <span
                          style={{ marginLeft: "-252px", marginTop: "30px" ,fontSize: "24px",fontWeight:"700" }}
                        >
                          1
                        </span>
                        <br />
                        <br />
                      
                      </CWidgetDropdown>
                    </CCol>
                  </CRow>
            <CRow>
              <CCol style={{ fontSize: "1.55rem" }} md="12">
                <i
                  id={"locationLibraryDelete"}
                  style={{
                    position: "absolute",
                    top: "80px",
                    marginLeft: "940px",
                    marginBottom: "20px",
                    color: "#0072ff",
                    cursor: "pointer",
                  }}
                  className="fa fa-print"
                ></i>
              </CCol>
              <CCol style={{ fontSize: "1.55rem" }} md="12">
                <i
                  id={"locationLibraryDelete"}
                  style={{
                    position: "absolute",
                    top: "80px",
                    marginLeft: "980px",
                    marginBottom: "20px",
                    color: "green",
                    cursor: "pointer",
                  }}
                  className="fa fa-share-alt"
                ></i>
              </CCol>
            </CRow>

            <CRow>
              <CCol style={{ top: "20px" }}>
                <img
                  id={"employeeDataorgEmployeeData"}
                  alt={""}
                  src={
                    "https://img.icons8.com/fluent/2x/organization-chart-people.png"
                  }
                  style={{
                    height: "40px",
                    width: "40px",
                    marginRight: "238px",
                    marginTop:"53px",
                    float: "right",
                    cursor: "pointer",
                  }}
                />
              </CCol>
            </CRow>
            <CRow style={{ padding: "4%", marginTop: "-5.5%" }}>
              <CDataTable
                items={userData}
                fields={fields}
                columnFilter
                tableFilter
                tableLabel={"List of party Wings Office Location"}
                itemsPerPageCSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CInput
                          type={"checkbox"}
                          style={{
                            width: "15px",
                            height: "15px",
                            marginLeft: "30px",
                            marginBottom: "10px",
                          }}
                        />
                        <CRow>
                          <CCol style={{ fontSize: "1.15rem" }} md="12">
                          </CCol>
                        </CRow>
                      </td>
                    );
                  },
                  show_details1: (item, index) => {
                    return (
                      <td className="py-2">
                        <CRow>
                          <CCol style={{ fontSize: "1.15rem" }} md="12">
                            <i
                              style={{
                                marginRight: "5px",
                                color: "#3480e2",
                                cursor: "pointer",
                              }}
                              id={"constituencyEditicon"}
                              className="fas fa-edit"
                            ></i>
                            <i
                              id={"constituencyDelete"}
                              style={{
                                marginLeft: "5px",
                                color: "#e85654",
                                cursor: "pointer",
                              }}
                              className="fa fa-trash"
                            ></i>
                          </CCol>
                        </CRow>
                      </td>
                    );
                  },

                  details: (item, index) => {},
                }}
              />
            </CRow>
          </CCard>
        </div>
      )}

      {createPartyOffice && (
        <div>
          <CCard className={"cardSave"}>
            <div style={{ marginLeft: "-2px" }}>
              <div className={"row-headerlabel"}>
                <span style={{ marginLeft: "70px" }} className={"header-label"}>
                  {" "}
                  Adding Party Wings Office Location{" "}
                </span>
              </div>
            </div>

            <CRow className={"row-alignment"} md="12" sm="12" lg="12">
              <CCol className={"column-align"} md={5} lg={5}>
                <CLabel className={"label-name"}>
                  Type of Party Wings Office
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CSelect
                  type={"text"}
                  id={"wingReportingTo"}
                  className={"CSelect"}
                  placeholder="CSelect the Party Office"
                >
                  <option>Branch Office</option>
                </CSelect>

              </CCol>
              <CCol className={"column-align"} md={5} lg={5}>
                <CLabel className={"label-name"}>
                  Hierarchy Reporting To Office
                  <span className={"text-danger"}>*</span>
                  <span style={{ color: "green" }}>-</span>
                </CLabel>
                <CSelect
                  type={"text"}
                  id={"wingReportingTo"}
                  className={"CSelect"}
                  placeholder="CSelect the ReportingTo"
                >
                  <option>Head Office</option>
                </CSelect>
              </CCol>
            </CRow>

            <CRow className={"row-alignment"} md="12" sm="12" lg="12">
              <CCol className={"column-align"} md={5} lg={5}>
                <CLabel className={"label-name"}>
                  Name of Party Wings Office Location
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CInput
                  type={"text"}
                  className={"input-align"}
                  name={"Address1"}
                  id={"WinglocationAddress1"}
                  placeholder="Enter Name of Party Office"
                value="Branch Office Chennai"
                />
              </CCol>
            </CRow>
            <CCol>
              <CLabel
                style={{
                  fontSize: "20PX",
                  fontFamily: "Open Sans",
                  fontWeight: "700",
                  marginLeft: "55px",
                  marginTop: "15px",
                }}
              >
                Address of the Party Wings Office
              </CLabel>
            </CCol>

            <CRow
              className={"row-alignment"}
              md="12"
              sm="12"
              lg="12"
              style={{ marginTop: "-25px" }}
            >
              <CCol className={"column-align"} md={8} lg={8}>
                <CLabel className={"label-name"}>
                  Search Location for
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CSelect
                  type={"text"}
                  id={"wingSearchLocation"}
                  className={"CSelect"}
                  placeholder="Country,State,City,Area"
                >
          <option>HEAD OFFICE, MAHARASTRA, MUMBAI, MADAM CAMMA ROAD, ADMINISTRATION, CHAIRMAN, GENERAL...</option>
                </CSelect>
              </CCol>
            </CRow>

            <CRow className={"row-alignment"} md="12" sm="12" lg="12">
             
              <CCol className={"column-align"} md={5} lg={5}>
                <CLabel className={"label-name"}>
                  State
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CInput
                  type={"text"}
                  className={"input-align"}
                  name={"State"}
                  id={"WinglocationState"}
                  placeholder="Enter State"
                
                />
              </CCol>
              <CCol className={"column-align"} md={5} lg={5}>
                <CLabel className={"label-name"}>
                  District/City
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CInput
                  type={"text"}
                  className={"input-align"}
                  name={"City "}
                  id={"WinglocationCity"}
                  placeholder="Enter City "
                />
              </CCol>
            </CRow>

            <CRow className={"row-alignment"} md="12" sm="12" lg="12">
              
              <CCol className={"column-align"} md={5} lg={5}>
                <CLabel className={"label-name"}>
                  Area / Village
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CInput
                  type={"text"}
                  className={"input-align"}
                  name={"Area "}
                  id={"WinglocationArea "}
                  placeholder="Enter Area "
                />
              </CCol>
              
               <CCol className={"column-align"} md={5} lg={5}>
                <CLabel className={"label-name"}>
                  Pincode
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CInput
                  type={"text"}
                  className={"input-align"}
                  name={"Pincode "}
                  id={"WinglocatioPincode"}
                  placeholder="Enter Pincode "
                />
              </CCol>



            </CRow>
            <CRow className={"row-alignment"} md="12" sm="12" lg="12">
              <CCol className={"column-align"} md={5} lg={5}>
                <CLabel className={"label-name"}>
                  Street
                  <span className={"text-danger"}>*</span>
                </CLabel>
                <CInput
                  type={"text"}
                  className={"input-align"}
                  name={"Area "}
                  id={"WinglocationArea "}
                  placeholder="Enter Street "
                />
              </CCol>
            </CRow>

            <CRow style={{ marginTop: "40px" }}>
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    marginLeft: "380px",
                    position: "absolute",
                    float: "right",
                    marginTop: "-75px",
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                    }}
                    id={"cancelAbbreviationConfigureCode"}
                    className={"cancelBtn"}
                    onClick={cancelPartyOffice}
                  >
                    CANCEL
                  </CButton>
                  <CButton
                    style={{
                      float: "right",
                      marginRight: "15px",
                    }}
                    id={"saveAbbreviationConfigureCode"}
                    className={"saveBtn"}
                    onClick={""}
                  >
                    Save
                  </CButton>{" "}
                </CCol>
              </CCol>
            </CRow>
          </CCard>
        </div>
      )}
    </div>
  );
}

export default PartyWingsOfficeLocation;
