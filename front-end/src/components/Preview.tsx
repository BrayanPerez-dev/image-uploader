import { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";

interface img {
  image: string
}
const Preview = (img: img) => {
  console.log(img)
  const { image } = img
  const [url, setUrl] = useState<string>(image)

  const copyLink = () => navigator.clipboard.writeText(url);

  return (
    <Wrapper>
      <div className="container-preview">
        <AiFillCheckCircle className="ai-icon" />
        <h1 >Uploaded Successfully!</h1>
        <img src={url} alt="img-up" />
        <div className="copy-link">
          <p>{`${url}`}</p>
          <Button onClick={copyLink}><p className="btn-text">Copy Link</p></Button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.container-preview{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    flex-direction: column;
    width: 402px;
    height: 469px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgb(0 0 0 / 10%);
    border-radius: 12px;
}

.ai-icon{
    font-size: 35px;
    color: #219653;
}

h1{
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */
    text-align: center;
    letter-spacing: -0.035em;
    /* Gray 2 */
    color: #4F4F4F;
}

img{
    width: 338px;
    height: 224.4px;
    border-radius: 12px;
}
.copy-link{
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: baseline;
    width: 338px;
    height: 34px;
    background: #F6F8FB;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 8px;
}
p{
  margin-top: 5px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 12px;
  /* identical to box height */
  letter-spacing: -0.035em;
  /* Gray 2 */
  color: #4F4F4F;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.ant-btn{
  width: 74px;
  background: #2F80ED;
  border-radius: 8px;
}

.btn-text{
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    /* identical to box height */
    letter-spacing: -0.035em;
    color: #FFFFFF;
}
`
export default Preview