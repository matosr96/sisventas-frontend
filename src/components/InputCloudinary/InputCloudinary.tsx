import React, { useEffect, useState, ChangeEvent } from "react";

import styles from "./inputcloudinary.module.css";
import CloudinaryUploader from "../../utilities/cloudinary";

interface Props {
  setImageUrl: (url: string) => void;
  idInput: string;
}

const InputCloudinary = ({ idInput, setImageUrl }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploader] = useState<CloudinaryUploader>(new CloudinaryUploader());
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (uploadedUrl) {
      setImageUrl(uploadedUrl);
    }
  }, [uploadedUrl]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (file) {
      setFile(file);
      uploader.setFile(file);
    }
    await uploader.upload();
    setUploadedUrl(uploader.getUrl());
  };

  const handleChangeImage = () => {
    setFile(null);
    setUploadedUrl(null);
  };

  return (
    <div className={styles.container_input_cloudinary}>
      <div className={styles.formbold_file_input}>
        <input
          type="file"
          name={idInput}
          id={idInput}
          onChange={handleChange}
        />
        <label htmlFor={idInput}>
          <div>
            <span className={styles.formbold_drop_file}>
              Carga tu foto de perfil
            </span>
            <span className={styles.formbold_browse}>Buscalo</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default InputCloudinary;
