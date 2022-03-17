import { useState, useEffect } from "react";
import { Button, Upload } from "antd";
import axios from "axios";
import styled from "styled-components";
import { FaRegImage } from "react-icons/fa";

interface image {
  file: {
    originFileObj: File,
  }
}

interface Props {
  upUrl: (imgUrl: string) => void;
  onChangeProgres: (progre: number) => void;
}

const Uploader = ({ upUrl, onChangeProgres }: Props) => {

  const [fileSelected, setFiledSelected] = useState<File>();
  

  const { Dragger } = Upload;

  const onChange = (info: image) => {
    const { file } = info
    const { originFileObj } = file
    setFiledSelected(originFileObj);
  }


  const postImage = async () => {
    const CLOUDINARY_URL = "";
    if (fileSelected) {
      const formData = new FormData();
      formData.append("image", fileSelected, fileSelected.name);
      
      const res = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*/*",
          "Accept": "application/json, text/plain, */*",
        },
        onUploadProgress(e: { loaded: number; total: number }) {
          const progress: number = Math.round((e.loaded * 100) / e.total)
          onChangeProgres(progress)
          if (progress === 100) refreshProgress()

        }
      });
      upUrl(res.data.url)
    }
  }
  const refreshProgress = () => {
    setTimeout(() => {
      onChangeProgres(0)
    }, 2000);
  }


  useEffect(() => {
    postImage()
  }, [fileSelected])


  return (
    <Wrapper>
          <div className="upload-container">
            <h1>Upload your image</h1>
            <p>File should be Jpg or Jpeg and Png </p>
            <Dragger onChange={onChange}>
              <p className="icon">
                <FaRegImage className="fa-icon" />
              </p >
              <p className="ant-upload-text">
                Drag & Drop your image here
              </p>
            </Dragger>
            <p>Or</p>
            <Upload onChange={onChange}><Button>Choose a file</Button></Upload>
          </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`


.upload-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    width: 402px;
    height: 469px;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgb(0 0 0 / 10%);
    border-radius: 12px;
}

h1{
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.035em;
  color: #4F4F4F;
}
p{
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.035em;
  color: #828282;
}

.ant-upload.ant-upload-drag{
  width: 338px;
  height: 218.9px;
  
}
.ant-upload-drag-container{
  padding:10px;
}
.ant-upload-list.ant-upload-list-text {
  display: none;
}
.fa-icon{
  font-size:100px
}

.ant-btn{
  width: 101px;
  height: 31.98px;
  background: #2F80ED;
  border-radius: 8px;
}
`
export default Uploader;
