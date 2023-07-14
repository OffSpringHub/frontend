import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Editor from '../components/Editor';
import AddCategory from '../components/AddCategory';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Answer from '../components/Answer';


const INITIAL_ANSWER={
    "content":""
}

const AddQuestion = () => {

    const [answers,setAnswers]=useState([
        INITIAL_ANSWER,INITIAL_ANSWER,INITIAL_ANSWER
    ])
    
    const handleAnswer=()=>{
        setAnswers([...answers,INITIAL_ANSWER])
    }


    return (
        <div className='AddQuestion'>
            <div className="content">
                <div className="header">
                    Question 1
                </div>
                <form>
                    <div className="form">
                        <div className="form__row">
                            <div className="Question__form">
                                <Editor />
                            </div>
                        </div>
                        <div className="form__row special">
                            <div className="form__row__content">
                                <label>
                                    Category
                                </label>
                                <select name="" id="">
                                    <option value="">Uncategorized</option>
                                    <option value="">React</option>
                                </select>
                                </div>
                            <div className="form__row__action">
                                <AddCategory />
                            </div>
                        </div>
                        <div className="form__row">
                            <label>
                                Answer Type
                            </label>
                            <select name="" id="">
                                <option value="">Single Choice</option>
                                <option value="">QCM</option>
                            </select>
                        </div>
                        <div className="form__row">
                            <label>
                                Difficulty
                            </label>
                            <select name="" id="">
                                <option value="">Single Choice</option>
                                <option value="">QCM</option>
                            </select>
                        </div>
                        <div className="form__row">
                            <label>
                                Score
                            </label>
                            <input type="number" name="" id="" />
                        </div>
                        <div className="form__row">
                            <label>
                                Estimated Time
                            </label>
                            <input type="number" name="" id="" />
                        </div>
                        <div className="from__row">
                            <div className="form__row__answers">
                                <div className="title">
                                    Answers
                                </div>
                                <div className="desc">
                                    After providing possible answers, select the correct one(s).
                                </div>
                                <div className="form__row__answers__list">
                                    {
                                        answers?.map((answer,index)=>(
                                            <div key={index} className="form__row__answers__list__answer">
                                                <Answer answers={answers} index={index} setAnswers={setAnswers}/>
                                            </div>
                                        ))
                                    }
                                    <div className="form__row__answers__list__answer">
                                        <div onClick={handleAnswer} className="form__row__answers__list__answer__action">
                                            <AddBoxIcon /> Add Answer
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="action">
                        <div className="btn submit">
                            Save
                        </div>
                        <div className="btn submit">
                            Save and add next
                        </div>
                        <div className="btn cancel">
                            Cancel
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddQuestion;
