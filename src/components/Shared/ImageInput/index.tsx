import React from 'react'
import Loader from '../Loader';
import styles from './ImageInput.module.css'

interface Props  extends React.InputHTMLAttributes<HTMLInputElement>{
  loading?: boolean;
  preview?: string;
}

const ImageInput = ({loading, preview, ...rest}: Props) => {
  return (
    <div>
    <div className={styles.formbold_file_input}>
      <input type="file" name="image" id="image"  {...rest} />
      <label htmlFor="file">
        {loading? 
          <Loader small={true} primary={true} />         
        : (
          <div>
            <img className={styles.preview}  src={preview} alt="" />
              <span className={styles.formbold_drop_file} >Drop file here</span>
              <span className={styles.formbold_or} >Or</span>
              <span className={styles.formbold_browse} >Browse</span>
          </div>
        )}
      </label>
    </div>
  </div>
  )
}

export default ImageInput