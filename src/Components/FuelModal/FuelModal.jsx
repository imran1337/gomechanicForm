import React, { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { IsShowDivThree, IsShowDivTwo } from "../../App";

const FuelModal = ({
  onHide,
  show,
  carFuel,
  setCarFuelName,
  setFuelModalShow,
}) => {
  const [showDivThree, setShowDivThree] = useContext(IsShowDivThree);
  const [showDivTwo, setShowDivTwo] = useContext(IsShowDivTwo);
  return (
    <>
      {showDivThree && (
        <section>
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
                    setShowDivThree(false);
                    setShowDivTwo(true);
                  }}
                >
                  Back
                </Button>{" "}
                Select Fuel Type
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ overflowY: "scroll", height: "500px" }}>
              <Form.Control placeholder="Search Fuel Type" />
              <div className="row">
                {carFuel &&
                  carFuel?.map((data) => {
                    const { id, name } = data;
                    return (
                      <div
                        className="col-4 text-center mt-4"
                        key={id}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setCarFuelName(name);
                          setFuelModalShow(false);
                        }}
                      >
                        <img
                          src={`https://gomechanic.in/icons/fuel/${name.toUpperCase()}.svg`}
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
        </section>
      )}
    </>
  );
};

export default FuelModal;
