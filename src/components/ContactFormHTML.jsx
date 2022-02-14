import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import HeadShake from 'react-reveal/HeadShake';

export default function ContactFormHTML() {
  const [showErr, setShowErr] = useState(false);
  const handleClick = () => {
    console.log('hello');
    setShowErr(!showErr);
  };

  return (
    <div
      className='container-fluid text-center bg-color-4 py-5 px-md-6'
      id='contact'
    >
      <h1 className='text-uppercase text-light mb-4'>Contact</h1>
      <form
        className='needs-validation justify-content-center'
        action='https://formsubmit.co/3331d9ed3cc3ff1b9969a4df8824cd34'
        method='POST'
        id='formID'
      >
        <div className='row form-row'>
          <div className='col-12 col-sm-12 col-md-6 mb-3'>
            <div className='input-group'>
              <input
                type='email'
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

          <div className='col-12 col-sm-12 col-md-6 mb-3'>
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
        </div>

        <div className='form-row text-center'>
          <div className='col-md-12'>
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

        <HeadShake when={showErr}>
          <button
            className='col-md-12 btn btn-primary rounded mt-5'
            type='submit'
          >
            <SendIcon style={{ width: '4rem', margin: '.5em' }} />
          </button>
        </HeadShake>
      </form>
    </div>
  );
}
