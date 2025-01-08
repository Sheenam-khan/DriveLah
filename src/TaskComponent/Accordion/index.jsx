import React ,{useState} from 'react'
import AccordionItem from './AcordionItem'
const data = [
    {
     question: 'What are accordion components?',
     answer: 'Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.' ,
    },
    {
     question: 'What are they used for?',
     answer: 'They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.',
    },
    {
     question: 'Accordion as a musical instrument',
     answer: 'The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.',
    },
   ];
   const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
   
    const handleItemClick = (index) => {
     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
   
    return (
     <div className='container'>
      <ul>
       {data.map((item, index) => (
        <li>
       <AccordionItem
        key={index}
        question={item.question}
        answer={item.answer}
        isOpen={activeIndex === index}
        onClick={() => handleItemClick(index)}
       />
       </li>
      ))}
      </ul>
     </div>
    )
   };
   
   export default Accordion;
   