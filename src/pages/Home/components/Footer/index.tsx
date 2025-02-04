import { Box, Typography, Link } from "@mui/material";
import { Instagram, Phone, Email } from "@mui/icons-material";
import { BotaoAcao } from "../../../../components/BotaoAcao";
import redirectWhatsapp from "../../../../utils/redirectWhatsapp";

export function Footer() {
  return (
    <Box
      id="contato"
      sx={{
        backgroundColor: "#323333",
        color: "#ffffff",
        py: 6,
        px: 4,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        Entre em contato
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
          onClick={redirectWhatsapp}
        >
          <Phone />
          <Typography>11 98669-3033</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Email />
          <Typography>marcelo.chacon@2goceno.com</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Instagram />
          <Link
            href="https://www.instagram.com/2go.ceno"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            @2goceno
          </Link>
        </Box>
      </Box>

      <BotaoAcao>Fazer orçamento</BotaoAcao>
    </Box>
  );
}
