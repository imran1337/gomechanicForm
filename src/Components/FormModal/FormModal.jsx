import React, { useContext, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import CarInfoModal from "../CarInfoModal/CarInfoModal";
// api https://gomechanic.app/api/v2/oauth/vehicles/get_models_by_brand/?brand_id=7
import { vehicleData } from "./../../utilites/CarData";
import { IsShowDiv, IsShowDivTwo } from "./../../App";

const FormModal = ({
  onHide,
  show,
  setCarName,
  setCarData,
  carData,
  setCarModelName,
  setCarFuelName,
}) => {
  /**
   * Used for 2nd modal
   */
  const [modalShow, setModalShow] = useState(false);

  const [showDiv, setShowDiv] = useContext(IsShowDiv);
  const [showDivTwo, setShowDivTwo] = useContext(IsShowDivTwo);
  const getCarData = (carId) => {
    fetch(
      `https://gomechanic.app/api/v2/oauth/vehicles/get_models_by_brand/?brand_id=${carId}`
    )
      .then((res) => res.json())
      .then((data) => setCarData(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {showDiv && (
        <>
          <Modal
            onHide={onHide}
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Select Manufacturer
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ overflowY: "scroll", height: "500px" }}>
              <Form.Control placeholder="Search Brands" />
              <div className="row">
                {vehicleData.map((data) => {
                  const { id, img, name } = data;
                  return (
                    <div
                      className="col-4 text-center mt-4"
                      key={id}
                      onClick={() => {
                        setCarName("");
                        setCarModelName("");
                        setCarFuelName("");
                        setCarName(name);
                        setCarData({});
                        getCarData(id);
                        setModalShow(true);
                        setShowDiv(false);
                        setShowDivTwo(true);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={img}
                        alt="pic"
                        className="img-fluid"
                        style={{
                          width: "88px",
                          height: "60px",
                          objectFit: "contain",
                        }}
                      />
                      <p>{name}</p>
                    </div>
                  );
                })}
              </div>
            </Modal.Body>
          </Modal>
        </>
      )}
      <CarInfoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        carData={carData}
        setCarModelName={setCarModelName}
        setCarFuelName={setCarFuelName}
        setShowDiv={setShowDiv}
      />
    </>
  );
};

export default FormModal;
