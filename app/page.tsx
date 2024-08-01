import { Box, Stack, Typography } from "@mui/material";
import { database } from "@/firebase";

export default function Home() {

  const items = ['tomato', 'potato', 'onion', 'garlic', 'ginger', 'carrot', 'lettuce', 'kale', 'cucumber']

  return (
    <Box
      width="100vw"
      height="100vh"
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box border={'1px solid #333'}>
        <Box
          width={'800px'}
          height='100px'
          bgcolor={'#ADD8E6'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Typography
            variant={'h2'}
            color={'#333'}
            textAlign={'center'}
          >
            Pantry Items
          </Typography>
        </Box>
        <Stack width='800px' height='500px' spacing={2} overflow={'auto'} >

          {items.map((i) => (
            <Box
              key={i}
              width={'100%'}
              height={'300px'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              bgcolor={'#f0f0f0'}
            >
              <Typography
                variant={'h3'}
                color={'#333'}
                textAlign={'center'}
              >
                {
                  i.charAt(0).toUpperCase() + i.slice(1)
                }
              </Typography>
            </Box>
          ))}

        </Stack>
      </Box>
    </Box>
  );
}
