import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { IsShowDivThree, IsShowDivTwo } from "../../App";
import FuelModal from "../FuelModal/FuelModal";

const CarInfoModal = ({
  onHide,
  show,
  carData,
  setCarModelName,
  setCarFuelName,
  setShowDiv,
}) => {
  const [carFuel, setCarFuel] = useState([]);

  const [fuelModalShow, setFuelModalShow] = useState(false);

  const [showDivTwo, setShowDivTwo] = useContext(IsShowDivTwo);
  const [showDivThree, setShowDivThree] = useContext(IsShowDivThree);
  console.log({ showDivTwo });
  return (
    <section>
      {showDivTwo && (
        <Modal
          onHide={onHide}
          show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <Button
                onClick={() => {
                  setShowDiv(true);
                  setShowDivTwo(false);
                }}
              >
                Back
              </Button>{" "}
              Select Model
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ overflowY: "scroll", height: "500px" }}>
            <Form.Control placeholder="Search Models" />
            <div className="row">
              {carData &&
                carData?.data &&
                carData?.data.map((data) => {
                  const { id, name, thumbnail, fuel } = data;
                  return (
                    <div
                      className="col-4 text-center mt-4"
                      key={id}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCarModelName(name);
                        setCarFuel(fuel);
                        setFuelModalShow(true);
                        setShowDivThree(true);
                        setShowDivTwo(false);
                      }}
                    >
                      <img
                        src={thumbnail}
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
      )}
      <FuelModal
        show={fuelModalShow}
        onHide={() => setFuelModalShow(false)}
        carFuel={carFuel}
        setCarFuelName={setCarFuelName}
        setFuelModalShow={setFuelModalShow}
      />
    </section>
  );
};

export default CarInfoModal;
