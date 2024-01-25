import React, { useState } from 'react';

function ImageFormdata() {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
        console.log(image);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        console.log(title);
    };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', title);
        for (var data of formData.entries()) {
            console.log(data[0] + ', ' + data[1]);
        }
        // Axios를 사용하여 백엔드로 전송
        // axios.post('/api/upload', formData).then(response => {
        //   console.log(response.data);
        // });
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            <input type="text" value={title} onChange={handleTitleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default ImageFormdata;
