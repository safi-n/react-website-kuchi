import { v4 as uuidv4 } from "uuid"
import image from '../assets/IMG/OurWorkMain.png'
const PhotoCollectionList = [
  {
    id: uuidv4(),
    title: 'Tile goes here',
    year: '2022',
    caption: 'lorem lorem hello how are you this project is about the new website for kuchi films and i have to finish it as soon as possibke and find a solution to make this website look more beautifu;',
    org: 'Organization PEHO',
    images: {
        image1: image,
        image2: image,
        image3: image,
        image4: image,
        image5: image,
        image6: image,
        image7: image,
        image8: image,
        image9: image,
      }
  },
  {
    id: uuidv4(),
    title: 'Tile goes here',
    year: '2022',
    caption: 'lorem lorem hello how are you this project is about the new website for kuchi films and i have to finish it as soon as possibke and find a solution to make this website look more beautifu;',
    org: 'Organization PEHO',
    images: [
      {
        image1: image,
        image2: image,
        image3: image,
        image4: image,
        image5: image,
        image6: image,
        image7: image,
        image8: image,
        image9: image,
      }
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
        image1: image,
        image2: image,
        image3: image,
        image4: image,
        image5: image,
        image6: image,
        image7: image,
        image8: image,
        image9: image,
      }
    ]
  },
]

export default PhotoCollectionList