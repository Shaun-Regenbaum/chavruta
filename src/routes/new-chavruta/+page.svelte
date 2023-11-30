<script lang="ts">
	import { superForm } from "sveltekit-superforms/client";
	import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte";
	import { z } from 'zod'
	import type { PageData } from "./$types";
	import { goto } from '$app/navigation';
	import {supabase} from '$lib/supabase';
	import {user_id} from '$lib/stores';
	import { get } from 'svelte/store';
  
	export let data: PageData;
  
	const newChavrutaSchema = z.object({
	  chavrutaName: z.string().min(1),
	  email: z.string().email(),
	  id: z.string().min(1),
	  mishna: z.string().min(1),
	  chapter: z.number().int().min(1),
	  verse: z.number().int().min(1),
	});
  
	const { form, errors, enhance, constraints } = superForm(data.form, {
	  taintedMessage: "Are you sure you want to leave?",
	  validators: newChavrutaSchema,
	  dataType: 'json',
	});

  </script>
  
  <SuperDebug data={$form} />
  
  <article>
	<header>
	  <h1>New Chavruta</h1>
	</header>
	<form method="POST" use:enhance>
	  <label for="chavrutaName">Chavruta Name</label>
	  <input type="text" id="chavrutaName" name="chavrutaName" bind:value={$form.chavrutaName} />
	  {#if $errors.chavrutaName}
		<small>{$errors.chavrutaName}</small>
	  {/if}
	  <label for="email">Email address</label>
	  <input type="email" id="email" name="email" bind:value={$form.email} />
	  {#if $errors.email}
		<small>{$errors.email}</small>
	  {/if}
	  <label for="id">ID</label>
	  <input type="text" id="id" name="id" bind:value={$form.id} />
	  {#if $errors.id}
		<small>{$errors.id}</small>
	  {/if}
	  <label for="mishna">Mishna</label>
	  <input type="text" id="mishna" name="mishna" bind:value={$form.mishna} />
	  {#if $errors.mishna}
		<small>{$errors.mishna}</small>
	  {/if}
	  <label for="chapter">Chapter</label>
	  <input type="number" id="chapter" name="chapter" bind:value={$form.chapter} />
	  {#if $errors.chapter}
		<small>{$errors.chapter}</small>
	  {/if}
	  <label for="verse">Verse</label>
	  <input type="number" id="verse" name="verse" bind:value={$form.verse} />
	  {#if $errors.verse}
		<small>{$errors.verse}</small>
	  {/if}
	  <button type="submit">Submit</button>
	</form>
  </article>
  
<style>
	/* Add this CSS to your Svelte component or a separate CSS file */

article {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
  display: grid;
  grid-gap: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid black;
}

button {
  background-color: #4c65af;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #4562a0;
}

small {
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: block;
}

</style>