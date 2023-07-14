import React from 'react';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Link } from 'react-router-dom';

const dummyData = [
    {
        "name":"RTest1",
        "desc":"This a Description",
        "createdAt":"2023-07-11"
    },
    {
        "name":"RTest1",
        "desc":"This a Description",
        "createdAt":"2023-07-11"
    },
    {
        "name":"RTest1",
        "desc":"This a Description",
        "createdAt":"2023-07-11"
    },
    {
        "name":"RTest1",
        "desc":"This a Description",
        "createdAt":"2023-07-11"
    },
    {
        "name":"RTest1",
        "desc":"This a Description",
        "createdAt":"2023-07-11"
    },
    {
        "name":"RTest1",
        "desc":"This a Description",
        "createdAt":"2023-07-11"
    },
    {
        "name":"RTest1",
        "desc":"This a Description",
        "createdAt":"2023-07-11"
    },
]

const TestTemplate = () => {
    return (
        <div className='TestTemplate'>
            <div className="content">
                <div className="header">
                    <div className="title">
                        My Test Templates <span>({dummyData.length})</span>
                    </div>
                    <div className="action-buttons">
                        <div className="generate ai">
                            <AutoFixHighIcon />
                            Generate Questions
                        </div>
                        <Link to="/addTest" className='RemoveLink'>
                            <div className="generate">
                                <AddBoxIcon />
                                New Test
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="test-grid">
                    {dummyData.map((data,index)=>(
                        <div className="test" key={index}>
                            <div className="data">
                                <div className="createAt">
                                    CREATED : {data.createdAt}
                                </div>
                                <div className="name">
                                    {data.name}
                                </div>
                                <div className="desc">
                                    {data.desc}
                                </div>
                            </div>
                            <div className="actions">
                                <DeleteIcon className='icon delete'/>
                                <ModeEditOutlineIcon className='icon edit'/>
                                {/* <ContentCopyIcon /> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TestTemplate;
