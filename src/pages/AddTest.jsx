import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link,useNavigate } from 'react-router-dom';

const AddTest = () => {
    const INITIAL_STATE={
        "name":"",
        "desc":""
    }

    const navigate=useNavigate()

    const [test, settest] = useState(INITIAL_STATE);

    const handleChange=(e)=>{
        settest({...test,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(test) // await here to add Test
        navigate('/addQuestion')
    }

    return (
        <div className='AddTest'>
            <Link to="/" className='RemoveLink'>
                <div className="header">
                    <ArrowBackIosNewIcon className='icon' /> New Test
                </div>
            </Link>
           <div className="content">
                <div className="title">
                    Add A New Test
                </div>

                <form onSubmit={handleSubmit} >
                    <div className="form">
                        <div className="form__row">
                            <label>Test Name</label>
                            <input name='name' type="text" onChange={handleChange}/>
                        </div>
                        <div className="form__row">
                            <div className="help">
                            Add test description for identification purposes. It will be visible <span>to you only.</span>
                            </div>
                            <label>Description</label>
                            <textarea name='desc' onChange={handleChange}></textarea>
                        </div>
                    </div>
                        <div className="button">
                            <button className="submit">Create</button>
                        </div>
                </form>
            </div> 
        </div>
    );
}

export default AddTest;
