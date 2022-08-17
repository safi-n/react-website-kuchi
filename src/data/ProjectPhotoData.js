import { v4 as uuidv4 } from "uuid"
import photo1 from '../assets/photoCollection/PhotoCollection1.jpg'
import photo2 from '../assets/photoCollection/PhotoCollection2.jpg'
import photo3 from '../assets/photoCollection/PhotoCollection3.jpg'
import photo4 from '../assets/photoCollection/PhotoCollection4.jpg'
import photo5 from '../assets/photoCollection/PhotoCollection5.jpg'
import photo6 from '../assets/photoCollection/PhotoCollection6.jpg'
import photo7 from '../assets/photoCollection/PhotoCollection7.jpg'
import photo8 from '../assets/photoCollection/PhotoCollection8.jpg'
import photo9 from '../assets/photoCollection/PhotoCollection9.jpg'
import photo10 from '../assets/photoCollection/PhotoCollection10.jpg'
import photo11 from '../assets/photoCollection/PhotoCollection11.jpg'
import photo12 from '../assets/photoCollection/photoCollection12.jpg'
const PhotoCollectionList = [
  {
    id: uuidv4(),
    title: 'Tile goes here',
    year: '2022',
    caption: 'lorem lorem hello how are you this project is about the new website for kuchi films and i have to finish it as soon as possibke and find a solution to make this website look more beautifu; orem lorem hello how are you this project is about the new website for kuchi films and i have to finish it as soon as possibke and find a solution to make this website look more beautifu;orem lorem hello how are you this project is about the',
    org: 'Organization PEHO',
    images: [
      {
        id: 'img1',
        image: photo1,
      },
      {
        id: 'img2',
        image: photo2,
      },
      {
        id: uuidv4(),
        image: photo3,
      },
      {
        id: uuidv4(),
        image:  photo4,
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
        image: photo5,
      },
      {
        id: 'img4',
        image: photo6,
      },
      {
        id: uuidv4(),
        image: photo7,
      },
      {
        id: uuidv4(),
        image: photo8,
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
        image: photo9,
      },
      {
        id: 'img4',
        image: photo10,
      },
      {
        id: uuidv4(),
        image: photo11,
      },
      {
        id: uuidv4(),
        image: photo12,
      },
    ]
  },
]

export default PhotoCollectionList;