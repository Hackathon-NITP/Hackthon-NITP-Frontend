import React from "react";
import './faq.scss';
import faqImg from '../../assets/img/5.png';

const Faq = () => {
  return (
    <>
      <div id="first-div"
        className="container-fluid"
      >
        <h1>
          Which Vaccines are Available?
        </h1>
        <br />
        <div>
          <div className="row">
            <div
              className="col-lg-3 col-md-6 col-sm-12 vaccine-card"
            >
              <div className="card">
                <div className="card-header">Covaxin</div>       
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Manufactured by Bharat Biotech
                  </li>
                  <li className="list-group-item">2 Doses</li>
                  <li className="list-group-item">4-6 Weeks Gap</li>
                  <li className="list-group-item">Efficacy: 81%</li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 vaccine-card"
            >
              <div className="card">
                <div className="card-header">CoviShield</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Manufactured by Serum Institute of India
                  </li>
                  <li className="list-group-item">2 Doses</li>
                  <li className="list-group-item">12 Weeks Gap</li>
                  <li className="list-group-item">Efficacy: 90%</li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 vaccine-card"
            >
              <div className="card">
                <div className="card-header">Sputnik-V</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Manufactured by Stelis Biopharma
                  </li>
                  <li className="list-group-item">2 Doses</li>
                  <li className="list-group-item">3 Weeks Gap</li>
                  <li className="list-group-item">Efficacy: 93.5%</li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 vaccine-card"
            >
              <div className="card">
                <div className="card-header">Zy-Cov-D</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Developed by ICMR & Department of Biotechnology
                  </li>
                  <li className="list-group-item">3 Doses</li>
                  <li className="list-group-item">4 Weeks Gap Each</li>
                  <li className="list-group-item">Efficacy: 67%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="second-div">
        <h1>
          Remove mask once you've taken both shots
        </h1>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 image-container-div">
            <img src={faqImg} alt="" />
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 text-container-div"
          >
            <div>
              <p>
                Sorry, You have to still wear masks! Why?<br />Taking vaccine
                doesn't mean that you're now safe from Covid-19 and wont be
                affected by it.<br />The work of vaccine is just to prevent
                strong complexities of Covid-19 and to prevent you from being
                admitted to hospital even if you get Coronavirus.<br />x% of
                vaccine efficacy means that in a vaccinated population, x% fewer
                people will contract the disease when they come in contact with
                virus.
              </p>
            </div>
            <div>
              <a
                href="https://www.who.int/news-room/feature-stories/detail/vaccine-efficacy-effectiveness-and-protection"
                className="btn"
                >More Info!</a
              >
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        id="third-div"
      >
        <h1 style={{textAlign: "center", paddingBottom: "2%"}}>
          Common Questions on Vaccines
        </h1>
        <div className="row" style={{padding: "3vh 2.5vh 0"}}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <p>
                  <b>Ques.</b> Will Vaccines provide long term protection?
                  <br /><b>Ans.</b> Research is ongoing to answer this question.
                  However, it’s encouraging that available data suggest that
                  most people who recover from COVID-19 develop an immune
                  response that provides at least some period of protection
                  against reinfection
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <p>
                  <b>Ques.</b>Will other vaccines help protect me from COVID-19?
                  <br /><b>Ans.</b> Currently, there is no evidence that any
                  other vaccines, apart from those specifically designed for the
                  SARS-Cov-2 virus, will protect against COVID-19.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <p>
                  <b>Ques.</b>Who should get the COVID-19 vaccines? <br /><b
                    >Ans.</b
                  >The COVID-19 vaccines are safe for most people 18 years and
                  older, including those with pre-existing conditions of any
                  kind, including auto-immune disorders.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <p>
                  <b>Ques.</b>Do vaccines protect against varients? <br /><b
                    >Ans.</b
                  >More studies are needed to assess the effectiveness of the
                  current COVID vaccines against the variants.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <p>
                  <b>Ques.</b>Should I get vaccine if I was infected by
                  COVID-19? <br /><b>Ans.</b>Even if you have already had
                  COVID-19, you should be vaccinated when it is offered to you
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <p>
                  <b>Ques.</b>Is the vaccine working even if I'm not
                  experiencing any mild side effects like fever etc? <br /><b
                    >Ans.</b
                  >You do not have to have side effects in order to be
                  protected.
                </p>
              </div>
            </div>
          </div>

          <div>
            <a
              href="https://www.who.int/news-room/q-a-detail/coronavirus-disease-(covid-19)-vaccines?adgroupsurvey={adgroupsurvey}&gclid=Cj0KCQjw1ouKBhC5ARIsAHXNMI9oP5puAXwADFYKEVGenvWfqffT19nrV1tes3q9M126vxk6XIuekggaAoe2EALw_wcB"
              className="btn"
              >More Questions?</a
            >
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        id="fourth-div"
      >
        <h1 style={{textAlign: "center", paddingBottom: "2%"}}>
          FAQ's about MediVault
        </h1>
        <div className="row" style={{padding: "3vh 2.5vh 0"}}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
              <p>
                  <b>Ques.</b> What is maximum number of files that can be one person can stories? 
                  <br /><b>Ans.</b> User can upload and store unlimited files on MediVault. 
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <p>
                  <b>Ques.</b>In which format the reports have to be uploaded and what is maximum file size of report?
                  <br /><b>Ans.</b> You have to upload reports in PDF format with file size of maximum 5MB.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <p>
                  <b>Ques.</b>What is advantage of using MediVault? <br /><b
                    >Ans.</b
                  >You would not have to carry your medical reports to a doctor whenever you <br /> visit them. Moreover we will keep all your reports organised so that you can find  <br /> the report you are looking for easily.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <p>
                  <b>Ques.</b>Are our medical reports kept safe?  <br /><b
                    >Ans.</b
                  >We care about privacy of your medical reports thus your medical reports are kept safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Faq