import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SectionGallery() {
  return (
    <>
      {/* <div class="grid md:grid-rows-3 grid-flow-col gap-4 sm:gap-1">
        <div class=" md:row-span-3 bg-slate-500 ...">01</div>
        <div class="col-span-2 bg-slate-500 ...">02</div>
        <div class="row-span-2 col-span-2  bg-slate-500 ...">03</div>
      </div> */}
      <div className="md:flex grid  md:py-10 md:px-3 md:gap-10 ">
        <Card className="text-center">
          <Card.Header>Disfruta</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Header>Comparte</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Header>Vive</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card> 
      </div>
    </>
  );
}

export default SectionGallery;
