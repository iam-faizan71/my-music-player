<!-- src/views/PlaylistDetail.vue -->
<template>
    <div v-if="playlist" class="p-6">
      <h1 class="text-white text-2xl mb-6">{{ playlist.name }}</h1>
      <p class="text-gray-400 mb-4">{{ playlist.description }}</p>
  
      <!-- Display playlist songs -->
      <div v-if="playlist.songs.length" class="mt-4">
        <h3 class="text-gray-400">Songs:</h3>
        <ul class="list-disc list-inside">
          <li
            v-for="song in playlist.songs"
            :key="song"
            class="text-gray-300"
          >
            {{ song }}
          </li>
        </ul>
      </div>
    </div>
  
    <!-- Show message if no playlist is found -->
    <div v-else class="p-6">
      <h1 class="text-white text-2xl mb-6">Playlist Not Found</h1>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { usePlaylistStore } from '../stores/playlist'
  
  const playlist = ref(null)
  const route = useRoute()
  const playlistStore = usePlaylistStore()
  
  onMounted(() => {
    const playlistId = route.params.id
    playlist.value = playlistStore.playlists.find(p => p.id === parseInt(playlistId, 10))
  
    if (!playlist.value) {
      console.log('Playlist not found')
    }
  })
  </script>
  