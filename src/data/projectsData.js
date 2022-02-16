import { nanoid } from 'nanoid';

const projectsData = [
  {
    id: 'wordleClone',
    title: 'Wordle-variant',
    description: `A variant on Wordle. In development. What it will fully be is yet undetermined. I'm anticipating making a multilingual wordle.`,
    language: 'React',
    url: 'https://gwordle-jjt.netlify.app/',
    git: 'https://github.com/jjtroiano0272/react-wordle-clone',
    imgSrc: 'gwordle-light.png',
    altText: 'Screenshot of a Wordle Clone.',
    draft: true,
  },
  {
    id: 'triviaApp',
    title: 'RESTful API Trivia',
    description:
      'Test your trivia knowledge by pulling random questions from the OpenTrivia API!',
    language: 'React',
    url: 'https://react-trivia-app-jjt.netlify.app',
    git: 'https://github.com/jjtroiano0272/react-quiz-app',
    imgSrc: 'trivia-app-light.png',
    altText: 'Screenshot of a trivia app',
  },
  {
    id: 'tenziesApp',
    title: 'Tenzies: The Dice Game',
    description: `If you've played Yahtzee, you're already familiar with how to play! Roll dice and choose which to hold on to until they all match.`,
    language: 'React',
    url: 'https://react-tenzies-app.netlify.app',
    git: 'https://github.com/jjtroiano0272/react-tenzies-app',
    imgSrc: 'tenzies-app-light.png',
    altText:
      'Tenzies: the dice game where you hold dice constant and roll until they all match.',
  },
  {
    id: 'notesApp',
    title: 'Notes MarkDown Editor',
    description: `An in-browser MDE that lets you write and preview text like you can in GitHub documentation.`,
    language: 'React',
    url: 'https://react-notes-mde.netlify.app',
    git: 'https://github.com/jjtroiano0272/react-notes-app',
    imgSrc: 'notes-app-light.png',
    altText:
      'A Note-Markdown app, similar to writing a Readme file on GitHub. ',
  },
  {
    id: 'memeGeneratorApp',
    title: 'Machine Learning Meme Generator',
    description: `An app for creating your own memes. BONUS: It has a section for Machine-Learning-generated memes.`,
    language: 'React',
    url: 'https://react-ml-meme-generator.netlify.app',
    git: 'https://github.com/jjtroiano0272/meme-geneator',
    imgSrc: 'ml-meme-generator-app-light.png',
    altText: 'Screenshot of a meme generator.',
  },
  {
    id: 'travelExperiencesApp',
    title: 'Travel Experiences',
    description: `A 'book-a-travel-experience' app, like AirBnB`,
    language: 'React',
    url: 'https://react-travel-experiences.netlify.app',
    git: 'https://github.com/jjtroiano0272/travel-experiences-mockup',
    imgSrc: 'travel-experiences-app-light.png',
    altText: 'Screenshot of a travel experiences app.',
  },
  {
    id: 'studioMockupApp',
    title: 'Studio Mockup',
    description: `Site redesign mockup for a tattoo studio`,
    language: 'React',
    url: 'https://studio-mockup.netlify.app/',
    git: 'https://github.com/jjtroiano0272/mockup_tattoo-studio',
    imgSrc: 'studio-mockup-light.png',
    altText: 'Screenshot of a tattoo studio redesign mockup.',
  },
  {
    id: 'counterApp',
    title: 'Simple Counter App',
    description: `The first simple React app I built.`,
    language: 'React',
    url: 'https://counter-app.pages.dev/',
    git: 'https://github.com/jjtroiano0272/counter-app',
    imgSrc: 'counter-app.png',
    altText: 'Screenshot of a simple counter app.',
  },
];
// - [x] https://react-trivia-app-jjt.netlify.app
// - [x] https://react-tenzies-app.netlify.app
// - [x] https://react-notes-mde.netlify.app
// - [x] https://react-ml-meme-generator.netlify.app
// - [ ] https://react-travel-experiences.netlify.app
// - [ ] https://shrouded-spire-70852.herokuapp.com/
// - [ ] https://studio-mockup.netlify.app
// - [ ] https://counter-app.pages.dev
// - [ ] https://58c79bb9.tutorial-particlesystem.pages.dev
// - [ ] https://tutorial-nebula.pages.dev

export default projectsData;
