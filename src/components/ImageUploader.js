import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: '5vw',
    marginTop: '5vw',
    width: '40vw',
    height: '40vw',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    alignItems: 'center',
    display: 'table'
  },
  content: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  img: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    minWidth: '100%',
    minHeight: '100%'
  }
}))

export default function ImageUploader() {
  const [files, setFiles] = useState([]);
  const classes = useStyles();
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div key={file.name}>
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
    <div {...getRootProps()} className={classes.container}>
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