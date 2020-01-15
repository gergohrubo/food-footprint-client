import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useStyles } from './style'

export default function ImageUploader(props) {
  const [files, setFiles] = useState([]);
  const classes = useStyles();
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    onDrop: acceptedFiles => {
      props.onDrop(acceptedFiles)
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div key={file.name} className={classes.extraDiv}>
      <img
        src={file.preview}
        className={classes.img}
      />
    </div>
  ));

  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className={classes.container} {...getRootProps()} >
      <input {...getInputProps()} />
      {files.length === 0 ?
        <p className={classes.content}>Drag 'n' drop some files here, or click to select files</p>
        :
        <aside className={classes.content}>
          {thumbs}
        </aside>}
    </div>
  );
}