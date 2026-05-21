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
      'Game website that allows users to play real medieval games with other users in real time.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Websockets'],
    image: `${import.meta.env.BASE_URL}projects/libro.png`,
    imageAlt: 'Screenshot of the Libro de los Juegos web application',
    liveUrl: 'https://libro-de-los-juegos.onrender.com',
    repoUrl: 'https://github.com/danielrjilek/libro-de-los-juegos',
  },
  {
    title: 'YOLO V1 Image Classifier',
    description:
      'A simple image classifier using the YOLO V1 algorithm. It is able to classify mammal species from images.',
    tech: ['Python', 'PyTorch', 'OpenCV'],
    liveUrl: null,
    repoUrl: 'https://github.com/DanielRJilek/YOLO-V1-Classifier',
  },
  {
    title: 'Realtime Object Recognition',
    description:
      'A realtime object recognition system using the classical computer vision approach. It is able to detect objects in real time and classify them into 20 different classes.',
    tech: ['Python', 'OpenCV'],
    liveUrl: null,
    repoUrl: 'https://github.com/DanielRJilek/RealtimeObjectRecognition',
  },
]
