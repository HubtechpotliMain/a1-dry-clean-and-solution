"use client";

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const videos = [
  {
    id: 1,
    src: '/video/WhatsApp Video 2026-01-19 at 5.01.54 PM.mp4',
    title: 'Our Cleaning Process',
    description: 'Watch how we care for your garments'
  },
  {
    id: 2,
    src: '/video/WhatsApp Video 2026-01-19 at 5.02.04 PM.mp4',
    title: 'Quality Service',
    description: 'Experience our premium dry cleaning'
  },
  {
    id: 3,
    src: '/video/WhatsApp Video 2026-01-19 at 5.02.34 PM.mp4',
    title: 'Expert Care',
    description: 'Professional handling of delicate fabrics'
  }
];

const VideoPlayer = ({ video, index }: { video: typeof videos[0]; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group rounded-3xl overflow-hidden shadow-2xl bg-secondary-900"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={video.src}
        className="w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Video Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10">
        <h3 className="text-xl md:text-2xl font-outfit font-bold mb-2">{video.title}</h3>
        <p className="text-sm md:text-base text-white/80 font-jakarta">{video.description}</p>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center z-20 group/play"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        <div className={`w-20 h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center transition-all ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          {isPlaying ? (
            <Pause className="w-8 h-8 text-secondary-900" />
          ) : (
            <Play className="w-8 h-8 text-secondary-900 ml-1" />
          )}
        </div>
      </button>

      {/* Controls */}
      <div className={`absolute top-4 right-4 flex gap-2 z-20 transition-opacity ${showControls ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-all"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
        <button
          onClick={handleFullscreen}
          className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-all"
          aria-label="Fullscreen"
        >
          <Maximize className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

const VideoSection = () => {
  return (
    <section className="section-container py-24 bg-gradient-to-b from-white to-accent-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-outfit font-extrabold text-secondary-900">
            See Us <span className="text-gradient">In Action</span>
          </h2>
          <p className="font-jakarta text-secondary-600 text-lg max-w-2xl mx-auto">
            Watch our team at work, delivering exceptional care and attention to detail 
            for every garment that comes through our doors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, index) => (
            <div key={video.id} className="aspect-[9/16] md:aspect-video">
              <VideoPlayer video={video} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
