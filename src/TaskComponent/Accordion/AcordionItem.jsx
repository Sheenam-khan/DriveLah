import { useRef } from "react"

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef()
     return(
       <div className="wrapper" >
       <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
        <p className='question-content'>{question}</p>
        <i className={`fa fa-angle-${isOpen ? 'down' : 'up'}`} /> 
        </button>
   {isOpen && 
   <div ref={contentHeight} className="answer-container" style={
    isOpen
    ? { height: contentHeight?.current?.scrollHeight }
    : { height: "0px" }
   }>
<p className="answer-content">{answer}</p>
</div>}
        
      </div>
     )
   }
export default AccordionItem