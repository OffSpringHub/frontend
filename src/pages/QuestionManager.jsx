import React, { useState } from 'react';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';
import {Player,Controls} from "@lottiefiles/react-lottie-player"
import DeleteIcon from '@mui/icons-material/Delete';

const dummyQuestions= [
    {
        "category":"React",
        "type":"Single Choice",
        "question":"What is 2+2",
        "score":40,
        "estimated_time":25,
        "Difficulty":"EASY",
        "options":[
            {
                "answer":"4",
                "isCorrect":true
            },
            {
                "answer":"2",
                "isCorrect":false
            },
            {
                "answer":"2",
                "isCorrect":false
            },
        ]
    },
    {
        "category":"React",
        "type":"Single Choice",
        "question":"What is 2+2",
        "score":40,
        "estimated_time":25,
        "Difficulty":"EASY",
        "options":[
            {
                "answer":"4",
                "isCorrect":true
            },
            {
                "answer":"2",
                "isCorrect":false
            },
            {
                "answer":"2",
                "isCorrect":false
            },
        ]
    },
    {
        "category":"React",
        "type":"Single Choice",
        "question":"What is 2+2",
        "score":40,
        "estimated_time":25,
        "Difficulty":"MEDIUM",
        "options":[
            {
                "answer":"4",
                "isCorrect":true
            },
            {
                "answer":"2",
                "isCorrect":false
            },
            {
                "answer":"2",
                "isCorrect":false
            },
        ]
    },
    {
        "category":"React",
        "type":"QCM",
        "question":"What is 2+2",
        "score":40,
        "estimated_time":25,
        "Difficulty":"HARD",
        "options":[
            {
                "answer":"4",
                "isCorrect":true
            },
            {
                "answer":"2",
                "isCorrect":true
            },
            {
                "answer":"2",
                "isCorrect":false
            },
        ]
    },
    

]


const QuestionManager = () => {
    const [emptyQuestion,isEmptyQuestion]=useState(false)
    return (
        <div className='QuestionManager'>
            <div className="content">
                <div className="title">
                    Questions Manager

                    {!emptyQuestion && (
                        <div className="action-buttons">
                            <Link to="/addQuestionToTest" className='RemoveLink'>
                            <div className="generate">
                                <AddBoxIcon />
                                    Add Question
                                </div>
                            </Link>
                        </div>
                    )}

                </div>
                {emptyQuestion ? (
                    <div className="skeleton">
                        <div className="skeleton-img">
                        <Player
                            autoplay
                            loop
                            src="https://lottie.host/17b75dd3-81f3-457a-b99b-69c565e9df47/RssOyR8q6b.json"
                            style={{ height: '30vh', width: '50vw' }}
                            >
                            <Controls visible={false} />
                            </Player>
                        </div>
                        <div className="skeleton__title">
                            You don't have any questions yet
                        </div>
                        <div className="skeleton__help">
                        Click <span>Add question </span> to create your first question
                        </div>
                        <div className="action-buttons">
                        <div className="generate ai">
                            <AutoFixHighIcon />
                            Generate Using AI
                        </div>
                        <Link to="/addQuestionToTest" className='RemoveLink'>
                            <div className="generate">
                                <AddBoxIcon />
                                Add Question
                            </div>
                        </Link>
                    </div>
                    </div>
                ):(
                    <div className='Questions'>
                        {dummyQuestions.map((question,index)=>(
                            <div className="question" key={index}>
                                <div className="question__details">
                                    Q. {index+1}
                                    <div className="question__details__meta">
                                        <div className="question__details__meta__type">
                                            {question.score} Points
                                        </div>
                                        <div className="question__details__meta__type">
                                            <span>Estimated Time</span> {question.estimated_time} min
                                        </div>
                                        <div className="question__details__meta__category">
                                            {question.category}
                                        </div>
                                        <div className={question.Difficulty==="HARD" ? "question__details__meta__difficulty hard" : question.Difficulty==="MEDIUM" ? "question__details__meta__difficulty med" : "question__details__meta__difficulty easy "}>
                                            {question.Difficulty}
                                        </div>
                                        <div className="question__details__meta__type">
                                            <span>Type</span> {question.type}
                                        </div>
                                        <div className="actions">
                                            <DeleteIcon className='icon delete'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="question__question">
                                    {question.question}
                                </div>
                                <div className="question__options">
                                    {question.options.map((option,index)=>(
                                        <div key={index} className={option.isCorrect ? "option correct" : "option"}>  
                                            {question.type=="QCM" && (
                                                <>
                                                    <input type="radio" disabled /> {option.answer}
                                                </>
                                            )}
                                            {question.type=="Single Choice" && (
                                                <>
                                                    <input type="checkbox" disabled /> {option.answer}
                                                </>
                                            )}
                                        </div> 
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default QuestionManager;
