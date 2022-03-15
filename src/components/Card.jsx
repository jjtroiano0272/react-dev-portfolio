import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Stack, Button } from '@mui/material';
import { nanoid } from 'nanoid';

export default function Card({
  id = nanoid(),
  question,
  incorrect_answers,
  correct_answer,
}) {
  const choices = incorrect_answers.concat(correct_answer);
  const [userData, setUserData] = useState({
    numQuestions: 0,
  });
  const [selected, setSelected] = useState(false);

  return (
    // <li
    //   data-target='#carouselExampleIndicators'
    //   data-slide-to={id}
    //   // className={id === 1 && 'active'}
    // >
    <div className='card bg-light text-dark mb-3 my-5 mx-4'>
      {/* <div className='card-badge bg-light text-dark'>{badgeText}</div> */}

      {/* FIXME:  */}
      <div className='card-body'>
        <h5
          className='card-title d-flex mb-4'
          dangerouslySetInnerHTML={{ __html: question }}
        />

        <Stack spacing={2} direction='column'>
          {/* If selected, variant is 'contained' */}

          {randomizeChoices(choices).map(choice => (
            <Button variant='outlined' onClick={() => selectChoice(choice)}>
              {choice}
            </Button>
          ))}
        </Stack>
      </div>
    </div>
    // </li>
  );
}
