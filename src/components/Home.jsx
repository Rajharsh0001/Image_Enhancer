import UploadImage from "./UploadImage";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import { EnhanceImageApi } from "../utils/EnhanceImageApi";

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setloading] = useState(false);

    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setloading(true);
        try {
            const enhancedURL = await EnhanceImageApi(file);
            setEnhancedImage(enhancedURL);
            setloading(false);
        } catch (error) {
            console.log(error);
            alert("Error while enhancing the image. Please try again later.");
        }
    };

    return (
        <>
            <UploadImage UploadImageHandler={UploadImageHandler} />
            <ImagePreview
                loading={loading}
                uploaded={uploadImage}
                enhanced={enhancedImage?.image}
            />
        </>
    );
};

export default Home;