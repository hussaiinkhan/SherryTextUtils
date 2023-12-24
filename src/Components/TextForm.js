import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text,setText] = useState('')

    const handleChange = (event) =>{
        setText(event.target.value)
    }

    const handleUpClick=()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to Upper Case!')
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to Lower Case!')
    }
    const handleClearClick = ()=>{
        let newText = ''
        setText(newText)
        props.showAlert('Text Cleared!')
    }
    
    var digits= (text.match(/\d/g) || []).length
    var spaces= (text.match(/\s/g) || []).length
  return (
    <>
        <div className='container my-1' style ={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleChange} id="Text" rows="8" style={{backgroundColor: props.mode==='light'?'white':'rgb(214, 196, 196)'}}></textarea>
            </div>
            <button disabled ={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Capitalize the text</button>
            <button disabled ={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLowClick}>Loweralize the text</button>
            <button disabled ={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style ={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <b>Words</b> {text.length} <b>Characters</b> and {digits} <b>Numbers</b> and {spaces} <b>White spaces</b></p>
            <p>{0.005 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length!==0?text:'Type Something to preview'}</p>
        </div>

            
    </>
    
    
  )
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}