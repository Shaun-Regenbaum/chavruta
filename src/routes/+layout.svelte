<script>
	import { onMount } from "svelte";
    import "../app.css";
	import { supabase } from "$lib/supabase";
	import { goto } from "$app/navigation";
	import { user_id } from "$lib/stores";

    onMount(async () => {
        const { data, error } = await supabase.auth.getSession();
        console.log(data, error)
        if (error) {
            await goto('/login')
        } else if (!data.session?.user.id){
            await goto('/login')
        }else {
            user_id.set(data.session?.user.id)
        }
    })
  </script>
  
  <slot />