import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import AudioPlayer from "./audio-player";
import { useState, useContext } from "react";
import { useGetUserVoices } from "@/services/patient/queries";
import { UserData } from "@/context/UserProvider";

const AudioList = () => {
  const {profileData } = useContext(UserData);

  const [playingAudio, setPlayingAudio] = useState(null);

  const handlePlay = (audio) => {
    if (playingAudio && playingAudio !== audio) {
      playingAudio.pause();
    }
    setPlayingAudio(audio);
  };

  const { data: voiceData, isLoading, isRefetching } = useGetUserVoices(profileData?.id);
  const loading = isLoading || isRefetching;

  return (
    <>
      {loading ? (
        <Box
          justifyContent="center"
          alignItems="center"
          sx={{ display: "flex" }}
        >
          <CircularProgress />
        </Box>
      ) : voiceData?.data?.length > 0 ? (
        <Grid container spacing={2}>
          {voiceData.data.map((el, index) => (
            <Grid item xs={6} sm={6} md={6} key={index} sx={{ my: "1rem" }}>
              <AudioPlayer src={el?.url} onPlay={() => handlePlay(el.audio)} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6"> لا يوجد توصيات </Typography>
      )}
    </>
  );
};

export default AudioList;
