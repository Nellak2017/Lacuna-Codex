import ReactPlayer from 'react-player'
import { MediaController, MediaControlBar, MediaTimeRange, MediaTimeDisplay, MediaVolumeRange, MediaPlaybackRateButton, MediaPlayButton, MediaSeekBackwardButton, MediaSeekForwardButton, MediaMuteButton, MediaFullscreenButton, } from 'media-chrome/react'

export const CustomPlayer = ({ src }) => {
    return (
        <MediaController style={{ width: '100%', height: '100%', }}>
            <ReactPlayer slot='media' src={src} controls={false} config={{ youtube: { playerVars: { modestbranding: 1, rel: 0 }, }, }} style={{ width: '100%', height: '100%', '--controls': 'none', }} />
            <MediaControlBar>
                <MediaPlayButton />
                <MediaSeekBackwardButton seekOffset={10} />
                <MediaSeekForwardButton seekOffset={10} />
                <MediaTimeRange />
                <MediaTimeDisplay showDuration />
                <MediaMuteButton />
                <MediaVolumeRange />
                <MediaPlaybackRateButton />
                <MediaFullscreenButton />
            </MediaControlBar>
        </MediaController>
    )
}
export default CustomPlayer