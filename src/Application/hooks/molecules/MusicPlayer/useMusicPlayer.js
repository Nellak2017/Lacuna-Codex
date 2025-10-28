import { useState, useEffect, useCallback, } from 'react'
import { useAudio } from 'react-use'

const defaultTracks = [
    { title: 'Fur Elise', url: '/audio/Beethoven-Fur_Elise.mp3' },
    { title: 'Audio Example', url: '/audio/file_example_MP3_700KB.mp3' },
]
export const useMusicPlayer = (tracks = defaultTracks) => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const currentTrack = tracks[currentTrackIndex] || { title: null, url: null }
    const { title, url } = currentTrack
    const [audio, state, controls, ref] = useAudio({ src: url, autoPlay: true, })
    const { duration, time, playing } = state || { duration: 0, time: 0, playing: false }
    useEffect(() => { // Ensure metadata loads correctly by resetting when track changes
        controls.seek(0); controls.pause(); const el = ref.current
        if (el) { el.load(); if (state.playing) el.play().catch(() => { }) }
    }, [url])
    useEffect(() => { // Handle next track auto-play if current track ends
        const el = ref.current
        if (!el) return
        const handleEnded = () => setCurrentTrackIndex(prev => (prev + 1) % tracks.length)
        el.addEventListener('ended', handleEnded)
        return () => el.removeEventListener('ended', handleEnded)
    }, [tracks])
    useEffect(() => {
        if (!('mediaSession' in navigator)) return
        navigator.mediaSession.metadata = new globalThis.MediaMetadata({
            title, artist: 'Unknown Artist', album: 'Lacuna Codex',
            artwork: [{ src: '/Lacuna-Codex-Logo.png', sizes: '192x192', type: 'image/png' },],
        })
        navigator.mediaSession.setActionHandler('play', controls.play)
        navigator.mediaSession.setActionHandler('pause', controls.pause)
        navigator.mediaSession.setActionHandler('previoustrack', () => { setCurrentTrackIndex(p => (p - 1 + tracks.length) % tracks.length) })
        navigator.mediaSession.setActionHandler('nexttrack', () => { setCurrentTrackIndex(p => (p + 1) % tracks.length) })
    }, [title, controls, tracks])
    const handleReplayLastTen = useCallback(() => { controls.seek(Math.max((state.time || 0) - 10, 0)) }, [state.time, controls])
    const handleForwardTen = useCallback(() => { controls.seek(Math.min((state.time || 0) + 10, state.duration || 0)) }, [state.time, state.duration, controls])
    const handlePreviousTrack = useCallback(() => { setCurrentTrackIndex(prev => (prev - 1 + tracks.length) % tracks.length) }, [tracks])
    const handleNextTrack = useCallback(() => { setCurrentTrackIndex(prev => (prev + 1) % tracks.length) }, [tracks])
    const handlePlayPause = useCallback(() => { state.playing ? controls.pause() : controls.play() }, [state.playing, controls])
    const setSliderTime = useCallback(seconds => controls.seek(seconds), [controls])
    return {
        state: { audio, title, duration, currentTime: time, isPlaying: playing, audioRef: ref, },
        services: { handleReplayLastTen, handleForwardTen, handlePreviousTrack, handlePlayPause, handleNextTrack, setSliderTime, },
    }
}