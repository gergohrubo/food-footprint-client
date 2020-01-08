import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  padding: 4,
  boxSizing: 'border-box'
}

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
}

export default function ImageUploader() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/jpeg, image/png',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <img
        src={file.preview}
        style={img}
      />
    </div>
  ));

  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps()} style={baseStyle}>
        <input {...getInputProps()} />
        {files.length === 0 ?
          <p>Drag 'n' drop some files here, or click to select files</p>
          :
          <aside>
            {thumbs}
          </aside>}
      </div>
    </section>
  );
}