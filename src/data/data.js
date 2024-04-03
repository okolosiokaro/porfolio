import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3, FaGit, FaJs, FaNodeJs, FaReact} from 'react-icons/fa'


const Projects = [
    {
        title: 'Logistics Company Limited',
        description: 'just some text to describe the project briefly',
        image: '',
        link: 'https://www.logisticscompany.netlify.app'
    },
{
    title: 'Niketest website',
    description: 'just some text to describe the project briefly',
    image: '',
    link: 'https://www.niketest.netlify.app'
},
{
    title: 'Buyeat website',
    description: 'just some text to describe the project briefly',
    image: '',
    link: 'https://www.buyeat.netlify.app'
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