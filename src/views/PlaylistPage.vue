<!-- src/views/PlaylistPage.vue --><template>
    <div class="playlist-page p-6">
      <h1 class="text-white text-2xl mb-6">Create Playlist</h1>
  

      <form @submit.prevent="handleCreatePlaylist">
        <div class="mb-4">
          <label for="playlistName" class="text-white">Playlist Name:</label>
          <input
            v-model="playlistName"
            type="text"
            id="playlistName"
            class="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded"
            placeholder="Enter playlist name"
            required
          />
        </div>
        <div class="mb-4">
          <label for="description" class="text-white">Description:</label>
          <textarea
            v-model="description"
            id="description"
            class="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded"
            placeholder="Enter playlist description"
          ></textarea>
        </div>
        <button
          type="submit"
          class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Create Playlist
        </button>
      </form>
  

      <div v-if="playlists.length" class="mt-8">
        <h2 class="text-white text-xl mb-4">Your Playlists</h2>
        <ul>
          <li
            v-for="playlist in playlists"
            :key="playlist.id"
            class="text-gray-300 hover:text-white cursor-pointer mb-3"
          >
            {{ playlist.name }}
  
            <form @submit.prevent="addSong(playlist.id)">
              <div class="mt-4">
                <input
                  v-model="newSong"
                  type="text"
                  class="p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded w-[75%]"
                  placeholder="Enter song name"
                  required
                />
                <button
                  type="submit"
                  class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-2"
                >
                  Add Song
                </button>
              </div>
            </form>
  

            <div v-if="playlist.songs.length" class="mt-4">
              <h3 class="text-gray-400">Songs in Playlist:</h3>
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
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { usePlaylistStore } from '../stores/playlist'
  
  const playlistName = ref('')
  const description = ref('')
  const newSong = ref('')
  
  const playlistStore = usePlaylistStore()
  const playlists = playlistStore.playlists
  

  const handleCreatePlaylist = () => {
    playlistStore.createPlaylist(playlistName.value, description.value)
    alert(`Playlist "${playlistName.value}" created!`)
    playlistName.value = ''
    description.value = ''
  }
  

  const addSong = (playlistId) => {
    if (newSong.value.trim()) {
      playlistStore.addSongToPlaylist(playlistId, newSong.value.trim())
      newSong.value = ''
    }
  }
  </script>
  
  <style scoped>
  .playlist-page {
    min-height: calc(100vh - 60px);
  }
  </style>
  