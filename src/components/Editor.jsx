import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
    const [value, setValue] = useState('');
    const modules = {
        toolbar: [
          [{ 'size': ['small', false, 'large', 'huge'] }], 
          [{ 'font': [] }],
          ['bold', 'italic', 'underline','strike'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          [{color: []},{ background: [] }],
          ['align', { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }],
          ['link', 'image','formula'],
          ['clean']
        ],
      }
    
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image','color'
      ]
    return <ReactQuill 
        theme='snow'
        value={value}
        modules={modules}
        formats={formats}
        onChange={setValue} />
}

export default Editor;
