import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Editor from './Editor';


const Answer = ({answers,index,setAnswers}) => {
    const handleDelete=()=>{
        const filteredAnswers = answers.filter((answer,i) => i != index)
        setAnswers(filteredAnswers)
    }
    return (
        <>
            <label class="cyberpunk-checkbox-label">
                <input type="checkbox" class="cyberpunk-checkbox" />
            </label>
            <Editor />
            <div className="actions">
                <div onClick={handleDelete} className="icon delete">
                    <DeleteIcon />
                </div>
            </div>
        </>
    );
}

export default Answer;
