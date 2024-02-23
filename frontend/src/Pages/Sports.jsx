import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Sports = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const fetchrenderData = async () => {
    setLoading(true);
    try {
      console.log("inside the code");
      let res = await fetch("https://red-powerful-snail.cyclic.app/sports");
      let data = await res.json();
      console.log(data);
      setLoading(false);
      setData(data);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchrenderData();
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <Heading>Loding...</Heading>;
  }

  if (error) {
    return <Heading>Error...</Heading>;
  }

  const imageUrls = [
    "https://tpc.googlesyndication.com/simgad/3097565753563870602",
    "https://tpc.googlesyndication.com/simgad/11091305278669055198",
    "https://tpc.googlesyndication.com/simgad/13260095702844627264",
  ];
  return (
    <>
      <Navbar />
      <div style={{ width: "88%", margin: "auto" }}>
        {/* ADVERTISEMENT */}
        <Card align="center">
          <CardBody>
            <Heading size="sm" style={{ textAlign: "right" }}>
              {" "}
              ADVERTISEMENT
            </Heading>
            <Image src="https://tpc.googlesyndication.com/simgad/8335675371530722078" />
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        {/* GENERAL SECTION */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", gap: "10px", width: "30%" }}>
            <Card style={{ flex: "1" }}>
              <CardBody>
                <Image
                  style={{ width: "100%", height: "60%" }}
                  src="https://timesofindia.indiatimes.com/photo/msid-107860103,imgsize-62192.cms"
                />
                <br></br>
                <Heading size="md">
                  Anushka Sharma and Virat Kohli celebrate the arrival of baby
                  boy Akaay: 'With abundant happiness..
                </Heading>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2%",
              width: "50%",
              justifyContent: "center",
            }}
          >
            {data?.map((ele, i) => {
              if (ele.category === "top-news") {
                if (i !== 0) {
                  return (
                    <Card
                      style={{
                        flexBasis: "calc(45.333% - 1px)",
                        width: "100%",
                      }}
                      key={ele.id}
                    >
                      <CardBody>
                        <Image
                          objectFit="cover"
                          style={{ width: "100%" }}
                          src={ele.urlToImage}
                          alt="Chakra UI"
                        />
                        <br></br>
                        <h4 style={{ fontWeight: "bold" }}>{ele.title}</h4>
                      </CardBody>
                    </Card>
                  );
                }
              }
            })}
          </div>
          <Card style={{ width: "25%" }}>
            ADVERTISEMENT
            <br></br>
            <Image
              objectFit="cover"
              src={imageUrls[imageIndex]}
              alt="Chakra UI"
            />
          </Card>
        </div>

        {/* Cricket Section*/}

        <br></br>
        <Heading
          as="h6"
          style={{ color: "black", marginTop: "2.5%", marginBottom: "2%" }}
        >
          Cricket
        </Heading>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "6px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", gap: "6px", width: "30%" }}>
            <Card style={{ flex: "1" }}>
              <CardBody>
                <Image
                  style={{ width: "100%", height: "60%" }}
                  src="https://www.hindustantimes.com/ht-img/img/2024/02/20/1600x900/PTI02-18-2024-000189B-0_1708447208749_1708447239579.jpg"
                />
                <br></br>
                <Heading size="md">
                  Jasprit Bumrah released from squad; KL Rahul ruled out of 4th
                  England Test - Hindustan Times
                </Heading>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              width: "50%",
              justifyContent: "center",
            }}
          >
            {data?.map((ele, i) => {
              if (ele.category === "cricket") {
                if (i !== 0 && i < 9) {
                  console.log(i);
                  return (
                    <Card
                      style={{
                        flexBasis: "calc(48.333% - 1px)",
                        width: "100%",
                      }}
                      key={ele.id}
                    >
                      <CardBody>
                        <Image
                          objectFit="cover"
                          style={{ width: "100%" }}
                          src={ele.urlToImage}
                          alt="Chakra UI"
                        />
                        <br></br>
                        <h4 style={{ fontWeight: "bold" }}>{ele.title}</h4>
                      </CardBody>
                    </Card>
                  );
                }
              }
            })}
          </div>
          <div style={{ gap: "5px", width: "22%" }}>
            <Card
              style={{ flexBasis: "calc(12.333% - 2px)", marginBottom: "4%" }}
            >
              <CardBody>
                <Image
                  objectFit="cover"
                  src="https://ichef.bbci.co.uk/news/1024/branded_news/129DC/production/_132425267_gettyimages-1495969032-594x594.jpg"
                  alt="Chakra UI"
                />
                <br></br>
                <h4 style={{ fontWeight: "bold" }}>
                  The spin maestro who defied odds to reach 500 wickets india
                  all test match in cricket for series
                </h4>
              </CardBody>
            </Card>
            <Card style={{ flexBasis: "calc(45.333% - 2px)" }}>
              <CardBody>
                <Image src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/DDB3/production/_132555765_p0h950yb.jpg" />
                <br></br>
                <h4 style={{ fontWeight: "bold" }}>
                  {" "}
                  Bazball' more than just attacking cricket - Dravid
                </h4>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </div>
        </div>
        {/* More top stories */}
        {/* <Heading as="h6" style={{ color: "black", marginTop: "2.5%" }}>
          More top stories
        </Heading>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", gap: "10px", width: "30%" }}>
            <Card style={{ flex: "1" }}>
              <CardBody>
                <Image
                  style={{ width: "100%", height: "60%" }}
                  src="https://timesofindia.indiatimes.com/photo/msid-107860103,imgsize-62192.cms"
                />
                <br></br>
                <Heading size="md">
                  Anushka Sharma and Virat Kohli celebrate the arrival of baby
                  boy Akaay: 'With abundant happiness..
                </Heading>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2%",
              width: "50%",
              justifyContent: "center",
            }}
          >
            {data?.map((ele, i) => {
              if (ele.category === "top-news") {
                if (i !== 0) {
                  return (
                    <Card
                      style={{
                        flexBasis: "calc(45.333% - 1px)",
                        width: "100%",
                      }}
                      key={ele.id}
                    >
                      <CardBody>
                        <Image
                          objectFit="cover"
                          style={{ width: "100%" }}
                          src={ele.urlToImage}
                          alt="Chakra UI"
                        />
                        <br></br>
                        <h4 style={{ fontWeight: "bold" }}>{ele.title}</h4>
                      </CardBody>
                    </Card>
                  );
                }
              }
            })}
          </div>
          <Card style={{ width: "25%" }}>
            ADVERTISEMENT
            <br></br>
            <Image
              objectFit="cover"
              src={imageUrls[imageIndex]}
              alt="Chakra UI"
            />
          </Card>
        </div> */}

        {/* FootBall */}
        <br></br>
        <Heading
          as="h6"
          style={{ color: "black", marginTop: "2.5%", marginBottom: "2%" }}
        >
          FootBall
        </Heading>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "6px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {data?.map((ele, i) => {
              if (ele.category === "football") {
                return (
                  <Card
                    style={{ flexBasis: "calc(23.333% - 1px)", width: "100%" }}
                    key={ele.id}
                  >
                    <CardBody>
                      <Image
                        objectFit="cover"
                        style={{ width: "100%" }}
                        src={ele.urlToImage}
                        alt="Chakra UI"
                      />
                      <br></br>
                      <h4 style={{ fontWeight: "bold" }}>{ele.title}</h4>
                    </CardBody>
                  </Card>
                );
              }
            })}
          </div>
          {/* <div style={{  gap: '5px', width:'22%' }}>
            <Card style={{ flexBasis: 'calc(12.333% - 2px)', marginBottom:'4%'}}>
              <CardBody>
                <Image
            objectFit='cover'
            src='https://ichef.bbci.co.uk/news/1024/branded_news/129DC/production/_132425267_gettyimages-1495969032-594x594.jpg'
              alt='Chakra UI'
              /> 
              <br></br>
              <h4 style={{fontWeight:'bold'}}>The spin maestro who defied odds to reach 500 wickets india all test match in cricket for series</h4>
              </CardBody>
            </Card>
            <Card style={{ flexBasis: 'calc(45.333% - 2px)' }}>
              <CardBody>
              <Image src='https://ichef.bbci.co.uk/news/1024/cpsprodpb/DDB3/production/_132555765_p0h950yb.jpg'/>
              <br></br>
              <h4 style={{fontWeight:'bold'}}> Bazball' more than just attacking cricket - Dravid</h4>
              </CardBody>
              <CardFooter></CardFooter>
              </Card>

          </div>  */}
        </div>
      </div>
    </>
  );
};

export default Sports;
