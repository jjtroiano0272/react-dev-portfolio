export default function Certifications(params) {
  return (
    // Certifications section
    // TODO: Card layout
    <div
      className='container-fluid text-center py-5'
      id='section-certifications'
    >
      <h2 className='text-header text-dark' style={{ letterSpacing: '5px' }}>
        CERTIFICATIONS
      </h2>
      <ul className='col-xs-12 py-5' style={{ listStyleType: 'none' }}>
        <li>
          <img
            className='cert-badge'
            src='https://images.credly.com/images/68468004-5a85-4f3b-bc58-590773979486/AWS-CloudPractitioner-2020.png'
            alt='AWS Cloud Certified Professional'
          />
        </li>
        <li>
          <img
            className='cert-badge'
            src='https://education.oracle.com/file/general/Oracle-Certification-badge_OC-JuniorAssociate.png'
            alt='Oracle Certified Junior Associate'
          />
        </li>
      </ul>
    </div>
  );
}
