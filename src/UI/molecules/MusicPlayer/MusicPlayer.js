import { IoPlayBackSharp, IoPlaySharp, IoPauseSharp, IoPlayForwardSharp } from 'react-icons/io5'
import { MdOutlineForward10, MdOutlineReplay10 } from 'react-icons/md'
import { Typography, Box, Slider, IconButton, Tooltip } from '@mui/material'
import { visuallyHidden } from '@mui/utils'
import { ICON_BUTTON_SIZE, TOOLTIP_TITLES } from '../../../Core/components/molecules/MusicPlayer/MusicPlayer.constants'
import { useMusicPlayer } from '../../../Application/hooks/molecules/MusicPlayer/useMusicPlayer'
import { secondsToTimeString } from '../../../Core/components/molecules/MusicPlayer/MusicPlayer.domain'

export const MusicPlayer = ({ customHook = useMusicPlayer }) => {
    const { state, services } = customHook?.() || {}
    const { audio, title, duration, currentTime, isPlaying } = state || {}
    const { handleReplayLastTen, handleForwardTen, handlePreviousTrack, handlePlayPause, handleNextTrack, setSliderTime } = services || {}
    const { CONTROLS_TITLE, REPLAY_10, PREVIOUS_TRACK, PLAY, PAUSE, NEXT_TRACK, FORWARD_10 } = TOOLTIP_TITLES
    return (
        <Box component='section' aria-label='Music Player' display='flex' flexDirection='column' alignItems='center'>
            {audio}
            {/* <audio ref={audioRef} preload='metadata'><track kind='captions' srcLang='en' label='English captions' /></audio> */}
            <Typography variant='h3' component='h3' fontWeight='bold'>{title}</Typography>
            <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                <legend style={visuallyHidden}>{CONTROLS_TITLE}</legend>
                <Box display='flex' alignItems='center' justifyContent='center'>
                    <Tooltip title={REPLAY_10}>
                        <IconButton aria-label={REPLAY_10} onClick={handleReplayLastTen}>
                            <MdOutlineReplay10 size={ICON_BUTTON_SIZE} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={PREVIOUS_TRACK}>
                        <IconButton aria-label={PREVIOUS_TRACK} onClick={handlePreviousTrack}>
                            <IoPlayBackSharp size={ICON_BUTTON_SIZE} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={isPlaying ? PAUSE : PLAY}>
                        <IconButton aria-label={isPlaying ? PAUSE : PLAY} onClick={handlePlayPause}>
                            {isPlaying
                                ? <IoPauseSharp size={ICON_BUTTON_SIZE} />
                                : <IoPlaySharp size={ICON_BUTTON_SIZE} />
                            }
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={NEXT_TRACK}>
                        <IconButton aria-label={NEXT_TRACK} onClick={handleNextTrack}>
                            <IoPlayForwardSharp size={ICON_BUTTON_SIZE} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={FORWARD_10}>
                        <IconButton aria-label={FORWARD_10} onClick={handleForwardTen}>
                            <MdOutlineForward10 size={ICON_BUTTON_SIZE} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </fieldset>
            <Box display='flex' alignItems='center' sx={{ width: 210 }}>
                <Slider
                    size='small' min={0} max={duration || 0} value={currentTime || 0}
                    aria-label='Track progress' valueLabelDisplay='auto'
                    valueLabelFormat={value => secondsToTimeString(value)}
                    onChange={(_, value) => { if (typeof value === 'number') setSliderTime(value) }}
                />
            </Box>
            <Box display='flex' alignItems='center' columnGap={1} padding={1}>
                <Typography variant='body2' component='time'>{secondsToTimeString(currentTime)}</Typography>
                <Typography variant='body2' component='time'>/</Typography>
                <Typography variant='body2' component='time'>{secondsToTimeString(duration)}</Typography>
            </Box>
        </Box>
    )
}