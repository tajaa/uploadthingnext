"use client";
import React from "react";
import { useState } from "react";
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";

const ImageUploader = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  return (
    <div>
      <UploadDropzone
        appearance={{
          container: {
            border: "1px dotted blue",
          },
          uploadIcon: {
            color: "blue",
          },
        }}
        endpoint="imageUploader"
        //can also use upload button
        onClientUploadComplete={(res) => {
          //do something with the response
          console.log("files: ", res);
          setImageUrl(res[0].url);
          alert("upload completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />

      {imageUrl.length ? (
        <div>
          <Image src={imageUrl} alt="my image" width={300} height={300} />
        </div>
      ) : null}
    </div>
  );
};
export default ImageUploader;
