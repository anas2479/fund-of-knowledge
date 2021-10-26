<div class=" hero max-w-[1200px] mx-auto md:flex items-center gap-4 h-screen p-4">
    <div class="flex-1 border-2">
    </div>
    <div class="flex-1">
        <h1 class="text-3xl lg:text-5xl text-gray-700 font-medium capitalize">
            Let’s Talk About Web Development. Because It’s Pretty Awesome.
        </h1>
    </div>
</div>

<script>
    import gsap from 'gsap'
    import  ScrollTrigger  from "gsap/src/ScrollTrigger";
    import { onMount } from 'svelte';
    //import { ScrollTrigger } from "gsap";

    gsap.registerPlugin(ScrollTrigger)

    onMount(()=>{
        gsap.from('.hero',{
        scrollTrigger:{
            trigger:'.hero',
            toggleActions:'restart none none none'
        },
        opacity:0,
        x:20,
        duration:1
    })
    })
</script>