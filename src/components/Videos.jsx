import { Box, Stack } from '@mui/material'
import { VideoCard, ChannelCard } from './';

function Videos({videos, direction}) {
    if (!videos?.length) {
        return 'Loading...'
    }
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' alignItems='start' gap={2}>
            {videos.map(item => {
                if (item.id.playlistId) {
                    return;
                }
                return (
                    <Box key={item.id.videoId || item.id.channelId}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                    </Box>
                );
            })}
        </Stack>
    )
}

export default Videos