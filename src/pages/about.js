import React from 'react';

import pic1 from '../images/pic01.jpg';
import pic2 from '../images/pic02.jpg';
import pic11 from '../images/pic11.JPG';
import pic12 from '../images/pic12.JPG';
import pic9 from '../images/pic09.JPG';

import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const About = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Una historia para el registro del Kimche</h1>
          <section id="kimche" className="kimche">
            <div className="row">
              <div className="col">
                <h3>
                  El término KIMCHE, en la lengua mapuzungun proviene de la
                  raíz:
                </h3>
                <ul>
                  <li>
                    KIM del verbo kimün que significa o se traduce como saber,
                    aprender,sentir.
                  </li>
                  <li>CHE que significa gente.</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <span className="image fit">
                <img src={pic2} alt="" />
              </span>
            </div>
            <div className="row">
              <div className="col">
                <b>
                  Por lo tanto, kimche significa persona sabia, persona que
                  tiene el kimün (conocimiento).
                </b>
              </div>
            </div>
          </section>
          <hr />
          <section>
            <div className="row">
              <div className="row">
                <div className='col-12'>
                <h2>Experiencia:</h2>
                </div>
                <div className="col-12-medium col-6">
                  <p>
                    Nuestro equipo fundador posee experiencia con entidades
                    empresariales del sector público cómo privado. Corporaciones
                    a nivel intercontinental.
                  </p>
                </div>
                <div className="col-12-medium col-6">
                  <span className="image fit">
                    <img src={pic9} alt="" />
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-12-medium col-6">
                  <span className="image fit">
                    <img src={pic12} alt="" />
                  </span>
                </div>
                <div className="col-12-medium col-6">
                  <p>
                    Por ello, el grupo fue invitado a la institución Inacap,
                    junto a Huawei y Switch, a hablar del futuro de la
                    humanidad.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <hr/>
          <section>
          <div className="row">
            <div className='row'>
            <div className='col-12'>
                <h2>                  A ser una sociedad con visión de miles de años transmitidos:</h2>
                </div>
            </div>
              <div className="row">
                <div className="col-12-medium col-6">
                  <p>
                  Los proyectos, metas, milestones o contratos son
                  logrados con honor y gloria.
                  </p>
                </div>
                <div className="col-12-medium col-6">
                  <span className="image fit">
                    <img src={pic11} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section>
          <div className='row aln-center'>
            <div className=" col-12-medium">
                <span className="image fit">
                  <img src={pic1} alt="" />
                </span>
              </div>
           </div>
          </section>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default About;
