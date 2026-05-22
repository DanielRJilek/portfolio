export const projects = [
  {
    title: 'Portfolio site',
    description:
      'This personal site — a static React app built with Vite and deployed to GitHub Pages.',
    tech: ['React', 'Vite', 'CSS'],
    image: `${import.meta.env.BASE_URL}projects/portfolio.png`,
    imageAlt: 'Screenshot of the Portfolio site',
    liveUrl: null,
    repoUrl: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'Libro de los Juegos',
    description:
      'Game website that allows users to play real medieval table games with other users in real time.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Websockets'],
    image: `${import.meta.env.BASE_URL}projects/libro.png`,
    imageAlt: 'Screenshot of the Libro de los Juegos web application',
    liveUrl: 'https://libro-de-los-juegos.onrender.com',
    repoUrl: 'https://github.com/danielrjilek/libro-de-los-juegos',
  },
  {
    title: 'YOLO V1 Image Classifier',
    description:
      'An experiment in computer vision using variations of the YOLO V1 algorithm to classify mammal species from images.',
    tech: ['Python', 'PyTorch', 'OpenCV'],
    image: `${import.meta.env.BASE_URL}projects/YOLO.png`,
    imageAlt: 'Screenshot of the YOLO V1 Image Classifier results',
    liveUrl: null,
    repoUrl: 'https://github.com/DanielRJilek/YOLO-V1-Classifier',
  },
  {
    title: 'Realtime Object Recognition',
    description:
      'A realtime object recognition system using classical computer vision techniques. It can be trained to recognize new objects by providing a dataset of images and their corresponding labels.',
    tech: ['C++', 'OpenCV'],
    image: `${import.meta.env.BASE_URL}projects/realtimeObjectRecognition.png`,
    imageAlt: 'Screenshot of the Realtime Object Recognition system',
    liveUrl: null,
    repoUrl: 'https://github.com/DanielRJilek/RealtimeObjectRecognition',
  },
]
