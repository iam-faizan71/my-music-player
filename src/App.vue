<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import MenuItem from './components/MenuItem.vue';
import MusicPlayer from './components/MusicPlayer.vue'
import { usePlaylistStore } from './stores/playlist.js'
import { useSongStore } from './stores/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

onMounted(() => { isPlaying.value = false })

const playlistStore = usePlaylistStore()
const playlists = playlistStore.playlists
</script>

<template>
    <div>
        <div id="SideNav" class="h-[100%] p-6 w-[240px] fixed z-50 bg-black">
            <RouterLink to="/">
                <img width="125" src="/images/icons/Music-logo.png">
            </RouterLink>
            <div class="my-8"></div>
            <ul>
                <RouterLink to="/">
                    <MenuItem class="ml-[1px]" :iconSize="23" name="Home" iconString="home" pageUrl="/" />
                </RouterLink>

                <RouterLink to="/library">
                    <MenuItem class="ml-[2px]" :iconSize="23" name="Your Library" iconString="library"
                        pageUrl="/library" />
                </RouterLink>
                <div class="py-3.5"></div>
                <RouterLink to="/playlist">
                    <MenuItem :iconSize="24" name="Create Playlist" iconString="playlist" pageUrl="/playlist" />
                </RouterLink>
            </ul>
            <div class="border-b border-b-gray-700"></div>
            <ul>
                <li v-for="playlist in playlists" :key="playlist.id">
                    <RouterLink :to="'/playlist/' + playlist.id">
                        <span class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">
                            {{ playlist.name }}
                        </span>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>

    <div class="
            fixed
            right-0
            top-0
            w-[calc(100%-240px)]
            overflow-auto
            h-full
            bg-gradient-to-b
            from-[#1C1C1C]
            to-black
        ">
        <div class="mt-[70px]"></div>
        <RouterView />
        <div class="mb-[100px]"></div>
    </div>

    <MusicPlayer v-if="currentTrack" />
</template>
