export default function ContactFormHTML() {
  return (
    <div
      className='container-fluid text-center bg-color-quaternary py-5'
      id='section-contact'
    >
      <h2 className='section-title text-light'>Contact</h2>
      <form
        className='needs-validation justify-content-center'
        action='https://formsubmit.co/3331d9ed3cc3ff1b9969a4df8824cd34'
        method='POST'
      >
        <div className='form-row'>
          <div className='col-md-4 mb-3'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                id='validationTooltipEmail'
                placeholder='Email'
                aria-describedby='validationTooltipEmailPrepend'
                name='emailAddress'
                required
              />
              <div className='invalid-tooltip'>
                Please choose a unique and valid email address.
              </div>
            </div>
          </div>
        </div>

        <div className='form-row text-center'>
          <div className='col-md-6 mb-3'>
            <input
              type='text'
              className='form-control'
              id='validationTooltip03'
              placeholder='Name'
              name='username'
              required
            />
            <div className='invalid-tooltip'>Please provide a valid Name.</div>
          </div>

          <div className='col-md-3 mb-3'>
            {/* <input
            type='text'
            className='form-control'
            id='validationTooltip04'
            rows='4'
            placeholder='Message'
            name='message'
            required
          /> */}
            <textarea
              className='form-control'
              id='form4Example3'
              rows='8'
              name='message'
              placeholder='Message'
              required
            ></textarea>

            <div className='invalid-tooltip'>
              Please provide a message to send.
            </div>
          </div>
        </div>
        <button className='btn btn-primary' type='submit'>
          Submit form
        </button>
      </form>
    </div>
  );
}
