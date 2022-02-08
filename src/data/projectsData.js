import { nanoid } from 'nanoid';

const projectsData = [
  {
    id: 'triviaApp',
    title: 'RESTful API Trivia',
    description:
      'Test your trivia knowledge by pulling random questions from the OpenTrivia API!',
    url: 'https://react-trivia-app-jjt.netlify.app',
    git: 'https://github.com/jjtroiano0272/react-quiz-app',
    imgSrc: 'trivia-app-light.png',
    altText: 'Screenshot of a trivia app',
  },
  {
    id: 'tenziesApp',
    title: 'Tenzies: The Dice Game',
    description: `If you've played Yahtzee, you're already familiar with how to play! Roll dice and choose which to hold on to until they all match.`,
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
    url: 'https://react-ml-meme-generator.netlify.app',
    git: 'https://github.com/jjtroiano0272/meme-geneator',
    imgSrc: 'ml-meme-generator-app-light.png',
    altText: 'Screenshot of a meme generator.',
  },
  {
    id: 'travelExperiencesApp',
    title: 'Travel Experiences',
    description: `A 'book-a-travel-experience' app, like AirBnB`,
    url: 'https://react-travel-experiences.netlify.app',
    git: 'https://github.com/jjtroiano0272/travel-experiences-mockup',
    imgSrc: 'travel-experiences-app-light.png',
    altText: 'Screenshot of a travel experiences app.',
  },
  {
    id: 'studioMockupApp',
    title: 'Studio Mockup',
    description: `Site redesign mockup for a tattoo studio`,
    url: 'https://studio-mockup.netlify.app/',
    git: 'https://github.com/jjtroiano0272/mockup_tattoo-studio',
    imgSrc: 'studio-mockup-light.png',
    altText: 'Screenshot of a tattoo studio redesign mockup.',
  },
  {
    id: 'counterApp',
    title: 'Simple Counter App',
    description: `The first simple React app I built.`,
    url: 'https://counter-app.pages.dev/',
    git: 'https://github.com/jjtroiano0272/counter-app',
    imgSrc: 'counter-app.png',
    altText: 'Screenshot of a simple counter app.',
  },
];

export default projectsData;
