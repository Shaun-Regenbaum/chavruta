<script lang="ts">
    import type { PageData } from './$types';
    import {supabase} from '$lib/supabase';
    import {goto} from '$app/navigation';
    
    export let data: PageData;
    let loading= false;
    let registered = true;
    let email:string;
    let password:string;


    // create account
    async function createAccount(){
        loading=true;
        const { data, error} = await supabase.auth.signUp({
            email: email,
            password: password,
    })
    console.log(data, error)
    if (error) {
        alert(error.message)
    } else {
        await goto('/dashboard')
    }
    loading = false;
    return
}

    // sign in
    async function signIn(){
        loading=true;
        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        console.log(data, error)
        if (error) {
            alert(error.message)
        } else {
            await goto('/dashboard')
    }
    loading = false;
    return

    }

</script>


<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
      {#if registered}

      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        {:else}
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an account</h2>
        {/if}
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" on:submit|preventDefault={()=> {if(registered){
            signIn()
        } else {
            createAccount()
      }}}>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" bind:value={email} type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <!-- <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div> -->
          </div>
          <div class="mt-2">
            <input id="password" name="password" bind:value={password} type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
  
        <div>{#if registered}

          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {#if loading}
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            {:else}
            Sign in
        {/if}</button>

          {:else}
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {#if loading}
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                {:else}
                Create account
            {/if}</button>
            {/if}

        </div>
      </form>
  
      <p class="mt-10 text-center text-sm text-gray-500">
        {#if registered}
        <button class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" on:click={()=>{registered=!registered}}>Not Registered? Sign Up.
        </button>
        {:else}
        <button class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" on:click={()=>{registered=!registered}}>Already Registered? Sign In.
        </button>
        {/if}
      </p>
    </div>
  </div>



