import axios from 'axios';
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

const MAX_LIMIT = 8;

export async function fetchAnime(page: number) {
  try {
    const response = await axios.get(
      `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
    );

    const data: AnimeProp[] = response.data;

    return data.map((anime: AnimeProp, index: number) => (
      <AnimeCard key={anime.id} anime={anime} index={index} />
    ));
  } catch (error) {
    console.error('Erro ao buscar animes:', error);
    throw error; 
  }
}
