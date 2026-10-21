export const projects = [
  {
    title: 'iNaturalist Species Classification',
    description:
      'Fine-grained species identification on the iNaturalist 2017 dataset. Compares ImageNet-pretrained ResNet-50 and ConvNeXt-Tiny across six super-classes, scored with image-weighted top-1 and top-5 accuracy.',
    tech: ['Python', 'PyTorch', 'ConvNeXt', 'ResNet'],
    images: [
      `${import.meta.env.BASE_URL}projects/inaturalist-arachnida.png`,
      `${import.meta.env.BASE_URL}projects/inaturalist-mammalia.png`,
      `${import.meta.env.BASE_URL}projects/inaturalist-fungi.png`,
    ],
    imageAlt:
      'Training loss and accuracy curves for species classification on iNaturalist 2017',
    liveUrl: null,
    repoUrl: 'https://github.com/DanielRJilek/iNaturalist',
  },
  {
    title: 'Defender',
    description:
      'A recreation of the classic Defender arcade game built with a custom C++ engine using ECS and SDL3, featuring real-time gameplay, sprite rendering, and Lua-driven configuration.',
    tech: ['C++', 'SDL3', 'ECS', 'CMake', 'Lua', 'Python'],
    images: [
      `${import.meta.env.BASE_URL}projects/defender.png`,
      `${import.meta.env.BASE_URL}projects/defender2.png`,
    ],
    imageAlt: 'Screenshot of the Defender arcade game recreation',
    liveUrl: null,
    repoUrl: 'https://github.com/DanielRJilek/defender',
  },
  {
    title: 'Libro de los Juegos',
    description:
      'Game website that allows users to play real medieval table games with other users in real time.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Websockets'],
    images: [
      `${import.meta.env.BASE_URL}projects/libro.png`,
      `${import.meta.env.BASE_URL}projects/libro2.png`,
      `${import.meta.env.BASE_URL}projects/libro3.png`,
    ],
    imageAlt: 'Screenshot of the Libro de los Juegos web application',
    liveUrl: 'https://libro-de-los-juegos.onrender.com',
    repoUrl: 'https://github.com/danielrjilek/libro-de-los-juegos',
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
  // Hidden from the project list for now — keep for later reuse
  // {
  //   title: 'Portfolio site',
  //   description:
  //     'This personal site — a static React app built with Vite and deployed to GitHub Pages.',
  //   tech: ['React', 'Vite', 'CSS'],
  //   image: `${import.meta.env.BASE_URL}projects/portfolio.png`,
  //   imageAlt: 'Screenshot of the Portfolio site',
  //   liveUrl: null,
  //   repoUrl: 'https://github.com/yourusername/portfolio',
  // },
]
