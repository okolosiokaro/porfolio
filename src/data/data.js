import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3, FaGit, FaJs, FaNodeJs, FaReact} from 'react-icons/fa'
import logistics from '../assets/logistics (1).png'
import food from '../assets/food.png'
import nike from '../assets/nike.png'


const Projects = [
    {
        title: 'Logistics Company Limited',
        description: 'just some text to describe the project briefly',
        image: logistics,
        link: 'https://logisticscompany.netlify.app/',
        repo: 'https://www.github.com/okolosiokaro/logistics'
    },
{
    title: 'Niketest website',
    description: 'just some text to describe the project briefly',
    image: nike,
    link: 'https://nikestest.netlify.app',
    repo: 'https://www.github.com/okolosiokaro/nikestest'
},
{
    title: 'Buyeat website',
    description: 'just some text to describe the project briefly',
    image: food,
    link: 'https://buyeat.netlify.app',
    repo: 'https://www.github.com/okolosiokaro/foodweb'
}];

const Frontends = [
    {
        icon: <AiFillHtml5 size={30} className='mt-1'/>,
        tool: 'HTML'
    },
    {
        icon: <FaCss3 size={30} className='mt-1'/>,
        tool: 'CSS | Tailwind Css'
    },
    {
        icon: <FaJs size={30} className='mt-1'/>,
        tool: 'JavaScript'
    },
    {
        icon: <FaReact size={30} className='mt-1'/>,
        tool: 'React'
    }
];

const Backends = [
    {
        icon: <FaNodeJs size={30} className='mt-1'/>,
        tool: 'Node Js'
    },
    {
        icon: <FaGit size={30} className='mt-1'/>,
        tool: 'Git'
    }
] 


export {Projects, Frontends, Backends};