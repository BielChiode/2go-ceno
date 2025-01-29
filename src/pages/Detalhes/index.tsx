import {
  Box,
  Typography,
  Container,
  useTheme,
  Grid2,
  Button,
  Tooltip,
} from "@mui/material";
import { CustomAppBar } from "../../components/CustomAppBar";
import { ArrowBack, LocationOn } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BotaoAcao } from "../../components/BotaoAcao";
import projetos from "../../../projetos.json";
import { useIsMobile } from "../../utils/useIsMobile";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const scrollBarStyle = {
  "&::-webkit-scrollbar": {
    height: 8,
    display: { xs: "none", md: "block" },
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#8b949e",
    borderRadius: 10,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#FFF",
  },
};

export const Detalhes = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const theme = useTheme();

  // Encontra o projeto correspondente pelo ID
  const projeto = projetos.find((projeto) => projeto.id === Number(id));

  const [mainImage, setMainImage] = useState<string>(projeto?.mainImage || "");

  if (!projeto) {
    return (
      <Box>
        <CustomAppBar showMenu={false} />
        <Container
          maxWidth="lg"
          sx={{
            mt: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" color="error" textAlign="center">
              Projeto não encontrado...
            </Typography>
            <Button
              variant="contained"
              sx={{ width: "300px", mt: 5 }}
              onClick={() => navigate("/")}
            >
              Voltar
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <>
      <CustomAppBar showMenu={false} icone={projeto.icone} />
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <BotaoAcao onClick={() => navigate("/")}>
            <Tooltip title="Voltar">
              <ArrowBack />
            </Tooltip>
          </BotaoAcao>
          <Typography
            variant="h4"
            fontWeight={700}
            color="primary.main"
            gutterBottom
          >
            {projeto.titulo}
          </Typography>
          <Box />
        </Box>
        {/* Imagem de fundo com overlay */}
        <Box
          sx={{
            position: "relative",
            height: "400px",
            borderRadius: 2,
            backgroundImage: `url(${mainImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            mt: 2,
          }}
        />

        {/* Conteúdo abaixo */}
        <Box sx={{ mt: 2 }}>
          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12 }}>
              <Box
                sx={[
                  scrollBarStyle,
                  {
                    display: "flex",
                    overflowX: "auto",
                    flexWrap: "nowrap",
                    paddingBottom: 2,
                  },
                ]}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateRows: "repeat(1, 150px)",
                    gridAutoFlow: "column",
                    gap: "8px",
                  }}
                >
                  {projeto.images.map((image, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: "relative",
                        width: "250px",
                        height: "150px",
                        borderRadius: 2,
                        overflow: "hidden",
                        "&:hover": {
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => handleImageClick(image)}
                    >
                      <img
                        src={image}
                        alt={`Projeto ${index}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid2>
            <Grid2 container size={{ xs: 12 }} sx={{ mb: 4 }}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Typography
                  variant={isMobile ? "h6" : "h4"}
                  fontWeight={700}
                  gutterBottom
                  sx={{ color: theme.palette.primary.light }}
                >
                  {projeto.titulo}
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <LocationOn
                    sx={{
                      color: theme.palette.secondary.light,
                      fontSize: 20,
                    }}
                  />
                  <Typography
                    fontWeight={700}
                    sx={{ color: theme.palette.secondary.light, fontSize: 20 }}
                  >
                    {projeto.localizacao}
                  </Typography>
                </Box>
                <Typography variant="body1">{projeto.descricao}</Typography>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                {projeto.premiacao.titulo && (
                  <>
                    <Typography
                      variant={isMobile ? "h6" : "h4"}
                      fontWeight={700}
                      gutterBottom
                      sx={{ color: theme.palette.primary.light }}
                    >
                      Premiações
                    </Typography>
                    <Box>
                      <Typography color="primary" gutterBottom>
                        {projeto.premiacao.quantidade} -{" "}
                        {projeto.premiacao.titulo}
                      </Typography>
                      {Array.from({ length: projeto.premiacao.quantidade }).map(
                        (_, index) => (
                          <EmojiEventsIcon key={index} color="primary" />
                        )
                      )}
                    </Box>
                  </>
                )}
              </Grid2>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </>
  );
};
