import { v4 as uuidv4 } from "uuid"
import ProjectImage from '../assets/IMG/OurWorkMain.png'
const PhotoCollectionList = [
  {
    id: uuidv4(),
    title: 'Tile goes here',
    year: '2022',
    caption: 'lorem lorem hello how are you this project is about the new website for kuchi films and i have to finish it as soon as possibke and find a solution to make this website look more beautifu;',
    org: 'Organization PEHO',
    images: [
      {
        id: 'img1',
        image: ProjectImage,
      },
      {
        id: 'img2',
        image: ProjectImage,
      },
      {
        id: uuidv4(),
        image: ProjectImage,
      },
      {
        id: uuidv4(),
        image: ProjectImage,
      },
    ]
  },
  {
    id: uuidv4(),
    title: 'Tile goes here',
    year: '2022',
    caption: 'lorem lorem hello how are you this project is about the new website for kuchi films and i have to finish it as soon as possibke and find a solution to make this website look more beautifu;',
    org: 'Organization PEHO',
    images: [
      {
        id: 'img3',
        image: ProjectImage,
      },
      {
        id: 'img4',
        image: ProjectImage,
      },
      {
        id: uuidv4(),
        image: ProjectImage,
      },
      {
        id: uuidv4(),
        image: ProjectImage,
      },
    ]
  },
  {
    id: uuidv4(),
    title: 'Tile goes here',
    year: '2022',
    caption: 'lorem lorem hello how are you this project is about the new website for kuchi films and i have to finish it as soon as possibke and find a solution to make this website look more beautifu;',
    org: 'Organization PEHO',
    images: [
      {
        id: 'img3',
        image: ProjectImage,
      },
      {
        id: 'img4',
        image: ProjectImage,
      },
      {
        id: uuidv4(),
        image: ProjectImage,
      },
      {
        id: uuidv4(),
        image: ProjectImage,
      },
    ]
  },
]

export default PhotoCollectionList;