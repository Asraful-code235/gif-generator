"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaRegPlayCircle } from "react-icons/fa";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const secretCode = process.env.NEXT_PUBLIC_SECRET_CODE;
  const videoRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(secretCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoPause = () => {
      setIsPlaying(false);
    };

    videoElement.addEventListener("pause", handleVideoPause);

    return () => {
      videoElement.removeEventListener("pause", handleVideoPause);
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-center px-4 py-40 md:px-0">
      <div className="mb-8">
        <Image
          src={"/9df.gif"}
          width={611}
          height={497}
          alt="hero_gif"
          className=""
        />
      </div>

      <div className="w-full max-w-2xl my-8 md:my-28">
        <div
          className="py-2 text-center bg-white border-2 border-b-4 border-black rounded-lg cursor-pointer"
          onClick={handleCopy}
        >
          {secretCode}
        </div>
        {copied && (
          <p className="my-4 text-center text-green-500">
            Copied to clipboard!
          </p>
        )}
      </div>

      <div className="relative w-full max-w-2xl rounded shadow">
        <p className="my-4 text-xl text-center text-red-500 md:text-4xl">
          Press Play, faggot!
        </p>
        <video
          ref={videoRef}
          controls
          className="w-full bg-white border-2 border-b-4 border-black rounded-b"
        >
          <source src="/heroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <button
            onClick={handlePlayPause}
            className="absolute inset-0 flex items-center justify-center w-full h-full bg-black rounded bg-opacity-40"
          >
            <FaRegPlayCircle className="w-20 h-20 text-white" />
          </button>
        )}
      </div>
    </section>
  );
}
