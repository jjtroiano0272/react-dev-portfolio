import Fade from 'react-reveal/Fade';

export default function About(params) {
  return (
    <div
      className='container-fluid text-center bg-about py-5 px-md-6'
      id='about'
    >
      <Fade top>
        <h1 className='mb-4'>ABOUT</h1>
      </Fade>
      <p className='text-muted'>
        After receiving my B.A. in 2015, I found few satisfactory work
        opportunities. I chose to return to school in pursuit of Math & Computer
        Science. As I progressed, I found I.T. most exquisitely intriguing and
        engaging.
        <br />
        <br />I was fortunate enough to get an I.T. internship at Gartner in
        Conneticut wherein I learned about Data Analysis, followed by another
        internship as an I.T. Technician. That internship turned into regular
        employment that I loved, which ended due to the pandemic.
        <br />
        <br />I took advantage of the downtime to work hard and self-educate in
        front-end development every day on a set, consistent schedule. This
        continues now, where I am practicing my skill, improving, and learning
        daily.
        <br />
        <br />
        My hope is now to find a job with a solid company where I can contribute
        to its success every day I'm there, and become an ever-stronger
        developer.
        <br />
        <br />
        <strong>
          You've got challenges that must be overcome for your business. I've
          got the discipline to solve those problems as part of your team.
        </strong>
      </p>
    </div>
  );
}
