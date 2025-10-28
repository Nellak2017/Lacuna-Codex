import { useState, useRef, useEffect, useCallback } from 'react'

const defaultTracks = [
    { title: 'Fur Elise', url: '/audio/Beethoven-Fur_Elise.mp3' },
    { title: 'Audio Example', url: '/audio/file_example_MP3_700KB.mp3' },
]
export const useMusicPlayer = (tracks = defaultTracks) => {
    const audioRef = useRef(null)
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const currentTrack = tracks?.[currentTrackIndex] || { title: null, url: null }
    const { title, url } = currentTrack
    const handleReplayLastTen = useCallback(() => {
        const audio = audioRef.current
        if (!audio) return
        audio.currentTime = Math.max(audio.currentTime - 10, 0)
    }, [])
    const handleForwardTen = useCallback(() => {
        const audio = audioRef.current
        if (!audio) return
        audio.currentTime = Math.min(audio.currentTime + 10, audio.duration)
    }, [])
    const handlePreviousTrack = useCallback(() => {
        setCurrentTrackIndex(prev => (prev - 1 + (tracks || []).length) % (tracks || [1]).length)
    }, [(tracks || []).length])
    const handleNextTrack = useCallback(() => {
        setCurrentTrackIndex(prev => (prev + 1) % (tracks || [1]).length)
    }, [(tracks || []).length])
    const handlePlayPause = useCallback(() => {
        const audio = audioRef.current
        if (!audio) return
        if (audio.paused) { audio.play().catch(() => { }); setIsPlaying(true)
        } else { audio.pause(); setIsPlaying(false) }
    }, [])
    // slider handler
    const setSliderTime = seconds => {
        const audio = audioRef.current
        if (!audio) return
        audio.currentTime = seconds
    }
    // Sync audio events
    useEffect(() => {
        if (typeof globalThis === 'undefined') return // SSR safety
        if (!audioRef.current) { audioRef.current = new Audio(url) } 
        const audio = audioRef.current
        if (!audio) return
        const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
        const handleLoadedMetadata = () => setDuration(audio.duration)
        const handleEnded = () => handleNextTrack()
        audio.addEventListener('timeupdate', handleTimeUpdate)
        audio.addEventListener('loadedmetadata', handleLoadedMetadata)
        audio.addEventListener('ended', handleEnded)
        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate)
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
            audio.removeEventListener('ended', handleEnded)
        }
    }, [handleNextTrack])
    // load new track automatically
    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return
        audio.src = url
        audio.load()
        if (isPlaying) audio.play().catch(() => { })
    }, [url])
    return {
        state: { title, currentTime, duration, isPlaying },
        services: { handleReplayLastTen, handleForwardTen, handlePreviousTrack, handlePlayPause, handleNextTrack, setSliderTime },
    }
}