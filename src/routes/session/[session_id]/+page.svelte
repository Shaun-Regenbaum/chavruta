<script lang="ts">
    import type { PageData } from '../$types';
    import { getMefarshim, getMishna } from '$lib/sefaria';
	import Loading from '$lib/components/Loading.svelte';
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase';
    export let data: PageData;

    let currentMishna = data.current;
    let currentChapter = data.mishnaChapter
    let commentary:any = data.mefaresh
    let mefaresh_loading=false;

    async function switchMefaresh(mefaresh: string) {
        mefaresh_loading=true;
        // const mefarshim = await getMefarshim("Mishna_Peah", 1, 1, mefaresh)
        // commentary = mefarshim
        mefaresh_loading=false;
    }

    async function nextMishna() {
       let chapterLen = currentChapter.length;

       if(currentMishna.verse < chapterLen) {
        currentMishna.verse += 1;
        // const { error } = await supabase.from('session_details').update({ 'owner_location': currentMishna }).eq('id', 1)
       } else {
        currentMishna.chapter += 1;
        currentMishna.verse = 1;
        currentChapter = await getMishna(currentMishna);
       }
    }

    async function prevMishna() {
       let chapterLen = currentChapter.length;

       if(currentMishna.verse > 1) {
        currentMishna.verse -= 1;
        // const { error } = await supabase.from('session_details').update({ 'owner_location': currentMishna }).eq('id', 1)
       } else {
        currentMishna.chapter -= 1;
        currentChapter = await getMishna(currentMishna);
        let chapterLen = currentChapter.length;
        currentMishna.verse = chapterLen;
       }
    }
</script>

<div class="main-container">
    <div class="mishna-container">
        <h3 class="title">Masechet {currentMishna.mishna} {currentMishna.chapter}:{currentMishna.verse}</h3>
        <p class="text-body">{currentChapter[currentMishna.verse - 1]}</p>
    </div>
    
    <div class="mefarshim-container">
        <nav class="navbar">
	        <button on:click={()=>{switchMefaresh("bar")}}><Loading bind:loading={mefaresh_loading}>Bartanura</Loading></button>
            <button on:click={()=>{switchMefaresh("ram")}}><Loading bind:loading={mefaresh_loading}>Rambam</Loading></button>

        </nav>
        <div class="text-body">
            <p>{@html commentary}</p>
        </div>
    </div>

    <div class="buttons-container">
        <button on:click={ nextMishna} class="next-button">Next Mishna</button>
        <button on:click={ prevMishna } class="prev-button">Prev Mishna</button>
    </div>

</div>

<style>
/* Container for the entire layout */
.main-container {
    display: grid;
    grid-template-columns: .7fr .3fr; /* Divide the container into two columns */
    grid-template-rows: 40% 40% 20%; /* Divide the container into three rows */
    gap: 10px; /* Add some gap between the containers */
    height: 100vh;
}

/* Container for Mishna - Takes up the top left quarter */
.mishna-container {
    text-align: right;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    padding: 20px;
    overflow: auto; /* Enable scrolling if content overflows */
    direction: rtl;
}

/* Container for Mefarshim - Takes up the bottom left quarter */
.mefarshim-container {
    text-align: right;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    padding: 20px;
    direction: rtl;
    
}

/* Container for Next and Prev buttons - Takes up the middle row and is placed under the Mishna container */
.buttons-container {
    grid-column: 1 / 2;
    grid-row: 3 / 4; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
}

/* Style for the buttons */
.next-button, .prev-button {
    background-color: #0077cc;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    margin: 10px;
}

.next-button:hover, .prev-button:hover {
    background-color: #005599;
}

.title {
    text-align: center;
    font-size: 30px;
}

/* Increase the font size in the Mishna container */
.mishna-container p {
    font-size: 20px; /* Adjust the size as needed */
  
}

.text-body {
    overflow-y: auto; /* Enable vertical scrolling if content overflows */
    max-height: 100%; /* Set the maximum height to occupy the available space */
    margin: 0; /* Remove margin for the content */
    padding-left: 10%;
    padding-right: 10%;
}

/* Styles for the navigation bar */
.navbar {
    background-color: #333;
    display: flex; /* Use flexbox to center items horizontally and vertically */
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
    overflow: hidden;
}

/* Style for the navigation links */
.navbar button {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Hover effect for navigation links */
.navbar a:hover {
    background-color: #111;
}

</style>
