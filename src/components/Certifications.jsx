export default function Certifications(params) {
  return (
    // Certifications section
    // TODO: Card layout
    <div
      className='container-fluid text-center py-5'
      id='section-certifications'
    >
      <h2
        className='text-header text-dark mb-5'
        style={{ letterSpacing: '5px' }}
      >
        CERTIFICATIONS
      </h2>

      <div className='card' style={{ width: '100%' }}>
        <div className='row no-gutters align-items-center'>
          <div className='col-5 col-sm-5'>
            <img
              className='card-img'
              src='https://images.credly.com/images/68468004-5a85-4f3b-bc58-590773979486/AWS-CloudPractitioner-2020.png'
              alt='AWS Cloud Certified Professional'
            />
          </div>
          <div className='col-7 col-sm-7'>
            <div className='card-body'>
              <h5 className='card-title'>
                Amazon Web Services Certified Cloud Practitioner
              </h5>
              <hr />
              <p className='card-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                eaque.
              </p>
            </div>
          </div>
        </div>
        <div className='row no-gutters align-items-center'>
          <div className='col-5 col-sm-5'>
            <img
              className='card-img'
              src='https://education.oracle.com/file/general/Oracle-Certification-badge_OC-JuniorAssociate.png'
              alt='Oracle Certified Junior Associate'
            />
          </div>
          <div className='col-7 col-sm-7'>
            <div className='card-body'>
              <h5 className='card-title'>Oracle 808 SE</h5>
              <hr />
              <p className='card-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                eaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
