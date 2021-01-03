import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as tus from "tus-js-client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [videoFile, setVideoFile] = useState("no file exists");
  const [uploadComplete, setUploadComplete] = useState("awaiting file upload");
  const [videoTitle, setVideoTitle] = useState("untitled");
  const fileInput = useRef(null);
  const titleInput = useRef(null);

  useEffect(() => {
    if (uploadComplete === "complete") {
      setTimeout(() => {
        setUploadComplete("awaiting file upload");
        fileInput.current.value = "";
        titleInput.current.value = "untitled";
      }, 3000);
    }
  }, [uploadComplete]);

  async function uploadVideo() {
    setUploadComplete("uploading");
    const resPost = await fetch(`https://api.vimeo.com/me/videos`, {
      method: "POST",
      headers: {
        Authorization: "bearer " + process.env.NEXT_PUBLIC_VIMEO_ACCESS_TOKEN,
        "Content-Type": "application/json",
        Accept: "application/vnd.vimeo.*+json;version=3.4",
      },
      body: JSON.stringify({
        upload: {
          approach: "tus",
          size: videoFile.size,
        },
        name: videoTitle,
      }),
    });
    const dataPost = await resPost.json();
    console.log(resPost);

    const resPatch = await fetch(dataPost.upload.upload_link, {
      method: "PATCH",
      headers: {
        "Tus-Resumable": "1.0.0",
        "Upload-Offset": "0",
        "Content-Type": "application/offset+octet-stream",
        Accept: "application/vnd.vimeo.*+json;version=3.4",
      },
      body: videoFile,
    });

    console.log(resPatch);

    // await fetch(dataPost.upload.upload_link, {
    //   method: "HEAD",
    //   headers: {
    //     "Tus-Resumable": "1.0.0",
    //     Accept: "application/vnd.vimeo.*+json;version=3.4",
    //   },
    // });

    setUploadComplete("complete");
  }

  return (
    <div>
      <Head>
        <title>next js frontend + express vimeo upload</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>next js frontend + express vimeo upload</h1>
        <input
          ref={fileInput}
          onChange={(e) => setVideoFile(e.target.files[0])}
          type="file"
        />
        <br />
        <input
          ref={titleInput}
          value={videoTitle}
          onChange={(e) => setVideoTitle(e.target.value)}
          type="text"
        />
        <br />
        <button onClick={uploadVideo}>Upload Video</button>
        <hr />
        <p>
          <strong>upload status:</strong> {uploadComplete}
        </p>
      </main>
    </div>
  );
}
