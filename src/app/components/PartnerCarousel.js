import React from "react";
import { Carousel } from "react-bootstrap";

export function PartnerCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/path/to/partner1-logo.png"
          alt="Partner 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/path/to/partner2-logo.png"
          alt="Partner 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/path/to/partner3-logo.png"
          alt="Partner 3"
        />
      </Carousel.Item>
    </Carousel>
  );
}
