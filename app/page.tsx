import { Button, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack spacing={2} sx={{ p: 4 }}>
      <Typography variant="h4">سلام عطا</Typography>

      <Typography>این متن با فونت Abar نمایش داده می‌شود ۱۲۳۴۵</Typography>

      <Button variant="contained">تست دکمه MUI</Button>
    </Stack>
  );
}
