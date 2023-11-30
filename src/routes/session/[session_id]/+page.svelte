<script lang="ts">
    import type { PageData } from '../$types';
    import { getMefarshim, nextMishna } from '$lib/sefaria';
	import Loading from '$lib/components/Loading.svelte';
	import { onMount } from 'svelte';
    export let data: PageData;
    let commentary:any = data.mefaresh
    let mefaresh_loading=false;
    async function switchMefaresh(mefaresh: string) {
        mefaresh_loading=true;
        // const mefarshim = await getMefarshim("Mishna_Peah", 1, 1, mefaresh)
        commentary = mefarshim
        mefaresh_loading=false;
    }

</script>

<div class="main-container">
    <div class="mishna-container">
        <h3 class="title">Masechet {data.current.mishna} {data.current.chapter}:{data.current.verse}</h3>
        <p class="text-body">{data.mishna}</p>
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
        <button on:click={() => nextMishna(data.current)} class="next-button">Next Mishna</button>
        <button class="prev-button">Prev Mishna</button>
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
