import React, { Component } from "react";
import { Container, UncontrolledCarousel, Row, Col, Card } from "reactstrap";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let items = [
      {
        creador: "Zime",
        src:
          "https://firebasestorage.googleapis.com/v0/b/zims-design.appspot.com/o/ZD01.jpg?alt=media&token=6e566d3b-b442-4e0f-9d1b-f074ec098bb5",
        header: "Camiseta BB-8",
        altText: "Camiseta BB-8",
      },
      {
        creador: "Zime",
        src:
          "https://firebasestorage.googleapis.com/v0/b/zims-design.appspot.com/o/ZD02.jpg?alt=media&token=4b888e42-eae5-45cb-a497-504145ec3023",
        header: "Camiseta Sirena",
        altText: "Camiseta Sirena",
      },
      {
        creador: "Zime",
        src:
          "https://firebasestorage.googleapis.com/v0/b/zims-design.appspot.com/o/ZD03.jpg?alt=media&token=9d2817bf-00a2-4fdc-9991-6e330ac7823d",
        header: "Camiseta Girasoles",
        altText: "Camiseta Girasoles",
      },
      {
        creador: "Zime",
        src:
          "https://firebasestorage.googleapis.com/v0/b/zims-design.appspot.com/o/ZD04.jpg?alt=media&token=b1790844-5144-4d79-89a9-c61636dedbff",
        header: "Camiseta Beernes",
        altText: "Camiseta Beernes",
      },
      {
        creador: "Zime",
        src:
          "https://firebasestorage.googleapis.com/v0/b/zims-design.appspot.com/o/ZD05.jpg?alt=media&token=00788f34-1232-4c9d-8628-68585a5e9847",
        header: "Camiseta Alien",
        altText: "Camiseta Alien",
      },
    ];
    return (
      <Container fluid>
        <Card>
          <Row>
            <Col sm="8">
              <h4>Lorem</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed elementum nibh.
                Fusce sagittis turpis malesuada posuere facilisis. Aliquam erat volutpat. Proin
                vitae venenatis elit. Pellentesque eget risus iaculis, mollis tortor a, consequat
                dolor. Phasellus ac neque pulvinar felis tristique facilisis. In neque lorem,
                imperdiet in volutpat nec, ultricies eu tellus. Maecenas ultrices feugiat tristique.
                Maecenas condimentum cursus risus vel posuere. Integer nulla risus, vestibulum
                ultrices purus sed, dictum vestibulum ex. Pellentesque sed augue sit amet felis
                auctor eleifend. Quisque pharetra luctus nunc. Curabitur cursus semper pretium.
                Vivamus in risus nec tellus vehicula interdum. Suspendisse lobortis maximus
                consectetur. Proin non magna eros.
              </p>
            </Col>
            <Col sm="4">
              <UncontrolledCarousel items={items} />
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}

export default Home;
