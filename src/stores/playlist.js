// src/stores/playlist.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlaylistStore = defineStore("playlist", () => {
  const playlists = ref([]);

  const createPlaylist = (name, description) => {
    playlists.value.push({
      id: playlists.value.length + 1,
      name,
      description,
      songs: [],
    });
  };

  const addSongToPlaylist = (playlistId, song) => {
    const playlist = playlists.value.find((p) => p.id === playlistId);
    if (playlist) {
      playlist.songs.push(song);
    }
  };

  return {
    playlists,
    createPlaylist,
    addSongToPlaylist,
  };
});
