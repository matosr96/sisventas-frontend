import React, { useState } from 'react'
import styles from './TextEditor.module.css';
import ReactQuill, { Quill, ReactQuillProps } from 'react-quill';
import 'quill/dist/quill.snow.css'; 

// import SpellChecker from 'quill-spellchecker';
// Quill.register("modules/cursors", SpellChecker);
interface Props extends ReactQuillProps {
    className?: string;
}



const TOOLBAR_OPTIONS = [
    [{header: [1,2,3,4,5,6,false]}],
    [{font: []}],
    [{list: "ordered"}, {list: "bullet"}],
    ["bold", "italic", "underline"],
    [{color: []}, {background: []}],
    [{script: "sub"}, {script: "super"}],
    [{align: []}],
    ["image", "blockquote", "code-block"],
    ["clean"],
]

const modules = {
  cursors: true,
  toolbar: {
    continaer: TOOLBAR_OPTIONS,
    headers: {}
  },
  spellChecker: {
    enabled: true,
    language:"es"
  }
}

const TextEditor = ({className, ...rest}: Props) => {
    return (
        <div className={className == 'page'? 'container_page' : styles.container}>
            <ReactQuill {...rest} modules={{toolbar: TOOLBAR_OPTIONS}} />
        </div>
    )
}

export default TextEditor