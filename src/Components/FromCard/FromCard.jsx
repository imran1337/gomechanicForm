import React, { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import FormModal from "../FormModal/FormModal";
import { IsShowDiv } from "./../../App";

const FromCard = () => {
  const [modalShow, setModalShow] = useState(false);
  const [carName, setCarName] = useState("");
  const [carModelName, setCarModelName] = useState("");
  const [carFuelName, setCarFuelName] = useState("");
  const [carData, setCarData] = useState({});
  const [showDiv, setShowDiv] = useContext(IsShowDiv);

  return (
    <>
      <Card className="p-5" style={{ maxWidth: "30rem" }}>
        <Card.Body>
          <Card.Title>Experience The Best Car Services In Gurgaon</Card.Title>
          <Card.Text>
            <p>Get instant quotes for your service</p>
          </Card.Text>
          <Card.Text>
            <Form>
              <Form.Control
                className="p-2 from_style"
                placeholder={`${carName || "Select your car"} ${carModelName} ${
                  carFuelName && `, ${carFuelName}`
                }`}
                onClick={() => {
                  setModalShow(true);
                  setShowDiv(true);
                }}
              />
              <Button variant="danger" className="w-100 mt-3">
                CHECK PRICES FOR FREE
              </Button>
            </Form>
          </Card.Text>
          <div className="row align-items-center justify-content-center">
            <div className="col-6 text-center">
              <h4>
                <img
                  src="https://gomechanic.in/assets/img/customerpage/formIcons/star_rating.png"
                  alt="star"
                />
                4.7/5
              </h4>
              <p>
                <small>Based on 17000+ Reviews</small>
              </p>
            </div>
            <div className="col-6 text-center">
              <h4>2,50,000+</h4>
              <p>
                <small>Happy Customers</small>
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
      <FormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setCarName={setCarName}
        setCarData={setCarData}
        carData={carData}
        setCarModelName={setCarModelName}
        setCarFuelName={setCarFuelName}
      />
    </>
  );
};

export default FromCard;
