import Fade from 'react-reveal/Fade';

export default function Certifications() {
  return (
    <div
      className='container-fluid text-center py-5 px-lg-6'
      id='section-certifications'
    >
      <Fade bottom>
        <h1
          className='text-uppercase text-dark mb-5'
          style={{ fontSize: 'calc(2.3rem + 1.5vw)' }}
        >
          Certifications
        </h1>
      </Fade>

      <Fade right>
        <div className='card mb-5' style={{ width: '100%' }}>
          <div className='row no-gutters align-items-center'>
            <div className='col-12 col-sm-5'>
              <img
                className='card-img p-5'
                src='https://images.credly.com/images/68468004-5a85-4f3b-bc58-590773979486/AWS-CloudPractitioner-2020.png'
                alt='AWS Cloud Certified Professional'
              />
            </div>
            <div className='col-12 col-sm-7'>
              <div className='card-body'>
                <h3 className='card-title'>
                  Amazon Web Services Certified Cloud Practitioner
                </h3>
                <hr />
                <p className='card-text'>
                  This credential helps organizations identify and develop
                  talent with critical knowledge related to implementing cloud
                  initiatives. Earning AWS Certified Cloud Practitioner
                  validates cloud fluency and foundational AWS knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Fade right>
        <div className='card' style={{ width: '100%' }}>
          <div className='row no-gutters align-items-center'>
            <div className='col-12 col-sm-5'>
              <img
                className='card-img p-5'
                src='https://education.oracle.com/file/general/Oracle-Certification-badge_OC-JuniorAssociate.png'
                alt='Oracle Certified Junior Associate'
              />
            </div>
            <div className='col-12 col-sm-7'>
              <div className='card-body'>
                <h3 className='card-title'>
                  Oracle Java SE 8 Programmer I (1Z0-808)
                </h3>
                <hr />
                <p className='card-text'>
                  Demonstrates: Java basics, working with data types, using
                  operators and decision constructs, creating and using arrays,
                  using loop constructs, working with methods, encapsulation &
                  inheritance, handling exceptions, working with the Java API,
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
