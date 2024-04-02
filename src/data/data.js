import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3, FaGit, FaJs, FaNodeJs, FaReact} from 'react-icons/fa'


const Projects = [
    {
        title: 'Logistics Company Limited',
        description: 'just some text to describe the project briefly',
        image: ''
    },
{
    title: 'Niketest website',
    description: 'just some text to describe the project briefly',
    image: ''
},
{
    title: 'Buyeat website',
    description: 'just some text to describe the project briefly',
    image: ''
}];

const Frontends = [
    {
        icon: <AiFillHtml5 size={30} className='mt-1'/>,
        tool: 'HTML',
        level: 'Experienced'
    },
    {
        icon: <FaCss3 size={30} className='mt-1'/>,
        tool: 'CSS | Tailwind Css',
        level: 'Experienced'
    },
    {
        icon: <FaJs size={30} className='mt-1'/>,
        tool: 'JavaScript',
        level: 'Intermediate'
    },
    {
        icon: <FaReact size={30} className='mt-1'/>,
        tool: 'React',
        level: 'Intermediate'
    }
];

const Backends = [
    {
        icon: <FaNodeJs size={30} className='mt-1'/>,
        tool: 'Node Js',
        level: 'Intermediate'
    },
    {
        icon: <FaGit size={30} className='mt-1'/>,
        tool: 'Git',
        level: 'Intermediate'
    }
] 


export {Projects, Frontends, Backends};