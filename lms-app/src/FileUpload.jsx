import { useState } from "react";


export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // If image, show preview
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    } else {
      setPreview(null);
    }
  };


  return (
    <div style={{ padding: "20px" }}>
      <h2>File Upload</h2>

      <input type="file" onChange={handleFileChange} />

      {file && (
        <div style={{ marginTop: "15px" }}>
          <p><b>Selected File:</b> {file.name}</p>
        </div>
      )}

      {preview && (
        <div style={{ marginTop: "15px" }}>
          <p><b>Image Preview:</b></p>
          <img src={preview} alt="preview" style={{ width: "200px", border: "1px solid black" }} />
        </div>
      )}
    </div>
  );
}
