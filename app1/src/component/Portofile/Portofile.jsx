import React, { useState , useEffect } from "react";
import styles from './portofile.module.css' 
import Title from '../Title/Title';

const Portfolio = () => {

  document.title = "Portfolio";

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalImage("");
    setModalOpen(false);
  };


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);


  return (
    <>
      <div
        className="vh-100 d-flex justify-content-center align-items-center"
        style={{ width: "60%", margin: "auto" }}
      >
        <div className="container">
          <div className="row g-3 m-2" id="simg">
            <h2></h2>
            <Title title="portfolio component" color="black" className="text-center col-12" />

            <div
              className={`${styles.inner} inner col-md-6 col-lg-4`}
              onClick={() => openModal("./img/portfolio/port3.png")}
            >
              <img src="./img/portfolio/port3.png" alt="" className="w-100 border rounded" />
              <div className={`${styles.layer}`}>
                <div className={`${styles.plus}`}>
                  <i className="fa-solid fa-plus fa-2xl text-light"></i>
                </div>
              </div>
            </div>

            <div
              className={`${styles.inner} inner col-md-6 col-lg-4`}
              onClick={() => openModal("./img/portfolio/port2.png")}
            >
              <img src="./img/portfolio/port2.png" alt="" className="w-100 border rounded" />
              <div className={`${styles.layer} border rounded`}>
                <div className={`${styles.plus}`}>
                  <i className="fa-solid fa-plus fa-2xl text-light"></i>
                </div>
              </div>
            </div>

            <div
              className={`${styles.inner} inner col-md-6 col-lg-4`}
              onClick={() => openModal("./img/portfolio/poert1.png")}
            >
              <img src="./img/portfolio/poert1.png" alt="" className="w-100 border rounded" />
              <div className={`${styles.layer} border rounded`}>
                <div className={`${styles.plus}`}>
                  <i className="fa-solid fa-plus fa-2xl text-light"></i>
                </div>
              </div>
            </div>

            <div
              className={`${styles.inner} inner col-md-6 col-lg-4`}
              onClick={() => openModal("./img/portfolio/poert1.png")}
            >
              <img src="./img/portfolio/poert1.png" alt="" className="w-100 border rounded" />
              <div className={`${styles.layer} border rounded`}>
                <div className={`${styles.plus}`}>
                  <i className="fa-solid fa-plus fa-2xl text-light"></i>
                </div>
              </div>
            </div>

            <div
              className={`${styles.inner} inner col-md-6 col-lg-4`}
              onClick={() => openModal("./img/portfolio/port2.png")}
            >
              <img src="./img/portfolio/port2.png" alt="" className="w-100 border rounded" />
              <div className={`${styles.layer} border rounded`}>
                <div className={`${styles.plus}`}>
                  <i className="fa-solid fa-plus fa-2xl text-light"></i>
                </div>
              </div>
            </div>

            <div
              className={`${styles.inner} inner col-md-6 col-lg-4`}
              onClick={() => openModal("./img/portfolio/port3.png")}
            >
              <img src="./img/portfolio/port3.png" alt="" className="w-100 border rounded" />
              <div className={`${styles.layer}`}>
                <div className={`${styles.plus}`}>
                  <i className="fa-solid fa-plus fa-2xl text-light"></i>
                </div>
              </div>
            </div>

           
          </div>
        </div>

       
        {isModalOpen && (
          <div
            className={`${styles.lightbox} modal-overlay`}
            onClick={closeModal}
          >
            <div
              className={`${styles.imgw} modal-content`} style={{width:"50%", margin:"auto"}}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={modalImage} alt="Enlarged View"  style={{margin:"24% 0" , width:"485px"}} />
              {/* <button className="btn btn-danger mt-3" onClick={closeModal}>
                Close
              </button> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
