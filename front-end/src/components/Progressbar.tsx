import styled from "styled-components";

const Progressbar = () => {
  return (
    <Wrapper>
      <div className="progress-container">
        <div className="container">
         Uploading... 
         <br/>
         <br/>
          <div className="progress-bar">
            <div className="progress-bar-value"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.progress-container{
    display: flex;
    text-align:right;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    flex-direction: column;
    width: 402px;
    height: 100px;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgb(0 0 0 / 10%);
    border-radius: 12px;
}

.container {
  width: 300px;
  margin: auto;
  text-align:left;
}

.progress-bar {
  height: 4px;
  background-color: rgba(5, 114, 206, 0.2);
  width: 100%;
  overflow: hidden;
}

.progress-bar-value {
  width: 100%;
  height: 100%;
  background-color: rgb(5, 114, 206);
  animation: indeterminateAnimation 1s infinite linear;
  transform-origin: 0% 50%;
}

@keyframes indeterminateAnimation {
  0% {
    transform:  translateX(0) scaleX(0);
  }
  40% {
    transform:  translateX(0) scaleX(0.4);
  }
  100% {
    transform:  translateX(100%) scaleX(0.5);
  }
}
`
export default Progressbar