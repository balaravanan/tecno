import { CButton, CCard, CCol, CInput, CLabel, CRow,  } from "@coreui/react";
import React, { useState } from "react";
import CDataTable from "../../CoreComponents/table/CDataTable";
import { saveCreateCorporation } from "../../../services/ApiService";
import { toast } from "react-toastify";
import Select  from "react-select";

const WingsofficeType = () => {
  const [location, setLocation] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });
  const [locations, setLocations] = useState({
    state: "",
    district: "",
    city: "",
    ward: "",
    area: "",
    street: "",
    pincode: "",
  });

  const [locationHide, setLocationHide] = useState({
    corporation: true,
    municipalLocation: false,
    districtPanchayat: false,
    townPanchayat: false,
    villagePanchayat: false,
    cityLocation: false,
  });
  const userData = [
    {
      SNo: "1",
      party: "Head Office",
      abbri: "hoff",
      code: "HO",
      to: "---",
      by: "jai",
      on: "12/05/2021",
     

    },
    {
      SNo: "2",
      party: "Branch Office",
      abbri: "boff",
      code: "BO",
      to: "Head Office",
      by: "jai",
      on: "31/05/2021",
    },
  ];
  const fields = [
    { key: "SNo", label: "S.NO", _style: { width: "5%" },    sorter: false,
    filter: false, },
  
    { key: "party", label: "Type of Party Office", _style: { width: "15%" } },
    { key: "abbri", label: "Abbreviation", _style: { width: "10%" } },
    { key: "code", label: "Code", _style: { width: "10%" } },
    { key: "to", label: "Reporting To ", _style: { width: "12%" } },
  
    { key: "by", label: "Entered By", _style: { width: "7%" }, },
    { key: "on", label: "Entered On", _style: { width: "7%" },  },
    { key: "show_details", label: "Action", _style: { width: "5%" }, },
  ];
  const [passing, ] = useState("");
  const saveCorporation = async () => {
    setLocationHide({
      ...locationHide,
      municipalLocation: true,
      corporation: false,
    });

    if (passing === "") {
      let body = {
        state: locations.state,
        district: locations.district,
        city: locations.city,
        area: locations.area,
        ward: locations.ward,
        street: locations.street,
      };
      console.log(body);
      try {
        const response = await saveCreateCorporation(JSON.stringify(body));
        console.log(body, "createfirst");
        if (response) {
          toast.success(response);
        }
      } catch (error) {
        toast.error(error);
      }
    }
  };

  const saveMunicipalLocation = () => {
    setLocationHide({
      ...locationHide,
      municipalLocation: false,
      districtPanchayat: true,
    });
  };
  const saveDistrictPanchayat = () => {
    console.log(locationHide, "hidr");
    setLocationHide({
      ...locationHide,
      districtPanchayat: false,
      townPanchayat: true,
    });
  };
  const savetownPanchayat = () => {
    console.log(locationHide, "hidr");
    setLocationHide({
      ...locationHide,
      villagePanchayat: true,
      townPanchayat: false,
    });
  };
  const cityLocation = () => {
    setLocationHide({
      ...locationHide,
      cityLocation: true,
      townPanchayat: false,
    });
  };
  const cancelcityLocation = () => {
    setLocationHide({
      ...locationHide,
      cityLocation: false,
      corporation: true,
    });
  };
  const changeHandler = (e) => {
    setLocations({ ...locations, [e.target.name]: e.target.value });
  };
  const [hideMappingMunicipal, ] =useState(true)
  const[hideCorporation, ] =useState(false)
  return (

    <div>
      {hideMappingMunicipal && (
         <div>
         <CCard className={"cardSave"}>
           <div className={"main-headerlabel"}>
             <span className={"header-label"}> Adding Party Wings Office</span>
           </div>
           {locationHide.corporation && (
             <div>
               <div style={{ marginLeft: "-26px" }}>
                 <div className={"row-headerlabel"}>
                   <span  style={{marginLeft:"70px"}} className={"header-label"}>
                     {" "}
                     {" "}
                   </span>
                 </div>
                 <CRow className={"row-alignment"} md="12" sm="12" lg="12">
             

             <CCol className={"column-align"} md="4">
               <CLabel className={"label-name"}>
               Type of Party Wings Office
                 <span className={"text-danger"}>*</span>
               </CLabel>
               <CInput
                 className={"input-align"}
                 id={"municipalstatename"}
                 name={"state"}
                 placeholder={"Enter Party Office"}
                 value="Branch Office"
                 onChange={changeHandler}
               />
             </CCol>
             <CCol className={"column-align"} md="4">
               <CLabel className={"label-name"}>
               Abbreviation
                 <span className={"text-danger"}>*</span>
               </CLabel>
               <CInput
                 className={"input-align"}
                 id={"municipaldistrict"}
                 name={"city"}
                 placeholder={"Enter Abbreviation"}
                 value="boff"
                 onChange={changeHandler}
               />
             </CCol>
             
           </CRow>
           <CRow className={"row-alignment"} md="12" sm="12" lg="12">
          
           <CCol className={"column-align"} md="4">
               <CLabel className={"label-name"}>
               Code
                 <span className={"text-danger"}>*</span>
               </CLabel>
               <CInput
                 className={"input-align"}
                 id={"municipaldistrict"}
                 name={"city"}
                 placeholder={"Enter Code"}
                 value="BO"
                 onChange={changeHandler}
               />
             </CCol>
           <CCol className={"column-align"} md="4">
               <CLabel className={"label-name"}>
               Hierarchy  Reporting To Office
                 <span className={"text-danger"}>*</span>
               </CLabel>
               <Select
                 className={"input-align"}
                 id={"municipalarea"}
                 name={"area"}
                 placeholder={"Select Hierarchy Reporting To"}
                 value={locations.city}
                 onChange={changeHandler}
               >
                 <option>Head Office</option>
               </Select>
             </CCol>
        
         
        </CRow>
        <CRow style={{marginTop:"60px"}}>
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    marginLeft: "555px",
                    float: "right",
                    marginTop:"-25px",
                    position:"absolute"
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                    }}
                    id={"cancelAbbreviationConfigureCode"}
                    className={"cancelBtn"}
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
                    onClick={saveCorporation}
                  >
                    Save
                  </CButton>{" "}
                </CCol>
              </CCol>
            </CRow>

               </div>           <CRow>
              <CCol style={{ fontSize: "1.55rem" }} md="12">
                <i
                  id={"locationLibraryDelete"}
                  style={{
                    position: "absolute",
                    top: "80px",
                    marginLeft: "860px",
                    marginBottom: "20px",
                    color: "black",
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
                    marginLeft: "900px",
                    marginBottom: "20px",
                    color: "black",
                    cursor: "pointer",
                  }}
                  className="fa fa-share-alt"
                ></i>
              </CCol>
            </CRow>

            <CRow>
              <CCol style={{ top: "-10px" }}>
                <img
                  id={"employeeDataorgEmployeeData"}
                  alt={""}
                  src={
                    "https://img.icons8.com/fluent/2x/organization-chart-people.png"
                  }
                  style={{
                    height: "40px",
                    width: "40px",
                    marginRight: "315px",
                    marginTop:"80px",
                    float: "right",
                    cursor: "pointer",
                  }}
                />
              </CCol>
            </CRow>
               <CRow style={{ padding: "4%", marginTop: "-10.5%" }}>
                 <CDataTable
                   items={userData}
                   fields={fields}
                   columnFilter
                   tableFilter
                   tableLabel={"List of Party Wing Office"}
                   itemsPerPageSelect
                   itemsPerPage={5}
                   hover
                   sorter
                   pagination
                   scopedSlots={{
                     show_details: (item, index) => {
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
                                id={"memberregisterediticon"}
                                className="fas fa-edit"
                              ></i>
                              <i
                                id={"memberregisterdelete"}
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
             </div>
           )}
   
         </CCard>
       </div>
      )}

      {hideCorporation && (
        <div>
       <CCard className={"cardSave"} style={{minHeight:"450px"}}>
        <div className={"main-headerlabel"}>
          <span className={"header-label"}> Party Office</span>
        </div>
        {locationHide.corporation && (
          <div>
            <div style={{ marginLeft: "-26px" }}>
              <div className={"row-headerlabel"}>
                <span  style={{marginLeft:"70px"}} className={"header-label"}>
                  {" "}
                  Adding Party Office{" "}
                </span>
              </div>
        
            
            </div>
            
</div>
        )}

        {locationHide.municipalLocation && (
          <div>
            <div style={{ marginLeft: "-26px" }}>
              <div className={"row-headerlabel"}>
                <span className={"header-label"}>
                  {" "}
                  Adding Urban Location{" "}
                </span>
              </div>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    State
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"municipalState"}
                    placeholder={" State Name"}
                    value={location.state}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    District/City
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"municipalDistrict"}
                    placeholder={" District/City Name"}
                    value={location.district}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Muncipality Corporation
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"Muncipality"}
                    placeholder={" Muncipality Corporation"}
                    value={location.arae}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Ward
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"municipalWard"}
                    placeholder={" Ward"}
                    value={location.street}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Street
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    id={"municipalStreet"}
                    placeholder={"Enter Street"}
                    value={location.pincode}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>

                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Area
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    id={"municipalStreet"}
                    placeholder={"Enter Area"}
                    value={location.pincode}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
              </CRow>
            </div>
            <CRow>
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    float: "right",
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                    }}
                    id={"cancelAbbreviationConfigureCode"}
                    className={"cancelBtn"}
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
                    onClick={saveMunicipalLocation}
                  >
                    Save
                  </CButton>{" "}
                </CCol>
              </CCol>
            </CRow>
            <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
              <CDataTable
                items={userData}
                fields={fields}
                columnFilter
                tableFilter
                tableLabel={"List of Locations"}
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CRow>
                          <CCol style={{ fontSize: "1.15rem" }} md="12">
                          </CCol>
                        </CRow>
                      </td>
                    );
                  },
                  details: (item, index) => {},
                }}
              />
            </CRow>
          </div>
        )}

        {locationHide.districtPanchayat && (
          <div>
            <div style={{ marginLeft: "-26px" }}>
              <div className={"row-headerlabel"}>
                <span className={"header-label"}>
                  {" "}
                  Adding District Panchayat Location{" "}
                </span>
              </div>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    State
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"districtPanchayatState"}
                    placeholder={" State Name"}
                    value={location.state}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    District
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"districtPanchayatDistrict"}
                    placeholder={" District/City Name"}
                    value={location.district}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    District Panchayat
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"districtPanchayat"}
                    placeholder={" Area Name"}
                    value={location.arae}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Ward
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"districtPanchayatWard"}
                    placeholder={" Street Name"}
                    value={location.street}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Street
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    id={"districtPanchayatStreet"}
                    placeholder={"Enter Pincode"}
                    value={location.pincode}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
              </CRow>
            </div>
            <CRow>
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    float: "right",
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                    }}
                    id={"cancelDistrictPanchayats"}
                    className={"cancelBtn"}
                  >
                    CANCEL
                  </CButton>
                  <CButton
                    style={{
                      float: "right",
                      marginRight: "15px",
                    }}
                    id={"saveDistrictPanchayats"}
                    className={"saveBtn"}
                    onClick={saveDistrictPanchayat}
                  >
                    Save
                  </CButton>{" "}
                </CCol>
              </CCol>
            </CRow>
            <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
              <CDataTable
                items={userData}
                fields={fields}
                columnFilter
                tableFilter
                tableLabel={"List of Locations"}
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CRow>
                          <CCol style={{ fontSize: "1.15rem" }} md="12">
                          </CCol>
                        </CRow>
                      </td>
                    );
                  },
                  details: (item, index) => {},
                }}
              />
            </CRow>
          </div>
        )}
        {locationHide.townPanchayat && (
          <div>
            <div style={{ marginLeft: "-26px" }}>
              <div className={"row-headerlabel"}>
                <span className={"header-label"}>
                  {" "}
                  Adding Town Panchayat Location{" "}
                </span>
              </div>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    State
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"townPanchayatState"}
                    placeholder={" State Name"}
                    value={location.state}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    District
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"townPanchayatDistrict"}
                    placeholder={" District/City Name"}
                    value={location.district}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Town Panchayat
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"townPanchayatArea"}
                    placeholder={" Area Name"}
                    value={location.arae}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Ward
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"PoliticalStreet"}
                    placeholder={" Street Name"}
                    value={location.street}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Street
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    id={"PoliticalPincode"}
                    placeholder={"Enter Pincode"}
                    value={location.pincode}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
              </CRow>
            </div>
            <CRow>
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    float: "right",
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                    }}
                    id={"cancelTownPanchayat"}
                    className={"cancelBtn"}
                  >
                    CANCEL
                  </CButton>
                  <CButton
                    style={{
                      float: "right",
                      marginRight: "15px",
                    }}
                    id={"saveTownPanchayat"}
                    className={"saveBtn"}
                    onClick={savetownPanchayat}
                  >
                    Save
                  </CButton>{" "}
                </CCol>
              </CCol>
            </CRow>
            <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
              <CDataTable
                items={userData}
                fields={fields}
                columnFilter
                tableFilter
                tableLabel={"List of Locations"}
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CRow>
                          <CCol style={{ fontSize: "1.15rem" }} md="12">
                          </CCol>
                        </CRow>
                      </td>
                    );
                  },
                  details: (item, index) => {},
                }}
              />
            </CRow>
          </div>
        )}
        {locationHide.villagePanchayat && (
          <div>
            <div style={{ marginLeft: "-26px" }}>
              <div className={"row-headerlabel"}>
                <span className={"header-label"}>
                  {" "}
                  Adding Rural Location{" "}
                </span>
              </div>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    State
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"villagePanchayatState"}
                    placeholder={" State Name"}
                    value={location.state}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    District
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"villagePanchayatDistrict"}
                    placeholder={" District/City Name"}
                    value={location.district}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                     Panchayat Union
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"villagePanchayat"}
                    placeholder={"  Panchayat Union"}
                    value={location.arae}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">

              <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Village Union
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"villageunion"}
                    placeholder={"village Union"}
                    value={location.villageunion}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Ward
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"villagePanchayatWard"}
                    placeholder={"Enter Ward"}
                    value={location.street}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Street
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"text"}
                    className={"input-align"}
                    id={"villagePanchayatStreet"}
                    placeholder={"Enter Street"}
                    value={location.pincode}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
              </CRow>
            </div>
            <CRow>
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    marginTop: "18px",
                    float: "right",
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                    }}
                    id={"cancelAbbreviationConfigureCode"}
                    className={"cancelBtn"}
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
                    onClick={saveCorporation}
                  >
                    Save
                  </CButton>{" "}
                </CCol>
              </CCol>
            </CRow>
            <CRow>
              <CCol style={{ fontSize: '1.15rem' }} md='12'>
                <i
                  id={"locationLibraryDelete"}
                  style={{
                    marginLeft: "5px",
                    color: "#e85654",
                    cursor: "pointer",
                  }}
                  className="fa fa-trash"
                ></i>
              </CCol>
            </CRow>
            <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
              <CDataTable
                items={userData}
                fields={fields}
                columnFilter
                tableFilter
                tableLabel={"List of Locations"}
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CRow>
                          <CCol style={{ fontSize: "1.15rem" }} md="12">
                          </CCol>
                        </CRow>
                      </td>
                    );
                  },
                  details: (item, index) => {},
                }}
              />
            </CRow>
          </div>
        )}
        {locationHide.cityLocation && (
          <div>
            <div style={{ marginLeft: "-26px" }}>
              <div className={"row-headerlabel"}>
                <span className={"header-label"}> Adding Location </span>
              </div>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    State
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"PoliticalState"}
                    placeholder={" State Name"}
                    value={location.state}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    District/City
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"PoliticalState"}
                    placeholder={" District/City Name"}
                    value={location.district}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Area
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"PoliticalArea"}
                    placeholder={" Area Name"}
                    value={location.arae}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className={"row-alignment"} md="12" sm="12" lg="12">
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Street
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    className={"input-align"}
                    id={"PoliticalStreet"}
                    placeholder={" Street Name"}
                    value={location.street}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
                <CCol className={"column-align"} md="3">
                  <CLabel className={"label-name"}>
                    Pincode
                    <span className={"text-danger"}>*</span>
                  </CLabel>
                  <CInput
                    type={"number"}
                    className={"input-align"}
                    id={"PoliticalPincode"}
                    placeholder={"Enter Pincode"}
                    value={location.pincode}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </CCol>
              </CRow>
            </div>
            <CRow>
              <CCol md="10">
                <CCol
                  md="5"
                  style={{
                    float: "right",
                  }}
                >
                  <CButton
                    style={{
                      float: "right",
                    }}
                    id={"cancelAbbreviationConfigureCode"}
                    className={"cancelBtn"}
                    onClick={cancelcityLocation}
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
                    onClick={cityLocation}
                  >
                    Save
                  </CButton>{" "}
                </CCol>
              </CCol>
            </CRow>
            <CRow style={{ padding: "4%", marginTop: "-3.5%" }}>
              <CDataTable
                items={userData}
                fields={fields}
                columnFilter
                tableFilter
                tableLabel={"List of Locations"}
                itemsPerPageSelect
                itemsPerPage={5}
                hover
                sorter
                pagination
                scopedSlots={{
                  show_details: (item, index) => {
                    return (
                      <td className="py-2">
                        <CRow>
                          <CCol style={{ fontSize: "1.15rem" }} md="12">
                          </CCol>
                        </CRow>
                      </td>
                    );
                  },
                  details: (item, index) => {},
                }}
              />
            </CRow>
          </div>
        )}
      </CCard>
        </div>
      )}
     
    </div>
  );
};

export default WingsofficeType;
