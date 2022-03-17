import { useState } from "react";
import Uploader from "./Uploader";
import Preview from "./Preview";
import Progressbar from "./Progressbar"

const Main = () => {

  const [progress, setProgress] = useState<number>(0);
  const [url, setUrl] = useState<string>('')


  const upUrl = (imgUrl: string) => setUrl(imgUrl)

  const onChangeProgres = (progre: number) => setProgress(progre)


  const uploader = () => {
    if (progress !== 0) {
      return <Progressbar />
    } else if (url) {
      return <Preview image={url} />
    }
    return <Uploader upUrl={upUrl} onChangeProgres={onChangeProgres} />
  }

  return uploader()


}


export default Main